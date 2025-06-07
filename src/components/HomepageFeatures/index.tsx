/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

/* eslint @typescript-eslint/no-require-imports: "off" */
const recentPosts = require('../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');

const features = [
  {
    title: 'Popular Topics',
    imageUrl: 'img/icons/popular-topics.svg',
    links: [
      {
        title: '📝 Articles',
        url: 'docs/popular/developer-docs'
      },
      {
        title: '🧠 Language Comparison',
        url: 'docs/category/languages-comparison'
      },
      {
        title: '🌍 Travel',
        url: 'blog/tags/travel'
      },

      {
        title: '🎓 Tutorials',
        url: 'docs/Tutorials/WCF'
      }
    ]
  },
  {
    title: 'Programming Languages',
    imageUrl: 'img/icons/programming.svg',
    links: [
      {
        title: '🐍 Python',
        url: 'docs/python/intro'
      },
      {
        title: '🔷 C#',
        url: 'docs/csharp/intro'
      },
      {
        title: '💻 C++',
        url: 'docs/cpp/intro'
      },
      {
        title: '💻 C',
        url: 'docs/c/intro'
      }
    ]
  },
  {
    title: 'Frameworks',
    imageUrl: 'img/icons/frameworks.svg',
    links: [
      {
        title: '⚛️ React',
        url: 'docs/react/intro'
      },
      {
        title: '🅰️ Angular',
        url: 'blog/tags/angular'
      },
      {
        title: '🧡 Svelte',
        url: 'docs/Svelte/intro'
      },
      {
        title: '📱 Ionic',
        url: 'blog/tags/ionic'
      }
    ]
  },

  {
    title: 'Resources',
    imageUrl: 'img/icons/resources.svg',
    links: [
      {
        title: 'Books',
        url: 'books'
      },
      {
        title: 'Projects',
        url: 'GithubProjects'
      }
    ]
  },
  {
    title: 'Tools',
    imageUrl: 'img/icons/document-structure.svg',
    links: [
      {
        title: 'Case Converter',
        url: 'CaseConverter'
      },
      {
        title: 'My Tool Box',
        url: 'docs/Others/Tools'
      }
    ]
  }

  // {
  //   title: 'Recent Blog Posts',
  //   imageUrl: 'img/icons/blog-posts.svg',
  //   isFullWidth: true,
  //   links: recentPosts.items.slice(0, 8).map(item => ({
  //     title: item.title,
  //     url: item.permalink
  //   }))
  // },
];

function Feature({ imageUrl, title, links, isFullWidth }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <article className={clsx(styles.featureCard, isFullWidth && styles.fullWidthCard)}>
      <div className={styles.featureCardContent}>
        <div className={styles.featureHeader}>
          {imgUrl && <img src={imgUrl} alt={`${title} icon`} className={styles.featureIcon} />}
          <h2>{title}</h2>
        </div>
        <div className={styles.featureLinks}>
          <ul className={isFullWidth ? styles.multiColumnList : ''}>
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featureGrid}>
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
