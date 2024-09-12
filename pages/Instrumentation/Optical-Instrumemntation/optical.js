import React from 'react';
import styles from './optical.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import styled from 'styled-components';;
import { Button } from '../../../Components/Button/Button';

function Optical() {
    return (
        <div className={styles.optical}>
            <div className={styles.opticalContainer}>
                <div className={styles.opticalInstrumentation}>
                <CustomLink to='/optical-instrumentation' style={{textDecoration:"none"}}>
                    <p className={styles.orangeText}>Instrumentation</p>
                </CustomLink>
                <h1>Optical Instrumentation</h1>
                <img src='/images/Microscope.png' alt='microscope' width='100%' height="100%"/>
                    <div className={styles.opticalParagraph}>
                        <p>
                            We have developed several one-of-a-kind optical instruments to measure the morphological characteristics of well dispersed as well as agglomerated nanoparticles, and the concentration of aerosol clouds. Our product offerings include these instrumentation as well as technology licenses. Our service offerings include measurements with these instruments for client furnished samples and customization of instruments and measurements to the conditions of interest to the client. A partial list of our instrumentation technologies include:
                        </p>
                        <ul>
                            <li>Wavelength resolved optical extinction spectrometer for morphology characterization of well dispersed and agglomerated nanoparticles</li>
                            <li>Polarized light scattering instrument to measure the size, shape, and structure of nanoparticles</li>
                            <li>Particle sizing through optical extinction measurements on particle suspensions in optically transparent media</li>
                            <li>Calibrated optical extinction based measurement of aerosolized dust concentration</li>
                        </ul>
                    </div>
                    <div className={styles.opticalOthers}>
                        <h1>Other Topics</h1>
                        <div className={styles.opticalOthersImages}>
                            <div className={styles.opticalOthersImagesLeft}>
                                <div className={styles.opticalOthersImagesLeftTop}>
                                    <div className={styles.opticalOthersImagesLeftTopText}>
                                        <h1>Aerosol Concentration</h1>
                                    </div>
                                    <div className={styles.opticalOthersImagesLeftTopButton}>
                                        <Button buttonSize='btnLarge'
                                                buttonStyle='btnBattery'
                                                buttonType='concentration'>
                                                    View
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles.opticalOthersImagesLeftBottom}>
                                    <div className={styles.opticalOthersImagesLeftBottomText}>
                                        <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                                    </div>
                                    <div className={styles.opticalOthersImagesLeftBottomButton}>
                                        <Button buttonSize='btnLarge'
                                                buttonStyle='btnBattery'
                                                buttonType='Morphology'>
                                                    View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.opticalOthersImagesRight}>
                                <div className={styles.opticalOthersImagesRightTop}>
                                    <div className={styles.opticalOthersImagesRightTopText}>
                                        <h1>Polarized Light Scattering</h1>
                                    </div>
                                    <div className={styles.opticalOthersImagesRightTopButton}>
                                        <Button buttonSize='btnLarge'
                                                buttonStyle='btnBattery'
                                                buttonType='Polarized'>
                                                    View
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles.opticalOthersImagesRightBottom}>
                                    <div className={styles.opticalOthersImagesRightBottomText}>
                                        <h1>Sedimentation based particle sizing</h1>
                                    </div>
                                    <div className={styles.opticalOthersImagesRightBottomButton}>
                                        <Button buttonSize='btnLarge'
                                                buttonStyle='btnBattery'
                                                buttonType='SPS'>
                                                    View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Optical;