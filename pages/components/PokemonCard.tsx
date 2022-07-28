import { url } from 'inspector'
import React, { useEffect, useState } from 'react'
import { IPokemon } from '../../types/types';

interface IProps {
    name: string,
    url: string
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
                    const imgUrl = data.sprites.other.dream_world.front_default ? 
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png` :
                    `/assets/images/pokemon_placeholder.svg`;
                    setPokemon({...data,img_url: imgUrl, badges: data.types})} 
                else {
                    setPokemon(null); 
                }
            })
        }
        getPokemon();
    },[url]);
  return (
        <a className="pokemons-container-list-card" href={`./pokemons/${pokemon?.id}`}>
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
                    return (<span key={badge.type.name} className={ badge.type.name ? `pokemons-container-list-card-badges-type badge-${badge.type.name}` : 'pokemons-container-list-card-badges-type'}>{badge.type.name}</span>)
                })}
                {/* <span className="pokemons-container-list-card-badges-type bg-water">Water</span>
                <span className="pokemons-container-list-card-badges-type">Steel</span> */}
            </div>
        </a>
  )
}
export default PokemonCard