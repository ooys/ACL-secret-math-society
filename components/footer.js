
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";

function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container is-widescreen" id="container-footer">
                    <div className="columns" id="column-footer">
                        <div className="column" id="column-footer-left">
                            <Link
                                activeClass="active"
                                to="navbar"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1200}
                                >
                                <img
                                    className="image"
                                    id="logo"
                                    src="/logo/logo_complete.png"
                                />
                            </Link>
                            <div id="column-footer-left-text">
                                Secret Math Society
                            </div>
                            <div id="column-footer-left-buttons">
                                <a className="icon-anchor" id="footer-button-discord" target="_blank" rel="noopener noreferrer" href="https://bit.ly/ACLSMSDiscord">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={fab.faDiscord} ></FontAwesomeIcon>
                                    </span>
                                </a>
                                <a className="icon-anchor" id="footer-button-email" target="_blank" rel="noopener noreferrer" href="mailto:1036566@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                    </span>
                                </a>
                                <a className="icon-anchor" id="footer-button-github" target="_blank" rel="noopener noreferrer" href="https://github.com/michaelsong4399/ACL-secret-math-society">
                                    <span className="icon">
                                        <FontAwesomeIcon icon={fab.faGithub} ></FontAwesomeIcon>
                                    </span>
                                </a>
                            </div>
                        </div>


                        <div className="column">
                            {/* Test2 */}
                        </div>


                        <div className="column">
                            {/* Test3 */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;