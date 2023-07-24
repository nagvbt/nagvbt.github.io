import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BookReview from "../components/BookReview/BookReview";

export default function Books() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <div className="container">
        <h1>Book Reviews</h1>
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
