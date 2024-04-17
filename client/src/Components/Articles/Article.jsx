import React, { useEffect, useState } from 'react';
import styles from './art.module.scss'
import { useGetImagePosts } from '../hooks/useGetImagePosts';
import { useGetCategories } from '../hooks/useGetCategories';
import { useGetArticleByCategory } from '../hooks/useGetArticleByCategory';


export const Article = ({selectedCat}) => {
  const { data: articles } = useGetArticleByCategory(selectedCat);


const myDate = new Date("2024-04-11T09:00+02:00").toDateString();
const formatted = myDate.toLocaleString("da-DK")

console.log(formatted);


console.log(articles);
  return (
    <>
    <div className={styles.article}>
      {articles?.items.map((item) => {
        return(
          <div className={styles.singleart}>
          <h2>{item.fields.title}</h2>
          <p className={styles.date}>{formatted}</p>
          <p>{item.fields.arttext.substring(0,150)+ "...."}</p>
          <button>Læs mere</button>
          <img src={item.fields.image.fields.file.url} alt="asd" />
          </div>
        )
      })}
    </div>
    </>
  );
};

export default Article;
