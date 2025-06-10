import React from 'react';
import styles from './styles.module.css';
import useGithubRepositories, { Repository } from '../../hooks/useGithubRepositories';
import { GithubCard } from '@site/src/components/GithubCard';

export default function GithubProjects() {
  const maxPerPage = 24;
  const { repositories } = useGithubRepositories('nagvbt', {
    type: 'owner',
    sort: 'pushed',
    direction: 'desc',
    per_page: maxPerPage,
    page: 0
  });

  return (
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
  );
}
