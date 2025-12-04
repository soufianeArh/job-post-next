import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = global as unknown as {
      prisma: PrismaClient
}

const useAccelerate = process.env.NODE_ENV === "production"; 
// or another env flag

const prisma =
  globalForPrisma.prisma ||
  (useAccelerate 
    ? new PrismaClient().$extends(withAccelerate())
    : new PrismaClient()
  );

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma =prisma

export { prisma }
