import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h2>
                        Contact Us
                    </h2>
                </div>
                <div className='footer-right-container'>
                    <div className='footer-separator'></div>
                    <div className='footer-right'>
                        <p> <i class='fa fa-phone-alt'/> Phone: (781)-219-7625</p>
                        <p> <i class='fa fa-map-pin'/>
                            <Link 
                                className='contacts'
                                to='https://www.google.com/maps/place/4616+Willow+Ln,+Dallas,+TX+75244/@32.9139821,-96.8315335,17z/data=!3m1!4b1!4m6!3m5!1s0x864c20b61226def3:0xab0f20223673f63c!8m2!3d32.9139821!4d-96.8289532!16s%2Fg%2F11c21818hc?entry=ttu'
                                > Address: 4616 Willow Lane, Dallas,TX 75244-7601
                            </Link>
                        </p>
                        <a href="mailto:office@analyticalscientificproducts.com" className='contacts'><i class='fa fa-envelope' /> Email: office@analyticalscientificproducts.com</a>
                        <div className='footer-sm'>
                            <Link
                                class='social-icon-link facebook'
                                to='https://www.facebook.com'
                                target='_blank'
                                aria-label='Facebook'
                                >
                                    <i class='fab fa-facebook' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='https://www.youtube.com'
                                target='_blank'
                                aria-label='Youtube'
                                >
                                    <i class='fab fa-youtube' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>
                    Copyright © 2024 analyticalscientificfoundations. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;