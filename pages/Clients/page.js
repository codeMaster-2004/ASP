import React from 'react';
import styles from './page.module.css'; 
import { Button } from '../../Components/Button/Button';
import CustomLink from '../../Components/CustomLink/CustomeAtt';

function Clients() {
    return (
        <div className={styles.clients}>
            <div className={styles.clientsContainer}>
                <CustomLink to='ASP' className={styles.homeLink}>Home</CustomLink>
                <h1>
                    Our Clients
                </h1>
                <div className={styles.clientLogos}>
                    <div className={styles.clientLogosTop}>
                        <img src='./images/DoD.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/USAF.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/USNavy.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/USArmy.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/USDTRA.png' alt='main' width='17%' height="100%"/>
                    </div>
                    <div className={styles.clientLogosBottom}>
                        <img src='./images/energyDept.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/Nasa.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/EPA.png' alt='main' width='17%' height="100%"/>
                        <img src='./images/NSF.png' alt='main' width='17%' height="100%"/>
                    </div>
                </div>
                <div className={styles.clientsText}>
                    <p>
                        Our senior staff members have a long track record of providing contract R&D services to various government organizations including the DOD (Air Force, Navy, Army, and DTRA), DOE, NASA, EPA, and NSF. 
                    </p>
                    <p>
                        They have developed and delivered a wide range of solutions in the areas of fire prediction and suppression, munition safety, drinking water distribution network safety, chemical and biological agent safety, dust mitigation, and fine particle characterization. We have also helped companies in the private sector develop and deploy various technologies aimed at improving the performance of their products, and safety of their processes.
                    </p>
                </div>
                <div className={styles.clientButton}>
                    <Button buttonStyle='btnSubmit'
                            buttonSize='btnExtralarge'
                            buttonType='contact'>
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Clients;