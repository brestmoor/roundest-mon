import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const getRoundness = (vote: {votesCount: number, notVotedCount: number}) => {
    return vote.votesCount / (vote.votesCount + vote.notVotedCount)
}

export default async function getTopVotedPokemon(top: number = 3) {
    const topVoted = await prisma.votes.findMany({
        orderBy: {
            votesCount: "desc"
        },
        take: top
    });

    return topVoted.map(v => {
        return {
            name: v.name,
            id: v.pokeId,
            roundness: getRoundness(v)
        }
    }).sort((v1, v2) => v2.roundness - v1.roundness);
}