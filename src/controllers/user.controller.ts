import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userService.getUsers();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
