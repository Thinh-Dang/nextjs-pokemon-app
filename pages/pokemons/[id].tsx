import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from 'react'
import { PokemonsType, IPokemonDetail } from "../../types/types";
import Link from "next/link";

function PokemonDetail ({ pokemon }: {pokemon: IPokemonDetail}) {
	const [bgColorClass, setBgColorClass] = useState('');
	const [japanName, setJapanName] = useState('ゼニガメ');
	const JAPANESEAPIURL: string = 'https://maurowernly.github.io/Pokedex/data/pokedex.json';
	useEffect(() => {
		const getBgColorClass = () => {
			console.log(pokemon.badges.length);
			const randomBadge = Math.floor(Math.random() * (pokemon.badges.length));
			console.log(randomBadge);
			setBgColorClass(`bg-${pokemon.badges[randomBadge].type.name}`);
		}
		const getJapanName = async () => {
			fetch(JAPANESEAPIURL)
            .then((res) => res.json())
            .then((data) => {
                if(data) {
                    data.map((item: any) => {
						if(item.name.english.toLowerCase() === pokemon.name) setJapanName(item.name.japanese);
					})
				}
            })
		}
		getBgColorClass();
		getJapanName();
	},[])
    return (
            <div className={`pokemonDetail-container ${bgColorClass.toLowerCase()}`}>
				<section className={`header ${bgColorClass.toLowerCase()}`}>
					<Link href='/'>
						Homepage
					</Link>
					<Link href='/pokemons'>
						PokeDex
					</Link>
				</section>
				<div className="pokemon-detail">
					<div className="pokemon-detail-container h-100">
						<div className="pokemon-detail-container-info h-100">
							<div className="pokemon-detail-container-info-name_container">
								<p className="pokemon-detail-container-info-name_container-id">#{pokemon.id}</p>
								<p className="pokemon-detail-container-info-name_container-name">{pokemon.name}</p>
							</div>
							<div className="pokemon-detail-container-info-size_container">
								<p className="pokemon-detail-container-info-size_container-height"><span className="highlight-span">Height:</span> {pokemon.height}m</p>
								<p className="pokemon-detail-container-info-size_container-weight"><span className="highlight-span">Weight:</span> {pokemon.weight}kg</p>
							</div>
							<div className="pokemon-detail-container-info-species_container">
								<span className="pokemon-detail-container-info-species_container-exp"><span className="highlight-span">Base experiences:</span> {pokemon.base_experience}pts</span>
							</div>
						</div>
						<div className="pokemon-detail-container-image  h-100">
							<div className="pokemon-detail-container-image-container">
								<img src={pokemon.img_url} alt="pokemon" className="pokemon-detail-container-image-container-img" />
								<span className="pokemon-detail-container-image-container-japan">{japanName}</span>
							</div>
						</div>
						<div className="pokemon-detail-container-stats  h-100">
							<div className="pokemon-detail-container-stats-characteristics">
								<div className="pokemon-detail-container-stats-characteristics-badges">
									{
										pokemon.badges.map((badge) => {
											return <img key={`bagde ${badge.type.name}`} src={`/assets/images/types/${badge.type.name}.png`} alt="badge" className="pokemon-detail-container-stats-characteristics-badges-badge" />
										})
									}
								</div>
								<h3 className="pokemon-detail-container-stats-characteristics-title">Base stats:</h3>
								<div className="pokemon-detail-container-stats-characteristics-stats">
									<ul>
										{pokemon.stats.map((stat,index) => {
											return <li key={`stat ${index}`} className="pokemon-detail-container-stats-characteristics-stats-stat">
												<span>{stat.stat.name + ` : ` + stat.base_stat}</span>
											</li>
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
}
export async function getServerSideProps(context: { params: ParsedUrlQuery }) {
	const id = context.params.id;
	let pokemon: IPokemonDetail | null = null;
	const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
	const res = await fetch(POKE_API + id);
	const data = await res?.json();
	if(data) {
		// const imgUrl = data.sprites.other.dream_world.front_default ? 
		// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png` :
		// `/assets/images/pokemon_placeholder.svg`; 
		const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
		const types = data.types.map((item: any) => {
			const capitalize = item.type.name[0].toUpperCase() + item.type.name.substring(1);
			return { 
				...item,
				type: {
					name: capitalize,
				} 
			}
		})
		pokemon = {
			id: data.id,
			img_url: imgUrl, 
			badges: types,
			name: data.name,
			height: data.height,
			weight: data.weight,
			stats: data.stats,
			base_experience: data.base_experience,
		};
		return { 
			props: {pokemon}, 
		};
	}
	else {
		return {
			notFound: true,
		};
	}
}
export default PokemonDetail;