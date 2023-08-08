import React from 'react'
import styles from './Enjoy.module.css'
import {DefaultPlayer as Video} from 'react-html5video'
import introVedio from './videos/video-tv-1.mp4'
import 'react-html5video/dist/styles.css' 
const Enjoy = () => {
  return (
    <div>
        <div className={styles.box}>
        
           <div className={styles.left}>
            <div className={styles.margin}>         
                 <h1>Enjoy on your TV</h1>
            <p className={styles.para1}>Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
            <p className={styles.para}>Apple TV, Blu-ray players and more.</p>
           </div>
           </div>
  
           <div className={styles.right}>
            <div className={styles.vedio1}>
              <Video autoPlay loop>
                <source src={introVedio} type="video/webm"/>
              </Video>
          
              </div>
           </div>
        </div>
    </div>
  )
}

export default Enjoy;