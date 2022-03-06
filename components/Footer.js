import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();
    return (
        <div>
            <footer className="footer">
                <div className="container is-widescreen" id="container-footer">
                    <div className="columns" id="column-footer">
                        <div
                            className="column is-one-third"
                            id="column-footer-left">
                            <Link
                                activeClass="active"
                                to="navbar"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1200}>
                                <img
                                    className="image"
                                    id="logo"
                                    src="/logo/Logo_ACL.png"
                                />
                            </Link>
                            <div id="column-footer-left-text">
                                Secret Math Society
                            </div>
                            <div id="column-footer-left-buttons">
                                <a
                                    className="icon-anchor"
                                    id="footer-button-discord"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://bit.ly/ACLSMSDiscord">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={
                                                fab.faDiscord
                                            }></FontAwesomeIcon>
                                    </span>
                                </a>
                                <a
                                    className="icon-anchor"
                                    id="footer-button-email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="mailto:1036566@lcps.org">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}></FontAwesomeIcon>
                                    </span>
                                </a>
                                <a
                                    className="icon-anchor"
                                    id="footer-button-github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/michaelsong4399/ACL-secret-math-society">
                                    <span className="icon">
                                        <FontAwesomeIcon
                                            icon={
                                                fab.faGithub
                                            }></FontAwesomeIcon>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="column is-one-quarter is-hidden-mobile"
                            id="column-footer-middle">
                            <div className="footer-title">Navigation</div>
                            <div className="footer-element">
                                <a onClick={() => router.push("/")}>Home</a>
                            </div>
                            <div className="footer-element">
                                <a onClick={() => router.push("/about")}>
                                    About Us
                                </a>
                            </div>
                            <div className="footer-element">
                                <a onClick={() => router.push("/piathon")}>
                                    Pi-a-thon 2022
                                </a>
                            </div>
                        </div>

                        <div
                            className="column is-hidden-mobile"
                            id="column-footer-right">
                            <p id="column-footer-right-text">
                                ACL Secret Math Society is the Academies of
                                Loudoun chapter of <b>Secret Math Society</b>, a
                                501(c)(3) non-profit organization. ACL Secret
                                Math Society is operated in its entirety by
                                students and sponsored by Academies of Loudoun
                                faculty and PTSA.
                            </p>
                            <a
                                id="column-footer-right-anchor"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.lcps.org/acl">
                                <img
                                    className="image"
                                    id="column-footer-right-logo"
                                    src="/logo/acl_notext.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
