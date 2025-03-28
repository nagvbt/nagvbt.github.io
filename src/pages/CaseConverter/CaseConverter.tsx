/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import { PageHeader } from '@site/src/components/PageHeader';
import { CaseConvert } from '@site/src/components/CaseConvert';

export default function CaseConverter() {
  return (
    <Layout title="CaseConverter">
      <PageHeader variant="lined" title="Case Converter"></PageHeader>
      <main>
        <section>
          <div className="container">
            <CaseConvert></CaseConvert>
          </div>
          <br />
        </section>
      </main>
    </Layout>
  );
}
