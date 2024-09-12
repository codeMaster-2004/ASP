import React from 'react';
import styles from './page.module.css'; 
import Separator from '../../../../Components/Orange-separator/separator';
import { Button } from '../../../../Components/Button/Button';

function BatteryDetectionBottom() {
  return (
    <div className={styles.detectionBottom}>
        <div className={styles.detectionBottomContainer}>
            <div className={styles.detectionBottomContainerStartText}>
                <p>
                    This is close to the lower end of the 4° – 7°C/min heating rate recommended by the UL 9540A standard to simulate battery thermal abuse. We monitored the open cell voltage and the cell temperature during the test. The open cell voltage dropped sharply about 25 minutes into the test when the cell reached ~128 C due to separator shutdown. As the cell continued to heat up further drawing energy from the external heating tape, the electrolyte in the cell vaporized raising the cell internal pressure with time. When the cell reached a temperature of ~150°C about 29 minutes into the test, the internal pressure exceeded the vent burst pressure causing it to open discharging the vapors and flammable content outside the cell. 
                </p>
                <p>
                    The momentary decrease in pressure in the cell due to venting led to isentropic expansion of the residual vapor causing a momentary cooling effect. However, the cell soon recovered and continued to heat up drawing energy from the heater. 
                </p>
                <p>
                    Finally, when the cell reached 197°C, the heat generation rate from the exothermic reactions inside the cell significantly exceeded the heat loss rate from the cell surface (to the surrounding space) causing the cell to self-heat. The cell reached thermal runaway soon after raising its temperature to a maximum of ~650°C. It is possible that certain locations in the cell reached even higher temperatures. 
                </p>
                <p>
                    The steep rise in cell temperature during thermal runaway suggests a very high heat generation rate which makes it extremely difficult to control. We calculated a mean heat generation rate of 1010 W during thermal runaway from the cell.
                </p>
            </div>
            <div className={styles.detectionBottomContainer16Cell}>
                <h1>
                    Demonstrating Thermal Runaway Prevention in a 16-Cell Battery Module
                </h1>
                <p>
                    We then proceeded with a test to demonstrate the effectiveness of our technology in preventing thermal runaway in a cell subjected to thermal abuse. For this demonstration, we installed the trigger cell in a 16-cell battery module equipped with our technology. We heated the trigger cell at 11.3°C/min that is much more aggressive than the 4° – 7°C/min recommended in the UL 9540A standard. External heating with the tape heater was maintained actively all through the test. 
                </p>
            </div>
            <Separator />
            <div className={styles.detectionBottomContainerGraph2}>
                <img src='/images/heatat11.png' alt="Graph 1" width="100%" height="100%" />
                <p>
                    Data from thermal abuse test on cylindrical 18650 cell equipped with ASP's safety technology and heated at 11.3°C/min.
                </p>
            </div>
            <div className={styles.detectionBottomContainerLaterText}>
                <p>
                    Our technology provided a passive detection of overheat when the cell reached 90°C. This is sufficiently high to prevent false positives and low-enough to be useful in addressing thermal runaway. The thermal runaway prevention component of our technology got activated passively when the cell reached ~110°C which slowed down the heating rate of the cell slightly. Our technology self-adjusted over time increasing the rate of energy extraction from the cell as it continued to heat up further. 
                </p>
                <p>
                    The net effect of heating from the external heater and the energy extraction from our technology resulted in the cell reaching a maximum temperature of 137°C after which the cell started to cool down (despite the active heating by the external heater). 
                </p>
                <p>
                    Even though we conducted the thermal abuse test at a much higher heating rate than the UL 9540A standard, our system was effective in extracting the energy and maintaining the cell much below the vent activation temperature of ~150°C. We are optimizing the design currently to even prevent the separator shutdown and ensure that the cell remains well below 130°C.
                </p>
            </div>
            <div className={styles.detectionOthers}>
                <h1>Other Topics</h1>
                <div className={styles.detectionOtherImages}>
                    <div className={styles.detectionOtherImagesLeft}>
                        <div className={styles.detectionOtherImagesLeftText}>
                            <h1>Battery Safety</h1>
                        </div>
                        <div className={styles.detectionOtherImagesLeftButton}>
                            <Button buttonStyle='btnBattery'
                                    buttonSize='btnLarge'
                                    buttonType='batterysafety'>
                                        View
                            </Button>
                        </div>
                    </div>
                    <div className={styles.detectionOtherImagesRight}>
                        <div className={styles.detectionOtherImagesRightText}>
                            <h1>Battery Thermal Management</h1>
                        </div>
                        <div className={styles.detectionOtherImagesLeftButton}>
                            <Button buttonStyle='btnBattery'
                                    buttonSize='btnLarge'
                                    buttonType='batterythermal'>
                                        View
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BatteryDetectionBottom;