const Task = require("../models/Task");

let message = "";
let type = "";

const welcome = (req, res) => {
  return res.render("login");
};

const getAllTasks = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 2000);
    const tasksList = await Task.find();
    return res.render("index", {
      tasksList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto válido para adicionar a lista!";
    type = "danger";
    return res.redirect("/home");
  }

  try {
    await Task.create(task);

    message = "Livro adicionado com sucesso!";
    type = "success";
    return res.redirect("/home");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const tasksList = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, tasksList, message, type });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", {
        task: null,
        taskDelete,
        tasksList,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Livro atualizado com sucesso!";
    type = "success";
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const updateProgress = async (req, res) => {
  try {
    const { currentPage, totalPages } = req.body;

    let progress = 0;
    if (totalPages > 0) {
      progress = Math.round((currentPage / totalPages) * 100);
    } else {
      progress = 0;
    }

    await Task.updateOne(
      { _id: req.params.id },
      { currentPage, totalPages, progress }
    );
    message = "Progresso atualizado com sucesso!";
    type = "success";
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "Livro apagado com sucesso";
    type = "success";
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  welcome,
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  updateProgress,
  deleteOneTask,
};
