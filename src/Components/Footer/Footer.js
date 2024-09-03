import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomeAtt';

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
                            <CustomLink to='/batterysafety' className='footer-links'>
                                <h1>
                                    Battery Safety
                                </h1>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-runaway-detection-prevention' className='footer-links'>
                                <p>
                                    Battery Thermal Runaway Detection & Prevention
                                </p>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-management' className='footer-links'>
                                <p>
                                    Battery Thermal Management
                                </p>
                            </CustomLink>
                        </div>
                        <div className='Aerosol'>
                            <CustomLink to='/aerocapture' className='footer-links'>
                                <h1>
                                    Aerosol Capture
                                </h1>
                            </CustomLink>
                            <CustomLink to='/aerosol-concentration' className='footer-links'>
                                <p>
                                    Aerosol Concentration
                                </p>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' className='footer-links'>
                                <p>
                                    Battery Thermal Runaway Numerical Simulation of Electrodynamic Field
                                </p>
                            </CustomLink>
                            <CustomLink to='/dust-mitigation' className='footer-links'>
                                <p>
                                    Dust Mitigation
                                </p>
                            </CustomLink>
                        </div>
                        <div className='Products'>
                            <CustomLink to='/products-services' className='footer-links'>
                                <h1>
                                    Products
                                </h1>
                            </CustomLink>
                            <CustomLink to='/facilities' className='footer-links'>
                                <p>
                                    Facilities
                                </p>
                            </CustomLink>
                        </div>
                        <div className='Instrumentation'>
                            <CustomLink to='/optical-instrumentation' className='footer-links'>
                                <h1>
                                    Instrumentation
                                </h1>
                            </CustomLink>
                            <CustomLink to='/aerosol-concentration' className='footer-links'>
                                <p>
                                    Aerosol Concentration
                                </p>
                            </CustomLink>
                            <CustomLink to='/morphology-characterization-optical-extinction-spectroscopy' className='footer-links'>
                                <p>
                                    Morphology Characterization with Optical Extinction Spectroscopy 
                                </p>
                            </CustomLink>
                            <CustomLink to='/polarized-light-scattering' className='footer-links'>
                                <p>
                                    Polarized Light Scattering
                                </p>
                            </CustomLink>
                            <CustomLink to='/sedimentation-based-particle-sizing' className='footer-links'>
                                <p>
                                    Sedimentation based Particle Sizing
                                </p>
                            </CustomLink>
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