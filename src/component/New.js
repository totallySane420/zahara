import React from 'react'

const data = [
    {car1:"TATA",car2:"BMW"},
    {car1:"ABC",car2:"XYZ"},
    ]

const New = () => {
  return (
    <ul>
        {data.map((value)=>{
            return <>
            <li>{value.car1} {value.car2}</li>
            </>
        })}
    </ul>
  )
}

export default New