import React from 'react';
import './page.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import "styled-components"
import Separator from '../../../Components/Orange-separator/separator';
import { Button } from '../../../Components/Button/Button';

function AerosolConcentration() {
    const linkStyle = { textDecoration: "none"};

    return (
        <div className='concentration'>
            <div className='concentration-container'>
                <CustomLink to='/aerocapture' style= {linkStyle}>
                    <p className='orange-text'>Aerosol Capture</p>
                </CustomLink>
                <h1>Aerosol Concentration</h1>
                <img src={`${process.env.PUBLIC_URL}/images/ConcentrationMain.png`} alt='main' width='100%' height="100%"/>
                <div className='text-after-big-concen'>
                    <p>
                        This calibrated method measures the mass loading of particles through temporal single wavelength optical extinction measurements across an aerosol cloud. It uses a specially designed optical arrangement to illuminate a significant portion of the aerosol cloud. Sample measurements of dust concentration versus time obtained with this technique are shown in the figure below. The dust concentration in the cloud changed significantly with time in this test reaching a maximum of 8.5 mg/m3 at 42 s. The sensitivity of this measurement can be adjusted to cover several over a few orders of magnitude by controlling the detection volume of the aerosol cloud illuminated by the light beam.
                    </p>
                </div>
                <Separator />
                <div className='concentration-graph'>
                    <img src={`${process.env.PUBLIC_URL}/images/ConcentrationGraph.png`} alt='graph' width='100%' height="100%"/>
                    <p>
                        Dust concentration in an aerosol cloud measured using calibrated optical extinction.
                    </p>
                </div>
                <div className='concentration-text'>
                    <p>
                        The above system can be modified to also yield the size distribution of the aerosol particles in the cloud.
                    </p>
                </div>
                <div className='concentration-others'>
                    <h1>Other Topics</h1>
                    <div className='concentration-others-images'>
                        <div className='concentration-others-images-left'>
                            <div className='concentration-others-images-left-top'>
                                <div className='concentration-others-images-left-top-text'>
                                    <h1>Aerosol Separation and Capture</h1>
                                </div>
                                <div className='concentration-others-images-left-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='aerosol'>
                                                View
                                    </Button>
                                </div>
                            </div>
                            <div className='concentration-others-images-left-bottom'>
                                <div className='concentration-others-images-left-bottom-text'>
                                    <h1>Numerical Simulation of Electrodynamic Field</h1>
                                </div>
                                <div className='concentration-others-images-left-bottom-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
                                            buttonType='electro'>
                                                View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='concentration-others-images-right'>
                            <div className='concentration-others-images-right-top'>
                                <div className='concentration-others-images-right-top-text'>
                                    <h1>Dust Mitigation</h1>
                                </div>
                                <div className='concentration-others-images-right-top-button'>
                                    <Button buttonSize='btn--large'
                                            buttonStyle='btn--battery'
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

export default AerosolConcentration
