import React from 'react';
import styles from './Footer.module.css'
import CustomLink from '../CustomLink/CustomeAtt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerMain}>
                    <div className={styles.contact}>
                        <img src='./images/footer_Layer_1.png'  alt='Nasa' width='70%' height='70%'/>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactInfoItemTitle}>
                                <h3>Contact Us</h3>
                            </div>
                            <div className={styles.contactInfoEmail}>
                                <a href="mailto:office@analyticalscientificproducts.com" 
                                    className={styles.contacts}>
                                        <FontAwesomeIcon icon="envelope" /> 
                                        office@analyticalscientificproducts.com
                                </a>
                            </div>
                            <div className={styles.contactInfoPhone}>
                                <a href='tel:7812197625' className={styles.contacts}> <FontAwesomeIcon icon="phone-alt"/> (781)-219-7625</a>
                            </div>
                            <div className={styles.contactInfoAddress}>
                                <a href="https://www.google.com/maps/place/4616+Willow+Ln,+Dallas,+TX+75244/@32.9139821,-96.8315335,17z/data=!3m1!4b1!4m6!3m5!1s0x864c20b61226def3:0xab0f20223673f63c!8m2!3d32.9139821!4d-96.8289532!16s%2Fg%2F11c21818hc?entry=ttu" className={styles.contacts}><FontAwesomeIcon icon="map-pin"/> 4616 Willow Lane, Dallas,TX 75244-7601</a>
                            </div>
                            <CustomLink
                                className={styles.socialIconLink}
                                to='https://www.linkedin.com/company/analytical-scientific-products/'
                                target='_blank'
                                aria-label='Facebook'
                                >
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </CustomLink>
                        </div>
                    </div>
                    <div className={styles.diffPages}>
                        <div className={styles.battery}>
                            <CustomLink to='/batterysafety' className={styles.footerLinks}>
                                <h1>Battery Safety</h1>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-runaway-detection-prevention' className={styles.footerLinks}>
                                <p>Battery Thermal Runaway Detection & Prevention</p>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-management' className={styles.footerLinks}>
                                <p>Battery Thermal Management</p>
                            </CustomLink>
                        </div>
                        <div className={styles.aerosol}>
                            <CustomLink to='/aerocapture' className={styles.footerLinks}>
                                <h1>Aerosol Capture</h1>
                            </CustomLink>
                            <CustomLink to='/aerosol-concentration' className={styles.footerLinks}>
                                <p>Aerosol Concentration</p>
                            </CustomLink>
                            <CustomLink to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field' className={styles.footerLinks}>
                                <p>Battery Thermal Runaway Numerical Simulation of Electrodynamic Field</p>
                            </CustomLink>
                            <CustomLink to='/dust-mitigation' className={styles.footerLinks}>
                                <p>Dust Mitigation</p>
                            </CustomLink>
                        </div>
                        <div className={styles.products}>
                            <CustomLink to='/products-services' className={styles.footerLinks}>
                                <h1>Products</h1>
                            </CustomLink>
                            <CustomLink to='/facilities' className={styles.footerLinks}>
                                <p>Facilities</p>
                            </CustomLink>
                        </div>
                        <div className={styles.instrumentation}>
                            <CustomLink to='/optical-instrumentation' className={styles.footerLinks}>
                                <h1>Instrumentation</h1>
                            </CustomLink>
                            <CustomLink to='/aerosol-concentration' className={styles.footerLinks}>
                                <p>Aerosol Concentration</p>
                            </CustomLink>
                            <CustomLink to='/morphology-characterization-optical-extinction-spectroscopy' className={styles.footerLinks}>
                                <p>Morphology Characterization with Optical Extinction Spectroscopy</p>
                            </CustomLink>
                            <CustomLink to='/polarized-light-scattering' className={styles.footerLinks}>
                                <p>Polarized Light Scattering</p>
                            </CustomLink>
                            <CustomLink to='/sedimentation-based-particle-sizing' className={styles.footerLinks}>
                                <p>Sedimentation based Particle Sizing</p>
                            </CustomLink>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.separator}/>
                    <p>Copyright © 2024 analyticalscientificfoundations. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;