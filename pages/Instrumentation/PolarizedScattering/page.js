import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../src/Components/CustomLink/CustomeAtt';
import "styled-components";
import { Button } from '../../../src/Components/Button/Button';
import Separator from '../../../src/Components/Orange-separator/separator';

function Polarized() {
    return (
        <div className={styles.polarized}>
            <div className={styles.polarizedContainer}>
                <CustomLink to='/optical-instrumentation' style={{textDecoration:"none"}}>
                    <p className={styles.orangeText}>Instrumentation</p>
                </CustomLink>
                <h1>Polarized Light Scattering</h1>
                <img src='/images/LightScattering.png' alt='main' width='100%' height="100%"/>
                <div className={styles.textAfterMain}>
                    <p>
                        The Triple-S technology was invented by Dr. Sivakumar Manickavasagam to measure the size, shape and structure of nanoparticles dispersed in an optically transparent medium. This instrument uses angular light scattering at different polarization states for morphology characterization. If the particles in the suspension are spherical, Triple-S measures the size distribution and for cylinders, ellipsoids, and platelets it measures the size and aspect ratio distribution. 
                    </p>
                </div>
                <Separator />
                <div className={styles.machineImage}>
                    <img src='/images/Machine.png' alt='machine' width='100%' height='100%' />
                    <p>
                        Triple-S for Morphology Characterization of Non-spherical Nanoparticles.
                    </p>
                </div>
                <div className={styles.textAfterMachine}>
                    <p>
                        We measured the sizes and shapes of several types of particles using Triple-S including polymers, carbon black, and ceramic particles. One example is the characterization of hematite nanoparticles synthesized by aging aqueous ferric chloride and ferric nitrate at 100°C. Samples extracted from the reactor were analyzed using SEM and Triple-S. The SEM image of a suspension of these particles shown in the figure below suggests that the particles have cross sectional diameters in the range of 50 to 300 nm and aspect ratios between 1 and 6.
                    </p>
                </div>
                <Separator />
                <div className={styles.hematiteImage}>
                    <img src='/images/HematiteNano.png' alt='hematite' width='100%' height='100%' />
                    <p>
                        SEM images of Hematite nanoparticles.
                    </p>
                </div>
                <div className={styles.textAfterHematite}>
                    <p>
                        The scattered light intensity versus scattering angle and polarization state data obtained with Triple-S instrument were analyzed using our proprietary algorithms to determine the size and aspect ratio distribution of the nano-hematite particles in the above suspension. 
                    </p>
                    <p>
                        Our measurements yielded cross sectional diameters in the range of 50 to 550 nm with a median size of 150 nm, and aspect ratios between 1 and 7. The excellent agreement between the results obtained with Triple-S (that is low-cost, non-destructive, in-line, and fast) and SEM images (that require expensive instruments, extensive sample preparation and long measurement time) clearly demonstrates the ability of our polarized light scattering instrument to measure the size and aspect ratio distribution. 
                    </p>
                </div>
                <Separator />
                <div className={styles.polarizedGraph}>
                    <img src='/images/3Ddistributionofnano.png' alt='3d-graph' width='100%' height='100%' />
                    <p>
                        Size and aspect ratio distribution of hematite nanoparticles obtained using Triple-S.
                    </p>
                </div>
                <div className={styles.polarizedOthers}>
                    <h1>Other Topics</h1>
                    <div className={styles.polarizedOthersImages}>
                        <div className={styles.polarizedOthersImagesLeft}>
                            <div className={styles.polarizedOthersImagesLeftTop}>
                                <div className={styles.polarizedOthersImagesLeftTopText}>
                                    <h1>Aerosol Concentration</h1>
                                </div>
                                <div className={styles.polarizedOthersImagesLeftTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='concentration'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.polarizedOthersImagesLeftBottom}>
                                <div className={styles.polarizedOthersImagesLeftBottomText}>
                                    <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                                </div>
                                <div className={styles.polarizedOthersImagesLeftBottomButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='Morphology'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.polarizedOthersImagesRight}>
                            <div className={styles.polarizedOthersImagesRightTop}>
                                <div className={styles.polarizedOthersImagesRightTopText}>
                                    <h1>Optical Instrumentation</h1>
                                </div>
                                <div className={styles.polarizedOthersImagesRightTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='Optical'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.polarizedOthersImagesRightBottom}>
                                <div className={styles.polarizedOthersImagesRightBottomText}>
                                    <h1>Sedimentation based particle sizing</h1>
                                </div>
                                <div className={styles.polarizedOthersImagesRightBottomButton}>
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
    )
}

export default Polarized;