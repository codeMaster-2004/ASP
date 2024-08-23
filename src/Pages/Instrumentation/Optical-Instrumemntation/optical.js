import React from 'react';
import './optical.css';
import { Button } from '../../../Components/Button/Button';

function Optical() {
  return (
    <div className="optical">
        <div className='Optical-Instrumentation'>
            <p>Instrumentation</p>
            <h1>Optical Instrumentation</h1>
            <img src={`${process.env.PUBLIC_URL}/images/Microscope.png`} alt='microscope' width='100%' height="100%"/>
            <div className='optical-paragraph'>
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
            <div className='optical-others'>
                <h1>Other Topics</h1>
                <div className='optical-others-images'>
                    <div className='optical-others-images-left'>
                        <div className='optical-others-images-left-top'>
                            <div className='optical-others-images-left-top-text'>
                                <h1>Aerosol Concentration</h1>
                            </div>
                            <div className='optical-others-images-left-top-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
                                        buttonType='concentration'>
                                            View
                                </Button>
                            </div>
                        </div>
                        <div className='optical-others-images-left-bottom'>
                            <div className='optical-others-images-left-bottom-text'>
                                <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                            </div>
                            <div className='optical-others-images-left-bottom-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
                                        buttonType='Morphology'>
                                            View
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='optical-others-images-right'>
                        <div className='optical-others-images-right-top'>
                            <div className='optical-others-images-right-top-text'>
                                <h1>Polarized Light Scattering</h1>
                            </div>
                            <div className='optical-others-images-right-top-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
                                        buttonType='Polarized'>
                                            View
                                </Button>
                            </div>
                        </div>
                        <div className='optical-others-images-right-bottom'>
                            <div className='optical-others-images-right-bottom-text'>
                                <h1>Sedimentation based particle sizing</h1>
                            </div>
                            <div className='optical-others-images-right-bottom-button'>
                                <Button buttonSize='btn--large'
                                        buttonStyle='btn--battery'
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

export default Optical
