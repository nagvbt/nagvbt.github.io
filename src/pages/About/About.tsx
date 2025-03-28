/**
 * Copyright (c) NBT. and its affiliates.
 *
 * Description:
 *
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { PageHeader } from '@site/src/components/PageHeader';

export default function About() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader title="Hi! I'm NBT. - welcome! ❤️🌻" />
      <div className="docMainWrapper wrapper">
        <p></p>
        <div className="container">
          <p>{`Technology Enthusiast, Full Stack Developer who has worked in the web, mobile, 
          desktop applications space. He specializes in architecture, design and development.`}</p>
          <p>{`Highly passionate about latest Technologies and has Zeal to explore on the latest 
          Cutting Edge Technologies in Software Industry. He shows Ability to effectively deal 
          with complex ambiguous situations and efficient in proposing alternate plans and moving 
          forward to achieve goals with Can Do Attitude.`}</p>
          <h3>OVERVIEW</h3>
          <ul>
            <li>
              Had 17+ years of experience in Design, Development and Maintenance of Web, Mobile and
              Desktop applications.
            </li>
            <li>Mentor and Lead the development and QA Teams</li>
            <li>Six Sigma Green Belt certified Engineer</li>
            <li>Expertise in building the Technical Teams (Interviewed 200+ Engineers)</li>
          </ul>

          <h3>SKILLS</h3>
          <ul>
            <li>
              <b>Programming:</b> C#, Typescript, Javascript, CSS, HTML5, Less, Sass, Visual C++,
              C++, C, SQL
            </li>
            <li>
              <b>Web Development: </b> React.js, Angular, .NET, ASP.NET, MVC, Silverlight
            </li>
            <li>
              <b>Patterns & Practices: </b> Design patterns, NTier development, Separation of
              Concerns, MVC, MVVM, TDD
            </li>
            <li>
              <b>Databases: </b> MS SQL Server, NHibernate, Entity Framework, MS Access
            </li>
            <li>
              <b>Desktop: </b> WPF, WinForms, MFC, COM, DCOM, ATL, Win32 API
            </li>
            <li>
              <b>Mobile Development: </b> React Native, Ionic (Hybrid/ Cross Platform), Android,
              Windows Phone, Universal Windows Platforms
            </li>
            <li>
              <b>IDE: </b> Visual Studio, VS Code, Android Studio
            </li>
            <li>
              <b>Unit Test Tools: </b> React Testing Library, Jasmine Karma, VS Tests, CPPUnit,
              NUnit
            </li>
            <li>
              <b>Tools: </b> Enterprise Architect, SonarQube, Jenkins, InstallShield, MS Project
              Visio, VMWare WorkStation, Devpartner
            </li>
            <li>
              <b>Source Control: </b> GIT, SVN, TFS, Gerrit
            </li>
          </ul>

          <h3>EDUCATION</h3>
          <ul>
            <li>
              <a id="at" href="/docs/others/education/mtech-mdl">
                M.Tech in Machine Learning and Deep Learning, Malla Reddy University
              </a>
            </li>
            <li>
              <a id="at" href="/docs/others/education/mtech-embedded">
                M.Tech in Embedded Systems, JNTU Hyderabad
              </a>
            </li>
            <li>
              <a id="at" href="/docs/others/education/btech">
                B.Tech in Electronics and Communication, GMRIT Rajam.
              </a>
            </li>
            <li>
              <a id="at" href="/docs/others/education/mba">
                M.B.A in Entrepreneurship, JNTU Hyderabad.
              </a>
            </li>
            <li>
              <a id="at" href="/docs/others/education/llb">
                L.L.B Bachelor of Law, Osmania University.
              </a>
            </li>
            <li>
              <a id="at" href="/docs/others/education/sdbme">
                SDBME - Special diploma in Bio-Medical Engineering, SVGP Tirupathi.
              </a>
            </li>
          </ul>

          <h3>AWARDS AND RECOGNITION</h3>
          <ul>
            <li>Microsoft Community Contributor Award</li>
            <li>Employee Quarterly Recognition Awards winner</li>
            <li>Above and Beyond Award</li>
            <li>Certified Lean Six Sigma Green Belt</li>
            <li>Certified SAFe Agilist</li>
            <li>
              First in Paper Presentation at PYFEST '2k6 - A National Level Technical Symposium.
            </li>
            <li>First in Paper Presentation at KNACK EVINCE '2k6.</li>
          </ul>

          <h3>PUBLICATIONS</h3>
          <ol>
            <li>
              <b>Micro Finance at Swayam Krishi Sangham </b>
              at International Journal of Management Technology and Engineering.
            </li>
            <li>
              <b>Emotion Recognition System</b> at PYFEST '2k6 - A National Level Technical
              Symposium.
            </li>
            <li>
              <b>Antenna parameters using 'C' program</b> at TECHNOCATALYSTS - A National seminar
              incorporating a student's convention.
            </li>
            <li>
              <b>Smart sensor and network sensor systems</b> at SPIKES - A National Level Technical
              Symposium.
            </li>
            <li>
              <b>Face Recognition system</b> at STEPCONE '06 - A National Level Student Technical
              Paper Contest and Exhibition
            </li>
            <li>
              <b>Nano Electronics</b> at ELITE-National Level Technical Symposium.
            </li>
            <li>
              <b>Personal verification using multi biometric system</b> at KNACK EVINCE '2k6 - A
              Departmental Association.
            </li>
            <li>
              <b>Smart optical sensor for direct robot control</b> at SPIKES - A National Level
              Technical Symposium.
            </li>
            <li>
              <b>Quantum Effect Electronics</b> at NCARM '05 - National Convention on Automation
              Road Map.
            </li>
          </ol>

          <h3>ACTIVITIES</h3>
          <ul>
            <li>Internal Speaker on Technologies</li>
            <li>Participated in Microsoft, Google, Auguest Fest events</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
