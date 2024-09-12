import React from 'react';
import Separator from '../../../../Components/Orange-separator/separator';
import styles from './page.module.css'; 
import { Button } from '../../../../Components/Button/Button';

function MorphBottom() {
  return (
    <div className={styles.morphBottomContainer}>
        <div className={styles.morphBottomAgglomeratedEffects}>
            <h1>
                Effects of Sonication on Breaking Agglomerated Nanoparticles
            </h1>
            <p>
                Addition of surfactants and high intensity sonication are commonly used to break up agglomerated particles in various applications like chemical mechanical planarization (CMP). In order to examine this further, we measured the morphology of CMP slurry samples subjected to sonication. Sample results for silica CMP slurries are presented in the figure below. Here we present the equivalent spherical particle size distribution for simplicity. 
            </p>
            <p>
                The virgin sample (without sonication) exhibited a particle size range of 80 to 300 nm with a mode of about 180 nm. 8 minutes of sonication reduced the particle size range to 50 to 280 nm with a bimodal distribution with modes of about 60 nm and 160 nm, while 15 minutes of sonication changed the distribution to trimodal with modes of 75 nm, 120 nm, and 225 nm. A closer examination of the three distributions suggests that an increase in sonication duration increases the proportion of smaller particles in the sample. This clearly shows that the nanoparticles do undergo agglomeration in silica CMP slurries and that sonication is an effective strategy to break up the agglomerates.
            </p>
        </div>
        <Separator />
        <div className={styles.morphBottomAgglomeratedEffectsImage}>
            <img src='/ASP/images/agloeffects.png' alt='effects' width='100%' height='100%' />
            <p>
                Effect of sonication on breaking up the agglomerates to improve dispersion of silica nanoparticles.
            </p>
        </div>
        <div className={styles.morphBottomAgglomeratedText}>
            <p>
                Here we present the equivalent spherical particle size distribution for simplicity. The virgin sample (without sonication) exhibited a particle size range of 80 to 300 nm with a mode of about 180 nm. 8 minutes of sonication reduced the particle size range to 50 to 280 nm with a bimodal distribution with modes of about 60 nm and 160 nm, while 15 minutes of sonication changed the distribution to trimodal with modes of 75 nm, 120 nm, and 225 nm. 
            </p>
            <p>
                A closer examination of the three distributions suggests that an increase in sonication duration increases the proportion of smaller particles in the sample. This clearly shows that the nanoparticles do undergo agglomeration in silica CMP slurries and that sonication is an effective strategy to break up the agglomerates. 
            </p>
            <p>
                We performed a similar study on alumina CMP slurries. We measured the fractal dimension of the particles in the suspension after subjecting to sonication for different periods of time. The virgin sample (with no sonication) yielded a fractal dimension of 2.63. Intense sonication for 1 minute lowered the fractal dimension significantly to about 1.92. Additional sonication led to fractal dimensions in the range of 1.5 to 1.81. 
            </p>
        </div>
        <Separator />
        <div className={styles.cmpEffectsImages}>
            <img src='/ASP/images/CMP.png' alt='effects' width='100%' height='100%' />
            <p>
                Effect of sonication on the fractal dimension of alumina CMP slurries.
            </p>
        </div>
        <div className={styles.cmpEffects}>
            <p>
                In order to understand the implications of the above result, the size distribution of equivalent spheres in the CMP alumina suspension with no sonication and after 3 minutes of sonication are compared in the figure below. The virgin sample had some particles that were finer than 100 nm, but it also had noticeable amounts of particles in the size range of 500 to 1600 nm. 3 minutes of sonication broke up most of the larger particles which reduced the primary size range of particles to 90 – 250 nm. 
            </p>
            <p>
                This clearly shows that sonication is effective in breaking up the agglomerated particles and in increasing the uniformity of particle sizes in the suspension. 
            </p>
        </div>
        <Separator/>
        <div className={styles.nanoparticlesEffects}>
            <img src='/ASP/images/particlesize.png' alt='primaryparticlesize' width='100%' height='100%' />
            <p>
                Effect of sonication on reducing the particle size range of alumina nanoparticles.
            </p>
        </div>
        <div className={styles.morphOthers}>
            <h1>Other Topics</h1>
            <div className={styles.morphOthersImages}>
                <div className={styles.morphOthersImagesLeft}>
                    <div className={styles.morphOthersImagesLeftTop}>
                        <div className={styles.morphOthersImagesLeftTopText}>
                            <h1>Aerosol Concentration</h1>
                        </div>
                        <div className={styles.morphOthersImagesLeftTopButton}>
                            <Button buttonSize='btnLarge'
                                    buttonStyle='btnBattery'
                                    buttonType='concentration'>
                                        View
                            </Button>
                        </div>
                    </div>
                    <div className={styles.morphOthersImagesLeftBottom}>
                        <div className={styles.morphOthersImagesLeftBottomText}>
                            <h1>Polarized Light Scattering</h1>
                        </div>
                        <div className={styles.morphOthersImagesLeftBottomButton}>
                            <Button buttonSize='btnLarge'
                                    buttonStyle='btnBattery'
                                    buttonType='Polarized'>
                                        View
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.morphOthersImagesRight}>
                    <div className={styles.morphOthersImagesRightTop}>
                        <div className={styles.morphOthersImagesRightTopText}>
                            <h1>Optical Instrumentation</h1>
                        </div>
                        <div className={styles.morphOthersImagesRightTopButton}>
                            <Button buttonSize='btnLarge'
                                    buttonStyle='btnBattery'
                                    buttonType='Optical'>
                                        View
                            </Button>
                        </div>
                    </div>
                    <div className={styles.morphOthersImagesRightBottom}>
                        <div className={styles.morphOthersImagesRightBottomText}>
                            <h1>Sedimentation based particle sizing</h1>
                        </div>
                        <div className={styles.morphOthersImagesRightBottomButton}>
                            <Button buttonSize='btnLarge'
                                    buttonStyle='btnBattery'
                                    buttonType='SPS'>
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

export default MorphBottom;