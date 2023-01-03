import React from 'react'
import ReactDOM from 'react-dom/client';
import chihiro from "./chihiro";

const data = ["cat","dog","car"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ul>{data.map((item) => (
        item
    ))}</ul>
);

export default choo
