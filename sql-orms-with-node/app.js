const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  logging: false,
});

/* (async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database is successful");
  } catch (error) {
    console.log("Connection to the database is not successful");
  }
})(); */

// Movie model

class Movie extends Sequelize.Model {}
Movie.init(
  {
    title: Sequelize.STRING,
  },
  { sequelize }
);

(async () => {
  await sequelize.sync({ force: true });
  try {
    const movieInstances = await Promise.all([
      Movie.create({
        title: "Toy Story",
      }),
      Movie.create({
        title: "The Incredibles",
      }),
    ]);
    const moviesJSON = movieInstances.map((movie) => movie.toJSON());
    console.log(moviesJSON);
  } catch (error) {
    console.log("Error connecting to DB!");
  }
})();
