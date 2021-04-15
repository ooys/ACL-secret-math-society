import { useRouter } from "next/router";

function Navbar({ title, className, id }) {
    const router = useRouter();
    return (
        <div>
            <nav
                className={className}
                role="navigation"
                aris-label="main navigation"
                id={id}>
                {/* Left Navbar Logo + Burger Button for Mobile */}
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        id="navbarlogo"
                        onClick={() => router.push("/")}>
                        <img
                            className="image"
                            id="logo"
                            src={"/logo/Logo_ACL.svg"}
                        />
                    </a>
                    <div id="navbar-description">{title}</div>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbaritems"
                        id="navbar-toggle"
                        onClick={() => {
                            let toggle = document.querySelector(
                                "#navbar-toggle"
                            );
                            let menu = document.querySelector("#navbaritems");
                            toggle.classList.toggle("is-active");
                            menu.classList.toggle("is-active");
                        }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                {/* Main Mavbar Menu */}
                <div id="navbaritems" className="navbar-menu">
                    {/* Left of Menu */}
                    <div className="navbar-start"></div>

                    <div
                        className="navbar-end"
                        style={{ alignItems: "center" }}>
                        <a
                            className="navbar-item is-hoverable"
                            onClick={() => router.push("/")}>
                            Home
                        </a>

                        <a
                            className="navbar-item is-hoverable"
                            onClick={() => router.push("/about")}>
                            About Us
                        </a>

                        <a
                            className="navbar-item is-hoverable"
                            onClick={() => router.push("/piathon")}>
                            Pi-a-thon 2021
                        </a>
                        <a
                            className="navbar-item is-hoverable"
                            onClick={() =>
                                router.push("https://smsbeacon.vercel.app")
                            }>
                            Beacon
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
