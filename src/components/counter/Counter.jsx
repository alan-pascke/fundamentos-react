import React, {Component} from"react";
import "./Counter.css";
import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";


class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        pass: this.props.initialPass || 0
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.pass
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.pass
        })
    }

    setPass = (e) => {
        this.setState({
            pass: + e.target.value
        })
    }
    
    render(){
        return(
            <div className="Counter">
                <h2>Counter</h2>
                    <Display number={this.state.number}/>
                <div>
                    <PassForm pass={this.state.pass} sPass={this.setPass}/>
                </div>
                <div>
                    <Buttons onInc={this.increment} onDec={this.decrement}/>
                </div>
            </div>
        )
    }

};

export default Counter