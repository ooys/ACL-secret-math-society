import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDiscord, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./_app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSignInAlt,
    faMicroscope,
    faHandsHelping,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    fab,
    faDiscord,
    faSignInAlt,
    faGoogle,
    faMicroscope,
    faHandsHelping,
    faUsers
);

/* To do: Add Lazyload */

function Index() {
    return (
        <div>
            <title>ACL Secret Math Society - Home</title>
            <Navbar title="ACL Secret Math Society" className="navbar" />
            <div className="wrapper" id="wrapper-top">
                <div className="container is-widescreen" id="container-1-top">
                    <div className="columns" id="column-1-top">
                        <img id="logo-index" src="/logo/Logo_ACL.png"></img>
                        <div
                            className="column is-hidden-mobile half"
                            id="column-1-motto">
                            <Link
                                activeClass="active"
                                to="column-3-box-explore"
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={1000}>
                                <div className="motto-text" id="motto-explore">
                                    Explore.
                                </div>
                            </Link>
                            <Link
                                activeClass="active"
                                to="column-3-box-connect"
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={1000}>
                                <div className="motto-text" id="motto-connect">
                                    Connect.
                                </div>
                            </Link>
                            <Link
                                activeClass="active"
                                to="column-3-box-impact"
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={1000}>
                                <div className="motto-text" id="motto-impact">
                                    Impact.
                                </div>
                            </Link>
                        </div>
                        <div id="main-title">Secret Math Society</div>
                        <div id="main-subtitle">
                            An Academies of Loudoun Student-run Organization
                        </div>
                    </div>
                    <div className="columns is-mobile" id="column-1-bot">
                        <div
                            className="buttons is-centered"
                            id="column-1-bot-buttons">
                            <a
                                className="button is-medium is-dark is-rounded has-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bit.ly/ACLSMSDiscord">
                                <span className="icon">
                                    <FontAwesomeIcon
                                        icon={fab.faDiscord}></FontAwesomeIcon>
                                </span>
                                <span>Join our Server</span>
                            </a>
                            <a
                                className="button is-medium is-dark is-rounded has-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bit.ly/ACLSMSApp">
                                <span className="icon">
                                    <FontAwesomeIcon
                                        icon={faSignInAlt}></FontAwesomeIcon>
                                </span>
                                <span>Become a Member</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 2 - Quote */}
            <div className="wrapper" id="wrapper-2">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-2-top">
                        <h1
                            className="column is-centered"
                            id="column-2-top-text">
                            "Sharing our passion in mathematics, one equation at
                            a time."
                        </h1>
                    </div>
                </div>
            </div>

            {/* Container 3 - Our Mission */}
            <div className="wrapper" id="wrapper-3">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-3-top">
                        <h1
                            className="section-title is-centered"
                            id="column-3-top-text">
                            Our Mission
                        </h1>
                    </div>
                    <div
                        className="columns is-centered is-mobile"
                        id="column-3">
                        <div className="column" id="column-3-explore">
                            <div
                                className="box has-shadow"
                                id="column-3-box-explore">
                                <div className="title">
                                    <FontAwesomeIcon
                                        className="column-3-box-icon fa-sm"
                                        icon={faMicroscope}></FontAwesomeIcon>
                                    Explore
                                </div>
                                <div
                                    className="content"
                                    id="column-3-impact-content">
                                    <ul>
                                        <li>Competition Math</li>
                                        <li>Hands-on Experiments</li>
                                        <li>Team Challenges</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column" id="column-2-connect">
                            <div
                                className="box has-shadow"
                                id="column-3-box-connect">
                                <div className="title">
                                    <FontAwesomeIcon
                                        className="column-3-box-icon fa-sm"
                                        icon={faUsers}></FontAwesomeIcon>
                                    Connect
                                </div>
                                <div
                                    className="content"
                                    id="column-3-impact-content">
                                    <ul>
                                        <li>Engagement</li>
                                        <li>Diversity</li>
                                        <li>Volunteering Opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column" id="column-3-impact">
                            <div
                                className="box has-shadow"
                                id="column-3-box-impact">
                                <div className="title">
                                    <FontAwesomeIcon
                                        className="column-3-box-icon fa-sm"
                                        icon={faHandsHelping}></FontAwesomeIcon>
                                    Impact
                                </div>
                                <div
                                    className="content"
                                    id="column-3-impact-content">
                                    <ul>
                                        <li>2021 ACL Pi Day Celebration</li>
                                        <li>ACL RESET Club Collaboration</li>
                                        <li>... and more!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 4 - Meetings */}
            <div id="wrapper-4">
                <div className="container is-widescreen">
                    <div className="columns is-mobile" id="column-4-top">
                        <h1
                            className="section-title is-centered"
                            id="column-4-top-text">
                            Meetings
                        </h1>
                    </div>
                    <div className="columns" id="column-4">
                        <div className="column is-half" id="column-4-left">
                            <div id="column-4-left-text">
                                Google Meet<br></br> Every other Tuesday, 4-5PM
                                EST
                            </div>
                            <a
                                className="button is-medium is-success is-rounded has-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://g.co/meet/aclsecretmathsociety">
                                <span className="icon">
                                    <FontAwesomeIcon
                                        icon={fab.faGoogle}></FontAwesomeIcon>
                                </span>
                                <span>Join Google Meet</span>
                            </a>
                        </div>
                        <div
                            className="column is-hidden-mobile"
                            id="column-4-right">
                            <div id="column-4-right-text">
                                Upcoming Meeting Dates
                            </div>
                            <div id="column-4-right-bot-text">
                                March 23, 2021 (Tuesday)
                                <br></br>
                                April 6, 2021 (Tuesday)
                                <br></br>
                                April 20, 2021 (Tuesday)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className = "wrapper" id="wrapper-5">
                <div className="container is-widescreen">
                    <div className="columns" id="column-5">
                        <div className="column">
                            Suggestions? Contact Us
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Bottom Contact Bar */}
            <Footer />
        </div>
    );
}

export default Index;
