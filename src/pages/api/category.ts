import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, image } = req.body;

    try {
      const newCategory = await prisma.category.create({
        data: {
          name,
          image,
        },
      });

      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: "Failed to add category" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
