/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import MDXContent from '@theme/MDXContent';
import Layout from '@theme/Layout';
import { PageHeader } from '../../components/PageHeader';

import Disclaimer from './_disclaimer.mdx';

export default function DisclaimerPage(): JSX.Element {
  return (
    <Layout>
      <PageHeader title="Disclaimer" />
      <div className="docMainWrapper wrapper">
        <div className="container margin-vert--xl">
          <MDXContent>
            <Disclaimer />
          </MDXContent>
        </div>
      </div>
    </Layout>
  );
}
