import React from 'react'
import styles from './Watch.module.css'
import tv2 from './image/tv-2.png'
import {DefaultPlayer as Video} from 'react-html5video'
import introVedio from './videos/video-2.mp4'
import 'react-html5video/dist/styles.css' 
const Watch = () => {
  return (
    <div>
        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.heading}>
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
          </div>
          <div className={styles.right}>
          <div className={styles.vedio2}>
              <Video autoPlay loop>
                <source src={introVedio} type="video/webm"/>
              </Video>
          
              </div>
            <div>
                
            </div>

          </div>
        </div>
    </div>
  )
}

export default Watch