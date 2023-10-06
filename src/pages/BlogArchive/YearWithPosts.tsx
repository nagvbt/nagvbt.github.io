/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { YearPostsProps } from './types';

export function YearWithPosts({ year, posts }: YearPostsProps) {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <h3>{year}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.date}>
            <Link to={post.permalink}>
              {post.title} [{post.formattedDate}]
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
