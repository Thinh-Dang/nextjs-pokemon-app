import { url } from 'inspector'
import React, { useEffect, useState } from 'react'

interface IProps {
    name: string,
    url: string
}
interface IPokemon {
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

const PokemonCard = ( {name, url} :IProps) => {
    const [pokemon,setPokemon] = useState<IPokemon | null>();
    const typeToImgUrl = {

    }
    useEffect(() => {
        const getPokemon = async () => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if(data) {
                    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
                     setPokemon({...data,img_url: imgUrl, badges: data.types})} 
                else {
                    setPokemon(null); 
                }
            })
        }
        getPokemon();
    },[url]);
  return (
        <div className="pokemons-container-list-card">
            <div className="pokemons-container-list-card-img">
                <img
                    src= {pokemon?.img_url}
                    alt=""
                />
            </div>
            <div className="pokemons-container-list-card-info">
                <p className="pokemons-container-list-card-info-id">#{pokemon?.id}</p>
                <h2 className="pokemons-container-list-card-info-name">{pokemon?.name}</h2>
            </div>
            <div className="pokemons-container-list-card-badges">
                {pokemon?.badges.map((badge) => {
                    return (<span key={badge.type.name} className={ badge.type.name ? `pokemons-container-list-card-badges-type bg-${badge.type.name}` : 'pokemons-container-list-card-badges-type'}>{badge.type.name}</span>)
                })}
                {/* <span className="pokemons-container-list-card-badges-type bg-water">Water</span>
                <span className="pokemons-container-list-card-badges-type">Steel</span> */}
            </div>
        </div>
  )
}
export default PokemonCard