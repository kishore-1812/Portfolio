import React from 'react';
import Particles from "react-tsparticles";
// import '../Styles/background.css'

const Background = () =>  {
    return(
        <Particles id="particle_bg"
            options={{
            background: {
                color: "#283739"
            },
            fpsLimit: 60,
            particles: {
                number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1300
                }
                },
                color: {
                value: "#f5f5f5b9"
                },
                shape: {
                type: "circle",
                stroke: {
                    width: 0.2,
                    color: "#f5f5f5"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
                },
                opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
                },
                size: {
                value: 3.6,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
                },
                line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
                },
                move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
                }
            },
            interactivity: {
                detect_on: "canvas",          //"window => allows interactivity with bg & canvas doesn't allow you to do that"
                events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
                },
                modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                    opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
                }
            },
            retina_detect: true
            }}
        />
        
    );
};


export default Background;
