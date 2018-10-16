import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
class Clock extends Component{
    state = {
        time:new Date().toLocaleString()
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({time: new Date().toLocaleString()})
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    handleClick=()=>{
        ReactDOM.unmountComponentAtNode(window.root);
    }
    render() {
        return <h1 onClick={this.handleClick}>{this.state.time}</h1>
    }
}
render(<Clock></Clock>,document.getElementById('root'));