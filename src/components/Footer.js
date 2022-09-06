
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer= ()=>{

    return(
        <div className='row justify-content-between bg-warning text-light' style={{padding:'30px 0', position:'fixed', bottom:'0', width:'100%', marginLeft:'0px',}}>
            <NavLink  className="navbar col-4 text-light" to='/' style={{textDecoration:'none'}} >
                    <h1>JUMAISearch</h1>
            </NavLink>
            <div className='col-4' >
                <p style={{textAlign:'center'}}>Contact us on socials</p>
                <div style={{display:'flex', justifyContent:'space-between', marginRight:'50px'}}>
                    <a href='https://www.facebook.com' target='_blank'>
                        {/* <FontAwesomeIcon size='2x' icon={faFacebook}/> */}
                    </a> 
                    <a href='https://www.twitter.com'target='_blank'>
                        {/* <FontAwesomeIcon size='2x' icon={faTwitter}/> */}
                    </a>
                    <a href='https://www.instagram.com' target='_blank'>
                        {/* <FontAwesomeIcon size='2x' icon={faInstagram}/> */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;