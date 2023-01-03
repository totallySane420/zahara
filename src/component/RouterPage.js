import React from 'react'
import {BrowserRouter,Routes} from 'react-router-dom'
import New from './New'
const RouterPage = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<New/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage