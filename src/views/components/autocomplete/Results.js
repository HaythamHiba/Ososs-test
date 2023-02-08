import React from "react";
import classes from "./Results.module.scss";
import { useSearchAnimals } from "../../../api/animals";
import Loader from "../loader/Loader";



const Results = ({ search,clicked }) => {
  const { data, loading, error } = useSearchAnimals(search);
  const results = data?data : [];

 function getHighlightedText(name, search) {
    const parts = name.split(new RegExp(`(${search})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === search.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
}
  

  if (!search) {
    return null;
  }
  if (loading) {
    return (
      <div className={classes.secondary_container}>
        <Loader  />
      </div>
    );
  }
  if (error) {

    return (
      <div className={classes.secondary_container}>
        <p
          style={{
            color: "red",
            margin: 0,
            textAlign: "center",
            padding: "1em",
          }}
        >
          Error in getting data
        </p>
      </div>
    );
  }
  if (results.length === 0) {
    return (
      <div className={classes.secondary_container}>
        <p style={{ color: "#000", margin: 0 }}>No records</p>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {results.map((animal,ind) => (
          <li onClick={()=>clicked(animal.name)} key={ind}>

          
            <p>

            {getHighlightedText(animal.name,search)}
            </p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
