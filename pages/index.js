import Navbar from '../components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faDiscord } from '@fortawesome/free-brands-svg-icons'
import './_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faDiscord, faSignInAlt)



function Index(){
    return(
        <div>
            <title>
                Secret Math Society - Home
            </title>
            <Navbar logo="/logo/logo_simple_gear.png"/>
            <div className = "wrapper" id="wrapper-top">
                <div className="container is-widescreen" id="container-1-top">
                    <div className="columns is-mobile" id="column-1-top">
                        <img id="logo-index" src="/logo/logo_complete.png"></img>
                        <div className="column is-hidden-mobile half" id="column-1-motto">
                            <div className="motto-text" id="motto-explore">
                                Explore.
                            </div>
                            <div className="motto-text" id="motto-connect">
                                Connect.
                            </div>
                            <div className="motto-text" id="motto-impact">
                                Impact.
                            </div>
                        </div>
                        <div id="main-title">
                            Secret Math Society
                        </div>
                        <div id="main-subtitle">
                            An Academies of Loudoun Student-run Organization
                        </div>
                    </div>
                    <div className="columns is-mobile" id="column-1-bot">
                        <div className="buttons is-centered" id="column-1-bot-buttons">
                            <a className="button is-medium is-dark is-rounded has-shadow" target="_blank" rel="noopener noreferrer" href="https://bit.ly/ACLSMSDiscord">
                                <span className="icon">
                                    <FontAwesomeIcon icon={fab.faDiscord}></FontAwesomeIcon>
                                </span>
                                <span>Join our Server</span>
                            </a>
                            <a className="button is-medium is-dark is-rounded has-shadow" target="_blank" rel="noopener noreferrer" href="https://bit.ly/ACLSMSApp">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
                                </span>
                                <span>Become a Member</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 2 - Quote */}
            <div className = "wrapper" id="wrapper-2">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-2-top">
                        <h1 className="column is-centered" id="column-2-top-text">
                            "Sharing our passion in mathematics, one equation at a time."
                        </h1>
                    </div>
                </div>
            </div>


            {/* Container 3 - Our Mission */}
            <div className = "wrapper" id="wrapper-3">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-3-top">
                        <h1 className="section-title is-centered" id="column-3-top-text">
                            Our Mission
                        </h1>
                    </div>
                    <div className="columns is-centered" id="column-3">
                        <div className="column" id="column-3-explore">
                            <div className="title">
                                Explore
                            </div>
                        </div>
                        <div className="column" id="column-3-connect">
                            <div className="title">
                                Connect
                            </div>
                        </div>
                        <div className="column" id="column-3-impact">
                            <div className="title">
                                Impact
                            </div>
                            <ul>
                                <li>
                                    1
                                </li>
                                <li>
                                    1
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Container 4 - Meetings */}
            <div id="wrapper-4">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-4-top">
                        <h1 className="section-title is-centered" id="column-4-top-text">
                            Meetings
                        </h1>
                    </div>
                    <div className="columns" id="column-4">
                        <div className="column" >
                            How to join?
                        </div>
                    </div>
                </div>
            </div>

            <div className = "wrapper" id="wrapper-5">
                <div className="container is-widescreen">
                    <div className="columns" id="column-5">
                        <div className="column" >
                            Suggestions?
                            Contact Us.
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Contact Bar */}

        </div>
    )
}

export default Index;