const db = require("./db");
const { Movie, Person } = db.models;

(async () => {
  await db.sequelize.sync({ force: true });
  try {
    const movie = await Movie.create({
      title: "Toy Story",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVHS: true,
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: "The Incredibles",
      runtime: 115,
      releaseDate: "2004-04-14",
      isAvailableOnVHS: true,
    });
    console.log(movie2.toJSON());

    const movie3 = await Movie.create({
      title: "Knives Out",
      runtime: 105,
      releaseDate: "2020-04-14",
      isAvailableOnVHS: true,
    });
    console.log(movie3.toJSON());
    // New Person record
    const person = await Person.create({
      firstName: "Tom",
      lastName: "Hanks",
    });
    console.log(person.toJSON());
  } catch (error) {
    //console.error("Error connecting to the database: ", error);
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((err) => err.message);
      console.error("Validation errors: ", errors);
    } else {
      throw error;
    }
  }
})();
