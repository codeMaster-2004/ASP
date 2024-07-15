import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-main'>
                    <div className='Contact'>
                        <div className='logo'>
                            <div className='more-logo'>
                                <img src={`${process.env.PUBLIC_URL}/images/Icon.svg`}  alt='Nasa' width='33.333px' height='45px'/>
                            </div>
                        </div>
                        <div className='Contact-info'>
                            <div className='Contact-info-item-title'>
                                <h3>
                                    Contact Us
                                </h3>
                            </div>
                            <div className='Contact-info-email'>
                                <a href="mailto:office@analyticalscientificproducts.com" className='contacts'><i className='fa fa-envelope' /> office@analyticalscientificproducts.com</a>
                            </div>
                            <div className='Contact-info-phone'>
                                <a href='tel:7812197625' className='contacts'> <i className='fa fa-phone-alt'/> (781)-219-7625</a>
                            </div>
                            <div className='Contact-info-address'>
                                <a href="https://www.google.com/maps/place/4616+Willow+Ln,+Dallas,+TX+75244/@32.9139821,-96.8315335,17z/data=!3m1!4b1!4m6!3m5!1s0x864c20b61226def3:0xab0f20223673f63c!8m2!3d32.9139821!4d-96.8289532!16s%2Fg%2F11c21818hc?entry=ttu" className='contacts'><i className='fa fa-map-pin'/> 4616 Willow Lane, Dallas,TX 75244-7601</a>
                            </div>
                            <Link
                                className='social-icon-link linkedIn'
                                to='https://www.linkedin.com/company/analytical-scientific-products/'
                                target='_blank'
                                aria-label='Facebook'
                                >
                                    <i className='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                    <div className='diff-pages'>
                        <div className='battery'>
                            <h1>
                                Battery Safety
                            </h1>
                            <p>
                                Battery Thermal Runaway Detection & Prevention
                            </p>
                        </div>
                        <div className='facilities'>
                            <h1>
                                Facilities
                            </h1>
                        </div>
                        <div className='Aerosol'>
                            <h1>
                                Aerosol Capture
                            </h1>
                            <p>
                                Aerosol Concentration
                            </p>
                            <p>
                                Battery Thermal Runaway Numerical Simulation of Electrodynamic Field
                            </p>
                            <p>
                                Dust Mitigation
                            </p>
                        </div>
                        <div className='Instrumentation'>
                            <h1>
                                Instrumentation
                            </h1>
                            <p>
                                Aerosol Concentration
                            </p>
                            <p>
                                Morphology Characterization with Optical Extinction Spectroscopy 
                            </p>
                            <p>
                                Polarized Light Scattering
                            </p>
                            <p>
                                Sedimentation based Particle Sizing
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='separator'/>
                    <p>
                        Copyright © 2024 analyticalscientificfoundations. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;