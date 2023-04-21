import React from 'react';
import './ActivityLogs.scss';
import { ActivityLogData } from "./ActivityLogData";
import { Link } from "react-router-dom";

const ActivityLog = () => {
  return (
    <div className="container-activity-log">
      <div className="activity-log-dashboard">
        <div className="news-header">
          <div className="news-title">
            <h3>Activity log</h3>
          </div>
          <div className="news-see-all">
            <button>See all</button>
          </div>
        </div>
        <div className="news-content">
          {ActivityLogData.map((item, index) => {
            return (
              <Link className="news-link" to={item.to} key={index}>
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityLog
