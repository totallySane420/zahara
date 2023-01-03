import React, { useState } from 'react'

const Nov15 = () => {
    const [val, setVal] = useState(0)
  return (
    <>
    <h1>{val}</h1>
    <button onClick={(e)=>{
      setVal(val+1)
    }}>+</button>
    </>
  )
}

export default Nov15