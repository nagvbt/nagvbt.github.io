import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BookReview from '../components/BookReview/BookReview';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Books() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader title="Book Reviews" subTitle="Books that I had completed reading recently." />
      <div className="container">
        <p></p>
        <BookReview></BookReview>
      </div>
    </Layout>
  );
}
