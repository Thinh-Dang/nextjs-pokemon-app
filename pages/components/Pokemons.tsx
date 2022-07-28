import React , {useContext, useEffect, useState}from 'react'
import { PokemonsType } from '../../types/types'
import { pokemonsContext } from '../context/pokemonContext'
import PokemonCard from './PokemonCard'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }


const Pokemons = () => {
    const [pokemons, setPokemons] = React.useState<PokemonsType[]>([]);
    const [pokeName, setPokeName] = React.useState({});
    
    
    
    useEffect(() => {
        const offset = Math.floor(Math.random() * 1000);
        const limit = Math.floor((Math.random() * 80) + 20);
        const POKEAPI: string = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const getPokemons = async () => {
            fetch(POKEAPI)
            .then((res) => res.json())
            .then((data) => {
                data.results.length ? setPokemons(data.results) : setPokemons([]) 
            })
            console.log(`limit: ${limit} , offset: ${offset}`);
        }
        getPokemons();
    },[])
    return (
    <section className='pokemons'>
        <div className="pokemons-container">
            <div className='pokemons-container-wrap'>
                <div className="pokemons-container-list">
                    {
                        pokemons.map((pokemon: PokemonsType)  => {
                            return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pokemons