import React from 'react';
import { MenuItems } from './MenuItems'
import './NavBar.css'

function NavBar() {
        return (
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Gabriel Borlea</h1>

                <ul className="nav-menu">
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.classN} href={item.url}>
                                {item.title}
                            </a></li>
                        )
                    })}
                </ul>
            </nav>
        )
}
export default NavBar;