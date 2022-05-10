import React from "react";
import '../Styles/homepage.css';
import {Typewriter} from 'react-simple-typewriter';

const Homepage = () => (
    <div id="centered_page">
        <p>Hey,I'm <label id="name_hp">Kishore</label></p>
        <div id="subtext">
            I'm
            <span id="type_effect">
                <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1000}
                    words={['An Undergrad Student','A Web Dev Enthusiast']}
                />
            </span>
        </div>
    </div>
);

export default Homepage;