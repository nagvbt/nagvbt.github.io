import React from 'react';
import {
  faYoutube,
  faFacebook,
  faXTwitter,
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function SocialFollow() {
  return (
    <div className="">
      <a
        href="https://www.linkedin.com/in/nagvbt/"
        className={clsx(styles.linkedin, styles.social)}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/nagvbt" className={clsx(styles.youtube, styles.social)}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/NagVbt" className={clsx(styles.twitter, styles.social)}>
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/people/Nag-Vbt/100023898528104/"
        className={clsx(styles.facebook, styles.social)}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
    </div>
  );
}
