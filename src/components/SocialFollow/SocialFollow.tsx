import React from 'react';
import {
  faYoutube,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faGithub,
  faStackOverflow,
  faInstagram,
  faThreads,
  faDev
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function SocialFollow() {
  return (
    <div className="">
      <a href="https://www.youtube.com/@mrnbt" className={clsx(styles.youtube, styles.social)}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/nbt7/" className={clsx(styles.linkedin, styles.social)}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/mrnbt7" className={clsx(styles.youtube, styles.social)}>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://x.com/mr_nbt7" className={clsx(styles.x, styles.social)}>
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a
        href="https://stackoverflow.com/users/30661039/nbt"
        className={clsx(styles.stackOverflow, styles.social)}
      >
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>

      <a href="https://www.facebook.com/mrnbt.in" className={clsx(styles.facebook, styles.social)}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/mr_nbt7/"
        className={clsx(styles.instagram, styles.social)}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.threads.com/@mr_nbt7" className={clsx(styles.threads, styles.social)}>
        <FontAwesomeIcon icon={faThreads} size="2x" />
      </a>
      <a href="https://dev.to/nbt" className={clsx(styles.dev, styles.social)}>
        <FontAwesomeIcon icon={faDev} size="2x" />
      </a>
    </div>
  );
}
