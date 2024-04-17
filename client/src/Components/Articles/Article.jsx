import React, { useEffect, useState } from 'react';
import styles from './art.module.scss';
import { useGetImagePosts } from '../hooks/useGetImagePosts';
import { useGetCategories } from '../hooks/useGetCategories';
import { useGetArticleByCategory } from '../hooks/useGetArticleByCategory';

export const Article = ({ selectedCat }) => {
  const { data: articles } = useGetArticleByCategory(selectedCat);

  const myDate = new Date("2024-04-11T09:00+02:00").toDateString();
  const formatted = myDate.toLocaleString("da-DK");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    console.log("Opening modal with article:", article);
    setSelectedArticle(article);
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.article}>
        {articles?.items.map((item, index) => {
          return (
            <div className={styles.singleart} key={index}>
              <h2>{item.fields.title}</h2>
              <p className={styles.date}>{formatted}</p>
              <p>{item.fields.arttext.substring(0, 150) + "...."}</p>
              <button onClick={() => openModal(item)}>Læs mere</button>
              <img src={item.fields.image.fields.file.url} alt="asd" />
            </div>
          )
        })}
      </div>
      {isModalOpen && selectedArticle && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <div className={styles.modalcloser}>
            <h2>{selectedArticle.fields.title}</h2>
            <button onClick={closeModal}>X</button>
            </div>
            <p className={styles.date}>{formatted}</p>
            <p>{selectedArticle.fields.arttext}</p>
            <img src={selectedArticle.fields.image.fields.file.url} alt="asd"/>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
