import React from 'react';
// import navbgc from './image/nav-bgc.jpg';
import styles from './Home.module.css';
import netflix from './image/netfix.png';
// import LanguageIcon from '@mui/icons-material/Language';

const Home = (props) => {
  // let {count}=props;
  console.log(props.count,"========================================================================")
  return (
    <div>   
        <div className={styles.main}>
         <img src={netflix} alt="" className={styles.netflix}/>
       
         <select className={styles.dropDown}>
         {/* <LanguageIcon className={styles.icon}/> */}
             <option> English</option>
             <option>Hindi</option>
         </select>
         <button className={styles.home}>Sign up</button>
      <div className={styles.middleContent}>
        <h1 className={styles.heading}>Unlimited movies, TV shows and more</h1>
        <p className={styles.para}>Watch anywhere. Cancel anytime.</p>
        <p className={styles.ready}>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
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
export default Home;