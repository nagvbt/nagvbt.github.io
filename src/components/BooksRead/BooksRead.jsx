import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function BooksRead() {
  return (
    <div className="container">
      <h2>Recently Read</h2>
      <GoodreadsBookshelf
        userId="89489948-nagvbt"
        limit="10"
        sort="date_read"
        width="110px"
      />
      <div className={styles.seeMore}>
        <b>
          <Link to="/books">See More</Link>
        </b>
      </div>
    </div>
  );
}
