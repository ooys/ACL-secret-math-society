import { useRouter } from 'next/router'

function Navbar(){
    const router = useRouter()
    return(
        <div>
            <nav class="navbar is-transparent" role="navigation" aris-label="main navigation">
                {/* Left Navbar Logo + Burger Button for Mobile */}
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                {/* Main Mavbar Menu */}
                <div id="navbarmenu" class="navbar-menu">
                    {/* Left of Menu */}
                    <div class="navbar-start">
                        <a class="navbar-item is-hoverable" onClick={() => router.push('/')}>
                            Home
                        </a>

                        <a class="navbar-item is-hoverable" onClick={() => router.push('/about')}>
                            About Us
                        </a>

                        <div class="navbar-item is-hoverable">
                            <a class="navbar-item">
                                More
                            </a>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;