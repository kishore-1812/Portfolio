import React,{useEffect} from 'react';
import '../Styles/About.css';
import {motion,useAnimation} from 'framer-motion';
import { Breakpoint } from 'react-socks';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';

const About = () => 
{
    const pl = ['Javascript(ES6+)', 'Python', 'HTML', 'CSS', 'Sass', 'C', 'C++'];
    const dt = ['React.Js', 'Git', 'Github', 'Bootstrap','Figma'];
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);
    const boxVariants2={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:.3
            }
        }
    }

    return(
        <div id="about_me">
            <Breakpoint medium down>
                <h5>
                    About Me
                </h5>
            </Breakpoint>
            <p>
            Hey, I’m Kishore. I am currently pursuing my bachelors at saveetha engineering college. I try myself to be atleast a bit productive every single day. I was fascinated by just how you can give life to a website when I came to know about it and took my interest in it, I also have a bit of interest in cybersecurity. I like this sort of building things for web and I really enjoy doing it. I spend my leisure time on watching sports and gaming.
            </p>
            <h2 id='skills_title'>Skills</h2>
            
            <div className="box_container">
                <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={boxVariants2}
                >
                    <div className="boxes">
                        <div className="pl_box">
                            <span id="first_box_header">
                                <div id="animate_code"><Icon icon="bx:code-alt" width="24" height="24" /></div>
                                <h4>Programming Languages</h4>
                            </span>
                            
                            <ul id='pl_skill'>
                                {pl && pl.map((skill,i) =><li key={i}>{skill}</li> )}
                            </ul>
                        </div>
                        <div className="lib_box">
                            <span id="second_box_header">
                                <span id='animate_tool'><Icon icon="ant-design:tool-filled" width="24" height="24" /></span>
                                <h4>Dev Tools</h4>
                            </span>
                            <ul id='dt_skill'>
                                {dt && dt.map((skill,i) =><li key={i}>{skill}</li>)}
                            </ul>
                        </div>
                        {/* <div className="other_box">
                            &nbsp;
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
    
};

export default About;