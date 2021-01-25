import Link from 'next/link'

const About = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <h1>About</h1>
        <p>Hello this is a test file.</p>
    </div>
)

export default About;