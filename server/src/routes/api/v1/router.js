import express from "express";
import { ControllerAdvisor } from "../../../controller-advisor/v1/controller-advisor.js";
import { UserController } from "../../../controllers/api/v1/user-controller.js";
const controllerAdvisor = new ControllerAdvisor();
const userController = new UserController();
export const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    message: "Hooray! Welcome to version 1 of this very simple RESTful API!",
  })
);

router.post(
  "/users",
  (req, res, next) => controllerAdvisor.validateUser(req, res, next),
  userController.addUser
);
