import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
import React, { useEffect, useState } from 'react';

const JAPANESEAPIURL: string = 'https://maurowernly.github.io/Pokedex/data/pokedex.json';
 
const Pokemon:NextPage = () => {
    const [pokes, setPokes] = useState([]);
    useEffect(() => {
     fetch(JAPANESEAPIURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokes(data);
      })
    },[])
    return (
        <>
          <h1>Hi</h1>
          {pokes.map((poke:any) => (
            <li key={poke.id}>{poke.name.japanese}</li>
          ))}
        </>
      )
}
export const getJapanName = (englishName: string) => {
    
}
export const getStaticProps = async () => {
    const res = await fetch(JAPANESEAPIURL);
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    };
};

export default Pokemon;
