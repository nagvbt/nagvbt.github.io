import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function PageHeader({ title, subTitle }) {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subTitle}</p>
      </div>
    </header>
  );
}
