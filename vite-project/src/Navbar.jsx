import reactLogo from './assets/react-js-icon.png'

function Navbar () {
    return (
        <nav>
            <img src={reactLogo} className='nav--logo' />
            <h3 className='nav--header' >ReactFacts</h3>
            <h4 className='nav--text' >React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;