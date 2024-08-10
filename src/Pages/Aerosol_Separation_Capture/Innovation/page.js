import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import './page.css';

function Innovation() {
  return (
    <>
        <img src={`${process.env.PUBLIC_URL}/images/floating_particles.png`} alt="particles" width="100%" height="100%"/>
        <div className="innovation">
            <div className='innovation_container'>
                <div className='container_heading'>
                    <h1>Innovative Aerosol Capture and Characterization Techniques</h1>
                </div>
                <div className='innovation-separator'/>
                <div className='innovation-paragraph'>
                    <p>Since it does not use any media, this technology collects the aerosol particles in a pure form which minimizes cross contamination. The capture efficiency is a strong function of the <a href='/battery-thermal-runaway-numerical-simulation-of-electrodynamic-field'>electrodynamic field strength near the conducting wires</a> of our aerosol capture system that we have characterized computationally.</p>
                    <p>Understanding the key characteristics of the aerosol clouds such as particle mass loading, particle size distribution and particle composition is critical to learn about the origin of the aerosol particle as well as to device methods to combat their effect. We have developed a number of techniques to characterize the aerosol particles and clouds including a <a href='/aerosol-concentration'>calibrated light extinction technique</a> to measure the temporal concentration of dust particles in aerosol clouds.</p>                    
                </div>
                <div className='innovation_picture'>
                    <div className='innovation_picture_left'>
                        <div className='innovation_picture_left_dust'>
                            <div className='innovation_picture_left_dust_heading'>
                                <h2>Dust Mitigation</h2>
                            </div>
                            <div className='innovation_picture_left_dust_button'>
                                <Button buttonSize="btn--large"
                                        buttonStyle="btn--aerosol"
                                        buttonType="dustMitigation">
                                            View
                                </Button>
                            </div>
                            
                        </div>
                        <div className='innovation_picture_left_simulation'>
                            <div className='innovation_picture_left_simulation_heading'>
                                <h2>Numerical Simulation of Electrodynamic Field</h2>
                            </div>
                            <div className='innovation_picture_left_simulation_button'>
                                <Button buttonSize="btn--large"
                                        buttonStyle="btn--aerosol"
                                        buttonType="fields">
                                            View
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='inovation_picture_right'>
                        <div className='innovation_picture_right_heading'>
                            <h2>Aerosol Concentration</h2>
                        </div>
                        <div className='innovation_picture_left_inn_button'>
                                <Button buttonSize="btn--large"
                                        buttonStyle="btn--aerosol"
                                        buttonType="concentration">
                                            View
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Innovation
