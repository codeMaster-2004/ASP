import React from 'react'
import Separator from '../../../../Components/Orange-separator/separator';
import './page.css';
import {Button} from '../../../../Components/Button/Button';

function CFD() {
  return (
    <div className='CFD-container'>
      <h1>
        CFD Simulations for Thermal Management in a 16-Cell Battery Module
      </h1>
      <p>
        Dr. Ankur Jain from the University of Texas at Arlington performed CFD simulations with ANSYS to examine the effectiveness of our thermal management method. We considered a 16-cell battery module made from 18650 cells arranged in a 4 × 4 pattern as shown in the figure below. We assumed that the liquid coolant flows counter-current at 0.4 L/s through the channels above and below the cells. If the cells support a load that draws power from the battery at a 1-C discharge rate, this battery module generates 10 W of heat due to resistive heating. 
      </p>
      <p>
        Simulation results plotted in the figure below show a peak temperature differential of 2°C in the cells (that is much lower than the 5°C recommended by the Department of Energy for transportation batteries), while the coolant heats up by ~0.006°C from the channel inlet to the outlet due to heat transfer from the cells. We calculated a heat transfer coefficient (h) of ~160 W/m2K for each cell in this system. Therefore, our simple heat exchanger design is adequate to extract the heat released by the battery. It is overdesigned, and the size/coolant flow rate can be reduced further to reduce the size and pumping power needed for thermal management of battery module.
      </p>
      <Separator />
      <div className='image-desc'>
        <img src={`${process.env.PUBLIC_URL}/images/thermalbattery.png`} alt="batterysecond" height="100%"/>
        <p>
          Results from numerical simulations of the temperature distribution in the 16-cell battery module discharging at 1-C rate due to the coolant flowing through the channels above and below the cells.
        </p>
      </div>
      <p>
        The liquid heat exchanger can similarly heat the cells in the battery during cold weather operation. Maintaining the battery pack within an optimal temperature window ensures excellent performance, minimal energy loss, and minimal degradation (which in turn leads to long cycle life). The thermal management system can be implemented alone or on combination with the <a href=''>thermal runaway detection and prevention technology</a>. 
      </p>
      <p>
        Our technology can improve the battery performance in any application that relies on batteries for energy storage and reuse. Examples include the vertical takeoff and landing systems with electric propulsion (eVTOL), electric vehicles (EVs), electric trucks, electric buses, battery energy storage systems (BESS) for residential and electric grid energy systems, aircraft, drones, micromobility systems (including Ebikes and scooters), medical devices, and power tools. We can customize the thermal management system to client battery pack design. For additional information contact us at<a href="mailto:office@analyticalscientificproducts.com">office@analyticalscientificproducts.com</a>.
      </p>
      <div className='management-others'>
        <h1>Other Topics</h1>
        <div className='safetyimages'>
          <div className='management-others-images-left'>
            <div className='management-others-images-left-title'>
              <h1>Battery Safety</h1>
            </div>
            <div className='battery-button'>
              <Button buttonSize='btn--large'
                      buttonStyle='btn--aerosol'
                      buttonType='batterysafety'>
                        View
              </Button>
            </div>
          </div>
          <div className='management-others-images-right'>
              <div className='management-others-images-right-title'>
                  <h1>Battery Thermal Runaway Detection and Prevention</h1>
              </div>
              <div className='battery-button'>
                  <Button 
                      buttonStyle='btn--battery'
                      buttonSize='btn--large'
                      buttonType='batterythermaldetection'>
                          View
                  </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CFD