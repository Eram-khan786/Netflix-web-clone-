import React from 'react'
import styles from './Kids.module.css'
import img from './image/img-4.png'
const Kids = () => {
  return (
    <div>
        <div className={styles.box}>
            <div className={styles.left}>
               <img src={img} class={styles.image1}/>
            </div>
            <div className={styles.right}>
                <div className={styles.content}>
                  <h1>Create profiles for kids</h1>
                  <p>Send children on adventures with their favourite</p>
                  <p>characters in a space made just for them—free with</p>
                  <p>your membership.</p>
                </div>
              </div>
        </div>
    
    
    </div>
  )
}

export default Kids