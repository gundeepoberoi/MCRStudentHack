import React from 'react';
import styles from './sponsors.module.css'; // Assuming you moved the CSS to a separate file

const Sponsors: React.FC = () => {
  return (
  <body>
    <div className={styles.sun}></div>
    <div className={styles.planet} style={{animationDelay: '0s'}}></div>
    <div className={styles.planet} style={{animationDelay: '-4s'}}></div>
    <div className={styles.planet1} style={{animationDelay: '-8s'}}></div>
    <div className={styles.planet1} style={{animationDelay: '-12s'}}></div>
    <div className={styles.planet2} style={{animationDelay: '-16s'}}></div>
  </body>  
  );
};

export default Sponsors;