import axios from "axios";

export default async function pokeName(catchPoke) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${catchPoke}`)
    .then((res) => res.data);
}
