/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import { PageHeader } from '../PageHeader';
import PaginatorNavLink from '@theme/PaginatorNavLink';

type BlogPostsListProps = {
  title: string;
  numberOfPosts: number;
};

/* eslint @typescript-eslint/no-require-imports: "off" */
const recentPosts = require('../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');

export default function BlogPostsList({ title, numberOfPosts }: BlogPostsListProps): JSX.Element {
  return (
    <div className="container margin-bottom--lg">
      <div className="row">
        <div className="col col--9 col--offset-1">
          <p></p>
          <PageHeader variant="lined" title={title}></PageHeader>
          <ul>
            {recentPosts.items.slice(0, numberOfPosts).map((item, index) => (
              <li key={index}>
                {/* // Extract the date from permalink */}
                <span>{item.permalink.slice(6, 16).replaceAll('/', '-')}</span>
                <a href={`${item.permalink}`}>
                  <h3>{item.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col col--5 col--offset-5">
          <PaginatorNavLink isNext permalink="/blog/page/2" title="Older Entries" />
        </div>
      </div>
    </div>
  );
}
