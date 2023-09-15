import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BooksRead from "../../components/BooksRead/BooksRead";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const supportLinks = [
    {
      content: (
        <ul>
          <li>
            <b>Programming:</b> C#, C++/VC++, Javascript, HTML5, CSS, Less,
            Typescript, SQL
          </li>
          <li>
            <b>Framework: </b> .NET, ASP.NET, MVC, React, Angular.js, Angular,
            Silverlight
          </li>
          <li>
            <b>Databases: </b> MSSQL, Nhibernate, Entity Framework
          </li>
          <li>
            <b>Desktop: </b> WPF, WinForms, MFC, COM/DCOM
          </li>
          <li>
            <b>App Development: </b> SPA, Ionic (Hybrid/ Cross Platform ), React
            Native, Android, Windows Phone, Universal Windows Platforms
          </li>
          <li>
            <b>Patterns & Practices: </b> Design patterns, Ntier development,
            Separation of Concerns, MVC, MVVM, TDD
          </li>
          <li>
            <b>Source Control: </b> GIT, SVN, TFS, Gerrit
          </li>
          <li>
            <b>Tools: </b> Enterprise Architect, Visio, SonarQube, Jenkins
          </li>
        </ul>
      ),
      title: <p>SKILLS</p>,
    },
    {
      content: (
        <ul>
          <li>Microsoft Community Contributor Award</li>
          <li>Employee Quarterly Awards winner</li>
          <li>Certified Lean Six Sigma Green Belt</li>
          <li>Certified SAFe Agilist</li>
        </ul>
      ),
      title: <p>AWARDS</p>,
    },
    {
      content: (
        <ul>
          <li>Internal Speaker on Technologies</li>
          <li>Participated in Microsoft, Google, AuguestFest events</li>
        </ul>
      ),
      title: <p>ACTIVITIES</p>,
    },
  ];

  return (
    <Layout title={`${siteConfig.title}`}>
      <PageHeader title="Hi! I'm NBT. - welcome! ❤️🌻" />
      <div className="docMainWrapper wrapper">
        <div className="container margin-vert--xl">
          <header className="postHeader">
            <h2>About Me</h2>
          </header>
          <p>{`Technology Enthusiast, Full Stack Developer who has worked in the web, mobile, 
          desktop applications space. He specializes in architecture, design and development.`}</p>
          <p>{`Highly passionate about latest Technologies and has Zeal to explore on the latest 
          Cutting Edge Technologies in Software Industry. He shows Ability to effectively deal 
          with complex ambiguous situations and efficient in proposing alternate plans and moving 
          forward to achieve goals with Can Do Attitude.`}</p>
          <h3>OVERVIEW</h3>
          <ul>
            <li>
              Had 18+ years of experience in Design, Development and Maintenance
              of Web, Mobile and Desktop applications.
            </li>
            <li>Mentor and Lead the development and QA Teams</li>
            <li>Six Sigma Green Belt certified Engineer</li>
            <li>
              Expertise in building the Technical teams (interviewed 200+
              Engineers)
            </li>
          </ul>
          <h3>EDUCATION</h3>
          <ul>
            <li>
              <a href="/docs/others/education/mtech-mdl">
                M.Tech in Machine Learning and Deep Learning
              </a>
            </li>
            <li>
              <a href="/docs/others/education/mtech-embedded">
                M.Tech in Embedded Systems
              </a>
            </li>
            <li>
              <a href="/docs/others/education/btech">
                B.Tech in Electronics and Communication
              </a>
            </li>
            <li>
              <a href="/docs/others/education/mba">M.B.A in Entrepreneurship</a>
            </li>
            <li>
              <a href="/docs/others/education/llb">L.L.B Bachelor of Law </a>
            </li>
            <li>
              <a href="/docs/others/education/sdbme">
                S.D.B.M.E - Special diploma in Bio-Medical Engineering
              </a>
            </li>
          </ul>
        </div>
        {supportLinks && supportLinks.length && (
          <section className="margin-vert--xl">
            <div className="container">
              <div className="row">
                {supportLinks.map(({ content, title }, i) => (
                  <div key={i} className="col col--4">
                    <h3>{title}</h3>
                    {content}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      {/* <BooksRead></BooksRead> */}
    </Layout>
  );
}
