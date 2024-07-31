import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

function People() {
    return (
        <div className='people'>
            <div className='people-container'>
                <div className='vd'>
                    <img src={`${process.env.PUBLIC_URL}/images/vd.png`} alt='Vijay Devarakonda' width='574px' height='549px'/>
                    <div className='vd-desc'>
                        <div className='vd-desc-container'>
                            <div className='vd-desc-heading'>
                                <div className='vd-title'>
                                    <h1>Dr. Vijay V. Devarakonda</h1>
                                    <div className='founder-button'>
                                        <p>Founder & President</p>
                                    </div>
                                </div>
                            </div>
                            <div className='vd-desc-intro'>
                                <p>Dr. Devarakonda obtained his B. Tech. degree from the Indian Institute of Technology, Bombay and a Ph.D. from the University of Kentucky, both in Chemical Engineering. Over the last 25 years, he led several industry and government funded projects focused on safety and aerosol science. </p> 
                                <p>Operating at the cusp of chemical, mechanical, aerospace, civil and bio engineering, Vijay developed technologies related to the safety of batteries, munitions, fuel systems, and drinking water systems. He has published ~85 journal articles, government reports and conference papers. </p> 
                                <p>Here are some examples of Vijay’s current research: </p>
                                <ul class="custom-list">
                                    <li>Dust Mitigation and Aerosol Capture</li>
                                    <li>Battery Thermal Runway Detection and Prevention</li>
                                    <li>Hydrogen Safety</li>
                                    <li>Chemical and Biological Agent Safety</li>
                                    <li>Battery Thermal Runway Detection and Prevention</li>
                                    <li>Fine Particle Diagnostics</li>
                                </ul>
                                <div className='vd-desc-logos'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='michael'>
                    <img src={`${process.env.PUBLIC_URL}/images/Thella-ankul.png`} alt='michael' width='573.497px' height='691px'/>
                </div>
                <div className='sivakumar'>
                    <img src={`${process.env.PUBLIC_URL}/images/siva-ankul.png`} alt='sivakumar' width='571.493px' height='359px' /> 
                </div>
                <div className='mitchell'>

                </div>
            </div>
        </div>
    )
}

export default People;