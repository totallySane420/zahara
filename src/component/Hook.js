import React, { useState } from 'react'

const Hook = () => { 
    const [tree, setTree] = useState("Banana");
    const [car, setCar] = useState("Rolls Royce")
  return (
    <>
    <h1 onClick={()=>{
    
    }}>{tree}</h1>
    <button onClick={()=>{
        if(tree == "Banana"){
           setTree("Papaya") 
        }
        else{
            setTree("Banana")
        }
        }}>Click me</button>
    </>
  )
}

export default Hook