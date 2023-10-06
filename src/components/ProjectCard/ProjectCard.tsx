/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { ProjectCardProps } from './types';

export default function ProjectCard({
  title,
  imageUrl,
  slug,
  period,
  bgColor,
  subtitle
}: ProjectCardProps): JSX.Element {
  const bg = bgColor == 'alternate' ? styles.bgDanger : styles.bgSuccess;

  return (
    <div className={clsx('col col--4', styles.cardContainer)}>
      <div className={clsx('card', styles.card)}>
        {imageUrl ? (
          <div className={clsx('card__image', styles.image)}>
            <img src={useBaseUrl(imageUrl)} alt={title} />
          </div>
        ) : (
          <div className={bg}>
            <h2>{title}</h2>
          </div>
        )}
        <div className="card__body">
          <div>
            <h3>{title}</h3>
            <p className={styles.secondaryText}>{period}</p>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="card__footer">
          <Link to={useBaseUrl(slug)} className="button button--primary button--outline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
