/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import talks from './talks-data';
import { PageHeader } from '@site/src/components/PageHeader';
import { Talk } from '@site/src/components/Talk';

export default function Talks(): JSX.Element {
  return (
    <Layout title="Youtube">
      <PageHeader title="Talks" subTitle="Talks and Vedios"></PageHeader>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {talks.map((project) => (
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
      </main>
    </Layout>
  );
}
