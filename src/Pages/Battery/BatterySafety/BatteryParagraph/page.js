import React from 'react';
import { Button } from '../../../../Components/Button/Button';
import './page.css'; 
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import Separator from '../../../../Components/Orange-separator/separator';

function BatteryPara() {
  return (
    <div className='Batterybotcontainer'>
        <div className='title-text-bat'>
            <p>Lithium-ion batteries are increasingly being used in several applications like electric vehicles (EVs), aircraft, stationary battery energy storage systems (BESS), micro mobility devices, medical devices, power tools and electronics. When maintained within an optimal temperature window, these batteries provide exceptional energy storage capacity and performance. Abnormal deviations from this range cause the battery to deteriorate and may even cause it to fail irreversibly and catch fire.</p>
            <Separator />
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/batterysafetybottom.png`} alt="batterysafety" width="100%" height="100%"/>
        <div className='batterybottomtext'>
            <p>
                Large battery packs for power intensive applications are constructed by connecting a large number of smaller individual cells. Thermal runaway in one cell can generate and discharge enough energy to propagate the failure throughout the battery pack exposing the entire system to fire. ASP developed a patent-pending cell-agnostic technology that provides several key functions including:
            </p>
            <ul>
                <li><CustomLink to='/battery-thermal-management'>Thermal management of the battery pack</CustomLink> ensuring that each cell remains within the optimal temperature window during routine operation.</li>
                <li><CustomLink to='/battery-thermal-runaway-detection-prevention'>Passive and on-demand thermal runaway detection and activation of thermal runaway prevention</CustomLink> system that addresses the problem at the root cause.</li>
                <li><CustomLink to='/battery-thermal-runaway-detection-prevention'>Prevention of thermal runaway and fire propagation</CustomLink> from the failed cell to the neighboring cells as well as prevention of fire propagation in the battery pack.</li>
            </ul>
        </div>
        <div className='BatteryOthers'>
            <h1>Other Topics:</h1>
            <div className='safetyimages'>
                <div className='safetyimagesleft'>
                    {/* <img src={`${process.env.PUBLIC_URL}/images/batteryfirst.png`} alt="batteryfirst" width="100%" height="100%"/> */}
                    <div className='battery-card-title-management'>
                        <h1>Battery Thermal Management</h1>
                    </div>
                    <div className='battery-button'>
                        <Button 
                            buttonStyle='btn--battery'
                            buttonSize='btn--large'
                            buttonType='batterythermal'>
                                View
                        </Button>
                    </div>
                    
                </div>
                <div className='safetyimagesright'>
                {/* <img src={`${process.env.PUBLIC_URL}/images/batterysecond.png`} alt="batterysecond" width="100%" height="100%"/> */}
                    <div className='battery-card-title-detection'>
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

export default BatteryPara
