import React from 'react'
import {render} from 'react-dom';
//react组件 有函数组件、类组件
//react组件必须大写
//函数组件 （没有this指向 没有声明周期  没有状态）
let obj = {addr:'霍营',lesson:['dd']}
function School(props){
    console.log(props)
    return <div></div>
}
let ele  = <h1><School name='li'  {...obj}></School></h1>
render(ele,document.getElementById('root'))