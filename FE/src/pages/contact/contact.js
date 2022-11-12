import React from 'react'

import Navbar from "../../components/navbar/Navbar";
import '../tool/tool.css'
import ContactSection from './contact-section/ContactSection'


 import './contact.css'

function Contact() {
  return (
   < div className="tool">
    <div className="toolContainer">
    <Navbar />
        <div className="Contact">
          
        <ContactSection/>
        </div>
    </div>
</div>
  ) 
}

export default Contact;
