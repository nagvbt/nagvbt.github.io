import React from 'react';
import MDXContent from '@theme/MDXContent';
import Layout from '@theme/Layout';
import { PageHeader } from '../../components/PageHeader';

import Terms from './_terms.mdx';

export default function TermsPage(): JSX.Element {
  return (
    <Layout>
      <PageHeader title="Terms of Use" />
      <div className="docMainWrapper wrapper">
        <div className="container margin-vert--xl">
          <MDXContent>
            <Terms />
          </MDXContent>
        </div>
      </div>
    </Layout>
  );
}
