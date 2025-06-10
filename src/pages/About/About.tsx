/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description: Visually enhanced About page with slideshow, cards, and alerts
 *
 */

import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { PageHeader } from '@site/src/components/PageHeader';
import aboutData from '@site/src/data/aboutContent.json';
import styles from './styles.module.css';
import SlideShow from '../../components/SlideShow/SlideShow';
import { SocialFollow } from '../../components/SocialFollow';
import { GithubProjects } from '../../components/GithubProjects';

// Card component for consistent styling
const Card = ({ title, icon, children, className = '' }) => (
  <div className={`${styles.card} ${className}`}>
    <div className={styles.cardHeader}>
      <span className={styles.cardIcon}>{icon}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
    <div className={styles.cardContent}>{children}</div>
  </div>
);

// Alert component for important information
const Alert = ({ type, icon, title, children }) => (
  <div className={`${styles.alert} ${styles[`alert${type}`]}`}>
    <div className={styles.alertIcon}>{icon}</div>
    <div className={styles.alertContent}>
      {title && <h4 className={styles.alertTitle}>{title}</h4>}
      <div className={styles.alertMessage}>{children}</div>
    </div>
  </div>
);

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  const { header, intro, sections } = aboutData;

  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader title={header} subTitle="Welcome to my world!" />
      <div className={styles.aboutWrapper}>
        <div className={styles.container}>
          {/* Introduction with alert */}
          <div className={styles.introSection}>
            <Alert type="Info" icon="" title="Welcome to my profile!">
              {intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </Alert>
          </div>

          <div className={styles.overviewSection}>
            <Card title="OVERVIEW" icon="🔍" className={styles.overviewCard}>
              <ul className={styles.overviewList}>
                {sections.overview.map((item, idx) => (
                  <li key={idx} className={styles.overviewItem}>
                    <span className={styles.overviewBullet}>•</span>
                    <span className={styles.overviewText}>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Skills as a full-width list */}
          <div className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span> SKILLS
            </h2>
            <ul className={styles.skillsList}>
              {Object.entries(sections.skills).map(([key, value]) => (
                <li key={key} className={styles.skillsItem}>
                  <div>
                    <b>{key} : </b>
                    {value}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education and Awards in cards */}
          <div className={styles.cardsSection}>
            <div className={styles.cardColumn}>
              <Card title="EDUCATION" icon="🎓" className={styles.educationCard}>
                <ul className={styles.educationList}>
                  {sections.education.map(([label, href], idx) => (
                    <li key={idx} className={styles.educationItem}>
                      <a href={href} className={styles.educationLink}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className={styles.cardColumn}>
              <Card title="AWARDS & RECOGNITION" icon="🏆" className={styles.awardsCard}>
                <ul className={styles.awardsList}>
                  {sections.awards.map((award, idx) => (
                    <li key={idx} className={styles.awardItem}>
                      {/* <span className={styles.awardBadge}>🏅</span> */}
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Publications slideshow at the bottom */}
          <SlideShow publications={sections.publications} />

          {/* Final call to action */}
          <div className={styles.ctaSection}>
            <Alert type="Success" icon="" title="🎯 ACTIVITIES">
              <div>
                {sections.activities.map((activity, idx) => (
                  <div key={idx}>{activity}</div>
                ))}
              </div>
            </Alert>
          </div>

          <h1>OPEN SOURCE PROJECTS</h1>

          <GithubProjects></GithubProjects>

          <p>🌟 Thank you for visiting my profile.</p>
          <div className={styles.socialMediaSection}>
            <h3>Social Media</h3>
            <SocialFollow />
          </div>
        </div>
      </div>
    </Layout>
  );
}
