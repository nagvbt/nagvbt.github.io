import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import data from './book-review.json';

export default function BookReview() {
  return (
    <div className="row">
      {data.data.map((book) => (
        <div className="row card-demo margin--md">
          <div className="card shadow--tl">
            <a href={book.url} className="card__image padding--md">
              <img src={useBaseUrl(book.imgSrc)} style={{ width: '11rem', height: '15rem' }}></img>
            </a>
            <div style={{ padding: '0 1rem 1rem', width: '12rem', textAlign: 'center' }}>
              <a href={book.url}>
                <b className="card_footer">{book.title}</b>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
