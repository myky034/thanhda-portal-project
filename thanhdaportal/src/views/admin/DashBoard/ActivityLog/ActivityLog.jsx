import React from 'react';
import './ActivityLogs.scss';
import { ActivityLogData } from "./ActivityLogData";
import { Link } from "react-router-dom";

const ActivityLog = () => {
  return (
    <div className="container-activity-log">
      <div className="activity-log-dashboard">
        <div className="activity-header">
          <div className="activity-title">
            <h3>Activity log</h3>
          </div>
          <div className="activity-see-all">
            <button>See all</button>
          </div>
        </div>
        <div className="activity-content">
          {ActivityLogData.map((item, index) => {
            return (
              <Link className="activity-link" to={item.to} key={index}>
                <div className="activity-list-item">
                  <div className="activity-icon">{item.icon}</div>
                  <div className="activity-list-content">
                    <div className="activity-list-header">
                      {item.tag}
                      {item.title}
                    </div>
                    <div className="activity-list-subheader">
                      {item.author}
                      {item.datetime}
                    </div>
                    <div className="activity-list-subcontent">{item.content}</div>
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
