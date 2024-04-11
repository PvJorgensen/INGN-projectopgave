import React, { useEffect, useState } from 'react';
import styles from './art.module.scss'

export const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://cdn.contentful.com/spaces/4r4qq6c8wwbu/entries?content_type=article', {
        headers: {
          Authorization: 'Bearer KCrRSfpv0R8c3s1MSQ3NTpd-9c0yJZbIMku7t7m95Ao',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(articles);

  return (
    <div className={styles.article}>
      {articles?.items?.map((article, index) => (
        <div key={article.sys.id}>
          <h1>{article.fields.title}</h1>
          <p></p>
          <p>{article.fields.content}</p>
          <p>{article.fields.arttext}</p>
          <p>{article.fields.date}</p>
          <img src={'https:'+articles.includes?.Asset[index]?.fields.file.url} alt="aas" />
        </div>
      ))}
    </div>
  );
};

export default Article;
