import React, { useState } from 'react'
import styles from './header.module.scss'
import { useGetArticleByCategory } from '../hooks/useGetArticleByCategory';
import { useGetCategories } from '../hooks/useGetCategories';
import { Burger } from '../Burger menu/Burger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../Footer/Footer';
import { Login } from '../../Pages/Login';


export const Headernav = ({setSelectedCat}) => {
  const { data: categories } = useGetCategories();
  return (
    <>
<div className={styles.headerwrapper}> 
  <div className={styles.headerlogo}>
    <a href="/">INGN</a>
  </div>
  <ul className={styles.navbar}>
    <li><span className={styles.seperator}></span><a href="/">Alle</a><span className={styles.seperator}></span></li>
    {categories?.items[0].fields.categories.map((item) => {
      return (
        <li onClick={() => setSelectedCat(item)}>{item.toLowerCase()} <span className={styles.seperator}></span></li>
      );
    })}
  </ul>
  <div className={styles.user}>
  <a className={styles.user}href="/Login"><FontAwesomeIcon icon={faUser} /></a>
  <Burger></Burger>
  </div>
</div>
    </>
  )
}
