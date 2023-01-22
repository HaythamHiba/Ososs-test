import React from "react";
import classes from "./Autocomplete.module.scss";

import Results from "./Results";
import SearchTextField from "../searchField/SearchTextField";

const AutoComplete = ({resHandler}) => {
  const [text, setText] = React.useState("");

  const resClicked=(name)=>{
    setText(0);
    resHandler(name);
  }



  return (
    <div className={classes.container}>

       
       
            <SearchTextField

              placeholder="Search For Animal"
              onChange={setText}
              text={text}

              
             
            />
          
       
          <Results search={text} clicked={resClicked} />
       
    </div>
  );
};

export default AutoComplete;
