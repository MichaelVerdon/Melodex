const NavBar = () => {
    return(
        <>
            <nav className="nav">
                <div className="LogoContainer">
                    <a href='/'>
                        <h1>Melodex</h1>
                    </a>
                </div>
                <div className="SearchContainer">
                    <input/>
                    <img src="../images/nav/search.svg" className="Search"/>
                </div>      
            </nav>
        </>
    )
}

export default NavBar