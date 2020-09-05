const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for todo

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "The Todo field is required"],
  },
});

//Create model for todo

const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
