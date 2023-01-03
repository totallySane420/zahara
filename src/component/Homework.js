import React, { useState } from 'react'

const Homework = () => {
    const [counter, setCount] = useState(0);
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={()=>{
      setCount(counter+1)
    }}>More</button>

    <button onClick={()=>{
      if (counter!==0){
        setCount(counter-1)
    }
    else{}
    }}>Less</button>
</>
  )
}

export default Homework