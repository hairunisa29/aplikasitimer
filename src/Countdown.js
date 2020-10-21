import React, { Component } from 'react';
import './Countdown.css';

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:20,
            isActive: false,
        }
    }

    startCountdown = () => {
        this.setState({isActive: true});

        this.myInterval = setInterval(()=>{
            if(this.state.count >0) {
                this.setState(prevState =>({
                    count: prevState.count - 1
            }))
            }

            else if (this.state.count = 0) {
                clearInterval(this.myInterval)
            }
            
        }
        
        ,1000)
    }

    

    stopCountdown = ()=> {
        this.setState({isActive: false})
        clearInterval(this.myInterval)
        
    }

    resetCountdown = () => {
        clearInterval(this.myInterval);
        this.setState({
          count: 20,
          isActive: false
        });
      };


    componentWillUnmount(){
        this.stopCountdown()
        this.resetCountdown()
    }



    render () {
        const {count} = this.state
        return (
            <React.Fragment>
                <h1>Countdown: {count} </h1>
                <td>
                    <button onClick={() => this.startCountdown()} className="button buttonStart">
                        Start
                    </button>
                
                    <button onClick={() => this.stopCountdown()} className="button buttonStop">
                        Stop
                    </button>
                </td>

                <td>
                    <button onClick={() => this.resetCountdown()} className="button buttonReset">
                        Reset
                    </button>
                </td>
            </React.Fragment>
        )
    }

}

export default Timer