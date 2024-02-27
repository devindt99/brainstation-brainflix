import './Header.scss'

const Header = () => {
    
    return (
        <header className="page-header">
           
            <img className="page-header__logo" src="./src/assets/images/BrainFlix-logo.svg"></img>
            <div className='page-header__searchbar-container'><input className="page-header__searchbar"></input><img className="thumbnail" src="./src/assets/images/Mohan-muruge.jpg"></img></div>
            <button className='page-header__upload'>Upload</button>
        </header>

    )

}

export default Header;