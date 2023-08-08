import React from 'react'
import styles from './Phone.module.css'
import boxshot from './image/boxshot.png'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
const Phone = () => {
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.left}>
                
                <div className={styles.strangerBox}>
                    <div>
                        <img src={boxshot} className={styles.strange}/>
                    </div>
                    <div>
                       <h3>Stranger Things</h3>
                        <p><a href="#">Downloading....</a></p>
                        
                    </div>
                    <div>
                       <ArrowDownwardRoundedIcon className={styles.download}/>
                    </div>
               
                </div>
  
            </div>
            <div className={styles.right}>
                <div class={styles.rightContainer}>
                    <h1>Download your shows to</h1>
                    <h1>watch offline</h1>
                    <p className={styles.watch}>Save your favourites easily and always have something</p>
                    <p>to watch.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Phone