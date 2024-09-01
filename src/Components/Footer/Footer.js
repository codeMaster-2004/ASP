import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import ScrollToTopLink from '../../Backend/Scroll';

function Footer() {

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-main'>
                    <div className='Contact'>
                        <img src={`${process.env.PUBLIC_URL}/images/footer_Layer_1.png`}  alt='Nasa' width='70%' height='70%'/>
                        <div className='Contact-info'>
                            <div className='Contact-info-item-title'>
                                <h3>
                                    Contact Us
                                </h3>
                            </div>
                            <div className='Contact-info-email'>
                                <a href="mailto:office@analyticalscientificproducts.com" 
                                    className='contacts'>
                                        <i className='fa fa-envelope' /> 
                                        office@analyticalscientificproducts.com
                                </a>
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
                            <ScrollToTopLink to='/batterysafety' className='footer-links'>
                                <h1>
                                    Battery Safety
                                </h1>
                            </ScrollToTopLink>
                            <Link to='/battery-thermal-runaway-detection-prevention' className='footer-links'>
                                <p>
                                    Battery Thermal Runaway Detection & Prevention
                                </p>
                            </Link>
                            <Link to='/battery-thermal-management' className='footer-links'>
                                <p>
                                    Battery Thermal Management
                                </p>
                            </Link>
                        </div>
                        <div className='Aerosol'>
                            <Link to='/aerocapture' className='footer-links'>
                                <h1>
                                    Aerosol Capture
                                </h1>
                            </Link>
                            <Link to='/aerosol-concentration' className='footer-links'>
                                <p>
                                    Aerosol Concentration
                                </p>
                            </Link>
                            <Link to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' className='footer-links'>
                                <p>
                                    Battery Thermal Runaway Numerical Simulation of Electrodynamic Field
                                </p>
                            </Link>
                            <Link to='/dust-mitigation' className='footer-links'>
                                <p>
                                    Dust Mitigation
                                </p>
                            </Link>
                        </div>
                        <div className='Products'>
                            <Link to='/products-services' className='footer-links'>
                                <h1>
                                    Products
                                </h1>
                            </Link>
                            <Link to='/facilities' className='footer-links'>
                                <p>
                                    Facilities
                                </p>
                            </Link>
                        </div>
                        <div className='Instrumentation'>
                            <Link to='/optical-instrumentation' className='footer-links'>
                                <h1>
                                    Instrumentation
                                </h1>
                            </Link>
                            <Link to='/aerosol-concentration' className='footer-links'>
                                <p>
                                    Aerosol Concentration
                                </p>
                            </Link>
                            <Link to='/morphology-characterization-optical-extinction-spectroscopy' className='footer-links'>
                                <p>
                                    Morphology Characterization with Optical Extinction Spectroscopy 
                                </p>
                            </Link>
                            <Link to='/polarized-light-scattering' className='footer-links'>
                                <p>
                                    Polarized Light Scattering
                                </p>
                            </Link>
                            <Link to='/sedimentation-based-particle-sizing' className='footer-links'>
                                <p>
                                    Sedimentation based Particle Sizing
                                </p>
                            </Link>
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