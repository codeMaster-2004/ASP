import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import styled from 'styled-components';
import Separator from '../../../Components/Orange-separator/separator';
import { Button } from '../../../Components/Button/Button';

function AerosolConcentration() {
    const linkStyle = { textDecoration: "none" };

    return (
        <div className={styles.concentration}>
            <div className={styles.concentrationContainer}>
                <CustomLink to='/aerocapture' style={linkStyle}>
                    <p className={styles.orangeText}>Aerosol Capture</p>
                </CustomLink>
                <h1>Aerosol Concentration</h1>
                <img src='/images/ConcentrationMain.png' alt='main' width='100%' height="100%"/>
                <div className={styles.textAfterBigConcen}>
                    <p>
                        This calibrated method measures the mass loading of particles through temporal single wavelength optical extinction measurements across an aerosol cloud. It uses a specially designed optical arrangement to illuminate a significant portion of the aerosol cloud. Sample measurements of dust concentration versus time obtained with this technique are shown in the figure below. The dust concentration in the cloud changed significantly with time in this test reaching a maximum of 8.5 mg/m3 at 42 s. The sensitivity of this measurement can be adjusted to cover several over a few orders of magnitude by controlling the detection volume of the aerosol cloud illuminated by the light beam.
                    </p>
                </div>
                <Separator />
                <div className={styles.concentrationGraph}>
                    <img src='/images/ConcentrationGraph.png' alt='graph' width='100%' height="100%"/>
                    <p>
                        Dust concentration in an aerosol cloud measured using calibrated optical extinction.
                    </p>
                </div>
                <div className={styles.concentrationText}>
                    <p>
                        The above system can be modified to also yield the size distribution of the aerosol particles in the cloud.
                    </p>
                </div>
                <div className={styles.concentrationOthers}>
                    <h1>Other Topics</h1>
                    <div className={styles.concentrationOthersImages}>
                        <div className={styles.concentrationOthersImagesLeft}>
                            <div className={styles.concentrationOthersImagesLeftTop}>
                                <div className={styles.concentrationOthersImagesLeftTopText}>
                                    <h1>Aerosol Separation and Capture</h1>
                                </div>
                                <div className={styles.concentrationOthersImagesLeftTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='aerosol'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.concentrationOthersImagesLeftBottom}>
                                <div className={styles.concentrationOthersImagesLeftBottomText}>
                                    <h1>Numerical Simulation of Electrodynamic Field</h1>
                                </div>
                                <div className={styles.concentrationOthersImagesLeftBottomButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='electro'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.concentrationOthersImagesRight}>
                            <div className={styles.concentrationOthersImagesRightTop}>
                                <div className={styles.concentrationOthersImagesRightTopText}>
                                    <h1>Dust Mitigation</h1>
                                </div>
                                <div className={styles.concentrationOthersImagesRightTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='dustMitigation'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AerosolConcentration;