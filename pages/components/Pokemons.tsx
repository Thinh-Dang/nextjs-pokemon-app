import React , {useContext, useEffect, useState}from 'react'
import { pokemonsContext } from '../context/pokemonContext'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

const Pokemons = () => {
    const [pokemons, setPokemons] = React.useState<any>([]);
    const [pokeName, setPokeName] = React.useState({});
    const usePokemonsContext = useContext(pokemonsContext);
    const JAPANESEAPIURL: string = 'https://maurowernly.github.io/Pokedex/data/pokedex.json';
    const POKEAPI: string = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=50';
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
        const getPokemon:any = async (url: string) => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                return {
                    name: data.name,
                    id: data.id,
                    img: data['sprites']['other']['official-artwork']['front_default']
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
        // const getPokemon = (url:string) =>{ fetch(
        //     url
        //   ).then((res) => res.json());
        // }
        let promisesArr:any[] = [];
        const getPokemons = async () => {
            for (let index = 20; index < 70; index++) {
                promisesArr.push(getPokemon(`https://pokeapi.co/api/v2/pokemon/${index}/`));
            }
            console.log(promisesArr);
            let results = Promise.all([promisesArr]);
            results.then((res:any) => res[1].json())
            .then((data) => {
                console.log(data);
            })
        }
        getPokemons();
    },[])
    return (
    <section className='pokemons'>
        <div className="pokemons-container">
            <div className='pokemons-container-wrap'>
                <div className="pokemons-container-list">
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type bg-water">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                    <div className="pokemons-container-list-card">
                        <div className="pokemons-container-list-card-img">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                                alt=""
                            />
                        </div>
                        <div className="pokemons-container-list-card-info">
                            <p className="pokemons-container-list-card-info-id">#123</p>
                            <h2 className="pokemons-container-list-card-info-name">Frog</h2>
                        </div>
                        <div className="pokemons-container-list-card-badges">
                            <span className="pokemons-container-list-card-badges-type">Water</span>
                            <span className="pokemons-container-list-card-badges-type">Steel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pokemons