import React from 'react';
import styles from './Cards.module.css'; 
import CustomLink from '../../../Components/CustomLink/CustomeAtt';
// width='576.8vw' height="400em"
// width='540vw' height="400em"
function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
          <div className={styles.cards__container_left}>
            <img src={`/images/image-27.png`} alt='products main' width='576.8vw' height="400em"/>
            <div className={styles.cards__container_left_info}>
              <div className={styles.cards__container_left_info_conatainer}>
                <div className={styles.cards__container_left_info_heading}>
                  <h1>Our Facilities</h1>
                  <div className={styles.cards_separator1}/>
                </div>
                <p>
                  Our laboratory is equipped with unique in-house constructed and third-party hardware and instrumentation to characterize the hazards and validate the effectiveness of safety technologies.
                </p>
              </div>
              <CustomLink to='/facilities' className={styles.cards_button}>
                Learn more
              </CustomLink>
            </div>
          </div>
          <div className={styles.cards__container_right}>
            <img src={`/images/HomeCards.png`} alt='products main' width='540vw' height="400em"/>
            <div className={styles.cards__container_right_info}>
              <div className={styles.cards__container_right_info_conatainer}>
                <div className={styles.cards__container_right_info_heading}>
                  <h1>Our Products and Services</h1>
                  <div className={styles.cards_separator}/>
                </div>
                <p>
                  We provide engineering and computational analysis, specialized testing and custom instrumentation to help improve the performance and safety of your products and processes. 
                </p>
              </div>
              <CustomLink to='/products-services' className={styles.cards_button}>
                Learn more
              </CustomLink>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cards;