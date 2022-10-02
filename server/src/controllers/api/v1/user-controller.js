import UserService from "../../../services/v1/user-service.js";

const userService = new UserService();

export class UserController {
  constructor() {}

  async addUser(req, res, next) {
    try {
      console.log("controller");
      await userService.addUser();
    } catch (err) {
      console.log(err);
    }
  }
}
