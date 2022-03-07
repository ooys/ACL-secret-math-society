import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Clock from "../components/Clock";
import Closing from "../components/Closing";
import Leaderboard from "../components/Leaderboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignInAlt,
    faEnvelope,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

// const DynamicClock = dynamic(() => import('../components/clock.js'))
// const DynamicLeaderboard = dynamic(() => import('../components/leaderboard.js'))

function About() {
    return (
        <div>
            <title>ACL Pi-a-thon 2022 - Secret Math Society</title>
            <Navbar
                title="ACL Pi-a-thon 2022"
                className="navbar is-transparent is-fixed-top"
                id="piathon-navbar"
            />
            <div className="wrapper" id="piathon-wrapper-top">
                <div
                    className="container is-widescreen"
                    id="piathon-container-1-top">
                    <div
                        className="columns is-mobile"
                        id="piathon-column-1-top"></div>
                </div>
            </div>

            {/* Container 2 - Title */}
            <div className="wrapper" id="piathon-wrapper-2">
                <div className="container is-widescreen">
                    <div
                        className="columns is-mobile"
                        id="piathon-column-2-top">
                        Pi-a-thon 2022
                    </div>
                    <div id="piathon-column-2-subtop">
                        An Academies of Loudoun competition celebrating 2022 Pi
                        Day.
                    </div>
                    <hr className="piathon-wrapper-2-hr"></hr>
                    {/* <Clock /> */}
                    <div className="card" id="piathon-card-info">
                        <header className="card-header">
                            <p
                                className="card-header-title"
                                id="piathon-card-rules-title">
                                Event Info
                            </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">
                                Date
                                <br></br>
                                March 8, 2022 ~ March 15, 2022
                            </p>
                            <br></br>
                            <p className="title is-4">Prizes</p>
                            <p className="subtitle is-5">
                                1st Place Team: $50 Cash/Giftcard per person
                            </p>
                            <p className="subtitle is-6">
                                *Only registered Academies of Loudoun teams are
                                eligible for prizes.
                                <br></br>
                                *Winning teams will receive an email from the
                                Pi-a-thon Committee after the event.
                                <br></br>
                                *Prizes will be split evenly among team members.
                            </p>
                            <br></br>
                            <p className="title is-4">Schedule</p>
                            <table className="table is-hoverable is-striped is-bordered">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Event</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tuesday 3/8 </td>
                                        <td>Round 1: Virtual Tasks Released</td>
                                    </tr>
                                    <tr>
                                        <td>Friday 3/11, 11:59 PM</td>
                                        <td>
                                            Round 1: Virtual Answer Submission
                                            Closed
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Monday 3/14, Lunch</td>
                                        <td>
                                            Round 2: A Day In-Person Time
                                            Challenge
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday 3/15, Lunch</td>
                                        <td>
                                            Round 2: B Day In-Person Time
                                            Challenge
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br></br>
                            <p className="title is-4">Who may participate?</p>
                            <p className="subtitle is-5">
                                Competition is open to all current students and
                                faculty of the Academies of Loudoun.
                                <br></br>
                                However, only students will be eligible to win
                                prizes.
                                <br></br>
                                <span id="is-red">
                                    Teams must complete registration in order to
                                    be considered for a prize!
                                </span>
                            </p>
                            <br></br>
                            <p className="title is-4">Registration</p>
                            <p className="subtitle is-5">
                                Registration closes at the end of round 1.
                                (3/11)
                                <br></br>1 to 4 member(s) are allowed per team.
                                <br></br>
                                Teams must be solely composed of current
                                Academies of Loudoun students. We heavily
                                encourage team participation.
                                <br></br>
                                <span id="is-red">
                                    Team Name will be used as team
                                    identification. Please submit an appropriate
                                    name.
                                </span>
                                <br></br>
                                <br></br>
                                <a
                                    className="button is-medium is-rounded has-shadow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://forms.gle/xU7QUAjyuCYbX84q8"
                                    id="piathon-button-register">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={
                                                faSignInAlt
                                            }></FontAwesomeIcon>
                                    </span>
                                    <span>Register Your Team</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card" id="piathon-card-rules">
                        <header className="card-header">
                            <p
                                className="card-header-title"
                                id="piathon-card-rules-title">
                                Competition Rules
                            </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">Round 1 (Virtual)</p>
                            <p className="subtitle is-5">
                                Pi-related tasks will be emailed to each
                                individual on each team before March 8th.{" "}
                                <br></br>
                                <br></br>
                                <span id="is-red">
                                    Submissions will close at 11:59 PM EST on
                                    3/11
                                </span>
                                <br></br>
                                <br></br>
                                After completion of each task, submit your{" "}
                                <b>team name</b> and the <b>task answers</b> to
                                the answer form below!
                                <br></br>
                                <br></br>
                                Only 1 submission per team is necessary.
                                <br></br>
                                Only the first valid submission will count
                                towards a team's final score.
                            </p>
                            <a
                                className="button is-medium is-rounded has-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://forms.gle/T9WvDQ3wtnHQQFxW8"
                                id="piathon-button-submission">
                                <span className="icon">
                                    <FontAwesomeIcon
                                        icon={
                                            faArrowAltCircleRight
                                        }></FontAwesomeIcon>
                                </span>
                                <span>Task Answer Submissions</span>
                            </a>
                            <p className="subtitle is-6">
                                <br></br>
                                {/* *Form no longer accepting submissions. */}
                            </p>
                            <br></br>
                            <p className="title is-4">Scoring</p>
                            <p className="subtitle is-5">
                                There are 4 tasks in total. <br></br>Based on
                                the number of correct answers, all teams who
                                qualify for Round 2 will be contacted by email
                                with further instructions by March 12th 11:59
                                PM. <br></br>
                            </p>

                            {/* <p className="title is-4">Leaderboard</p>
                            <p className="subtitle is-5">
                                Leaderboard is updated daily at 12:00 AM EST.
                            </p> */}
                            {/* <br></br>
                            <p className="title is-4">Tiebreakers</p>
                            <p className="subtitle is-5">
                                In the event of a tie in total scores, the team
                                with the faster cumulative submission time has
                                the advantage.
                            </p> */}
                        </div>
                        <div className="card-content">
                            <p className="title is-4">Round 2 (In-Person)</p>
                            <p className="subtitle is-5">
                                Qualifying teams compete head to head in an
                                in-person challenge at Mr. T's room (Room 1314)
                                during lunch. Winners will be declared at the
                                end of the competition. More details will be
                                explained in-person.
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card" id="piathon-card-rules">
                        <header className="card-header">
                            <p
                                className="card-header-title"
                                id="piathon-card-rules-title">
                                Contact Us
                            </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">Email Us</p>
                            <p className="subtitle is-5">
                                Yihong Song - ACL Pi Day Committee, Secret Math
                                Society &nbsp;
                                <a
                                    className="piathon-icon-anchor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:1036566@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}></FontAwesomeIcon>
                                    </span>
                                </a>
                            </p>
                            <br></br>
                            <p className="title is-4">Email our Sponsors</p>
                            <p className="subtitle is-5">
                                Dr. Linda Gantz - ACL Pi Day Committee&nbsp;
                                <a
                                    className="piathon-icon-anchor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:linda.gantz@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}></FontAwesomeIcon>
                                    </span>
                                </a>
                                <br></br>
                                <br></br>
                                Mrs. Gina Craun - ACL Pi Day Committee&nbsp;
                                <a
                                    className="piathon-icon-anchor"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:gina.craun@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}></FontAwesomeIcon>
                                    </span>
                                </a>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card" id="piathon-card-thanks">
                        <div className="card-content">
                            <div className="title is-4">Special thanks to:</div>
                            <p className="subtitle is-5">
                                <b>ACL Pi Day Committee</b> - for overall
                                planning and organization,
                                <br></br>
                                <br></br>
                                <b>ACL Secret Math Society</b> - for creation of
                                Pi-a-thon tasks,
                                <br></br>
                                <br></br>
                                <b>ACL PTSA</b> - for funding of Pi-a-thon
                                prizes and awards,
                                <br></br>
                                <br></br>
                                <b>Morgan Norton '20</b> - for cover artwork,
                                <br></br>
                                <br></br>
                                <b>
                                    And to everyone who participated in
                                    Pi-a-thon 2022!
                                </b>
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
