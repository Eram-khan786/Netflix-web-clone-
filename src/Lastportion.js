import React from 'react';
import styles from './Lastportion.module.css';
import LanguageIcon from '@mui/icons-material/Language';

const Lastportion = ({handleClick}) => {

  return (
    <div>
      <div className={styles.footer}>
        <p className={styles.lastpara}>Questions? Call 000-800-919-1694</p>

        {/* Use the correct className for the grid container */}
        <div className={styles.gridContainer}>
          {/* Use the correct className for the grid items */}
          
          <div className={styles.gridItem} ><u>FAQ</u></div>
          <div className={styles.gridItem}><u>Help Centre</u></div>
          <div className={styles.gridItem}><u>Account</u></div>
          <div className={styles.gridItem}><u>Media Centre</u></div>
          <div className={styles.gridItem}><u>Investor Relations</u></div>
          <div className={styles.gridItem}><u>Jobs</u></div>
          <div className={styles.gridItem}><u>Ways to Watch</u></div>
          <div className={styles.gridItem}><u>Terms of Use</u></div>
          <div className={styles.gridItem}><u>Privacy</u></div>
          <div className={styles.gridItem}><u>Cookie Preferences</u></div>
          <div className={styles.gridItem}><u>Corporate Information</u></div>
          <div className={styles.gridItem}><u>Contact Us</u></div>
          <div className={styles.gridItem}><u>Speed Test</u></div>
          <div className={styles.gridItem}><u>Legal Notices</u></div>
          <div className={styles.gridItem}><u>Only on Netflix</u></div>
        
        </div>
        <select className={styles.dropDown}>
         <LanguageIcon className={styles.icon}/>
             <option> English</option>
             <option>Hindi</option>
         </select>
         <div>
        <p className={styles.netflix} >Netflix India</p>
      </div>
      </div>
      
      
    </div>
  );
};

export default Lastportion;
