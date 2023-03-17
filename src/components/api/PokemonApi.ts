export default class PokemonApi {
    static async getNewPokemon() {
        const response = await fetch('api/pokemon/generate/2')
        return response.json()
    }

    static async voteForPokemon(id: number) {
        const response = await fetch(`api/pokemon/${id}/votes/increment`)
        return response.json()
    }

    static async downvoteForPokemon(id: number) {
        const response = await fetch(`api/pokemon/${id}/votes/decrement`)
        return response.json()
    }
}