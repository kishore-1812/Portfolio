import React,{useState} from 'react';
import { Icon } from '@iconify/react';
import '../Styles/Contact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { Breakpoint } from 'react-socks';


const user_id = '_Dy9UhPRlHYskOxGN';
const service_id = 'service_h80mumt';
const template_id = 'template_dhqdviv';
const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(service_id, template_id, e.target, user_id)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
              background:'white'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
      const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
      }
      
    return(
        <div id='contact_cont'>
            <div id="form_cont">
                <h1>Contact</h1>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" placeholder='Name...' name='from_name' className='form_inp' onChange={handleChange}/>
                    <input type="text" placeholder='Email ID...' name='from_email' className='form_inp' onChange={handleChange}/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' onChange={handleChange}></textarea>
                    
                    <button id="submit" type='submit'>Send</button>
                </form>
            </div>
            <span id='scroll_Up'><Icon id="scrollto" icon="eva:arrow-circle-up-outline" width="45" height="45" onClick={scrollToTop} /></span>
            <Breakpoint medium down className='mob_icons_bp'>
              <div id='mob_icons'>
                <ul className="mob_icons_lst">
                  <li><a href="https://github.com/kishore-1812?tab=repositories" target="_blank" rel='noreferrer'><Icon icon="icon-park-outline:github-one" width="22" height="22" className='media_icons'/></a></li>
                  <li><a href="https://www.instagram.com/k_i_s_h_o_r_e_18/" target="_blank" rel='noreferrer'><Icon icon="carbon:logo-instagram" width="22" height="22" className='media_icons'/></a></li>
                  <li><a href="https://twitter.com/pkichu1997" target="_blank" rel='noreferrer'><Icon icon="icon-park-outline:twitter" width="24" height="22" className='media_icons'/></a></li>
                  <li><a href="https://www.linkedin.com/in/kishore-p-2751311b2/" target="_blank" rel='noreferrer'><Icon icon="eva:linkedin-outline" width="22" height="22" className='media_icons'/></a></li>
                </ul>
              </div>
            </Breakpoint>
            <footer>
                <span id='footer_icon'>
                    <Icon icon="ps:designfloat" width="25" height="25" id="icon"/>
                </span>
                <p>Designed and Built by Kishore</p>
            </footer>
        </div>
    );
}

export default Contact;