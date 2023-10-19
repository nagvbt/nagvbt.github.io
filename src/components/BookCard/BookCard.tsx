/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description: BookCard
 *
 */

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function BookCard({ title, imgSrc, url }) {
  return (
    <div className={clsx('col col--2 margin--sm', styles.cardContainer)}>
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
