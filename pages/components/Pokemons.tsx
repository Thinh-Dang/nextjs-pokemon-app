import React , {useContext, useEffect, useState}from 'react'
import { pokemonsContext } from '../context/pokemonContext'
import PokemonCard from './PokemonCard'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

type PokemonType = {
    name: string,
    url: string
}
const Pokemons = () => {
    const [pokemons, setPokemons] = React.useState<PokemonType[]>([]);
    const [pokeName, setPokeName] = React.useState({});
    const usePokemonsContext = useContext(pokemonsContext);
    const offset = Math.floor(Math.random() * 100);
    const limit = Math.floor(Math.random() * 100);
    const JAPANESEAPIURL: string = 'https://maurowernly.github.io/Pokedex/data/pokedex.json';
    const POKEAPI: string = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    useEffect(() => {
        // fetch(JAPANESEAPIURL)
        // .then((res) => res.json())
        // .then((data) => {
        // //usePokemonsContext?.handleSetPokemons(data);
        //     console.log(data)
        //     data.map((pName: any) => {
        //         const engName:string = pName.name.english;
        //         const japName:string = pName.name.japanese;
                
        //         console.log(pokeName);
        //     })
        // })
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
                        pokemons.map((pokemon: PokemonType)  => {
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