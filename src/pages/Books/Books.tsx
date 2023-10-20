/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description: Books
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BookCard from '../../components/BookCard/BookCard';
import PageHeader from '../../components/PageHeader/PageHeader';
import biography from './data/biography.json';
import startup from './data/startup.json';
import medicine from './data/medicine.json';
import selfhelp from './data/selfhelp.json';
import tech from './data/tech.json';

export default function Books(): JSX.Element {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader
        title="Bookshelf"
        subTitle=" my favorites on personal growth, technology, innovation, leadership and startups"
      />
      <div className="container container--fluid margin-vert--lg">
        {/* biography */}
        <br />
        <h3>Biography</h3>
        <div className="row">
          {biography.biography.map((book) => (
            <BookCard title={book.title} imgSrc={book.imgSrc} url={book.url} />
          ))}
        </div>

        {/* Self Help */}
        <br />
        <h3>Self Help </h3>
        <div className="row">
          {selfhelp.selfhelp.map((book) => (
            <BookCard title={book.title} imgSrc={book.imgSrc} url={book.url} />
          ))}
        </div>

        {/* AI */}
        <br />
        <h3>Tech</h3>
        <div className="row">
          {tech.tech.map((book) => (
            <BookCard title={book.title} imgSrc={book.imgSrc} url={book.url} />
          ))}
        </div>

        {/* Startup */}
        <br />
        <h3>Startup</h3>
        <div className="row">
          {startup.startup.map((book) => (
            <BookCard title={book.title} imgSrc={book.imgSrc} url={book.url} />
          ))}
        </div>

        {/* Medicine */}
        <br />
        <h3>Medicine</h3>
        <div className="row">
          {medicine.medicine.map((book) => (
            <BookCard title={book.title} imgSrc={book.imgSrc} url={book.url} />
          ))}
        </div>
      </div>
      <br />
    </Layout>
  );
}
