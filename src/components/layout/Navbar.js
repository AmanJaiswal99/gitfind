import React from 'react';
import {Link} from 'react-router-dom';

Navbar.defaultProps = {
    title:"Github Finder",
    icon:"fab fa-github"
}
function Navbar({icon,title}) {
 
        return (
            <div>
                <nav className='navbar bg-dark text-white'>
                <h3> <i className={icon}/> {title}</h3>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                   
                </ul>
                </nav>
              
            </div>
        );
    
}


export default Navbar
