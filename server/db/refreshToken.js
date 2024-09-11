import { prisma } from "~/server/db"

export const createRefreshToken = (refreshToken) => {

  return prisma.refreshToken.create({
    data: refreshToken
  })
}