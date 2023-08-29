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
                </ul>
                <div className="SearchContainer">
                    <input/>
                    <a href='/search'>
                        <img src="../images/nav/search.svg" className="Search"/>
                    </a>
                </div> 
                <ul className="navList">
                    <a href='/playlists'>
                        <li>Playlists</li>
                    </a>
                    <a href='/liked'>
                        <li>Liked Songs</li>
                    </a>
                    <a href='/discover'>
                        <li>Discover</li>
                    </a>
                    <li>
                    {
                    signedIn ?
                    <a href='/signin'>
                    <button onClick={signUserIn}>Sign In</button> 
                    </a> 
                    :
                    <a href='/'>
                    <button onClick={signUserIn}>Sign Out</button>
                    </a>
                    }
                    </li>        
                </ul>     
            </nav>
        </>
    )
}

export default NavBar