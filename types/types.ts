export type PokemonsType = {
    name: string,
    url: string
}
export interface IPokemon {
    id: number,
    name: string,
    img_url: string,
    badges: [{
        type:
        {
            name: string
        }
    }]
}

export interface IPokemonDetail {
    id: number,
    name: string,
    img_url: string,
    height: number,
    weight: number,
    stats: [{
        base_stat: number,
        stat: {
            name: string,
        }
    }]
    badges: [{
        type:
        {
            name: string
        }
    }],
    base_experience: number
}