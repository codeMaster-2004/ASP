import React from 'react';
import './page.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import "styled-components";
import Separator from '../../../Components/Orange-separator/separator';
import { Button } from '../../../Components/Button/Button';

function Sedimentation() {
    return (
        <div className="sedimentation">
            <div className='sedimentation-container'>
                <CustomLink to='/optical-instrumentation' style={{textDecoration:"none"}}>
                    <p className='orange-text'>Instrumentation</p>
                </CustomLink>
                
                <h1>Sedimentation based Particle Sizing</h1>
                <img src={`${process.env.PUBLIC_URL}/images/sedimentation.png`} alt='main' width='100%' height="100%"/>
                <div className='sedimentation-text'>
                    <p>
                        This technique combines temporal optical extinction measurements with gravitational sedimentation analysis to determine the size distribution of particles dispersed in an optically non-absorbing medium. We used a laser beam to illuminate the particle suspension and collected the transmitted light versus time data using a power meter. We increased the size of the laser beam by passing it through an arrangement of cylindrical lenses. 
                    </p>
                    <p>
                        We calculated the particle sizes for different gravitational sedimentation timescales using fluid mechanics and combined these with the measured optical extinction data to determine the particle size distribution in the sample. The particle size distributions from two separate measurements on a suspension of a commercial powder in water are presented in the figure below.
                    </p>
                </div>
                <Separator />
                <div className='sedimentation-images'>
                    <img src={`${process.env.PUBLIC_URL}/images/particlediamteregraph.png`} alt='graph' width='100%' height="100%"/>
                    <p>
                        Particle size measured by combining optical extinction measurements with gravitational sedimentation analysis.
                    </p>
                </div>
                <div className='sedimentation-others'>
                    <h1>Other Topics</h1>
                    <div className='sedimentation-others-images'>
                        <div className='sedimentation-others-images-left'>
                            <div className='sedimentation-others-images-left-top'>
                                <div className='sedimentation-others-images-left-top-text'>
                                    <h1>Aerosol Concentration</h1>
                                </div>
                                <div className='sedimentation-others-images-left-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='concentration'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className='sedimentation-others-images-left-bottom'>
                                <div className='sedimentation-others-images-left-bottom-text'>
                                    <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                                </div>
                                <div className='sedimentation-others-images-left-bottom-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='Morphology'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='sedimentation-others-images-right'>
                            <div className='sedimentation-others-images-right-top'>
                                <div className='sedimentation-others-images-right-top-text'>
                                    <h1>Optical Instrumentation</h1>
                                </div>
                                <div className='sedimentation-others-images-right-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='Optical'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className='sedimentation-others-images-right-bottom'>
                                <div className='sedimentation-others-images-right-bottom-text'>
                                    <h1>Polarized Light Scattering</h1>
                                </div>
                                <div className='sedimentation-others-images-right-bottom-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
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

export default Sedimentation