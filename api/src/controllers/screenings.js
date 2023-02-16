const { Screening, Movie } = require("../db");

const getScreeningsDb = async () => {
  const allScreeningsDb = await Screening.findAll();
  return allScreeningsDb;
};

async function addScreeningToMovie(req, res, next) {
  const { id } = req.params; // El ID de la película se pasa en la URL
  const { roomLetter, date, startTime, endTime, definition, language, seats } =
    req.body; // Los datos de la proyección se pasan en el cuerpo de la solicitud

  try {
    // Buscar la película por ID
    const movie = await Movie.findByPk(id);

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
    });

    // Agregar la proyección a la película
    await movie.addScreening(screening);

    return res.status(201).json(screening); // Devolver la proyección creada
  } catch (error) {
    next(error);
  }
}

module.exports = { getScreeningsDb, addScreeningToMovie };
