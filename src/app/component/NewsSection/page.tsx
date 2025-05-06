"use Client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { NewsItem } from "@/app/type/newsdata";

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLOading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLOading(false);
      });
  }, []);

  if (loading)
    return <p className={`text-center`}>Loading latest updates...</p>;

  return (
    <div className={`container-fluid pt-1 py-5 ${styles.newsWrapper}`}>
      <h3 className={`my-5 ${styles.news_title}`}>Latest News and Insights</h3>
      <div className={`container`}>
        <div className={styles.news_card_wrapper}>
          {news.map((newsCard) => (
            <div className={`card`} key={newsCard.id}>
              <img src={newsCard.image} className={`card-img-top ${styles.card_img }`} alt="..." />
              <div className={`p-3 ${styles.card_body}`}>
                <h5 className={styles.card_title}>{newsCard.title}</h5>
                <p className={styles.card_text}>{newsCard.summary}</p>
                <span className={`text-sm text-gray-500`}>
                  • {new Date(newsCard.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
