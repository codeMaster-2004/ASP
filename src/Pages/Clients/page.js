import React from 'react';
import './page.css'; 
import { Button } from '../../Components/Button/Button';

function Clients() {
    return (
        <div className='Clients'>
            <div className='Clients-container'>
                <a href='/ASP'>
                    Home
                </a>
                <h1>
                    Our Clients
                </h1>
                <div className="client-logos">
                    <div className='client-logos-top'>
                        <img src={`${process.env.PUBLIC_URL}/images/DoD.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/USAF.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/USNavy.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/USArmy.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/USDTRA.png`} alt='main' width='17%' height="100%"/>
                    </div>
                    <div className='client-logos-bottom'>
                        <img src={`${process.env.PUBLIC_URL}/images/energyDept.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/Nasa.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/EPA.png`} alt='main' width='17%' height="100%"/>
                        <img src={`${process.env.PUBLIC_URL}/images/NSF.png`} alt='main' width='17%' height="100%"/>
                    </div>
                </div>
                <div className='clients-text'>
                    <p>
                        Our senior staff members have a long track record of providing contract R&D services to various government organizations including the DOD (Air Force, Navy, Army, and DTRA), DOE, NASA, EPA, and NSF. 
                    </p>
                    <p>
                        They have developed and delivered a wide range of solutions in the areas of fire prediction and suppression, munition safety, drinking water distribution network safety, chemical and biological agent safety, dust mitigation, and fine particle characterization. We have also helped companies in the private sector develop and deploy various technologies aimed at improving the performance of their products, and safety of their processes.
                    </p>
                    
                </div>
                <div className='client-button'>
                    <Button buttonStyle='btn--submit'
                            buttonSize='btn--extralarge'
                            buttonType='contact'>
                        Contact Us
                    </Button>
                </div>
                
            </div>
        </div>
    )
}

export default Clients
