// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Pokemon as PokenodePokemon, PokemonClient} from "pokenode-ts";
import {Pokemon, PrismaClient} from "@prisma/client";
import {getTwoRandomIds} from "@/backend/pickId";

const client = new PokemonClient();
const prisma = new PrismaClient();

type PokemonData = {
    id: number
    name: string
    url: string
}

function isDbPokemon(pokemon: PokenodePokemon | Pokemon): pokemon is Pokemon {
    return (pokemon as Pokemon).pokeId !== undefined
}

const toPokemonData = (pokemon: PokenodePokemon | Pokemon) => {
    if (isDbPokemon(pokemon)) {
        return {
            id: pokemon.pokeId,
            name: pokemon.name,
            url: pokemon.spriteUrl
        }
    }
    const url = pokemon.sprites.other?.dream_world.front_default || 'https://raw.githubusercontent.com/PokeAPI/sprites/67217823b89b9116fcb37640838017325629922d/sprites/pokemon/other/dream-world/25.svg';
    return {
        id: pokemon.id,
        name: pokemon.name,
        url
    }

}

async function getPokemon(id: number) {
    const pokemonFromDb = await prisma.pokemon.findUnique({
        where: {
            pokeId: id
        }
    });
    if (pokemonFromDb) {
        return toPokemonData(pokemonFromDb);
    }

    const apiPokemon = await client.getPokemonById(id);
    const newPokemon = await prisma.pokemon.create({
        select: {
            pokeId: true,
            name: true,
            spriteUrl: true
        },
        data: {
            pokeId: apiPokemon.id,
            name: apiPokemon.name,
            spriteUrl: apiPokemon.sprites.other?.dream_world.front_default || ""
        }
    });
    return {id: newPokemon.pokeId, name: newPokemon.name, url: newPokemon.spriteUrl}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<PokemonData> | null>) {
    try {
        const countParam = req.query.count

        if (!countParam || typeof countParam != 'string' || Number.parseInt(countParam) > 5) {
            res.status(400).send(null)
            return
        }
        const selectedIds = getTwoRandomIds();

        const pokemonData = await Promise.all(selectedIds.map(getPokemon))
        res.status(200).json(pokemonData)

    } catch (e) {
        res.status(200).send(null)
        console.log(e)
    }

}
