import React from "react";

const Cat = (props) => {
  const action = () => {
    console.log("Hi")
  }
    return(<>
    <h1>{props.nation}</h1>
    <h2 onClick={action}>{props.capital}</h2>
    <button onClick={()=>{}}>Click</button>
    <New zahara = {true}/>
    </>)
  };
  
  const New = (props) => {
      return(
        <>
        {props.zahara?<h1>zahara is here</h1>:<a href="#">zahara isn't here</a>}
        </>
      )
  }

  export default Cat;