import prisma from "../config/prisma";

export const findAll = () => {
  return prisma.user.findMany();
};
