import Navbar from '../components/navbar'
import './_app'

function Index(){
    return(
        <div>
            <Navbar logo="/logo/logo_simple_gear.png"/>
            <div className = "wrapper" id="wrapper-top">
                <div className="container is-widescreen" id="container-1-top">
                    <div className="columns is-mobile" id="column-1-top">
                        <img id="logo-index" src="/logo/logo_complete.png"></img>
                    </div>
                    <div className="columns is-mobile" id="column-1-bot">
                        <div className="column">
                            <div className="subtitle" id="column-1-bot-title">
                                Join Us
                            </div>
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