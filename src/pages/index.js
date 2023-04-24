import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import { Socials } from "../components/HomepageFeatures/Socials";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>Nag VBT</h1>
            <p>M.Tech, M.B.A, B.Tech, L.L.B</p>
            <p className="hero__subtitle">Architect . Innovator . Mentor</p>
            <div className={styles.buttons}>
              <div className={styles.link}>
                <Link className="button button--primary button--lg" to="/about">
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
      </div>
    </header>
    // <header className={clsx("hero", styles.heroBanner)}>
    //   <div className="container">
    //     {/* <h1>Nag VBT</h1>
    //     <p>M.Tech, M.B.A, L.L.B, B.Tech, S.D.B.M.E</p> */}
    //     <Box sx={{ display: "flex" }}>
    //       <Box m="auto">
    //         <Avatar
    //           alt="Nag VBT"
    //           src={useBaseUrl("/img/logo.png")}
    //           sx={{ width: 150, height: 150, m: 2 }}
    //         />
    //       </Box>
    //     </Box>

    //     <p className="hero__subtitle">Architect . Innovator . Mentor</p>
    //     <Socials />
    //     <div className={styles.buttons}>
    //       <div className={styles.link}>
    //         <Link
    //           className="button button--outline button--primary button--lg"
    //           to="/about"
    //         >
    //           About Me
    //         </Link>
    //       </div>
    //       <Link
    //         className="button button--outline button--primary button--lg"
    //         to="/docs/intro"
    //       >
    //         Articles
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // console.log(recentPosts.items[0].get());
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      {/* <div>
        {recentPosts.items.slice(0, 5).map((item, index) => (
          <div key={index}>
            <a href={`${item.permalink}`}>{item.title}</a>{" "}
          </div>
        ))}
      </div> */}
    </Layout>
  );
}
