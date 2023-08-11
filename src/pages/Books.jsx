import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BookReview from "../components/BookReview/BookReview";
import PageHeader from "../components/PageHeader/PageHeader";

export default function Books() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader title="Book Reviews" />
      <div className="container">
        <br></br>
        <BookReview></BookReview>
        {/*     <h1>Read below books</h1>
       <GoodreadsBookshelf
          userId="89489948"
          shelf="read"
          groupBy="year"
          width="130px"
          limit="100"
          sort="read_count"
        /> */}
      </div>
    </Layout>
  );
}
