/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';
import { HeaderProps } from './types';

export default function PageHeader({ title, subTitle, variant }: HeaderProps): JSX.Element {
  return (
    <>
      {variant == 'lined' ? (
        <div className={styles.plainBanner}>
          <div className="container">
            <h1 className={styles.underlinedTitle}>{title}</h1>
            <p>{subTitle}</p>
          </div>
        </div>
      ) : (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subTitle}</p>
          </div>
        </header>
      )}
    </>
  );
}
