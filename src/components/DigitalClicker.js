import React, {Component} from 'react'

export default class DigitalClicker extends Component{
    state = {
        timesClicked: 0
    }

    clickIncrementer = () => {
        this.setState(prevState => {
          return {timesClicked: prevState.timesClicked + 1}
        }
        )
    }

    

    render(){
        const numberOfClicks = this.state.timesClicked;
        const clickIncrementer = this.clickIncrementer.bind(this)
        return(
            <div>
                <button onClick ={clickIncrementer}>{numberOfClicks}</button>
            </div>

        )
    }
}
