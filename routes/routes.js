const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.welcome);
routes.get("/home", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);

module.exports = routes;
