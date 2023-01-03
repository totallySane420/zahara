import React, { useEffect, useState } from 'react'

const EffectExample = () => {
    const [val, setVal] = useState(0)
    useEffect(()=>{
        console.log("I am useEffect")
    })
    return(
        <>
        <h1>I'm good</h1>
        <button onClick={()=>setVal(val+1)}>Click</button>
        </>
    )
}

// complete_url = base_url + "appid=" + api_key + \
//                 "&q=" + city_name + "&units=metric"
// basehttp://api.openweathermap.org/data/2.5/weather?

// base_url= http://api.openweathermap.org/data/2.5/weather?

// fetch("https://api.github.com/users/totallysane420")
//     .then((response)=>{
//         if(response.status>=200 && response.status<300){
//             // the response is healthy
//             return response.json()
//         }
//     }).then((user)=>{
//         console.log(user)
//         const heading = document.querySelector("h1");
//         const p = document.querySelector("p");
//         heading.textContent  = user.name
//         p.textContent = user.followers
//     });

export default EffectExample