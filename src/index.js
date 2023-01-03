import React from 'react';
import ReactDOM from 'react-dom/client'
import Contacts from './component/Contacts';
import Homework from './component/Homework';
import Nov15 from './component/Nov15';
import Popo from './component/Popo';
import './component/Popo.css';
import EffectExample from './component/Twentyeight';
import Weather from './component/Weather';
import 'bootstrap/dist/css/bootstrap.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contacts/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
