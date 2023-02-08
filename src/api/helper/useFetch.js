import React, { useMemo } from "react";


export const useFetch = ( url,param) => {
 

const api_key='h1c11tRV/W/wMvy+Wk18Pw==gZTJqki95VApr79w';
const [data,setData]=React.useState([]);
const [loading,setLoading]=React.useState(false);
const [error,setError]=React.useState(null);
let name=param;

const fetchData=React.useCallback(()=>{
  setLoading(true);
  setError(null);
  if(name){
    fetch(`${url}?name=${name}`,{
      headers:{ "X-Api-Key": api_key}
    })
    .then((response)=>response.json()
    .then(res=>{
      setData(res);
      setLoading(false);
      console.log(res);
    }))
    .catch(err=>{
      setError(err);
      setLoading(false);
    
    })
  }
 
},[name,url])
React.useEffect(()=>{
  fetchData();

},[fetchData])

  return useMemo(
    () => ({
      data:data,
      loading:loading,
      error:error
    }),
    [data,loading,error]
  );
};
