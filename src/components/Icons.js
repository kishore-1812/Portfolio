import React from 'react';
import { Icon } from '@iconify/react';
import { Breakpoint } from 'react-socks';
import '../Styles/Icons.css';

const Icons = () => (
    <Breakpoint large up>
        <div id="icons">
            <ul className="social_icons stick_it">
                <li><a href="https://github.com/kishore-1812?tab=repositories" target="_blank" rel='noreferrer'><Icon icon="icon-park-outline:github-one" width="24" height="24" /></a></li>
                <li><a href="https://www.instagram.com/k_i_s_h_o_r_e_18/" target="_blank" rel='noreferrer'><Icon icon="carbon:logo-instagram" width="24" height="24" /></a></li>
                <li><a href="https://twitter.com/pkichu1997" target="_blank" rel='noreferrer'><Icon icon="icon-park-outline:twitter" width="24" height="24" /></a></li>
                <li><a href="https://www.linkedin.com/in/kishore-p-2751311b2/" target="_blank" rel='noreferrer'><Icon icon="eva:linkedin-outline" width="24" height="24" /></a></li>
            </ul>
        </div>
    </Breakpoint>
    

);

export default Icons;