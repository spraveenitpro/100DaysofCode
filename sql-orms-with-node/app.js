const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database is successful");
  } catch (error) {
    console.log("Connection to the database is not successful");
  }
})();
