import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

function About() {
    return (
        <div>
            <Navbar title="About Us" className="navbar is-transparent" />
            {/* Mathematics shouldn't be a secret. */}
            <div className="wrapper" id="about-wrapper-1">
                <div
                    className="container is-widescreen"
                    id="about-container-1-title">
                    <p className="title is-2 about-title">Our Founders</p>
                </div>
                <div
                    className="container is-widescreen"
                    id="about-container-1-body">
                    <div className="columns is-multiline is-variable is-4 is-centered">
                        <Profile
                            name="Yihong Song"
                            position="Head of Operations, Webmaster"
                            origin="Riverside High School '22"
                            picture="/profile/y_song.jpg"
                            email="1036566@lcps.org"
                            discord="michaelsong4399#2750"
                            github="https://github.com/michaelsong4399"
                        />
                        <Profile
                            name="Hao Gu"
                            position="Curriculum Director, Instructor"
                            origin="Riverside High School '22"
                            picture="/profile/h_gu.jpg"
                            email="1034842@lcps.org"
                            discord="hao#5253"
                        />
                        <Profile
                            name="Anika Patel"
                            position="Projects Director, Instructor"
                            origin="Loudoun County High School '22"
                            picture="/profile/a_patel.png"
                            email="833521@lcps.org"
                            discord="aakin#1815"
                        />
                        <Profile
                            name="Rohit Prasanna"
                            position="Secretary"
                            origin="Briar Woods High School '22"
                            picture="/profile/r_prasanna.png"
                            email="837329@lcps.org"
                            discord="goopfrey#3844"
                        />
                        <Profile
                            name="Ishan Saha"
                            position="Head of Outreach"
                            origin="Rock Ridge High School '22"
                            email="793219@lcps.org"
                            discord="sahahaha#5502"
                            picture="/profile/i_saha.png"
                        />
                    </div>
                </div>
            </div>

            <div className="wrapper" id="about-wrapper-2">
                <div
                    className="container is-widescreen"
                    id="about-container-2-title">
                    <p className="title is-2 about-title">Our Officers</p>
                </div>
                <div
                    className="container is-widescreen"
                    id="about-container-2-body">
                    <div className="columns is-multiline is-variable is-4 is-centered">
                        <Profile
                            name="Alex Rios"
                            origin="Freedom High School '24"
                            picture="/profile/a_rios.png"
                            email="807636@lcps.org"
                            discord="DrummerBoy15#1268"
                        />
                        <Profile
                            name="Yash Agrawal"
                            origin="Freedom High School '23"
                            picture="/profile/y_agrawal.png"
                            email="830902@lcps.org"
                            discord="lemonadeeverydayoftheweek#9645"
                        />
                        <Profile
                            name="Hemanth Saravanan"
                            origin="Light Ridge High School '23"
                            picture="/profile/h_saravanan.jpg"
                            email="834705@lcps.org"
                            discord="hemanth#5336"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
