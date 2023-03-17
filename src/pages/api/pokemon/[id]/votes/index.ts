import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export type VotesPayload = {
    pokeId: number
    name: string
    votesCount: number
}

const prisma = new PrismaClient();

async function handleGet(req: NextApiRequest, res: NextApiResponse<VotesPayload | null>) {
    if (!(typeof req.query.id === 'string') || Number.isNaN(req.query.id)) {
        res.status(400).send(null)
        return
    }
    const id = Number.parseInt(req.query.id);

    const votes = await prisma.votes.findFirst({
        where: {
            pokeId: id
        }
    });

    if (!votes) {
        res.status(404).send(votes)
        return
    }
    res.status(200).json(votes)
}



export default async function handler(req: NextApiRequest, res: NextApiResponse<VotesPayload | null>) {
    if (req.method == 'GET') {
        handleGet(req, res)
    }
}