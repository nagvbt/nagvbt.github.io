/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import { YouTubeCard } from '../YouTubeCard';
import Link from '@docusaurus/Link';
import { TalkProps } from './types';

export default function Talk({ title, id, permalink, formattedDate }: TalkProps): JSX.Element {
  return (
    <div className="card-demo margin--md">
      <div className="card shadow--tl">
        <div className="card__header">
          <h3 style={{ maxWidth: '560px' }}>
            <Link to={permalink}>{title}</Link>
          </h3>
          <h4>{formattedDate}</h4>
        </div>
        <YouTubeCard id={id} title={title}></YouTubeCard>
      </div>
    </div>
  );
}
