import React from 'react';
import '../Navbar/NavBar.css';
import Logo  from "../../media/logo.png";

function Navbar({isScrolling}) {
    const toTheTop=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    return (
        <nav className={`navbar ${isScrolling > 20? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                <img src={Logo} alt='logo'/>
            </div>
            
        </nav>
    )
}

export default Navbar
