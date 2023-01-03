import React from 'react'

const data = ['Tom', 'Peter', 'Justin']
const Test = () => {
  return (
    <ol>{data.map((value)=>{
      return <li>{value}</li>
    })}</ol>
  )
}

export default Test