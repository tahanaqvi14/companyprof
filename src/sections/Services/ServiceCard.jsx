import React from "react";

export default function ServiceCard({ number, name, tags }) {
  return (
    <div className="srv-item">
      <span className="srv-n">{number}</span>

      <div className="srv-info">
        <span className="srv-name">{name}</span>

        <div className="srv-tags">
          {tags.map((tag, i) => (
            <span className="srv-tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className="srv-arrow">↗</span>
    </div>
  );
}