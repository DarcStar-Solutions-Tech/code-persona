import { PrismaClient } from "@prisma/client";


const globalForPrisma = global as unknown as { prismaClient: PrismaClient };

export const prismaClient =
    globalForPrisma.prismaClient ||
    new PrismaClient({
        log: ["query"],
    });
export const xPrisma = prismaClient.$extends({
    query: {
        $allModels: {
        }
    }
});

if (process.env.NODE_ENV != "production") globalForPrisma.prismaClient;
