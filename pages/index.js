import Navbar from '../components/navbar'
import './_app'

function Index(){
    return(
        <div>
            <Navbar logo="/logo/logo_simple_gear.png"/>
            <div id="wrapper-top">
                <div className="container is-max-widescreen" id="top">
                    <div className="columns">
                        <div className="column">
                                <img id="logo-index" src="/logo/logo_complete.png"></img>
                        </div>
                    </div>
                    {/* <div id="rotate-top">
                    
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Index;