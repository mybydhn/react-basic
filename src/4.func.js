import React from 'react';
import {render} from 'react-dom';
function Clock(props){
    return <h1>{props.date}</h1>;
}
setInterval(()=>{
    render(<Clock date={new Date().toLocaleString()}></Clock>,document.getElementById('root'))
},1000)
