import React from 'react';
import './page.css'; 
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import Separator from '../../../Components/Orange-separator/separator';


function Facilities() {
    return (
        <div className='facilities_'>
            <div className='facilities-container'>
                <a href='/ASP'>
                    Home
                </a>
                <h1>
                    Facilities and Equipment
                </h1>
                <div className='facilities-container-after-text'>
                    <p>
                        Our vision is to develop simple and innovative solutions to complex problems plaguing the industry currently by leveraging on our senior staff members’ vast domain expertise. In support of this vision, our strategy has been to develop/acquire niche software resources and build/purchase one-of-a-kind test equipment in-house, and outsource routine measurements, hazardous/one-off tests involving expensive equipment to our partner organizations.
                    </p>
                    <p>
                        We have strategic partnerships with universities, national labs, and government facilities where we can access such one-of-a-kind equipment and test capabilities. A partial list of the equipment and instrumentation that we have in-house is provided below.
                    </p>
                </div>
                <div className='particle-character'>
                    <h1>
                        Fine Particle Characterization
                    </h1>
                    <p>
                        We have a prototype of the Triple-S instrument developed for morphology characterization of spherical, cylindrical, ellipsoidal, and platelet shaped nanoparticles based on polarized light scattering. We have several well characterized nanoparticle samples including the NIST certified polystyrene particle size standards that can be used to calibrate/validate particle sizing instrumentation. In addition, we have a functional wet chemistry lab consisting of glassware, dispersion aids, micropipettes, sonicator, autoclave, and a vortexer that can be used to prepare nanoparticle suspensions.
                    </p>
                    <p>
                        Large battery packs for power intensive applications are constructed by connecting a large number of smaller individual cells. Thermal runaway in one cell can generate and discharge enough energy to propagate the failure throughout the battery pack exposing the entire system to fire. ASP developed a patent-pending cell-agnostic technology that provides several key functions including:
                    </p>
                    <ul>
                        <li>
                            <CustomLink to='/battery-thermal-management'>Thermal management of the battery pack</CustomLink> ensuring that each cell remains within the optimal temperature window during routine operation.
                        </li>
                        <li>
                            <CustomLink to='/battery-thermal-runaway-detection-prevention'>Passive and on-demand thermal runaway detection and activation of thermal runaway prevention</CustomLink> system that addresses the problem at the root cause.
                        </li>
                        <li>
                            <CustomLink to='/battery-thermal-runaway-detection-prevention'>Prevention of thermal runaway and fire propagation</CustomLink> from the failed cell to the neighboring cells as well as prevention of fire propagation in the battery pack.
                        </li>
                    </ul>
                </div>
                <Separator />
                <div className='facility-image-first-collection'>
                    <img src={`${process.env.PUBLIC_URL}/images/Machine.png`} alt='products main' width='48.3%' height="45%" />
                    <img src={`${process.env.PUBLIC_URL}/images/dabbalobokka.png`} alt='products main' width='48.3%' height="100%" />
                </div>
                <div className='Aero-Testing'>
                    <h1>
                        Aerosol Testing
                    </h1>
                    <p>
                        We have an instrumented portable flow through dust cloud chamber equipped with dust aerosolizers, a flowmeter, and dust concentration analyzers to test the performance of dust filters. This system is configured to operate at atmospheric pressure. Efforts are currently under way to add the capability to test this system in vacuum. We have several types of dust simulants including size segregated Talc, Martian and Lunar surface dust simulants.
                    </p>
                </div>
                <Separator />
                <img src={`${process.env.PUBLIC_URL}/images/equipmentshowcase.png`} alt='products main' width='100%' height="100%" />
                <p className='text-after-equipment'>
                    We have a high efficiency air compressor and a vacuum pump that can be integrated into the aerosol test apparatus in the future.
                </p>
                <div className='AC-DC'>
                    <h1>
                        High Voltage DC/AC Power Supplies
                    </h1>
                    <p>
                        We have an assortment of power supplies from third party vendors including: (1) a Keithley high voltage DC power supply from Tektronix that can provide voltages up to 5 kV, (2) a Matsusada function generator that can generate sine, square and triangular waves with amplitudes up to 10 V and frequencies up to several MHz, and (3) a Matsusada high voltage amplifier that can generate amplified voltages up to 10,000 V.
                    </p>
                </div>
                <Separator />
                <div className='images-collection'>
                    <img src={`${process.env.PUBLIC_URL}/images/facility-collection.png`} alt='' width='100%' height='100%'/>
                </div>
                <div className='thermal-testing-facility'>
                    <h1>
                        Thermal Testing
                    </h1>
                    <p>
                        We have a temperature-controlled oven that can be used to subject the Li ion cells to well defined temperature-time histories to simulate thermal abuse. We also have an assortment of heating tapes, heating cartridges, thermocouples and readouts to accomplish the same.
                    </p>
                </div>
                <Separator />
                <div className='images-collection-two'>
                    <img src={`${process.env.PUBLIC_URL}/images/tisAfridge.png`} alt='' width='49.34%' height='100%'/>
                    <img src={`${process.env.PUBLIC_URL}/images/notafridge.png`} alt='' width='49.34%' height='100%'/>
                </div>
                <p className='facility-last-text'>
                    We have a functional wet chemistry lab equipped with sonicators, vortexer, autoclave, precision pipettes, high precision balance, hot plate, magnetic stirrer, temperature controller, pumps, flowmeters, compressed gas tanks, and power supplies. We also have several optical equipment including optical breadboards, optic rails, lasers, photometers, polarizers, analyzers, lenses, mirrors and beam splitters that can be used to build custom optical instrumentation.
                </p>
            </div>
        </div>
    )
}

export default Facilities
