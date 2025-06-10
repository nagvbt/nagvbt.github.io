import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import { PageHeader } from '@site/src/components//PageHeader';
// import styles from './styles.module.css';
// import useGithubRepositories, { Repository } from '../../hooks/useGithubRepositories';
// import { GithubCard } from '@site/src/components/GithubCard';
import { GithubProjects } from '@site/src/components/GithubProjects';

export default function GithubProjectsPage() {
  const title = translate({
    id: 'githubprojects.title',
    message: 'My open-source projects',
    description: "The author's open-source projects"
  });
  const description = translate({
    id: 'githubprojects.description',
    message: 'Most up-to-date projects!',
    description: 'A description for the open-source projects'
  });

  return (
    <Layout title={title} description={description}>
      <PageHeader title={title} subTitle={description} />

      <GithubProjects></GithubProjects>
    </Layout>
  );
}
