import React from "react";

var d1 = "March 9, 2021 0:0:0"
var d2 = "March 10, 2021 0:0:0"
var d3 = "March 11, 2021 0:0:0"
var d4 = "March 12, 2021 0:0:0"
var d5 = "March 13, 2021 0:0:0"
var d6 = "March 13, 2021 23:59:59"
// Test Purposes
// d1 = "February 14, 2021 3:44:0"
// d2 = "February 14, 2021 3:44:10"
// d3 = "February 14, 2021 3:44:20"
// d4 = "February 14, 2021 3:44:30"
// d5 = "February 14, 2021 3:44:40"
// d6 = "February 14, 2021 3:44:50"

function toggledisplay(target){
    var x = document.getElementById(target);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

const TaskD1 = () =>{
    return(
    <div className="piathon-tasks">
        <div className="card" id="piathon-card-tasksD1">
            <a onClick={() => toggledisplay("piathon-card-tasksD1-content")}>
            <header className="card-header">
                <p className="card-header-title">
                    Tasks - Day 1: Pi-uzzles
		        </p>
            </header>
            </a>
            <div className="card-content" id="piathon-card-tasksD1-content">
                <div id="piathon-task-1">
                    <p className="title is-4">
                        Task #1
                    </p>
                    <p className="subtitle is-5">
                        What is the minimum amount of moves required to rearrange 
                        the matchsticks from the image below to form the word: PiE? 
                    </p>
                    <p>
                        Hint: All moves count.
                        <br></br>
                        Expected answer format: Integer.
                    </p>
                    <br></br>
                    <img src="/piathon/tasks/t1_2.png" id="background-is-dark"></img>
                </div>
                <br></br>
                <br></br>
                <div id="piathon-task-2">
                    <p className="title is-4">
                        Task #2
                    </p>
                    <p className="subtitle is-5">
                        What word does this image represent?
                    </p>
                    <p>
                        Expected answer format: Text.
                    </p>
                    <br></br>
                    <img src="/piathon/tasks/t2_2.png" id="background-is-dark"></img>
                </div>

                <br></br>
                <br></br>
                <div id="piathon-task-2">
                    <p className="title is-4">
                        Task #3
                    </p>
                    <p className="subtitle is-5">
                    Shown below our pies of different sizes in three square boxes of equal size. 
                    Assume all pies fit perfectly without overlaps. Which box contains the most pie? (by volume)
                    </p>
                    <p>
                        Expected answer format: Text.
                    </p>
                    <br></br>
                    <img src="/piathon/tasks/t3.png"></img>
                </div>

                <br></br>
                <br></br>
                <div id="piathon-task-2">
                    <p className="title is-4">
                        Task #4
                    </p>
                    <p>
                        Expected answer format: Integer.
                    </p>
                    <br></br>
                    <img src="/piathon/tasks/t4_2.png" id="background-is-dark"></img>
                </div>

                <br></br>
                <br></br>
                <div id="piathon-task-2">
                    <p className="title is-4">
                        Task #5
                    </p>
                    <p className="subtitle is-5">
                    ICE = 935
                    <br></br>
                    CAKE = 31115
                    <br></br>
                    LIME = 129145
                    <br></br>
                    PIE = ?
                    </p>
                    <p>
                        Expected answer format: Integer.
                    </p>
                </div>



            </div>
        </div>
        <hr className="piathon-wrapper-2-hr"></hr>
    </div>
    )
}


class Clock extends React.Component {
    constructor(props) {
      super(props);
      var cd = Math.floor((new Date(d1) - new Date())/1000)
      var second = cd % (60)
      var minute = Math.floor(cd % (60*60)/60)
      var hour = Math.floor(cd % (60*60*24)/60/60)
      var day = Math.floor(cd / (60*60*24))
      this.state = {
            seconds: second,
            minutes: minute,
            hours: hour,
            days: day
        };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        if (new Date(d1) >= new Date()){
            var cd = Math.floor((new Date(d1) - new Date())/1000)
        }else if (new Date(d2) >= new Date()){
            var cd = Math.floor((new Date(d2) - new Date())/1000)
        }else if (new Date(d3) >= new Date()){
            var cd = Math.floor((new Date(d3) - new Date())/1000)
        }else if (new Date(d4) >= new Date()){
            var cd = Math.floor((new Date(d4) - new Date())/1000)
        }else if (new Date(d5) >= new Date()){
            var cd = Math.floor((new Date(d5) - new Date())/1000)
        }else{
            var cd = Math.floor((new Date(d6) - new Date())/1000)
        }
        var second = cd % (60)
        var minute = Math.floor(cd % (60*60)/60)
        var hour = Math.floor(cd % (60*60*24)/60/60)
        var day = Math.floor(cd / (60*60*24))

        this.setState({
            seconds: second,
            minutes: minute,
            hours: hour,
            days: day
            
        });
    }
  
    render() {
        if (new Date(d1) >= new Date()){
            return (

            <div>
                <div className="piathon-clock-top">
                    Event begins in:
                </div>
                <div className="columns" id="piathon-clock">
                    <div className="column is-centered" id="root">
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                </div>
                <br></br>
                <hr className="piathon-wrapper-2-hr"></hr>
                {/* <TaskD1/> */}
            </div>
            );
        }else if (new Date(d2) >= new Date()){
            return (
                <div>
                    <div className="piathon-clock-top">
                        Event ends in:&nbsp;
                        {(this.state.days+4).toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        Day 2 Task Release:&nbsp;
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    D1Probs
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        }else if (new Date(d3) >= new Date()){
            return (
                <div>
                    <div className="piathon-clock-top">
                        Event ends in:&nbsp;
                        {(this.state.days+3).toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        Day 3 Task Release:&nbsp;
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    D2Probs
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        }else if (new Date(d4) >= new Date()){
            return (
                <div>
                    <div className="piathon-clock-top">
                        Event ends in:&nbsp;
                        {(this.state.days+2).toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        Day 4 Task Release:&nbsp;
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    D3Probs
                    <hr className="piathon-wrapper-2-hr"></hr>

                </div>
            );
        }else if (new Date(d5) >= new Date()){
            return (
                <div>
                    <div className="piathon-clock-top">
                        Event ends in:&nbsp;
                        {(this.state.days+1).toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        All tasks are released.
                    </div>
                    D4Probs
                    <hr className="piathon-wrapper-2-hr"></hr>

                </div>
            );
        }else if (new Date(d6) >= new Date()){
            return (
                <div>
                    <div className="piathon-clock-top">
                        Event ends in:&nbsp;
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        All tasks are released. Final day to submit answers!
                    </div>
                    D4Probs + Final day!
                    <hr className="piathon-wrapper-2-hr"></hr>

                </div>
            );
        }else{
            return(
            <div>
                <div className="piathon-clock-top">
                    Event has ended. 
                </div>
                <div className="piathon-clock-subtop">
                    Thank you for participating in the 2021 Pi-a-thon!
                    <br></br>
                    Winners will be contacted through email.
                    <br></br>
                    <br></br>
                </div>
                <hr className="piathon-wrapper-2-hr"></hr>
            </div>
            );
        }
    }
  }
  
export default Clock;