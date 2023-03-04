import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";

const PokeContext = createContext();

export function PokeContextProvider({ children }) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  async function pokeName(random) {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${random + 1}`)
      .then((res) => res.data);
  }
  const { data: monster } = useQuery(
    ["monster"],
    () => pokeName(randomNumber),
    { staleTime: 1000 * 5 * 10 }
  );

  return (
    <PokeContext.Provider value={{ randomNumber, monster }}>
      {children}
    </PokeContext.Provider>
  );
}

export function usePokeContext() {
  return useContext(PokeContext);
}
