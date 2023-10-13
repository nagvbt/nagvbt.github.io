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
import clsx from 'clsx';
import Link from '@docusaurus/Link';

type BlogPost = {
  title: string;
  permalink: string;
  date: string;
  formattedDate: string;
};

type YearPostsProps = {
  year: string;
  posts: BlogPost[];
};

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

function YearWithPosts({ year, posts }: YearPostsProps): React.JSX.Element {
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <h3>
        {year} — {posts.length}
        {posts.length > 1 ? ' posts' : ' post'}
      </h3>
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
