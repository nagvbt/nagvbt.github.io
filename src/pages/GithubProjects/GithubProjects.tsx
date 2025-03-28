import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import { PageHeader } from '@site/src/components//PageHeader';
import styles from './styles.module.css';
import useGithubRepositories, { Repository } from '../../hooks/useGithubRepositories';
import { GithubCard } from '@site/src/components/GithubCard';

export default function GithubProjects(): JSX.Element {
  const maxPerPage = 24;
  const { repositories } = useGithubRepositories('nagvbt', {
    type: 'owner',
    sort: 'pushed',
    direction: 'desc',
    per_page: maxPerPage,
    page: 0
  });

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

      <div className={styles.github_container}>
        <section className={styles.features}>
          <div role="projects">
            {repositories.length > 0 ? (
              repositories.map((repo: Repository, i: number) => (
                <GithubCard key={i} repository={repo} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}
