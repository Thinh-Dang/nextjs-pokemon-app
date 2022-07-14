import '../styles/globals.css'
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import PokemonsProvider, {pokemonsContext} from './context/pokemonContext'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <PokemonsProvider>
    <Component {...pageProps} />
  </PokemonsProvider>
)}

export default MyApp;
