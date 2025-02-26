import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

// Algorithm
// 1 open 2 div under a footer function
// 2 give it a class name as cpyright & brand-logos
// 3 weite the required content under the copy right and apply animation and changes through Scss
// 4 under brand-logo take a <a> tag and use link into that (of the landing page) with the class name as required(facebook)
// 5 then provide the path of your image 
// 6 use 5 and 5 step 4times and make changes as required

function Footer() {
  return (
    <div id="Foot">

      <footer>
        <div className="cpyRght" >
          &copy; Copyright And Developed By HardReload.
        </div>
        <div className="brand-logos">
          <a href="https://www.facebook.com/login/" className="faceBook">
          <FaFacebookF style={{color:"#72748e", height:"10px"}} />
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="instagram">
          <FaInstagramSquare style={{color:"#72748e", height:"10px"}} />
          </a>
          <a href="https://github.com/login" className="Github">
          <FaLinkedinIn style={{color:"#72748e", height:"10px"}} />
          </a>
          <a href="https://twitter-login-page.vercel.app/" className="twiter">
          <FaPinterestP style={{color:"#72748e", height:"10px"}} />
          </a>
          <a href="https://www.behance.net/" className="twiter">
          <FaBehance style={{color:"#72748e", height:"10px"}} />
          </a>
        </div>
      </footer>
    </div>
    );
}                                                                         
export default Footer;      