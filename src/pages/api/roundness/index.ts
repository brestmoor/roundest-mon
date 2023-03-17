import {NextApiRequest, NextApiResponse} from "next";
import getTopVotedPokemon from "@/backend/topVotedPokemon";

type VotesResult = {
    id: number,
    name: string,
    roundness: number
}

export default async function handleTop(req: NextApiRequest, res: NextApiResponse<VotesResult[] | null>) {
    if (!(typeof req.query.top === 'string') || Number.isNaN(req.query.top)) {
        res.status(400).send(null)
        return
    }

    const top = Number.parseInt(req.query.top)
    const topVotedResults = await getTopVotedPokemon(top);

    res.status(200).json(topVotedResults)
}