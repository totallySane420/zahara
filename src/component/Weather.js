import React, { useState } from 'react'


const Weather = () => {
    const prompt1 = window.prompt("Please enter city name")
    const city = prompt1
    const [temp, setTemp] = useState(2)
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6f06ee7a096d9b0b7d5b3c5bda07c46e&q=${city}&units=metric`)
.then((response)=>{
    if(response.status>=200 && response.status<300){
        // the response is healthy
        return response.json()
    }
}).then((weather)=>{
    console.log(weather)
    setTemp(weather.main.temp)
});
  return (
    <>
    <h1>I like</h1>
    {<h1>apple</h1> || <h1>pear</h1>}
    <h1>The temperature in {city} is {temp} degrees celsius.</h1>
    </>
    
  )
}

export default Weather