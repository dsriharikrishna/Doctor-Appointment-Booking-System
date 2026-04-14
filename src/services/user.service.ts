import * as userRepo from "../repositories/user.repository";

export const getUsers = async () => {
  return await userRepo.findAll();
};
