import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

var d1 = "March 9, 2021 0:0:0";
var d2 = "March 10, 2021 0:0:0";
var d3 = "March 11, 2021 0:0:0";
var d4 = "March 12, 2021 0:0:0";
var d5 = "March 13, 2021 0:0:0";
var d6 = "March 13, 2021 23:59:59";
// Test Purposes
// d1 = "March 4, 2021 19:01:0"
// d2 = "March 4, 2021 19:01:30"
// d3 = "March 4, 2021 19:02:0"
// d4 = "March 4, 2021 19:02:30"
// d5 = "March 4, 2021 19:03:0"
// d6 = "March 4, 2021 19:03:30"

function toggledisplay(target) {
    var x = document.getElementById(target);
    console.log(x.style.display);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const MultipleChoice = ({ o1, o2, o3, o4 }) => {
    return (
        <div className="subtitle is-5">
            <div>
                <b>A.</b> {o1}
            </div>
            <div>
                <b>B.</b> {o2}
            </div>
            <div>
                <b>C.</b> {o3}
            </div>
            <div>
                <b>D.</b> {o4}
            </div>
        </div>
    );
};

const MultipleChoiceSix = ({ o1, o2, o3, o4, o5, o6 }) => {
    return (
        <div className="subtitle is-5">
            <div>
                <b>A.</b> {o1}
            </div>
            <div>
                <b>B.</b> {o2}
            </div>
            <div>
                <b>C.</b> {o3}
            </div>
            <div>
                <b>D.</b> {o4}
            </div>
            <div>
                <b>E.</b> {o5}
            </div>
            <div>
                <b>F.</b> {o6}
            </div>
        </div>
    );
};

const SubmissionButton = () => {
    return (
        <div id="piathon-tasks-submissions-wrapper">
            <a
                className="button is-medium is-rounded has-shadow"
                target="_blank"
                rel="noopener noreferrer"
                href="http://bit.ly/piathon-answer"
                id="piathon-tasks-button-submissions">
                <span className="icon">
                    <FontAwesomeIcon
                        icon={faArrowAltCircleRight}></FontAwesomeIcon>
                </span>
                <span>Task Answer Submissions</span>
            </a>
        </div>
    );
};

const TaskD1 = () => {
    return (
        <div className="piathon-tasks">
            <div className="card" id="piathon-card-tasksD1">
                <a
                    onClick={() =>
                        toggledisplay("piathon-card-tasksD1-content")
                    }>
                    <header className="card-header">
                        <p className="card-header-title">Day 1: Pi-uzzles</p>
                    </header>
                </a>
                <div className="card-content" id="piathon-card-tasksD1-content">
                    <div id="piathon-task-1">
                        <p className="title is-4">Task #1</p>
                        <p className="subtitle is-5">
                            What is the minimum amount of moves required to
                            rearrange the matchsticks from the image below to
                            form the word: PiE?
                        </p>
                        <p>
                            Hint: All moves count.
                            <br></br>
                            Expected answer format: Integer.
                        </p>
                        <br></br>
                        <img
                            src="/piathon/tasks/t1_2.png"
                            id="background-is-dark"></img>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="piathon-task-2">
                        <p className="title is-4">Task #2</p>
                        <p className="subtitle is-5">
                            What word does this image represent?
                        </p>
                        <p>Expected answer format: Text.</p>
                        <br></br>
                        <img
                            src="/piathon/tasks/t2_2.png"
                            id="background-is-dark"></img>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-2">
                        <p className="title is-4">Task #3</p>
                        <p className="subtitle is-5">
                            Shown below our pies of different sizes in three
                            square boxes of equal size. Assume all pies fit
                            perfectly without overlaps. Which box contains the
                            most pie? (by volume)
                        </p>
                        <p>Expected answer format: Text.</p>
                        <br></br>
                        <img src="/piathon/tasks/t3.png"></img>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-2">
                        <p className="title is-4">Task #4</p>
                        <p>Expected answer format: Integer.</p>
                        <br></br>
                        <img
                            src="/piathon/tasks/t4_2.png"
                            id="background-is-dark"></img>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-2">
                        <p className="title is-4">Task #5</p>
                        <p className="subtitle is-5">
                            ICE = 935
                            <br></br>
                            CAKE = 31115
                            <br></br>
                            LIME = 129135
                            <br></br>
                            PIE = ?
                        </p>
                        <p>Expected answer format: Integer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaskD2 = () => {
    return (
        <div className="piathon-tasks">
            <div className="card" id="piathon-card-tasksD2">
                <a
                    onClick={() =>
                        toggledisplay("piathon-card-tasksD2-content")
                    }>
                    <header className="card-header">
                        <p className="card-header-title">Day 2: Tri-pi-a</p>
                    </header>
                </a>
                <div className="card-content" id="piathon-card-tasksD2-content">
                    <div id="piathon-task-4">
                        <p className="title is-4">Task #6</p>
                        <p className="subtitle is-5">
                            How many Academy Awards (Oscars) did the movie “Life
                            of Pi" win in 2012?
                        </p>
                        <MultipleChoice
                            o1="Four"
                            o2="Three"
                            o3="Two"
                            o4="Five"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div id="piathon-task-7">
                        <p className="title is-4">Task #7</p>
                        <p className="subtitle is-5">
                            Pi is derived from the first letter of which Greek
                            word?
                        </p>
                        <MultipleChoice
                            o1="Peripheral"
                            o2="Perimeter"
                            o3="Panellas"
                            o4="Panera"
                        />
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-8">
                        <p className="title is-4">Task #8</p>
                        <p className="subtitle is-5">Who started Pi day?</p>
                        <MultipleChoice
                            o1="Pi Day was organized by Larry Shaw at the San Francisco Exploratorium 
                            where Shaw worked as a physicist."
                            o2="An unknown group of scientists wanting an excuse to celebrate a 
                            famous scientist’s birthday."
                            o3="Organized by Thomas Owens, an enthusiast of celebrating mathematics 
                            and sharing it with his students at Lloyd-Murray Academy."
                            o4="It is unclear who started pi day, as it has always been a celebration. "
                        />
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-9">
                        <p className="title is-4">Task #9</p>
                        <p className="subtitle is-5">
                            What is Stargazy pie made of?
                        </p>
                        <MultipleChoice
                            o1="Grapes looking like eyeballs"
                            o2="Fish-heads looking at the sky"
                            o3="Strawberries arranged as bright stars"
                            o4="Sprinkles arranged as the night sky"
                        />
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-10">
                        <p className="title is-4">Task #10</p>
                        <p className="subtitle is-5">
                            What is the practice of memorizing large numbers of
                            digits of Pi?
                        </p>
                        <MultipleChoice
                            o1="Pimemology"
                            o2="Philology"
                            o3="Piphilology"
                            o4="Googology"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaskD3 = () => {
    return (
        <div className="piathon-tasks">
            <div className="card" id="piathon-card-tasksD3">
                <a
                    onClick={() =>
                        toggledisplay("piathon-card-tasksD3-content")
                    }>
                    <header className="card-header">
                        <p className="card-header-title">Day 3: Pi-ddles</p>
                    </header>
                </a>
                <div className="card-content" id="piathon-card-tasksD3-content">
                    <div id="piathon-task-11">
                        <p className="title is-4">Task #11</p>
                        <p className="subtitle is-5">
                            Find the hidden message in this poem:
                            <br></br>
                            <br></br>A CIRCLE is round. duh. Everybody knows
                            that. dId you know THat Einstein was boRn on marcH
                            14th? it’s no wonder thAt he’S a genIus! i bet you
                            doN’t know that pi is the FIrst letter of periphery
                            and perimeter in greek. pi goes oN forever, but the
                            number 123456 does not appear In ThE first milliOn
                            digits! since pi is infinite and ouR calculators
                            rouNd it at sOme point, we teChnically dOn’t know
                            the exact ciRcumfereNcE of any calculated ciRcleS!
                        </p>
                        <p>Expected answer format: Text.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="piathon-task-12">
                        <p className="title is-4">Task #12</p>
                        <p className="subtitle is-5">
                            How many pi(e)s are in this image?
                        </p>
                        <p>Expected answer format: Integer.</p>
                        <br></br>
                        <img
                            src="/piathon/tasks/t12.png"
                            id="piathon-image-is-large"></img>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-13">
                        <p className="title is-4">Task #13</p>
                        <p className="subtitle is-5">
                            You find this at the head of a python, the middle of
                            a hospital, and at the tail of platypi.
                        </p>
                        <p>Expected answer format: Text.</p>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-14">
                        <p className="title is-4">Task #14</p>
                        <p className="subtitle is-5">
                            Unscramble ENRMECAMIEFCE/ITERDCRU
                        </p>
                        <p>Expected answer format: Text.</p>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-15">
                        <p className="title is-4">Task #15</p>
                        <p className="subtitle is-5">
                            Name of a famous youtuber who likes to wear cat
                            ears, play video games, and has a cool chair.
                        </p>
                        <p>
                            Hint: His name is associated with a mathematical
                            ratio.
                            <br></br>
                            Expected answer format: Text.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TaskD4 = () => {
    return (
        <div className="piathon-tasks">
            <div className="card" id="piathon-card-tasksD4">
                <a
                    onClick={() =>
                        toggledisplay("piathon-card-tasksD4-content")
                    }>
                    <header className="card-header">
                        <p className="card-header-title">Day 4: Pi-th</p>
                    </header>
                </a>
                <div className="card-content" id="piathon-card-tasksD4-content">
                    <div id="piathon-task-16">
                        <p className="title is-4">Task #16</p>
                        <p className="subtitle is-5">
                            Tom baked a pie with crust of uniform thickness
                            around and below the pie. If Tom wants to eat{" "}
                            <u>only</u> the crust of the pie, what volume of
                            crust (in cubic cm.) will he eat?
                        </p>
                        <p>
                            Note: The image below is an image containing
                            dimensions. Tom is very hungry, so he eats the crust
                            of an entire pie containing slices of these
                            dimensions.
                            <br></br>
                            Expected answer format: Decimal rounded to
                            thousandths.
                        </p>
                        <br></br>
                        <img src="/piathon/tasks/t16.png"></img>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="piathon-task-17">
                        <p className="title is-4">Task #17</p>
                        <p className="subtitle is-5">
                            Bob’s bakery specializes in two kinds of pies:
                            rhubarb pies and avocado pies. Yesterday, Bob
                            decided to produce 4 pies in total. Assume that Bob
                            chose each pie’s flavor randomly and the chances of
                            producing each pie is equal, which of the following
                            outcomes is most likely?
                        </p>
                        <MultipleChoiceSix
                            o1="Bob made 4 rhubarb pies."
                            o2="Bob made 4 avocado pies."
                            o3="Bob made 2 avocado pies and 2 rhubarb pies."
                            o4="Bob made 3 pies of one flavor and 1 pie of the other flavor."
                            o5="All of the above outcomes are equally likely."
                            o6="There is insufficient information."
                        />
                        <p>Expected answer format: Text.</p>
                        <br></br>
                        <img
                            src="/piathon/tasks/t17_2.png"
                            id="background-is-dark"></img>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-18">
                        <p className="title is-4">Task #18</p>
                        <p className="subtitle is-5">
                            A car is driving at a constant velocity of 2pi
                            meters per second around a circle of radius 4. In 20
                            seconds, how many revolutions can the car drive
                            around the circle?
                        </p>
                        <p>
                            Expected answer format: Decimal rounded to
                            thousandths.
                        </p>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-19">
                        <p className="title is-4">Task #19</p>
                        <p className="subtitle is-5">
                            What is the area under the function y = pi from x =
                            0 to x = 2?
                        </p>
                        <p>
                            Expected answer format: Decimal rounded to
                            thousandths.
                        </p>
                    </div>

                    <br></br>
                    <br></br>
                    <div id="piathon-task-20">
                        <p className="title is-4">Task #20</p>
                        <p className="subtitle is-5">
                            If P, I, and E are roots of x<sup>3</sup> - 5x
                            <sup>2</sup> + 3x + 9, what is P * I * E?
                        </p>
                        <p>
                            Expected answer format: Decimal rounded to
                            thousandths.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        var cd = 0;
        var second = cd % 60;
        var minute = Math.floor((cd % (60 * 60)) / 60);
        var hour = Math.floor((cd % (60 * 60 * 24)) / 60 / 60);
        var day = Math.floor(cd / (60 * 60 * 24));
        this.state = {
            seconds: second,
            minutes: minute,
            hours: hour,
            days: day,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (new Date(d1) >= new Date()) {
            var cd = Math.floor((new Date(d1) - new Date()) / 1000);
        } else if (new Date(d2) >= new Date()) {
            var cd = Math.floor((new Date(d2) - new Date()) / 1000);
        } else if (new Date(d3) >= new Date()) {
            var cd = Math.floor((new Date(d3) - new Date()) / 1000);
        } else if (new Date(d4) >= new Date()) {
            var cd = Math.floor((new Date(d4) - new Date()) / 1000);
        } else if (new Date(d5) >= new Date()) {
            var cd = Math.floor((new Date(d5) - new Date()) / 1000);
        } else {
            var cd = Math.floor((new Date(d6) - new Date()) / 1000);
        }
        var second = cd % 60;
        var minute = Math.floor((cd % (60 * 60)) / 60);
        var hour = Math.floor((cd % (60 * 60 * 24)) / 60 / 60);
        var day = Math.floor(cd / (60 * 60 * 24));

        this.setState({
            seconds: second,
            minutes: minute,
            hours: hour,
            days: day,
        });
    }

    render() {
        if (new Date(d1) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top">
                        Competition starts in:
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
                    {/* <div className="title is-2" id="piathon-task-top">Released Tasks</div>
                <SubmissionButton/>
                <br></br>
                <TaskD1/>
                <br></br>
                <TaskD2/>
                <br></br>
                <TaskD3/>
                <br></br>
                <TaskD4/>
                <hr className="piathon-wrapper-2-hr"></hr> */}
                </div>
            );
        } else if (new Date(d2) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top">
                        Competition ends in:&nbsp;
                        {(this.state.days + 4).toString()}d&nbsp;
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
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <div className="title is-2" id="piathon-task-top">
                        Released Tasks
                    </div>
                    <SubmissionButton />
                    <br></br>
                    <TaskD1 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        } else if (new Date(d3) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top">
                        Competition ends in:&nbsp;
                        {(this.state.days + 3).toString()}d&nbsp;
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
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <div className="title is-2" id="piathon-task-top">
                        Released Tasks
                    </div>
                    <SubmissionButton />
                    <br></br>
                    <TaskD1 />
                    <br></br>
                    <TaskD2 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        } else if (new Date(d4) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top">
                        Competition ends in:&nbsp;
                        {(this.state.days + 2).toString()}d&nbsp;
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
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <div className="title is-2" id="piathon-task-top">
                        Released Tasks
                    </div>
                    <SubmissionButton />
                    <br></br>
                    <TaskD1 />
                    <br></br>
                    <TaskD2 />
                    <br></br>
                    <TaskD3 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        } else if (new Date(d5) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top">
                        Competition ends in:&nbsp;
                        {(this.state.days + 1).toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        All tasks are released.
                    </div>
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <div className="title is-2" id="piathon-task-top">
                        Released Tasks
                    </div>
                    <SubmissionButton />
                    <br></br>
                    <TaskD1 />
                    <br></br>
                    <TaskD2 />
                    <br></br>
                    <TaskD3 />
                    <br></br>
                    <TaskD4 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        } else if (new Date(d6) >= new Date()) {
            return (
                <div>
                    <div className="piathon-clock-top-red">
                        Competition ends in:&nbsp;
                        {this.state.days.toString()}d&nbsp;
                        {this.state.hours.toString()}h&nbsp;
                        {this.state.minutes.toString()}m&nbsp;
                        {this.state.seconds.toString()}s
                    </div>
                    <div className="piathon-clock-subtop">
                        All tasks are released. Final day to submit answers!
                    </div>
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <div className="title is-2" id="piathon-task-top">
                        Released Tasks
                    </div>
                    <SubmissionButton />
                    <br></br>
                    <TaskD1 />
                    <br></br>
                    <TaskD2 />
                    <br></br>
                    <TaskD3 />
                    <br></br>
                    <TaskD4 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        } else {
            // return(
            // <div>
            //     <div className="piathon-clock-top">
            //         2021 Pi-a-thon has ended.
            //         <br></br>
            //         We have stopped collecting submissions.
            //     </div>
            //     <div className="piathon-clock-subtop">
            //         Thank you for participating in the 2021 Pi-a-thon!
            //         <br></br>
            //         Winners will be contacted through email.
            //         <br></br>
            //         <br></br>
            //     </div>
            //     <hr className="piathon-wrapper-2-hr"></hr>
            // </div>
            // );
            return (
                <div>
                    <div className="title is-2" id="piathon-task-top">
                        Pi-a-thon 2021 Tasks
                    </div>
                    <div className="subtitle is-4" id="piathon-task-subtop">
                        Click to expand.
                    </div>
                    <TaskD1 />
                    <br></br>
                    <TaskD2 />
                    <br></br>
                    <TaskD3 />
                    <br></br>
                    <TaskD4 />
                    <hr className="piathon-wrapper-2-hr"></hr>
                </div>
            );
        }
    }
}

export default Clock;
