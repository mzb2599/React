import React from 'react';
import './style.css';
import Brick from '../Brick/Brick'
class Wall extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            bricks: [ ]
        } 
    }

    AddBrick = () => {
        const NewBricks = [...this.state.bricks]
        NewBricks.push(NewBricks.length + 1)
        this.setState({
            bricks:NewBricks
        })
    }
    //override method
    //Render method returns what is being displayed on the browser
    render() {
        return (
            <div className='wall-container'>
                {
                    this.state.bricks.map((brick) => {
                        return <Brick key={brick} name={brick} />
                    })
                }
                <button className='AddBricksStyle' onClick={this.AddBrick}>Add Brick</button>
            </div>
        )
    }
};
export default Wall;