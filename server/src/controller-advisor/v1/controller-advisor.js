import { User } from "../../models/dto/user.js";

export class ControllerAdvisor {
  async validateUser(req, res, next) {
    try {
      const { userId, name } = req.body;
      const user = new User(userId, name);
    } catch (err) {
      console.log(err);
    }
    next();
  }
}
