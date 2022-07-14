import React, { createContext} from "react";

// export interface IPokemons {
//     name: string;
//     id: number;
//     img: string;
// }
// export type PokemonContextType = {
//     pokemons: IPokemons | undefined
//     setAuthenticatedUser : (authenticatedUser: IAuthenticatedUser) => void;
// }

export const pokemonsContext= createContext({
  pokemons: [],
  handleSetPokemons:  (pokemons: []) => {}
});

export interface IAuthProvider {
    children : JSX.Element;
}
const PokemonsProvider: React.FC<IAuthProvider> = ({ children }) => {
    const [pokemons, setPokemons] = React.useState([]);
    const handleSetPokemons = (pokemons: []) => {
        setPokemons(pokemons);
    }
    return(
        <pokemonsContext.Provider value={{ pokemons: [], handleSetPokemons}}>
            {children}
        </pokemonsContext.Provider>
    )
}
export default PokemonsProvider;
