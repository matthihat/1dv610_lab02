import { IsNotEmpty, IsOptional } from "class-validator";

export class User {
  @IsOptional()
  @IsNotEmpty({ message: "Userid most not be empty" })
  userId;

  @IsNotEmpty({ message: "Name must not be empty" })
  name;

  constructor(userId, name) {
    this.userId = userId;
    this.name = name;
  }
}
