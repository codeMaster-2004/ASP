import React from 'react';
import { Button } from '../../../../Components/Button/Button';
import styles from './page.module.css'; 
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import Separator from '../../../../Components/Orange-separator/separator';

function BatteryPara() {
  return (
    <div className={styles.batteryBotContainer}>
        <div className={styles.titleTextBat}>
            <p>Lithium-ion batteries are increasingly being used in several applications like electric vehicles (EVs), aircraft, stationary battery energy storage systems (BESS), micro mobility devices, medical devices, power tools and electronics. When maintained within an optimal temperature window, these batteries provide exceptional energy storage capacity and performance. Abnormal deviations from this range cause the battery to deteriorate and may even cause it to fail irreversibly and catch fire.</p>
            <Separator />
        </div>
        <img src='/ASP/images/batterysafetybottom.png' alt="batterysafety" width="100%" height="100%"/>
        <div className={styles.batteryBottomText}>
            <p>
                Large battery packs for power intensive applications are constructed by connecting a large number of smaller individual cells. Thermal runaway in one cell can generate and discharge enough energy to propagate the failure throughout the battery pack exposing the entire system to fire. ASP developed a patent-pending cell-agnostic technology that provides several key functions including:
            </p>
            <ul>
                <li><CustomLink to='/battery-thermal-management'>Thermal management of the battery pack</CustomLink> ensuring that each cell remains within the optimal temperature window during routine operation.</li>
                <li><CustomLink to='/battery-thermal-runaway-detection-prevention'>Passive and on-demand thermal runaway detection and activation of thermal runaway prevention</CustomLink> system that addresses the problem at the root cause.</li>
                <li><CustomLink to='/battery-thermal-runaway-detection-prevention'>Prevention of thermal runaway and fire propagation</CustomLink> from the failed cell to the neighboring cells as well as prevention of fire propagation in the battery pack.</li>
            </ul>
        </div>
        <div className={styles.batteryOthers}>
            <h1>Other Topics:</h1>
            <div className={styles.safetyImages}>
                <div className={styles.safetyImagesLeft}>
                    <div className={styles.batteryCardTitleManagement}>
                        <h1>Battery Thermal Management</h1>
                    </div>
                    <div className={styles.batteryButton}>
                        <Button 
                            buttonStyle='btnBattery'
                            buttonSize='btnLarge'
                            buttonType='batterythermal'>
                                View
                        </Button>
                    </div>
                </div>
                <div className={styles.safetyImagesRight}>
                    <div className={styles.batteryCardTitleDetection}>
                        <h1>Battery Thermal Runaway Detection and Prevention</h1>
                    </div>
                    <div className={styles.batteryButton}>
                        <Button 
                            buttonStyle='btnBattery'
                            buttonSize='btnLarge'
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

export default BatteryPara;