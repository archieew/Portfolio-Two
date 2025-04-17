import React, { useState } from "react";
import './styles/Header.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"; 
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Header = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

    return (
        <div className="header">
            <div className="header__logo">
                <h1>Chie</h1>
            </div>

            <nav className={active ? 'mobile-nav active' : 'mobile-nav'}>
                <ul>
                    <div className="closed">
                        <CloseIcon className='close' onClick={showMenu} />
                    </div>

                    <li><Link to="/" onClick={showMenu}><b>Home</b></Link></li>
                    <li><Link to="/about" onClick={showMenu}><b>About</b></Link></li>
                    <li><Link to="/projects" onClick={showMenu}><b>Projects</b></Link></li>
                    <li><Link to="/blogs" onClick={showMenu}><b>Blogs</b></Link></li>
                    <li><Link to="/contact" onClick={showMenu}><b>Contact</b></Link></li>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlinedIcon className="menu" onClick={showMenu} />
            </div>
        </div>
    );
};

export default Header;
