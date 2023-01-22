import React from 'react'
import classes from './SearchTextField.module.scss';
import { useDebounce } from "../../../hooks/useDebounce";

export default function SearchTextField({onChange, placeholder,text}) {
    const [value, setValue] = React.useState("");
    useDebounce(() => onChange(value), 700, [value]);
    React.useEffect(()=>{
        if(!text){
            setValue("")
        }
    },[text])
  return (

         <input
          className={classes.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />

  )
}
