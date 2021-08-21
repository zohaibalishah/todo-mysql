const express = require("express");
const router = express.Router();

const todos = require("../controllers/todo.controller");

router.get("/", todos.alltodo);
router.post("/create", todos.createtodo);
router.delete("/:id", todos.deletetodo);
router.put("/:id", todos.updatetodo);

module.exports = router;
