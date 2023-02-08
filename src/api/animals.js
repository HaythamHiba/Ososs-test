import { useFetch } from "./helper/useFetch";

export const useSearchAnimals=(search)=>useFetch(`https://api.api-ninjas.com/v1/animals`,search)