import { useState } from 'react';
import AutoComplete from '../components/autocomplete/Autocomplete';
import classes from  './Home.module.scss'
function Home() {
  const[name,setName]=useState("");


  return (
    <div  className={classes.upperContainer}>
        <div className={classes.container}>
          <h1 className={classes.text}>
            Welcome to animals search autocomplete.
          </h1>
          {
          name&&<p className={classes.text}>
            The animal you last searched for is {name}
          </p>
          } 
          <AutoComplete resHandler={setName}/>
          
        </div>
    </div>
  );
}

export default Home;
