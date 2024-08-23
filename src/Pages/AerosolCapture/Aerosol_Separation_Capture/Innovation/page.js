import React from 'react';
import { Button } from '../../../../Components/Button/Button';
import './page.css';
import Separator from '../../../../Components/Orange-separator/separator';

function Innovation() {
    return (
        <div className="innovation">
            <div className='innovation-characterization'>
                <h1>
                    Innovative Aerosol Capture and Characterization Techniques
                </h1>
                <p>
                    Since it does not use any media, this technology collects the aerosol particles in a pure form which minimizes cross contamination. The capture efficiency is a strong function of the <a href='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field'>electrodynamic field strength near the conducting wires</a> of our aerosol capture system that we have characterized computationally.
                </p>
                <p>
                    Understanding the key characteristics of the aerosol clouds such as particle mass loading, particle size distribution and particle composition is critical to learn about the origin of the aerosol particle as well as to device methods to combat their effect. We have developed a number of techniques to characterize the aerosol particles and clouds including a <a href='/aerosol-concentration'>calibrated light extinction technique</a> to measure the temporal concentration of dust particles in aerosol clouds.
                </p>
            </div>
            <Separator />
            <img src={`${process.env.PUBLIC_URL}/images/CaptureSmallParticles.png`} alt='Capturedown' width='100%' height="100%"/>
            <div className='innovation-others'>
                <h1>Other Topics</h1>
                <div className='innovation-others-images'>
                    <div className='innovation-others-images-left'>
                        <div className='innovation-others-images-left-top'>
                            <div className='innovation-others-images-left-top-text'>
                                <h1>Dust Mitigation</h1>
                            </div>
                            <div className='innovation-others-images-left-top-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
                                        buttonType='dustMitigation'>
                                            View
                                </Button>
                            </div>
                        </div>
                        <div className='innovation-others-images-left-bottom'>
                            <div className='innovation-others-images-left-bottom-text'>
                                <h1>
                                    Numerical Simulation of Electrodynamic Field
                                </h1>
                            </div>
                            <div className='innovation-others-images-left-bottom-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
                                        buttonType='electro'>
                                            View
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='innovation-others-images-right'>
                        <div className='innovation-others-images-right-top'>
                            <div className='innovation-others-images-right-top-text'>
                                <h1>
                                    Aerosol Concentration
                                </h1>
                            </div>
                            <div className='innovation-others-images-right-top-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
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

export default Innovation
