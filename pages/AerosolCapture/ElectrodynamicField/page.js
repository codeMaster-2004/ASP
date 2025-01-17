import React from 'react';
import styled from 'styled-components';
import Separator from '../../../Components/Orange-separator/separator';
import styles from './page.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import { Button } from '../../../Components/Button/Button';

function Electrodynamic() {
    return (
        <div className={styles.electrodynamic}>
            <div className={styles.electrodynamicContainer}>
                <CustomLink to='/aerocapture' style={{textDecoration: "none"}}>
                    <p className={styles.orangeText}>
                        Aerosol Capture
                    </p>
                </CustomLink>
                <h1>
                    Numerical Simulation of Electrodynamic Field
                </h1>
                <img src='./images/electromain.png' alt='main' width='100%' height="100%"/>
                <div className={styles.textAfterBigField}>
                    <p>
                        The effectiveness of our electrodynamic dust mitigation and aerosol capture devices depend strongly on the strength of the imposed electrical field near the conducting surface. We examined this through a combination of numerical computations and qualitative analysis. 
                    </p>
                    <p>
                        Dr. Keith Forward, Interim Associate Vice President of California State Polytechnic Institute and an expert in electrostatics, performed numerical computations with the COMSOL package to determine the electrical fields near the conductive wires that comprise our dust mitigation system. 
                    </p>
                </div>
                <div className={styles.supplySystem}>
                    <h1>
                        Electric Field Distribution in a High Voltage AC Power Supply System
                    </h1>
                    <p>
                        Our device consists of two conductive surfaces out of which one (represented by the filled circles on the left side of figure below) is connected to a high voltage AC power supply and the other (represented by the open circles on the right side) is connected to ground. For an applied voltage of 1000 VAC, we calculated the field strength near the wires. The logarithm (base 10) of electric field strength obtained from COMSOL simulations is plotted versus radial (x-axis) and axial (y-axis) coordinates in the figure below. The field strength between the inner and outer surfaces is extremely high (106 to 107 V/m), as expected. The field strength decreases away from the conductive surfaces as we move towards the left of the surface connected to high voltage power supply. 
                    </p>
                </div>
                <Separator />
                <div className={styles.fieldMitigationGraph}>
                    <img src='./images/logarithmicfieldstrength.png' alt='logfields' width='100%' height="100%"/>
                    <p>
                        Computed logarithmic (base 10) electrical field strength in the vicinity of inner and outer conductive wires near the ASP dust mitigation system.
                    </p>
                </div>
                <div className={styles.fieldAfterText}>
                    <p>
                        A strong electrical field with a strength of 1.6×105 V/cm exists immediately to the left of the left surface connected to high voltage. The field strength decreases from 1.6×105 V/cm right at the left surface to ~5×103 V/cm about 1 mm away from that surface and continues to decrease as we move further away. The above computational results clearly demonstrate that a finite electrical field strength exists near the conductive surfaces of our dust mitigation system. The concentrated electrical field in the vicinity of the conducting surface is adequate to affect the trajectory of the charged aerosol particles. The time varying electrodynamic field prevents the fine particles from punching through the gaps between the conductive wires. 
                    </p>
                </div>
                <div className={styles.electroOthers}>
                    <h1>Other Topics</h1>
                    <div className={styles.electroOthersImages}>
                        <div className={styles.electroOthersImagesLeft}>
                            <div className={styles.electroOthersImagesLeftTop}>
                                <div className={styles.electroOthersImagesLeftTopText}>
                                    <h1>Aerosol Separation and Capture</h1>
                                </div>
                                <div className={styles.electroOthersImagesLeftTopButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='aerosol'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.electroOthersImagesLeftBottom}>
                                <div className={styles.electroOthersImagesLeftBottomText}>
                                    <h1>Dust Mitigation</h1>
                                </div>
                                <div className={styles.electroOthersImagesLeftBottomButton}>
                                    <Button buttonSize='btnLarge'
                                            buttonStyle='btnBattery'
                                            buttonType='dustMitigation'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.electroOthersImagesRight}>
                            <div className={styles.electroOthersImagesRightTop}>
                                <div className={styles.electroOthersImagesRightTopText}>
                                    <h1>Aerosol Concentration</h1>
                                </div>
                                <div className={styles.electroOthersImagesRightTopButton}>
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
        </div>
    )
}

export default Electrodynamic;