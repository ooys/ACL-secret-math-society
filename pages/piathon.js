import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faEnvelope , faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import dynamic from 'next/dynamic'

const DynamicClock = dynamic(() => import('../components/clock.js'))

function About(){
    return(
        <div>
            <title>
                ACL Pi-a-thon 2021 - Secret Math Society
            </title>
            <Navbar logo="/logo/logo_simple_exclamation.png" title="ACL Pi-a-thon 2021" className="navbar is-transparent is-fixed-top" id="piathon-navbar"/>
            <div className = "wrapper" id="piathon-wrapper-top">
                <div className="container is-widescreen" id="piathon-container-1-top">
                    <div className="columns is-mobile" id="piathon-column-1-top">
                    </div>
                </div>
            </div>
            
            
            {/* Container 2 - Title */}
            <div className = "wrapper" id="piathon-wrapper-2">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="piathon-column-2-top">
                        Pi-a-thon 2021
                    </div>
                    <div id="piathon-column-2-subtop">
                        An Academies of Loudoun competition celebrating 2021 Pi Day.
                    </div>
                    <hr className="piathon-wrapper-2-hr"></hr>
                    <DynamicClock />


                    <div className="card" id="piathon-card-info">
                        <header className="card-header">
		                    <p class="card-header-title" id="piathon-card-rules-title">
                                Event Info
		                    </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">
                                Date
                                <br></br>
                                March 9, 2021 ~ March 13, 2021
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Prizes
                            </p>
                            <p className="subtitle is-5">
                                1st Place: $100 Giftcard
                                <br></br>
                                2nd Place: $50 Giftcard
                                <br></br>
                                3rd Place: $25 Giftcard
                            </p>
                            <p className="subtitle is-6">
                                *Winning teams will receive an email from the Pi-a-thon Committee after the event.
                                <br></br>
                                *Prizes will be split evenly among team members.
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Who may participate?
                            </p>
                            <p className="subtitle is-5">
                                Anyone with an LCPS Google account may register and participate,
                                <br></br>
                                but only current students of the Academies of Loudoun are eligible for giftcard prizes.
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Registration
                            </p>
                            <p className="subtitle is-5">
                                Registration will open throughout the event. 1 to 5 member(s) are allowed per team.
                                <br></br>
                                We heavily encourage team participation.
                                <br></br>
                                <br></br>
                                <a className="button is-medium is-rounded has-shadow" target="_blank" rel="noopener noreferrer" href="http://bit.ly/piathon-register" id="piathon-button-register">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                                    </span>
                                    <span>Register Your Team</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <br></br>

                    <div className="card" id="piathon-card-rules">
                        <header className="card-header">
		                    <p class="card-header-title" id="piathon-card-rules-title">
                                Competition Rules
		                    </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">
                                Tasks
                            </p>
                            <p className="subtitle is-5">
                                5 Pi-related tasks are released <b>each day</b> on 12:00 AM ETC for the 4 days of the event.
                                <br></br>
                                (A total of 20 tasks numbered from 1 - 20)
                                <br></br>
                                <br></br>
                                Tasks will remain open for the duration of the event. 
                                <br></br>
                                No new task will be posted for Day 5, the final day to submit all tasks.
                                <br></br>
                                Submissions will close at 11:59 PM EST on Day 5. (3/13)
                                <br></br>
                                <br></br>
                                <table class="table is-hoverable is-striped is-bordered">
                                    <thead>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Task Topic
                                        </th>
                                        <th>
                                            Task Numbers
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            Day 1, Tuesday 3/9
                                            </td>
                                            <td>
                                            Pi-uzzles (Puzzles)
                                            </td>
                                            <td>
                                            1 - 5
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Day 2, Wednesday 3/10
                                            </td>
                                            <td>
                                            Tri-pi-a (Trivia)
                                            </td>
                                            <td>
                                            6 - 10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Day 3, Thursday 3/11
                                            </td>
                                            <td>
                                            Pi-ddles (Riddles)
                                            </td>
                                            <td>
                                            11 - 15
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Day 4, Friday 3/12
                                            </td>
                                            <td>
                                            Pi-th (Math)
                                            </td>
                                            <td>
                                            16 - 20
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Day 5, Saturday 3/13
                                            </td>
                                            <td>
                                            No new tasks
                                            </td>
                                            <td>
                                            Last day to submit!
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                                <br></br>
                                To complete each task, submit your <b>team name</b>, the <b>task number</b>, and <b>your corresponding answer</b> to the answer form below!
                                <br></br>
                                <br></br>
                                Only 1 submission per team per task is necessary. 
                                <br></br>
                                Only the first valid submission will count towards your team's final score.
                            </p>
                            <a className="button is-medium is-rounded has-shadow" target="_blank" rel="noopener noreferrer" /* href="http://bit.ly/piathon-answer" */ id="piathon-button-register">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                                    </span>
                                    <span>Task Answer Submissions</span>
                                </a>
                            <p className="subtitle is-6">
                                <br></br>
                                *Form will accept submissions when event begins.
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Scoring
                            </p>
                            <p className="subtitle is-5">
                                Every valid submission is given 2 Points.
                                <br></br>
                                Each correct answer is given 8 <b>extra</b> Points.
                                <br></br>
                                Only the first valid submission will count towards your team's final score.
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Leaderboard
                            </p>
                            <p className="subtitle is-5">
                                Leaderboard will be updated daily at 12:00 AM EST.
                            </p>
                            <p className="title is-4">
                                
                            </p>
                        </div>
                    </div>
                    <br></br>



                    <div className="card" id="piathon-card-rules">
                        <header className="card-header">
		                    <p class="card-header-title" id="piathon-card-rules-title">
                                Contact Us
		                    </p>
                        </header>
                        <div className="card-content">
                            <p className="title is-4">
                                Email Us
                            </p>
                            <p className="subtitle is-5">
                            Yihong Song - Pi Day Committee
                            <br></br>
                            <a className="piathon-icon-anchor" target="_blank" rel="noopener noreferrer" href="mailto:vpevents@aclptsa.org">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                </span>
                            </a>
                            <br></br>
                            Tarun Ravi - VP Events, ACL PTSA
                            <br></br>
                            <a className="piathon-icon-anchor" target="_blank" rel="noopener noreferrer" href="mailto:vpevents@aclptsa.org">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                </span>
                            </a>
                            </p>
                            <br></br>
                            <p className="title is-4">
                                Email our Sponsors
                            </p>
                            <p className="subtitle is-5">
                                Dr. Linda Gantz - Pi Day Committee
                                <br></br>
                                <a className="piathon-icon-anchor" target="_blank" rel="noopener noreferrer" href="mailto:linda.gantz@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                    </span>
                                </a>
                                <br></br>
                                Mrs. Gina Craun - Pi Day Committee
                                <br></br>
                                <a className="piathon-icon-anchor" target="_blank" rel="noopener noreferrer" href="mailto:gina.craun@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                    </span>
                                </a>
                                <br></br>
                            </p>
                        </div>
                    </div>
                    <br></br>
                    {/* <p>
                        Special thanks to...
                    </p> */}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;