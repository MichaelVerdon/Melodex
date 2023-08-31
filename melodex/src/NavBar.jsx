import { useState } from 'react';
import './App.css';

const NavBar = () => {

    const [signedIn, signIn] = useState(false);
    // True for YouTube and False for Soundcloud
    const [searchMode, toggleSearch] = useState(true);

    const signUserIn = () => {
        signIn(!signedIn);
    }

    const switchSearch = () => {
        toggleSearch(!searchMode);
        console.log("switched search")
    }

    return(
        <>
            <nav className="nav">
                <div className="LogoContainer">
                    <a href='/'>
                        <h1>Melodex</h1>
                    </a>
                </div>
                <ul className="SearchList">
                    
                    {
                    // YouTube
                    searchMode ?
                    <li 
                    onClick={switchSearch}
                    className='SearchActive'>
                    YouTube
                    </li> :
                    <li 
                    onClick={switchSearch}
                    className='SearchInactive'>
                    YouTube
                    </li>
                    // This looks horrible but its the only way it works
                    }
                    
                    {
                    // SoundCloud
                    searchMode ?
                    <li 
                    onClick={switchSearch}
                    className='SearchInactive'>
                    SoundCloud
                    </li> :
                    <li 
                    onClick={switchSearch}
                    className='SearchActive'>
                    SoundCloud
                    </li>
                    // This looks horrible but its the only way it works
                    }
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