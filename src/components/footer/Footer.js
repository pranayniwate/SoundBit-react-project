import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


const Footer = () =>{
  return(
    <section className="footer-container">

      <ul className="footer-about">
        <li>Support</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms of use</li>
      </ul>

      <ul className="footer-follow">
        <li><BsFacebook/></li>
        <li><BsTwitter/></li>
        <li><BsInstagram/></li>
        <li><BsYoutube/></li>
        <li><BsWhatsapp/></li>
      </ul>

      <article className="footer-rights">
        <h3>© 2023 SoundBit, Incorporated. All rights reserved.</h3>
      </article>

    </section>
  )
}

export default Footer;