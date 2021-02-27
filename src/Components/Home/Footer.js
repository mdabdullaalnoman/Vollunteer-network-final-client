import React from 'react';
import logo from '../../logos/footer-logo.png';

const Footer = () => {
    return (
        <div className='bg-dark footer py-3'>
            <div className="d-flex justify-content-around ">
                <div><img className="logo" src={logo} alt=""/></div>
                <div className='text-white'>
                    <h5 className="text-secondary">Events</h5>
                    <p>Some events here</p>
                    <p>Its only exprements</p>
                </div>
                <div className="contact text-white">
                    <h5 className="text-secondary">Contact Us</h5>
                    <p><strong>Phone: </strong>+12703573490534</p>
                    <p><strong>Email: </strong><em> <span className="text-info">offical@gamil.com</span></em></p>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;