import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import React from "react";
import './styles/Main.scss';
import anu from './assets/profilephoto.jpg';

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <p className="intro">Hello Everyone!</p>
                    <h1 className="name">I’m <span>Archie</span></h1>
                    <p className="role">Full-stack Developer</p>

                    <div className="icons">
                        <a href="#"><Twitter className="icon" /></a>
                        <a href="#"><Instagram className="icon" /></a>
                        <a href="#"><Facebook className="icon" /></a>
                        <a href="#"><LinkedIn className="icon" /></a>
                    </div>

                    <div className="buttons">
                        <button className="btn primary">Connect with Me</button>
                        <button className="btn secondary">Hire Me</button>
                    </div>
                </div>

                <div className="main__img">
                    <img src={anu} alt="Archie" />
                </div>
            </div>
        </div>
    );
}

export default Main;
