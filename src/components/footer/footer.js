import React from "react";
import Fstyle from "../footer/footer.css";

const Footer = ( props ) => {
    return (
       <footer>
           <div className={Fstyle.logo}>left Logo</div>
           <div className={Fstyle.rightSection}>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>Contact Us</li>
                </ul>
           </div>
       </footer> 
    );
}

export default Footer;