import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    const rsvp = await prisma.rsvp.create({ data: JSON.parse(body) });
    console.log(rsvp);
    res.json(rsvp);
  }
}
