import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import { YouTubeCard } from "../components/YouTubeCard/YouTubeCard";

const projects = [
  {
    id: "r3Q3HRs5Nl8",
    permalink: "https://www.youtube.com/watch?v=r3Q3HRs5Nl8",
    formattedDate: "October 23rd, 2020",
    title: "How to Become a Chief Technology Officer (CTO)",
  },
  {
    id: "AABZMJcqVA4",
    permalink: "https://www.youtube.com/watch?v=AABZMJcqVA4",
    formattedDate: "December 05th, 2018",
    title: "The Many Roles of a Startup CTO",
  },
  {
    id: "GzdsUo1cYQY",
    permalink: "https://www.youtube.com/watch?v=GzdsUo1cYQY",
    formattedDate: "February 16th, 2022",
    title: "10 questions to ask Chief Technology Officer",
  },
];

function Projects() {
  return (
    <Layout title="Youtube">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Youtube Showcase</h1>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {projects.map((project) => (
                <div className="card-demo margin--md">
                  <div className="card shadow--tl">
                    <div className="card__header">
                      <h3 style={{ maxWidth: "560px" }}>
                        <Link to={project.permalink}>{project.title}</Link>
                      </h3>
                      <h4>{project.formattedDate}</h4>
                    </div>
                    <YouTubeCard
                      id={project.id}
                      title={project.title}
                    ></YouTubeCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
