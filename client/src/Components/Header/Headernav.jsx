import React from 'react'
import styles from './header.module.scss'
export const Headernav = () => {
  return (
    <>
    <div className={styles.headerwrapper}>
        <div className={styles.headerlogo}>
        <h1>INGN</h1>
        </div>
        <ul>
            <li><a href="#">Alle</a></li>
            <li><a href="#">Indland</a></li>
            <li><a href="#">Udland</a></li>
            <li><a href="#">Teknologi</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Politik</a></li>
            <li><a href="#">Samfund</a></li>
        </ul>
    </div>
    </>
  )
}
