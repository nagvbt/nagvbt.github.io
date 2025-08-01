import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import { SocialFollow } from '../components/SocialFollow';
import { ReactTyped } from '../components/ReactTyped';
import clsx from 'clsx';
import { BlogPostsList } from '../components/BlogPostsList';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <section>
          <div className="row">
            <div className="col col--6">
              <h1>NBT.</h1>
              <p>M.Tech (AI), LL.M (CS), M.Tech (ES), M.B.A (Entrep), B.Tech (ECE), LL.B</p>
              <p className="hero__subtitle">
                <ReactTyped
                  strings={['Architect . Innovator . Mentor', 'Tech Enthusiast']}
                  typeSpeed={75}
                />
              </p>
              {/* <p className="hero__subtitle">Architect . Innovator . Mentor</p> */}
              <div className={styles.buttons}>
                <div className={styles.link}>
                  <Link className="button button--primary button--lg" to="/About">
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        {<BlogPostsList title="Blog Posts" numberOfPosts={7} />}
      </main>
    </Layout>
  );
}
