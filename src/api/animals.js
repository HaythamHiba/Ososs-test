import { useGetQuery } from "./helper/useGetQuery";

export const useSearchAnimals=(search)=>useGetQuery("ANIMALS",`https://api.api-ninjas.com/v1/animals`,{
    params:{
        name:search
    },
    queryOptions: {
        enabled: !!search,
      },
})