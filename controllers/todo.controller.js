const db = require("../models");
const Todos = db.Todos;

var alltodo = async (req, res) => {
  try {
    let data = await Todos.findAll();
    return res.status(200).json({ data, msg: "list of todo" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
var createtodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    let todo = await Todos.create({ title, description });
    return res.status(201).json({ todo, msg: "create of todo" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
var updatetodo = async (req, res) => {
  try {
    // const { title, description } = req.body;
    let todo = await Todos.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (todo[0] == 1) {
      return res.status(201).json({ todo, msg: "Update of todo" });
    }
    return res.status(404).json({ todo, msg: "Record not found" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
var deletetodo = async (req, res) => {
  try {
    let todo = await Todos.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (todo == 1) {
      return res
        .status(201)
        .json({ todo, id: req.params.id, msg: "delete of todo" });
    }
    return res
      .status(404)
      .json({ todo, id: req.params.id, msg: "Record not found" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  alltodo,
  createtodo,
  updatetodo,
  deletetodo,
};
