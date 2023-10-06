import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
// import Socials from '../components/Socials/Socials';
import { SocialFollow } from '../components/SocialFollow';
import { ReactTyped } from '../components/ReactTyped';
import clsx from 'clsx';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import { PageHeader } from '../components/PageHeader';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <section>
          <div className="row">
            <div className="col col--6">
              <h1>NBT.</h1>
              <p>M.Tech, B.Tech, SDBME, MBA, LL.B</p>
              <p className="hero__subtitle">
                <ReactTyped
                  strings={['Full Stack Developer', 'Architect . Innovator . Mentor']}
                  typeSpeed={75}
                />
              </p>
              {/* <p className="hero__subtitle">Architect . Innovator . Mentor</p> */}
              <div className={styles.buttons}>
                <div className={styles.link}>
                  <Link className="button button--primary button--lg" to="/about">
                    About Me
                  </Link>
                </div>
                <Link
                  className="button button--primary button--outline button--lg"
                  to="/docs/intro"
                >
                  Articles
                </Link>
              </div>
              <p className="padding-top--md">
                Explore <strong>Web</strong>, <strong>Mobile</strong>,{' '}
                <strong>Microservices</strong>, <strong>Desktop</strong>, and <strong>AI</strong>{' '}
                architectures
              </p>
            </div>
            <div className="col col--6">
              <img className={styles.logo} src={useBaseUrl('/img/logo.png')} alt="NBT Logo" />
              <SocialFollow />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const recentPosts = require('../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHeader />
        {/* <HomepageFeatures /> */}

        <div className="container margin-bottom--lg">
          <div className="row">
            <div className="col col--9 col--offset-1">
              <p></p>
              <PageHeader variant="lined" title="Blog Posts"></PageHeader>
              <>
                <ul>
                  {recentPosts.items.slice(0, 10).map((item, index) => (
                    <li key={index}>
                      <span>{item.permalink.slice(6, 16).replaceAll('/', '-')}</span>
                      <a href={`${item.permalink}`}>
                        <h3>{item.title}</h3>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            </div>
          </div>
          <div className="row">
            <div className="col col--5 col--offset-5">
              <PaginatorNavLink isNext permalink="/blog/page/2" title="Older Entries" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
