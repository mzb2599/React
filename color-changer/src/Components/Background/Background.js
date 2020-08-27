import React from 'react';
import './style.css';
class Background extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedColor: 'white'
        }
    }
    changeColor = (event) => {
        
        console.log("color changed to:", event.target.value)
        this.setState({
            selectedColor: event.target.value
        })
    }
    render = () => {
        return (
          <div style={{backgroundColor:this.state.selectedColor}} className="bg-cont">
            <div className="color-pick">
                <h2>Choose a color</h2>
                <input onChange={this.changeColor} type="color" /> 
                <p>{this.state.selectedColor}</p> 
             </div>
          </div>
        );
    }
}
export default Background;