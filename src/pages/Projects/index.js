import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import LinkIcon from "@mui/icons-material/Link";

import styles from "./styles.module.css";
import projects from "../../data/projects-data";

export function ProjectListings() {
  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div className={clsx("col col--4", styles.feature)}>
            <div className="card shadow--tl margin--md">
              <div className="card__header">
                <div id={project.title} key={project.title + "-card"}>
                  <Link to={useBaseUrl(project.slug)}>
                    <div>
                      <img
                        src={useBaseUrl(project.imageUrl)}
                        alt={project.title}
                      />
                    </div>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                      <p className={styles.fontBold}>Read more</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectListing(props) {
  const projectItem = props.projectItem;
  return (
    <div className={clsx(styles.projectItem)}>
      <Link to={useBaseUrl("/projects")}>
        <button className="button button--secondary button--lg">Back</button>
      </Link>
      <h1>{projectItem.title}</h1>
      <h2>{projectItem.subtitle}</h2>
      {projectItem.imageUrl && (
        <img src={useBaseUrl(projectItem.imageUrl)} alt={projectItem.title} />
      )}
      <div>
        <ul>
          <li>{projectItem.category}</li>
          <li>{projectItem.tech}</li>
        </ul>
        <b>Description</b>
        <div>{projectItem.description}</div>
        {projectItem.links && (
          <>
            <b>Links</b>
            <ul>
              {projectItem.links.map((link, i) => (
                <li key={i}>
                  <a href={link.link}>
                    <LinkIcon></LinkIcon> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to={useBaseUrl("/projects")}>
        <button className="button button--primary button--lg">
          More projects
        </button>
      </Link>
    </div>
  );
}

export default function Projects() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [loaded, setLoaded] = useState(false);
  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(projects[0]);
  const slug = useLocation();

  useEffect(() => {
    function handleTransition() {
      let foundProject;
      if (slug.hash) {
        foundProject = projects.find((project) => project.slug == slug.hash);
      }

      if (foundProject) {
        setProjectItem(foundProject);
        setShowProjectItem(true);
        window.scrollTo(0, 0);
      } else {
        setShowProjectItem(false);
      }

      setLoaded(true);
    }

    handleTransition();
  });

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h2 className="hero__title">My projects</h2>
        </div>
      </header>
      <main>
        <section className={styles.projFeatures}>
          {loaded && (
            <div>
              {!showProjectItem && <ProjectListings />}
              {showProjectItem && <ProjectListing projectItem={projectItem} />}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
