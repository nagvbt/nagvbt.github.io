/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description: BookCard
 *
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function BookCard({ title, imgSrc, url }) {
  return (
    <div className="row card-demo margin--sm">
      <div className="card shadow--tl">
        <a href={url} className="card__image padding--sm">
          <img src={useBaseUrl(imgSrc)} alt={title} className={styles.image}></img>
        </a>
        <div className={styles.cardFooter}>
          <a href={url}>
            <b>{title}</b>
          </a>
        </div>
      </div>
    </div>
  );
}
