import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

function People() {
    return (
        <div className='people'>
            <div className='people-container'>
                <div className='vd'>
                    <img src={`${process.env.PUBLIC_URL}/images/vd-new.png`} alt='Vijay Devarakonda' width='574px' height='549px'/>
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
                                    <img src={`${process.env.PUBLIC_URL}/images/vd-1.png`} alt='Vijay Devarakonda'/>
                                    <img src={`${process.env.PUBLIC_URL}/images/vd-2.png`} alt='Vijay Devarakonda'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='michael'>
                    <img src={`${process.env.PUBLIC_URL}/images/Thella-ankul.png`} alt='michael' width='573.497px' height='691px'/>
                    <div className='mich-desc'>
                        <div className='mich-desc-container'>
                            <div className='mich-desc-heading'>
                                <div className='mich-title'>
                                    <h1>Dr. Michael D. Hogue</h1>
                                    <div className='advisor-button'>
                                        <p>Senior Scientific Advisor</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mich-desc-intro'>
                                <p>Dr. Hogue received a B.S. in Physics from Mississippi State University, an M.S. in Space Systems from Florida International University, followed by an M.S. and a PhD in Physics from the University of Central Florida. He retired in 2021 after devoting 39 years of his career to NASA KSC. </p> 
                                <p>At NASA, he rose from a co-op student in 1985 to the laboratory manager for the Electrostatics and Surface Physics Laboratory (ESPL) in 2018 covering life support, pneumatics, cryogenics, robotics, hypergolic systems, thermal systems, electrostatics, and electrodynamics. His achievements include numerous group achievement awards, performance awards, certificates of recognition, silver quality dollar award, NASA honor award, and silver achievement medal. He was elected a NIAC fellow in 2011. He has authored many peer-reviewed journal articles and conference papers. </p> 
                                <p>At ASP, Dr. Hogue leads the development of dust mitigation technologies for future lunar and mars missions.</p>
                                <div className='mich-desc-logos'>
                                    <img src={`${process.env.PUBLIC_URL}/images/MSU.png`} alt='Michael Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/UoCF.png`} alt='Michael Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/FIU.png`} alt='Michael Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/Nasa.png`} alt='Michael Ankul' width="100px" height="100px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sivakumar'>
                    <img src={`${process.env.PUBLIC_URL}/images/siva-ankul.png`} alt='sivakumar' width='571.493px' height='400px' />
                    <div className='siva-desc'>
                        <div className='siva-desc-container'>
                            <div className='siva-title'>
                                <h1>Dr. Sivakumar Manickavasagam</h1>
                                <div className='co-founder-button'>
                                    <p>Senior Scientific Advisor</p>
                                </div>
                            </div>
                            <div className='siva-desc-intro'>
                                <p>Dr. Manickavasagam received a B.S. in physics from Madurai Kamraj University, India, an M.S. in mechanical engineering from the Indian Institute of Science and a PhD in mechanical engineering from the University of Kentucky. </p> 
                                <p>Prior to joining ASP, Dr. Sivakumar Manickavasagam worked at GE and BlazeTech Corp., and founded Synergetic Technologies Inc. and an educational institution to serve underserved communities.</p> 
                                <p>Dr. Manickavasagam specializes in computational fluid dynamics, radiation heat transfer, optical instrumentation, and inverse problems. He has developed several numerical algorithms and inversion schemes and many experimental techniques using different kinds of lasers (e.g., CO2, Nd: YAG and He-Ne). </p>
                                <p>He has authored more than 20 journal publications in heat transfer, inverse problems, particle characterization, and optics in addition to several internal and GE proprietary/confidential reports, and numerous conference publications and presentations. </p>
                                <p>He has worked on a broad spectrum of projects in diverse areas such as heat transfer, fluid dynamics and fine particle characterization. </p>
                                <p>He served as the PI on two NSF SBIRs that led to the development of the patented Triple-S technology that uses polarized light scattering to characterize the morphology of nanoparticles and agglomerates. </p>
                                <p>Examples of his past work include studying polarized electromagnetic wave scattering by fractal-like soot agglomerates produced in flames; an experimental study of turbulence-radiation interactions in coal flames; determining the quality of cotton fibers from laser diagnostics; and inverse radiation problems.</p>
                                <p>At ASP, Dr. Manickavasagam leads the development of optical instrumentation for fine particle characterization and thermal/fluid analysis to support the battery safety technologies.</p>
                                <div className='siva-desc-logos'>
                                    <img src={`${process.env.PUBLIC_URL}/images/siva-1.png`} alt='Siva Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/siva-2.png`} alt='Siva Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/siva-3.png`} alt='Siva Ankul' width="100px" height="100px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mitchell'>
                    <img src={`${process.env.PUBLIC_URL}/images/mitchell.png`} alt="mitchell" width="574px" height="549px"/>
                    <div className='mitchell-desc'>
                        <div className='mitchell-desc-container'>
                            <div className="mitchell-title">
                                <h1>Mr. Mitchell Lairmore</h1>
                                <div className='bussiness-button'>
                                    <p>Director of Business Development</p>
                                </div>
                            </div>
                            <div className='mitchell-desc-intro'>
                                <p>Mr. Lairmore received a bachelor’s degree in industrial engineering from the University of Iowa and an MBA from the University of Rochester. In the past, he was employed at Eastman Kodak for 21 years, Dawnbreaker Inc. for 9 years, and the University of South Florida SBDC for 6 years.</p>
                                <p>At ASP, Mr. Lairmore leads business planning, customer discovery, and market research for our core technologies.</p>

                                <div className="mitchell-logos">
                                    <img src={`${process.env.PUBLIC_URL}/images/mitchell-1.png`} alt='Mitchell Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/mitchell-2.png`} alt='Mitchell Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/mitchell-3.png`} alt='Mitchell Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/mitchell-4.png`} alt='Mitchell Ankul' width="100px" height="100px"/>
                                    <img src={`${process.env.PUBLIC_URL}/images/mitchell-5.png`} alt='Mitchell Ankul' width="100px" height="50.495px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People;