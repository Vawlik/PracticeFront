import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu} className={showSubMenu ? 'active' : ''}>
                    <Link to="/about">О нас</Link>
                    {showSubMenu && (
                        <ul className="submenu">
                            <li><Link to="/about/1">О нас доп. 1</Link></li>
                            <li><Link to="/about/2">О нас доп. 2</Link></li>
                            <li><Link to="/about/3">О нас доп. 3</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
