import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import Socials from "../components/Socials/Socials";
import Typed from "../components/Typed";

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <section>
          <div className="row">
            <div className="col col--6">
              <h1>Nag VBT</h1>
              <p>B.Tech, M.Tech, M.B.A, LL.B</p>
              <p className="hero__subtitle">
                <Typed
                  strings={[
                    "Full Stack Developer",
                    "Architect . Innovator . Mentor",
                  ]}
                  typeSpeed={75}
                />
              </p>
              {/* <p className="hero__subtitle">Architect . Innovator . Mentor</p> */}
              <div className={styles.buttons}>
                <div className={styles.link}>
                  <Link
                    className="button button--primary button--lg"
                    to="/about"
                  >
                    About Me
                  </Link>
                </div>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"
                >
                  Articles
                </Link>
              </div>
              <p className="padding-top--md">
                Explore <strong>Web</strong>, <strong>Mobile</strong>,{" "}
                <strong>Microservices</strong>, <strong>Destop</strong>, and{" "}
                <strong>AI</strong> architectures
              </p>
            </div>
            <div className="col col--6">
              <img
                className={styles.logo}
                src={useBaseUrl("/img/logo.png")}
                alt="Gotenberg Hero Logo"
              />
              <Socials />
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
      </main>
    </Layout>
  );
}
