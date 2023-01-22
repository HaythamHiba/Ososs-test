import { useMemo } from "react";
import { useQuery } from "react-query";

import axios from "axios";

export const useGetQuery = (key, url, options = {}) => {
  const params = options.params ?? {};
  const queryOptions = options.queryOptions ?? {};

const api_key='h1c11tRV/W/wMvy+Wk18Pw==gZTJqki95VApr79w';

  const query = useQuery(
    [key,params],
    async () => {
     
        const { data } = await axios.get(url,  {
          headers: {
            "X-Api-Key": api_key
          },
          params:{...params}
        
        },
        );
        return data;
      
    },
    {
      // onSuccess: (data) => console.log(data.data),
      onError: (err) => {
        console.log(err)
      },
      ...queryOptions,
    }
  );

  return useMemo(
    () => ({
      ...query,
    }),
    [query]
  );
};
