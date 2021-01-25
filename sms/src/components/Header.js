import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <button className='btn'>
                Add
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: 'ACL Secret Math Society',
}

Header.propTypes = {
    title: PropTypes.string,

}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
// }





export default Header
