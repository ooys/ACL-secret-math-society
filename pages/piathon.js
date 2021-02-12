import Navbar from '../components/navbar'
import Footer from '../components/footer'

function About(){
    return(
        <div>
            <title>
                ACL Pi-a-thon 2021 - Secret Math Society
            </title>
            <Navbar logo="/logo/logo_simple_exclamation.png" title="ACL Pi-a-thon 2021" />
            <p>
                To celebrate the 2021 Pi Day, the ACL Secret Math Society is 
                collaborating with the Pi Day Committee
                to host this year's Pi-a-thon!

                Website is currently under development. 
                Further information will be released closer to the event date (3/9/2021)
            </p>
            <Footer />
        </div>
    )
}

export default About;