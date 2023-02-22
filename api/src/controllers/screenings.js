const { Screening, Movie } = require("../db");

const getScreeningsDb = async () => {
  const allScreeningsDb = await Screening.findAll();
  return allScreeningsDb;
};

async function addScreeningToMovie(req, res, next) {
  const {
    id,
    roomLetter,
    date,
    startTime,
    endTime,
    definition,
    language,
    seats,
    title,
  } = req.body; // Los datos de la proyección se pasan en el cuerpo de la solicitud

  try {
    // Buscar la película por ID
    const movie = await Movie.findByPk(id);
    console.log(id);
    console.log(movie);

    if (!movie) {
      return res.status(404).json({ message: "La película no existe" });
    }
    // Crear la proyección
    const screening = await Screening.create({
      roomLetter,
      date,
      startTime,
      endTime,
      definition,
      language,
      seats,
      title,
    });

    // Agregar la proyección a la película
    await movie.addScreening(screening);

    return res.status(201).json(screening); // Devolver la proyección creada
  } catch (error) {
    next(error);
  }
}

// async function getScreeningById(req, res, next) {
//   const { id } = req.params;

//   try {
//     // Buscar la proyección por ID
//     const screening = await Screening.findByPk(id);

//     if (!screening) {
//       return res.status(404).json({ message: "La proyección no existe" });
//     }

//     return res.status(200).json(screening); // Devolver la proyección encontrada
//   } catch (error) {
//     next(error);
//   }
// }

async function getScreeningById(req, res, next) {
  const { id } = req.params;

  try {
    // Buscar la proyección por ID
    const screening = await Screening.findByPk(id);

    if (!screening) {
      return res.status(404).json({ message: "La proyección no existe" });
    }

    // Verificar si algún asiento tiene una reserva vencida y actualizarlo
    const now = new Date();
    const tenMinutesAgo = new Date(now.getTime() - 2 * 60 * 1000); // 10 minutos en milisegundos
    const updatedSeats = screening.seats.map((seat) => {
      if (
        seat.reservationDate &&
        new Date(seat.reservationDate) < tenMinutesAgo
      ) {
        return { ...seat, reservationDate: null, reserved: false };
      } else {
        return seat;
      }
    });

    // Guardar los cambios en la base de datos
    screening.seats = updatedSeats;
    await screening.save();

    return res.status(200).json(screening); // Devolver la proyección encontrada
  } catch (error) {
    next(error);
  }
}

const modifySeatsById = async (req, res) => {
  const screeningId = req.params.id;
  const seatsToModify = req.body.ids;
  const reservationDate = new Date(); // obtenemos la fecha y hora actual

  try {
    // Buscamos la proyección por su ID
    const screening = await Screening.findByPk(screeningId);

    // Actualizamos los asientos que se deben modificar
    screening.seats = screening.seats.map((seat) => {
      if (seatsToModify.includes(seat.id)) {
        return {
          ...seat,
          reserved: true,
          reservationDate: reservationDate, // agregamos la fecha y hora de la reserva
        };
      }
      return seat;
    });

    // Guardamos los cambios en la base de datos
    await screening.save();

    res.status(200).json({ message: "Asientos actualizados correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ocurrió un error al actualizar los asientos" });
  }
};



module.exports = {
  getScreeningsDb,
  addScreeningToMovie,
  getScreeningById,
  modifySeatsById,
};
