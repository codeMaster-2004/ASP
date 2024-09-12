import React from 'react';
import Main from './PS-intro/page';
import Cards from './Cards/Cards';
import styles from './HP.module.css'; 
import CustomLink from '../../Components/CustomLink/CustomeAtt';

function Home() {
  return (
    <>
      <Main />
      <div className={styles.client_home_intro}>
        <div className={styles.main2}>
        <div className={styles.clients_container}>
          <div className={styles.clients}>
            <div className={styles.heading}> 
              <h1>Our Clients</h1>
              <div className={styles.home_client_separator}/>
            </div>
            <div className={styles.clients_list}>
              <p>We provide contract R&D services to our government clients at the DOD and NASA. In the private sector, we provide licenses to our technologies that improve the product performance and process safety and help the industry in integrating/implementing these solutions.</p>
            </div>
          </div>
          <div className={styles.logos}>
            <img src='/ASP/images/Nasa.png'  alt='Nasa' width='100%' height='100%'/>
            <img src='/ASP/images/DoD.png' alt='DOD' width='90%' height='90%'/>
          </div>
        </div>
          <CustomLink 
              to='/clients' 
              className={styles.goto_client_button}
              >
              Learn more
          </CustomLink>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Home;