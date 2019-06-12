import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClicker extends React.Component { 
        constructor(){
            super()
            this.clickCounter = 0
            this.state = {
                timesClicked: 0
            }
        }

        increment = () => {
            this.setState({timesClicked: this.state.timesClicked+1})
        }

        render () {
            return (
                <button onClick = {this.increment}>{this.state.timesClicked}</button>
            
        )}
}

export default DigitalClicker