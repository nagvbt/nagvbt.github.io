/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import { PageHeader } from '../../components/PageHeader';
import { YearWithPosts } from './YearWithPosts';
import { YearPostsProps, BlogPost } from './types';

export default function BlogArchive(): JSX.Element {
  return (
    <Layout title="Blog Archive">
      <PageHeader title="Blog Archive" subTitle="All the posts I ever wrote!" />
      <main>
        {yearsOfPosts && yearsOfPosts.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {yearsOfPosts.map((props, idx) => (
                  <YearWithPosts key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

const allBlogPosts: BlogPost[] = ((ctx) => {
  const blogPostNames = ctx.keys();

  return blogPostNames.reduce(
    (blogPosts: BlogPost[], blogPostName: string, i) => {
      const module = ctx(blogPostName);
      const { date, formattedDate, title, permalink } = module.metadata;
      return [
        ...blogPosts,
        {
          date,
          formattedDate,
          title,
          permalink
        }
      ];
    },
    /** @type {BlogPost[]}>} */ []
  );
})(require.context('../../../blog/', true, /.md/));

const postsByYear: Map<string, BlogPost[]> = allBlogPosts.reduceRight((posts, post) => {
  const year = post.date.split('-')[0];
  const yearPosts = posts.get(year) || [];
  return posts.set(year, [post, ...yearPosts]);
}, new Map<string, BlogPost[]>());

const yearsOfPosts: YearPostsProps[] = Array.from(postsByYear, ([year, posts]) => ({
  year,
  posts
}));
