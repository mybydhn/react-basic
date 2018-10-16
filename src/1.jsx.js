// import React from 'react';
// import {render} from 'react-dom'
let React = {
    createElement:function(type,props,...children){
        // render(type,prop,children);
        return {type,props,children}
    }
}
function render(vnode,container){
    if(typeof vnode ==='string') return container.appendChild(document.createTextNode(vnode));
    let {type,props,children} = vnode;
    let ele = document.createElement(type);
    if(props) {
        for (let key in props) {
            ele.setAttribute(key,props[key]);
        }
    }
    children.forEach(child=>{
        render(child,ele)
    })
    container.appendChild(ele);
}
render(<h1 className='red'>Hello<span>test...test...</span></h1>, document.getElementById('root'))