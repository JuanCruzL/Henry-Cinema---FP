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

async function getScreeningById(req, res, next) {
  const { id } = req.params;

  try {
    // Buscar la proyección por ID
    const screening = await Screening.findByPk(id);

    if (!screening) {
      return res.status(404).json({ message: "La proyección no existe" });
    }

    return res.status(200).json(screening); // Devolver la proyección encontrada
  } catch (error) {
    next(error);
  }
}

// const modifySeatsById = async (screeningId, seatIds) => {
//   const id = screeningId;
//   try {
//     const screening = await Screening.findByPk(id);
//     console.log(id);
//     if (!screening) {
//       throw new Error(`Screening with id ${id} not found`);
//     }

//     const seats = screening.seats;
//     seatIds.forEach((seatId) => {
//       const seat = seats.find((s) => s.id === seatId);
//       if (seat) {
//         seats.reserved = true;
//       }
//     });

//     await screening.save();

//     return {
//       success: true,
//       message: "Seats modified successfully",
//       error: null,
//     }; // or any other value to indicate success
//   } catch (error) {
//     console.error(error);

//     return {
//       success: false,
//       message: "Error modifying seats",
//       error: error.message,
//     }; // or any other value to indicate failure
//   }
// };

// const modifySeatsById = async (screeningId, seatsToModify) => {
//   try {
//     console.log(screeningId);
//     const screening = await Screening.findByPk(screeningId);

//     if (!screening) {
//       throw new Error(`Screening with id ${screeningId} not found`);
//     }

//     const seatIds = seatsToModify.map((seat) => seat.id);
//     const seats = await screening.getSeats({ where: { id: seatIds } });

//     for (const seat of seats) {
//       const { reserved } = seatsToModify.find((s) => s.id === seat.id);
//       await seat.update({ reserved });
//     }

//     return {
//       success: true,
//       message: "Seats modified successfully",
//       error: null,
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       success: false,
//       message: "Error modifying seats",
//       error: error.message,
//     };
//   }
// };

const modifySeatsById = async (req, res) => {
  const screeningId = req.params.id;
  const seatsToModify = req.body.ids;

  try {
    // Buscamos la proyección por su ID
    const screening = await Screening.findByPk(screeningId);

    // Actualizamos los asientos que se deben modificar
    seatsToModify.forEach((seatId) => {
      const seat = screening.seats.find((s) => s.id === seatId);

      seat.reserved = true;
      console.log(seat);
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
