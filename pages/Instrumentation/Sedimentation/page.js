import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import styled from 'styled-components';;
import Separator from '../../../Components/Orange-separator/separator';
import { Button } from '../../../Components/Button/Button';

function Sedimentation() {
    return (
        <div className={styles.sedimentation}>
            <div className={styles.sedimentationContainer}>
                <CustomLink to='/ASP/optical-instrumentation' style={{textDecoration:"none"}}>
                    <p className={styles.orangeText}>Instrumentation</p>
                </CustomLink>
                
                <h1>Sedimentation based Particle Sizing</h1>
                <img src='/ASP/images/sedimentation.png' alt='main' width='100%' height="100%"/>
                <div className={styles.sedimentationText}>
                    <p>
                        This technique combines temporal optical extinction measurements with gravitational sedimentation analysis to determine the size distribution of particles dispersed in an optically non-absorbing medium. We used a laser beam to illuminate the particle suspension and collected the transmitted light versus time data using a power meter. We increased the size of the laser beam by passing it through an arrangement of cylindrical lenses. 
                    </p>
                    <p>
                        We calculated the particle sizes for different gravitational sedimentation timescales using fluid mechanics and combined these with the measured optical extinction data to determine the particle size distribution in the sample. The particle size distributions from two separate measurements on a suspension of a commercial powder in water are presented in the figure below.
                    </p>
                </div>
                <Separator />
                <div className={styles.sedimentationImages}>
                    <img src='/ASP/images/particlediamteregraph.png' alt='graph' width='100%' height="100%"/>
                    <p>
                        Particle size measured by combining optical extinction measurements with gravitational sedimentation analysis.
                    </p>
                </div>
                <div className={styles.sedimentationOthers}>
                    <h1>Other Topics</h1>
                    <div className={styles.sedimentationOthersImages}>
                        <div className={styles.sedimentationOthersImagesLeft}>
                            <div className={styles.sedimentationOthersImagesLeftTop}>
                                <div className={styles.sedimentationOthersImagesLeftTopText}>
                                    <h1>Aerosol Concentration</h1>
                                </div>
                                <div className={styles.sedimentationOthersImagesLeftTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='concentration'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.sedimentationOthersImagesLeftBottom}>
                                <div className={styles.sedimentationOthersImagesLeftBottomText}>
                                    <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                                </div>
                                <div className={styles.sedimentationOthersImagesLeftBottomButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='Morphology'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sedimentationOthersImagesRight}>
                            <div className={styles.sedimentationOthersImagesRightTop}>
                                <div className={styles.sedimentationOthersImagesRightTopText}>
                                    <h1>Optical Instrumentation</h1>
                                </div>
                                <div className={styles.sedimentationOthersImagesRightTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='Optical'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.sedimentationOthersImagesRightBottom}>
                                <div className={styles.sedimentationOthersImagesRightBottomText}>
                                    <h1>Polarized Light Scattering</h1>
                                </div>
                                <div className={styles.sedimentationOthersImagesRightBottomButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='Polarized'>
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

export default Sedimentation;