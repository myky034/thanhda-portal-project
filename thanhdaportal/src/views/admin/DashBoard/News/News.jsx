import React from "react";
import "./News.scss";
import { NewsData } from "./NewsData";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="container-news">
      <div className="news-dashboard">
        <div className="news-header">
          <div className="news-title">
            <h3>News</h3>
          </div>
          <div className="news-see-all">
            <button>See all</button>
          </div>
        </div>
        <div className="news-content">
          {NewsData.map((item, index) => {
            return <Link className="news-link" to={item.to} key={index}>
              <div className="news-list-item">
                <div className="news-icon">{item.icon}</div>
                <div className="news-list-content">
                  <div className="news-list-header">
                    {item.tag}
                    {item.title}
                  </div>
                  <div className="news-list-subheader">
                    {item.author}
                    {item.datetime}
                  </div>
                  <div className="news-list-subcontent">{item.content}</div>
                </div>
              </div>
            </Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
