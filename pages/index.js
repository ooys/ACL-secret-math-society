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

            {/* Container 2 - Our Mission */}
            <div className = "wrapper" id="wrapper-2">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-2-top">
                        <h1 className="subtitle" id="column-2-top-text">
                            Our Mission
                        </h1>
                    </div>
                    <div className="columns is-centered" id="column-2">
                        <div className="column" >
                            1
                        </div>
                        <div className="column" >
                            2
                        </div>
                        <div className="column" >
                            3
                        </div>
                    </div>
                </div>
            </div>

            <div id="wrapper-3">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-3-top">
                        <h1 className="subtitle" id="column-3-top-text">
                            Meetings
                        </h1>
                    </div>
                    <div className="columns" id="column-3">
                        <div className="column" >
                            How to join?
                        </div>
                    </div>
                </div>
            </div>

            <div id="wrapper-4">
                <div className="container is-widescreen">
                    <div className="columns" id="column-4">
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