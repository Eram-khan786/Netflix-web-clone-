import React from 'react'
import styles from './Questions.module.css'
// import AddIcon from '@mui/icons-material/Add';

const Questions = () => {
  return (
    <div>
       <div className={styles.box}>
          <div className={styles.heading}>
            <h1 >Frequently Asked Questions</h1> 
          </div>
          <div className={styles.question}>
            <p>What is NetFlix?</p>
            <p className={styles.maintain}>+</p>
            
          </div>
          <div className={styles.question}>
            <p>How much does Netflix cost</p>
            <p className={styles.maintain}>+</p>
          </div> 
          <div className={styles.question}>
            <p>Where can I watch?</p>
            <p className={styles.maintain}>+</p>
          </div>
          <div className={styles.question}>
            <p>How do I cancel?</p>
            <p className={styles.maintain}>+</p>
          </div>
          <div className={styles.question}>
            <p>What can I watch on Netflix</p>
            <p className={styles.maintain}>+</p>
          </div>
          <div className={styles.question}>
            <p>Is Netflix good for kids?</p>
            <p className={styles.maintain}>+</p>
          </div>
          <p className={styles.ready}>Ready to watch? Enter your email to create or restart your membership.</p>
       
      <div className={styles.displayFlex}>
        <div>
          <input type="email" placeholder='Email address'  required className={styles.email}></input>
        </div>
        <button className={styles.button}>Get Started {">"}</button>
      </div>
       </div>
       
    </div>
  )
}

export default Questions;