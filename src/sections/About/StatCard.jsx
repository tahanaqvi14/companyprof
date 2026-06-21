import React from "react";

export default function StatCard({ target, suffix, label }) {
  return (
    <div className="num-cell">
      <span className="num-big" data-t={target} data-s={suffix}>
        0
      </span>
      <span className="num-lbl">{label}</span>
    </div>
  );
}