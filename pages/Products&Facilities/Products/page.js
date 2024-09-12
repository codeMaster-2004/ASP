import React from 'react';
import styles from './page.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
import { Button } from '../../../Components/Button/Button';

function Products() {
    return (
        <div className={styles.products}>
            <div className={styles.productsContainer}>
                <a href='/ASP'>Home</a>
                <h1>Products and Services</h1>
                <img src={`/images/products&services.png`} alt='products main' width='100%' height="100%"/>
                <p className={styles.productsText}>
                    ASP offers a range of products and services aimed at improving the safety and performance of products including those that run on batteries or conventional fuels as well as those that are built from or employ nanomaterials.  
                </p>
                <div className={styles.differentProducts}>
                    <div className={styles.differentProductsTop}>
                        <div className={styles.differentProductsTopLeft}>
                            <div className={styles.differentProductsTopLeftPic}>
                                <img src={`/images/elevatesafety.png`} alt='safety' width='50%' height='100%' />
                            </div>
                            <div className={styles.differentProductsTopLeftText}>
                                <h1>
                                    Elevate Safety and Performance with ASP's Battery Thermal Technology
                                </h1>
                                <p className={styles.productsLink}>
                                    ASP's <CustomLink to='/batterysafety'>battery thermal management and thermal runaway prevention</CustomLink> technology can improve the performance and safety of any battery powered device. Examples include electric vehicles, vertical takeoff and landing systems with electric propulsion, battery powered micromobility devices, stationary battery energy storage systems (BESS), uninterruptible power supplied (UPS), medical devices, power tools and electronics.
                                </p>
                            </div>
                        </div>
                        <div className={styles.differentProductsTopRight}>
                            <div className={styles.differentProductsTopRightPic}>
                                <img src={`/images/NanoAgglo.png`} alt='safety' width='25%' height='100%' />
                            </div>
                            <div className={styles.differentProductsTopRightText}>
                                <h1>
                                    Combating Nanoparticle Agglomeration
                                </h1>
                                <p>
                                    ASP has in-house tools to combat agglomeration of nanoparticles which is detrimental to the performance of processes that rely on the uniformity of fine particle suspensions like Chemical Mechanical Planarization (CMP). Our proprietary tools provide inline diagnostic capabilities to track agglomeration of nanoparticles as it occurs and employ a combination of chemical and mechanical methods to combat agglomeration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.differentProductsBottom}>
                        <div className={styles.differentProductsBottomLeft}>
                            <div className={styles.differentProductsBottomLeftPic}>
                                <img src={`/images/FireSensing.png`} alt='safety' width='25%' height='100%' />
                            </div>
                            <div className={styles.differentProductsBottomLeftText}>
                                <h1>
                                    Advanced Fire Sensing and Prevention Technology
                                </h1>
                                <p>
                                    ASP's fire sensing and prevention technology provides passive early detection of fires in systems that employ flammable chemicals such as hydrocarbon fuels, brake fluids and engine oil. We also have a combination of engineering and computational models to predict the ignition and combustion of fuel/air mixtures.
                                </p>
                            </div>
                        </div>
                        <div className={styles.differentProductsBottomRight}>
                            <div className={styles.differentProductsBottomRightPic}>
                                <img src={`/images/ImprovedAir.png`} alt='safety' width='30%' height='100%' />
                            </div>
                            <div className={styles.differentProductsBottomRightText}>
                                <h1>
                                    Innovative Dust Mitigation Technology for Improved Air Quality
                                </h1>
                                <p className={styles.productsLink}>
                                    Our <CustomLink to='/dust-mitigation'>dust mitigation technology</CustomLink>  improves the air quality in confined spaces such as spacecraft and aircraft cabins while using a fraction of the power needed to operate current systems such as HEPA filters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.lastProductText}>
                    In each area, we offer technology licenses (our product) as well as the customization of our solution to client specific products and processes (our service).
                </p>
                <div className={styles.productButton}>
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

export default Products;