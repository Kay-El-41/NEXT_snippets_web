import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// This is out portal to our database, we will use this to create, delete, update, or access to database.
