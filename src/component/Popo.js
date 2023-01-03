import React, { useState } from 'react'

const Popo = () => {
    const [policecar, setPc] = useState("Wee!");
    const [kleur, setKleur] = useState("red");
    let [num, setNum] = useState(0);
    const [wee, setWee] = useState("");
    const number = 5
    return(
      <>
      <h1 id={kleur}>{policecar}</h1>
      <h2>{wee}</h2>
      <button onClick= { ()=>{
          if(policecar === "Wee!"){
            setPc("Woo!")
            setKleur("blue")
            setNum(num += 1)
          }
          if((num === 5)){
             setWee("Dayum bby chill")
          }
          if((num >= 10)&(num <= 20)){
             setWee("Gurlll 10 more times and you going to jailll")
          }
          if((num >= 20)){

             setWee("Jail.")
          }
          if(policecar === "Woo!"){
              setPc("Wee!")
              setKleur("red")
              setNum(num += 1)
          }
          }}>Less than legal stuff</button>
      </>)
}

export default Popo