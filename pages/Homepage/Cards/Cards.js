import React from 'react';
import Image from 'next/image';
import styles from './Cards.module.css';
import CustomLink from '../../../Components/CustomLink/CustomeAtt';

function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
          <div className={styles.cards__container_left}>
            <Image
              src="/ASP/images/image-27.png"  // Remove /ASP prefix as it's handled by Next.js config
              alt="products main"
              width={577}
              height={400}
              priority
              unoptimized
            />
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
            <Image
              src="/ASP/images/HomeCards.png"  // Remove /ASP prefix as it's handled by Next.js config
              alt="products main"
              width={540}
              height={400}
              priority
              unoptimized
            />
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