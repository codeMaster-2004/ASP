import React from 'react'
import Horizontal from '../../../../Components/Horizontal-Line/horizontal';
import Separator from '../../../../Components/Orange-separator/separator';

function CFD() {
  return (
    <div className='CFD-container'>
      <h1>
        CFD Simulations for Thermal Management in a 16-Cell Battery Module
      </h1>
      <Horizontal height={1} />
      <p>
        Dr. Ankur Jain from the University of Texas at Arlington performed CFD simulations with ANSYS to examine the effectiveness of our thermal management method. We considered a 16-cell battery module made from 18650 cells arranged in a 4 × 4 pattern as shown in the figure below. We assumed that the liquid coolant flows counter-current at 0.4 L/s through the channels above and below the cells. If the cells support a load that draws power from the battery at a 1-C discharge rate, this battery module generates 10 W of heat due to resistive heating. 
      </p>
      <p>
        Simulation results plotted in the figure below show a peak temperature differential of 2°C in the cells (that is much lower than the 5°C recommended by the Department of Energy for transportation batteries), while the coolant heats up by ~0.006°C from the channel inlet to the outlet due to heat transfer from the cells. We calculated a heat transfer coefficient (h) of ~160 W/m2K for each cell in this system. Therefore, our simple heat exchanger design is adequate to extract the heat released by the battery. It is overdesigned, and the size/coolant flow rate can be reduced further to reduce the size and pumping power needed for thermal management of battery module.
      </p>
      <Separator />
    </div>
  )
}

export default CFD
