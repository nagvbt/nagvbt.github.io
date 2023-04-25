import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
const features = [
  {
    title: <>Recent Blog Posts</>,
    imageUrl: "",
    description: (
      <>
        <ul>
          {recentPosts.items.slice(0, 5).map((item, index) => (
            <li key={index}>
              <a href={`${item.permalink}`}>{item.title}</a>{" "}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: <>Document Structure</>,
    imageUrl: "",
    description: (
      <>
        <p>
          <b>
            <a href="books">Books</a>.
          </b>{" "}
          All about Book Reviews.
        </p>
        <p>
          <b>
            <a href="docs/category/maang">MAANG</a>.
          </b>{" "}
          MAANG Interview Preparation.
        </p>
        <p>
          <b>
            <a href="docs/category/c-2">C#</a>.
          </b>{" "}
          Articles on C#.
        </p>
      </>
    ),
  },
  {
    title: <>Popular Topics</>,
    imageUrl: "",
    description: (
      <>
        <ul style={{ flex: "1" }}>
          <li>
            <a href="docs/category/languages">Language Comparision</a>
          </li>
          <li>
            <a href="docs/category/c-1">Master C++</a>
          </li>
          <li>
            <a href="docs/category/c">Master C</a>
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {features && features.length && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
