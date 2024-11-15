import React from 'react';
import { Button } from '../../../../Components/Button/Button';
import styles from './page.module.css';
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import Separator from '../../../../Components/Orange-separator/separator';

function Innovation() {
    return (
        <div className={styles.innovation}>
            <div className={styles.innovationCharacterization}>
                <h1>
                    Innovative Aerosol Capture and Characterization Techniques
                </h1>
                <p>
                    Since it does not use any media, this technology collects the aerosol particles in a pure form which minimizes cross contamination. The capture efficiency is a strong function of the <CustomLink to='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field'>electrodynamic field strength near the conducting wires</CustomLink> of our aerosol capture system that we have characterized computationally.
                </p>
                <p>
                    Understanding the key characteristics of the aerosol clouds such as particle mass loading, particle size distribution and particle composition is critical to learn about the origin of the aerosol particle as well as to device methods to combat their effect. We have developed a number of techniques to characterize the aerosol particles and clouds including a <CustomLink to='/aerosol-concentration'>calibrated light extinction technique</CustomLink> to measure the temporal concentration of dust particles in aerosol clouds.
                </p>
            </div>
            <Separator />
            <img src='./images/CaptureSmallParticles.png' alt='Capturedown' width='100%' height="100%"/>
            <div className={styles.innovationOthers}>
                <h1>Other Topics</h1>
                <div className={styles.innovationOthersImages}>
                    <div className={styles.innovationOthersImagesLeft}>
                        <div className={styles.innovationOthersImagesLeftTop}>
                            <div className={styles.innovationOthersImagesLeftTopText}>
                                <h1>Dust Mitigation</h1>
                            </div>
                            <div className={styles.innovationOthersImagesLeftTopButton}>
                                <Button buttonSize='btnLarge'
                                        buttonStyle='btnBattery'
                                        buttonType='dustMitigation'>
                                            View
                                </Button>
                            </div>
                        </div>
                        <div className={styles.innovationOthersImagesLeftBottom}>
                            <div className={styles.innovationOthersImagesLeftBottomText}>
                                <h1>
                                    Numerical Simulation of Electrodynamic Field
                                </h1>
                            </div>
                            <div className={styles.innovationOthersImagesLeftBottomButton}>
                                <Button buttonSize='btnLarge'
                                        buttonStyle='btnBattery'
                                        buttonType='electro'>
                                            View
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.innovationOthersImagesRight}>
                        <div className={styles.innovationOthersImagesRightTop}>
                            <div className={styles.innovationOthersImagesRightTopText}>
                                <h1>
                                    Aerosol Concentration
                                </h1>
                            </div>
                            <div className={styles.innovationOthersImagesRightTopButton}>
                                <Button buttonSize='btnLarge'
                                        buttonStyle='btnBattery'
                                        buttonType='concentration'>
                                            View
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Innovation;