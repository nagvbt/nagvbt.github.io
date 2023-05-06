import React from "react";

export function YouTubeCard({ id, title }) {
  return (
    <div className="card__image padding--md">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
