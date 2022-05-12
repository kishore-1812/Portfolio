import React, { useState, useEffect } from "react";
import "../Styles/Work.css";
import first_project from "../images/first_project.png";
import second_project from "../images/second_project.png";
import third_project from "../images/third_project.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const Work = () => {
  const [firstHover, setHover1] = useState(false);
  const [secondHover, setHover2] = useState(false);
  const [thirdHover, setHover3] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div id="work">
      <h4 id="work_title">My Portfolio</h4>
      <div id="lst_projects">
        <motion.div
          className="proj_grid"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          {firstHover === false && (
            <div id="first_project">
              <img src={first_project} alt="" />
              <div id="first_pro_title">
                <h3>Single Product E-Commerce</h3>
              </div>
            </div>
          )}
          {firstHover && (
            <div id="hov_first_proj">
              <header>
                <a href="https://github.com/kishore-1812/Single_Product_E-Commerce.git" target={"_blank"} rel="noreferrer" className='work_links'><Icon icon="akar-icons:github-fill" width="27" height="27" /></a>
                
              </header>
              <div id="first_desc">
                <p>
                  A single product e-commerce website that allows a user to
                  purchase any number of quantity of products.
                </p>
              </div>
              <footer id="first_tile_footer">
                <p>JS</p>
                <p>Firebase</p>
              </footer>
            </div>
          )}
        </motion.div>
        <motion.div
          className="proj_grid"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
        >
          {secondHover === false && (
            <div id="second_project">
              <img src={second_project} alt="" />
              <div id="second_pro_title">
                <h3>Js Projects</h3>
              </div>
            </div>
          )}
          {secondHover && (
            <div id="hov_second_proj">
              <header>
                <a href="https://github.com/kishore-1812/Simple-Js-Projects.git" target={"_blank"} rel="noreferrer" className="work_links">
                <Icon icon="akar-icons:github-fill" width="27" height="27" />
                </a>
              </header>
              <div id="second_desc">
                <p>
                  This has a collection of 30 small JS projects which I've done
                  to improve my JS skill.
                </p>
              </div>
              <footer>
                <p>JS</p>
              </footer>
            </div>
          )}
        </motion.div>

        <motion.div
          className="proj_grid"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}
          onMouseEnter={() => setHover3(true)}
          onMouseLeave={() => setHover3(false)}
        >
          {thirdHover === false && (
            <div id="third_project">
              <img src={third_project} alt="" />
              <div id="third_pro_title">
                <h3>Portfolio Website</h3>
              </div>
            </div>
          )}
          {thirdHover && (
            <div id="hov_third_proj">
              <div className="links">
                <div className="third_box_links ext_link">
                  <Icon
                    icon="oi:external-link"
                    width="22"
                    height="22"
                    className="third_pro_icons"
                  />
                </div>
                <div className="third_box_links">
                  <a href="https://github.com/kishore-1812/Portfolio.git" target={"_blank"} rel="noreferrer" className='work_links'>
                  <Icon
                    icon="akar-icons:github-fill"
                    width="27"
                    height="27"
                    className="third_pro_icons"
                  />
                  </a>
                  
                </div>
              </div>
              <div id="third_desc">
                <p>This is my personal portfolio website built with react.</p>
              </div>
              <footer>
                <p>ReactJs</p>
                <p>Sass</p>
              </footer>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default Work;
