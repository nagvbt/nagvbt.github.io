/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import { PageHeader } from '@site/src/components/PageHeader';
import { ReactTyped } from '../../components/ReactTyped';
import { SocialFollow } from '../../components/SocialFollow';
import CaseConvert from '@site/src/components/CaseConvert/CaseConvert';

export default function UI(): JSX.Element {
  return (
    <Layout title="UI">
      <PageHeader title="UI" subTitle="Component Library"></PageHeader>
      <main className="container">
        <div id="Page Header Demo">
          <h1>1. Page Header</h1>
          <h3>lined PageHeader</h3>

          <PageHeader variant="lined" title="My Projects"></PageHeader>
        </div>
        <div id="Typed Demo">
          <h1>2. Typed Demo</h1>
          <p>
            Typed.js is a library that types. Enter in any string, and watch it type at the speed
            you've set, backspace what it's typed, and begin a new sentence for however many strings
            you've set.
          </p>
          <h2>
            <ReactTyped
              strings={['Full Stack Developer', 'Architect . Innovator . Mentor']}
              typeSpeed={75}
            />
          </h2>
        </div>
        <div id="SocialFollow">
          <h1>3. Social Follow</h1>
          <SocialFollow></SocialFollow>
        </div>
        <br />
        <CaseConvert></CaseConvert>
        <br />
      </main>
    </Layout>
  );
}
