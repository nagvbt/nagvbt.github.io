/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import { PageHeader } from '@site/src/components/PageHeader';
import { ReactTyped } from '@site/src/components//ReactTyped';
import { SocialFollow } from '@site/src/components//SocialFollow';
import CaseConvert from '@site/src/components/CaseConvert/CaseConvert';
import { ProjectListings } from '../Projects/Projects';
import { Talk } from '@site/src/components/Talk';
import styles from '../Talks/styles.module.css';
import data from '../Talks/data.json';
import { GithubProjects } from '@site/src/components/GithubProjects';

export default function UI(): JSX.Element {
  return (
    <Layout title="UI">
      <PageHeader title="UI" subTitle="Component Library"></PageHeader>
      <main className="container">
        <div id="Page Header Demo">
          <h1>1. Page Header</h1>
          <h3>lined PageHeader</h3>

          <PageHeader variant="lined" title="My Projects"></PageHeader>
        </div>
        <div id="Typed Demo">
          <h1>2. Typed Demo</h1>
          <p>
            Typed.js is a library that types. Enter in any string, and watch it type at the speed
            you've set, backspace what it's typed, and begin a new sentence for however many strings
            you've set.
          </p>
          <h2>
            <ReactTyped
              strings={['Full Stack Developer', 'Architect . Innovator . Mentor']}
              typeSpeed={75}
            />
          </h2>
        </div>
        <div id="SocialFollow">
          <h1>3. Social Follow</h1>
          <SocialFollow></SocialFollow>
        </div>

        <div id="Projects">
          <h1>4. Projects</h1>
          <ProjectListings></ProjectListings>
        </div>

        <div id="Talks">
          <h1>5. Talks</h1>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {data.talks.map((project) => (
                  <Talk
                    title={project.title}
                    id={project.id}
                    permalink={project.permalink}
                    formattedDate={project.formattedDate}
                  ></Talk>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div id="GithubProjects">
          <h1>6. Github Projects</h1>
          <GithubProjects></GithubProjects>
        </div>
      </main>
    </Layout>
  );
}
