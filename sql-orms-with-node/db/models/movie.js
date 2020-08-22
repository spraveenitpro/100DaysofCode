const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: 'Please provide a value for "title"',
          },
          notEmpty: {
            // custom error message
            msg: 'Please provide a value for "title"',
          },
        },
      },
      runtime: {
        type: Sequelize.INTEGER,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: 'Please provide a value for "runtime"',
          },
          min: {
            args: 1,
            msg: 'Please provide a value greater than "0" for "runtime"',
          },
          max: {
            args: 400,
            msg: 'Please provide a value less than "400" for "runtime"',
          },
        },
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
        allowNull: false, // disallow null
        validate: {
          notNull: {
            msg: 'Please provide a value for "releaseDate"',
          },
        },
      },
      isAvailableOnVHS: {
        type: Sequelize.BOOLEAN,
        allowNull: false, // disallow null
        defaultValue: false, // set default value
      },
    },
    { sequelize }
  );
  return Movie;
};
