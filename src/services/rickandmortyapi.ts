import axios from "axios";

const rickandmortyapi = axios.create( {
  baseURL: 'https://rickandmortyapi.com/api'
} )

export { rickandmortyapi }
