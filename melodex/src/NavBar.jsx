import { useState } from 'react';

const NavBar = () => {

    const [signedIn, signIn] = useState(false);

    const signUserIn = () => {
        signIn(!signedIn);
    }
    return(
        <>
            <nav className="nav">
                <div className="LogoContainer">
                    <a href='/'>
                        <h1>Melodex</h1>
                    </a>
                </div>
                <ul className="searchList">
                    <li>YouTube</li>
                    <li>SoundCloud</li>
                    {signedIn ? 
                    <button onClick={signUserIn}>Sign In</button> :
                    <button onClick={signUserIn}>Sign Out</button>}
                </ul>
                <div className="SearchContainer">
                    <input/>
                    <img src="../images/nav/search.svg" className="Search"/>
                </div>      
            </nav>
        </>
    )
}

export default NavBar