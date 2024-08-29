import React from 'react';
import './page.css';
import { Link } from 'react-router-dom';
import "styled-components";
import { Button } from '../../../Components/Button/Button';
import Separator from '../../../Components/Orange-separator/separator';

function Polarized() {
    return (
        <div className='Polarized'>
            <div className='polarized-container'>
                <Link to='/optical-instrumentation' style={{textDecoration:"none"}}>
                    <p className='orange-text'>Instrumentation</p>
                </Link>
                <h1>Polarized Light Scattering</h1>
                <img src={`${process.env.PUBLIC_URL}/images/LightScattering.png`} alt='main' width='100%' height="100%"/>
                <div className='text-after-main'>
                    <p>
                        The Triple-S technology was invented by Dr. Sivakumar Manickavasagam to measure the size, shape and structure of nanoparticles dispersed in an optically transparent medium. This instrument uses angular light scattering at different polarization states for morphology characterization. If the particles in the suspension are spherical, Triple-S measures the size distribution and for cylinders, ellipsoids, and platelets it measures the size and aspect ratio distribution. 
                    </p>
                </div>
                <Separator />
                <div className='machine-image'>
                    <img src={`${process.env.PUBLIC_URL}/images/Machine.png`} alt='machine' width='100%' height='100%' />
                    <p>
                        Triple-S for Morphology Characterization of Non-spherical Nanoparticles.
                    </p>
                </div>
                <div className='text-after-machine'>
                    <p>
                        We measured the sizes and shapes of several types of particles using Triple-S including polymers, carbon black, and ceramic particles. One example is the characterization of hematite nanoparticles synthesized by aging aqueous ferric chloride and ferric nitrate at 100°C. Samples extracted from the reactor were analyzed using SEM and Triple-S. The SEM image of a suspension of these particles shown in the figure below suggests that the particles have cross sectional diameters in the range of 50 to 300 nm and aspect ratios between 1 and 6.
                    </p>
                </div>
                <Separator />
                <div className='hematite-image'>
                    <img src={`${process.env.PUBLIC_URL}/images/HematiteNano.png`} alt='hematite' width='100%' height='100%' />
                    <p>
                        SEM images of Hematite nanoparticles.
                    </p>
                </div>
                <div className='text-after-hematite'>
                    <p>
                        The scattered light intensity versus scattering angle and polarization state data obtained with Triple-S instrument were analyzed using our proprietary algorithms to determine the size and aspect ratio distribution of the nano-hematite particles in the above suspension. 
                    </p>
                    <p>
                        Our measurements yielded cross sectional diameters in the range of 50 to 550 nm with a median size of 150 nm, and aspect ratios between 1 and 7. The excellent agreement between the results obtained with Triple-S (that is low-cost, non-destructive, in-line, and fast) and SEM images (that require expensive instruments, extensive sample preparation and long measurement time) clearly demonstrates the ability of our polarized light scattering instrument to measure the size and aspect ratio distribution. 
                    </p>
                </div>
                <Separator />
                <div className='polarizedgraph'>
                    <img src={`${process.env.PUBLIC_URL}/images/3Ddistributionofnano.png`} alt='3d-graph' width='100%' height='100%' />
                    <p>
                        Size and aspect ratio distribution of hematite nanoparticles obtained using Triple-S.
                    </p>
                </div>
                <div className='polarized-others'>
                    <h1>Other Topics</h1>
                    <div className='polarized-others-images'>
                        <div className='polarized-others-images-left'>
                            <div className='polarized-others-images-left-top'>
                                <div className='polarized-others-images-left-top-text'>
                                    <h1>Aerosol Concentration</h1>
                                </div>
                                <div className='polarized-others-images-left-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='concentration'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className='polarized-others-images-left-bottom'>
                                <div className='polarized-others-images-left-bottom-text'>
                                    <h1>Morphology Characterization with Optical Extinction Spectroscopy</h1>
                                </div>
                                <div className='polarized-others-images-left-bottom-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='Morphology'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='polarized-others-images-right'>
                            <div className='polarized-others-images-right-top'>
                                <div className='polarized-others-images-right-top-text'>
                                    <h1>Optical Instrumentation</h1>
                                </div>
                                <div className='polarized-others-images-right-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='Optical'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className='polarized-others-images-right-bottom'>
                                <div className='polarized-others-images-right-bottom-text'>
                                    <h1>Sedimentation based particle sizing</h1>
                                </div>
                                <div className='polarized-others-images-right-bottom-button'>
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

export default Polarized
