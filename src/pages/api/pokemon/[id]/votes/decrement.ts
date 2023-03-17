import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {PokemonClient} from "pokenode-ts";
import {VotesPayload} from "@/pages/api/pokemon/[id]/votes/index";

const prisma = new PrismaClient();

export default async function handleGet(req: NextApiRequest, res: NextApiResponse<VotesPayload | null>) {
    if (!(typeof req.query.id === 'string') || Number.isNaN(req.query.id)) {
        res.status(400).send(null)
        return
    }

    const id = Number.parseInt(req.query.id)

    const votes = await prisma.votes.findUnique({
        where: {
            pokeId: id
        }
    });

    if (!votes) {
        const client = new PokemonClient();
        const pokemon = await client.getPokemonById(id);
        await prisma.votes.create({
            data: {
                pokeId: id,
                name: pokemon.name,
                votesCount: 0,
                notVotedCount: 0
            }
        })
    }


    const votesPayload = await prisma.votes.update({
        select: {
            pokeId: true,
            votesCount: true,
            name: true,

        },
        data: {
            notVotedCount: {
                increment: 1
            }
        },
        where: {
            pokeId: id
        }
    });

    res.status(200).json(votesPayload)
}