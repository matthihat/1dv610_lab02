import express from "express";
import { UserController } from "../../../controllers/api/v1/user-controller.js";
export const userController = new UserController();
export const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    message: "Hooray! Welcome to version 1 of this very simple RESTful API!",
  })
);

router.post("/users", (req, res, next) =>
  userController.insertUser(req, res, next)
);
