/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ProjectCard } from '../../components/ProjectCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCode,
  faFile,
  faGamepad,
  faLink,
  faTools,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { PageHeader } from '@site/src/components/PageHeader';

import styles from './styles.module.css';
import projects from './data';

function CategoryIcon({ category, size = '1x' }) {
  let faIcon;
  switch (category) {
    case 'Project':
      faIcon = faFile;
      break;
    case 'Open Source Tool':
      faIcon = faTools;
      break;
    case 'Website':
      faIcon = faChrome;
      break;
    case 'Game':
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }

  return <FontAwesomeIcon alt={category} size={size} icon={faIcon} />;
}

export function ProjectListings() {
  return (
    <div>
      <main className="container container--fluid margin-vert--lg">
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export function ProjectListing(props) {
  const projectItem = props.projectItem;
  return (
    <div className={clsx(styles.projectItem)}>
      <br />

      <Link to={useBaseUrl('/projects')}>
        <button className="button button--primary button--outline button--lg">Back</button>
      </Link>
      <h1>{projectItem.title}</h1>
      <h2>{projectItem.subtitle}</h2>
      {projectItem.imageUrl && (
        <img src={useBaseUrl(projectItem.imageUrl)} alt={projectItem.title} />
      )}
      <div>
        <ul>
          <li>
            <CategoryIcon category={projectItem.category} /> {projectItem.category}
          </li>
          <li>
            <FontAwesomeIcon alt="Calendar" icon={faCalendar} /> {projectItem.period}
          </li>
          <li>
            <FontAwesomeIcon alt="Code" icon={faCode} /> {projectItem.tech}
          </li>
          {projectItem.team && (
            <li>
              <FontAwesomeIcon alt="Team" icon={faUsers} />{' '}
              {projectItem.team.map((member, i) => (
                <span key={i}>
                  {member.link && <a href={member.link}>{member.name}</a>}
                  {!member.link && member.name}
                  {i < projectItem.team.length - 1 ? ', ' : ''}
                </span>
              ))}
            </li>
          )}
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
                    <FontAwesomeIcon alt="Link" icon={faLink} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to={useBaseUrl('/projects')}>
        <button className="button button--primary button--lg">More projects</button>
      </Link>
      <p></p>
    </div>
  );
}

export default function Projects(): JSX.Element {
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
      {loaded && (
        <main className="container container--fluid margin-vert--lg">
          <PageHeader variant="lined" title="My Projects"></PageHeader>
          <div>
            {!showProjectItem && <ProjectListings />}
            {showProjectItem && <ProjectListing projectItem={projectItem} />}
          </div>
        </main>
      )}
    </Layout>
  );
}
