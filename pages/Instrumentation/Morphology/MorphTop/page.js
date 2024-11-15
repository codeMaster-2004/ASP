import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../../Components/CustomLink/CustomeAtt';
import styled from 'styled-components';;
import Separator from '../../../../Components/Orange-separator/separator';

function MorphTop() {
  return (
    <div className={styles.morphTop}>
        <CustomLink to='/optical-instrumentation' style={{textDecoration:"none"}}>
            <p className={styles.orangeText}>Instrumentation</p>
        </CustomLink>
        <h1>Morphology Characterization with Optical Spectroscopy</h1>
        <img src='./images/NanoParticles.png' alt='morphology' width='100%' height="100%"/>
        <div className={styles.morphTopAfterImageText}>
            <p>
                The nanotechnology revolution hinged on performance enhancement due to the smaller size of nanoparticles which imparts unique properties due to the much larger specific surface area than the bulk material. A key roadblock to harnessing the true potential of nanoparticles is their tendency to agglomerate and a lack of diagnostic tools to detect, characterize and control agglomeration. 
            </p>
            <p>
                To address this problem, ASP developed an instrument that uses wavelength resolved optical extinction spectroscopy to characterize the morphology of nanoparticles and agglomerates, as well as the coating thickness distribution of core-shell nanoparticles. We used off-the-shelf spectrophotometers to characterize several samples in the size range of 80 to 2000 nm. These include various types of polymers, ceramics, metals, pharmaceutical drugs, carbon, bacteria, and viruses.
            </p>
        </div>
        <div className={styles.morphTopValidation}>
            <h1>
                Validation with NIST Certified Polystyrene Particle Standards
            </h1>
            <p>
                We compared the size distributions obtained using our system with known sizes of NIST certified polystyrene latex spheres between 80 and 870 nm from Duke Scientific and Bangs Laboratories. We first prepared suspensions with different concentrations of 240 nm polystyrene latex particles and measured the optical extinction spectra. We inverted these data using our proprietary algorithms to determine the particle size distributions of these suspensions. The figure below shows that the size distributions obtained using our instrument agree very well with the vendor specified size for all the five different suspensions.
            </p>
        </div>
        <Separator />
        <div className={styles.morphTopValidationImage}>
            <img src='./images/240nmbeads.png' alt='1stgraph' width='100%' height='100%'/>
            <p>
                Size distribution of polystyrene latex particles obtained using multi-wavelength optical extinction spectroscopy. We performed measurements on five separate samples prepared using NIST certified 240 nm polystyrene beads suspended in water. 
            </p>
        </div>
        <div className={styles.morphExplain}>
            <p>
                We also measured the size distributions of samples containing 100 and 870 nm particles from Bangs Laboratories. We examined two concentrations of 100 nm particles (low and high) and three concentrations of 870 nm particles (low, medium and high). 
            </p>
            <p>
                The results below clearly show an excellent agreement between our measurements and the mean diameters and the standard deviation provided by Bangs Laboratories. Also, the results are highly reproducible for all concentrations suggesting that the size distribution is independent of concentration, as expected. We obtained similar agreement for other particle sizes (80, 100, 200, 300, 400, 500, 600, 700, 800 and 870 nm) for both monodisperse particles and mixtures. 
            </p>
            <p>
                We also measured the size distributions of samples containing 100 and 870 nm particles from Bangs Laboratories. We examined two concentrations of 100 nm particles (low and high) and three concentrations of 870 nm particles (low, medium and high). The results below clearly show an excellent agreement between our measurements and the mean diameters and the standard deviation provided by Bangs Laboratories. Also, the results are highly reproducible for all concentrations suggesting that the size distribution is independent of concentration, as expected. We obtained similar agreement for other particle sizes (80, 100, 200, 300, 400, 500, 600, 700, 800 and 870 nm) for both monodisperse particles and mixtures.
            </p>
        </div>
        <Separator />
        <div className={styles.morphTopBiggerGraph}>
            <img src='./images/870nmbeads.png' alt='870nm' width='100%' height='100%' />
            <p>
                Size distribution of polystyrene particles obtained using multi-wavelength optical extinction spectroscopy. We performed measurements on five separate samples prepared using NIST certified 100±30 and 870±200 nm polystyrene beads suspended in water. 
            </p>
        </div>
        <div className={styles.agglomerated}>
            <h1>
                Morphology Characterization of Agglomerated Nanoparticles
            </h1>
            <p>
                Most particle sizing instruments assume a spherical shape for the particles irrespective of the actual shape and agglomeration state of the sample. They usually output the diameter of equivalent spheres as a representation of the agglomerated particle size. We follow a different approach where the agglomerated particle is assumed to have a fractal structure. Our instrument provides the number of primary particles per agglomerate (a measure of the extent of agglomeration) and the fractal dimension (a measure of the agglomerate structure). 
            </p>
            <p>
                These measurements are illustrated for three ceramic particles — silica (SiOx), tungsten oxide (WO3) and titanium oxide (TiO2). SEM images of these samples, shown in the figure below, suggest that the particles agglomerated to different extents. From an analysis of these images, we have determined the primary particle (monomer) diameters to be 20 nm (SiO2), 30 nm (WO3) and 50 nm (TiO2).
            </p>
        </div>
        <Separator />
        <div className={styles.agglomeratedImage}>
            <img src='./images/MorphologyCollection.png' alt='collection' width='100%' height='100%' />
            <p>
                We suspended each of these powders separately in water and sonicated the suspension to disperse the particles. The extinction spectra of these suspensions obtained using an off-the-shelf spectrometer are shown in the figure below.
            </p>
        </div>
        <Separator />
        <div className={styles.measuredVsTheoretical}>
            <img src='./images/MeasuredvsTheoretical.png' alt='collection' width='100%' height='100%' />
            <p>
                Measured vs. theoretical optical absorbance at different wavelengths obtained after data inversion.
            </p>
        </div>
        <div className={styles.measuredVsTheoreticalText}>
            <p>
                The data were analyzed using our inversion software and agglomerate structures were obtained in terms of fractal dimension and number of primary spheres per agglomerate. The figure below depicts the size distributions of these agglomerates in terms of number of primary spheres forming the agglomerate. Except Silica, it is observed that all these particles formed large and compact agglomerates in water. Using the results from our inversion, we calculated the absorbance spectra for the three suspensions, and they agreed very well with the measured spectra as shown in the figure above. These analyses yielded fractal dimensions of 2.8, 2.8 and 2.5 for SiO2, WO3 and TiO2. 
            </p>
            <p>
                The higher fractal dimensions suggest that the particles formed compact agglomerates (close to spherical shape) in water. It is difficult to compare our results directly with the SEM images as the latter provide two-dimensional projections of the particle structure. Our instrument, on the other hand, considers the three dimensional structure of the particles. Additional research is needed to correlate our measurements with high resolution microscopy results.
            </p>
        </div>
    </div>
  )
}

export default MorphTop;