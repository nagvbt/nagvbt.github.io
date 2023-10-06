import React from 'react';

const projects = [
  {
    category: 'Project',
    title: 'React Foundation',
    slug: '#react-foundation',
    subtitle: 'An example for deploying a NodeJS app to Beanstalk using AWS CloudFormation.',
    period: 'November 2020',
    tech: 'AWS CloudFormation',
    description: (
      <>
        <p>
          An example of how you can perform Infrastructure-As-Code (IaC) using AWS CloudFormation
          and Continuous-Integration/Continuous-Deployment (CI/CD) using AWS CodePipeline.
        </p>
        <p>
          This example deploys the NodeJS-ExpressJS-MySQL Create-Read-Update-Delete (CRUD)
          application at <a href="https://github.com/nagvbt">DigiPie/nodejs-mysql-aws-beanstalk</a>,
          by using the CloudFormation IaC templates in this repository and setting up a simple AWS
          CodePipeline.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub repository',
        link: 'https://github.com/nagvbt'
      }
    ]
  },
  {
    category: 'Website',
    title: 'nbt',
    slug: '#nbt',
    imageUrl: 'img/projects/nbt.png',
    subtitle: 'A software engineer portfolio template built with Docusaurus v2 and ReactJS.',
    period: 'October 2022 to Present',
    tech: 'Docusaurus v2, ReactJS',
    description: (
      <>
        <p>
          I first started this portfolio template project back in October 2020. The template has
          gone through numerous iterations ever since, and is still updated presently.
        </p>
        <p>
          I built it using{' '}
          <a href="https://v2.docusaurus.io/" target="_blank">
            Docusaurus v2
          </a>{' '}
          and{' '}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          .
        </p>

        <p>
          I wrote this template for my own use but you are free to use it as long as you credit me.
          Check out the <a href="https://github.com/DigiPie/kaya-folio">GitHub repository</a> for
          how to do so.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub repository',
        link: 'https://github.com/nagvt'
      },
      {
        name: 'Website',
        link: 'https://nagvbt.github.io/'
      }
    ]
  },
  {
    category: 'Project',
    title: 'nagcode',
    slug: '#nagcode',
    imageUrl: 'img/projects/nagcode.png',
    subtitle: 'nagcode code snippet presenter',
    period: 'April 2020',
    tech: 'Mocha, Chai, NodeJS, ExpressJS, MongoDB',
    description: (
      <>
        <p>
          An up-to-date 2020 example of how you can use Mocha and Chai to perform API testing for a
          Node-ExpressJS-Mongoose app. You will be able to test your code locally and also
          automatically using Github Action.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg"
            title="Node.js CI"
          >
            <img src="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I worked on this project to learn more about API testing using{' '}
          <a href="https://mochajs.org/">Mocha</a> and <a href="https://www.chaijs.com/">Chai</a>,
          and also to practice setting up a NodeJS-ExpressJS-Mongoose backend application.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub repository',
        link: 'https://github.com/DigiPie/mocha-chai-mongoose'
      }
    ]
  },
  {
    category: 'Open Source Tool',
    title: 'psql-heroku-buildpack',
    slug: '#psql-heroku-buildpack',
    subtitle: 'A Heroku buildpack which executes a PostgreSQL script file on deployment.',
    period: 'September 2019',
    tech: 'Herokuapp, PostgreSQL',
    description: (
      <>
        <p>
          psql-heroku-buildpack is a buildpack which executes a PostgreSQL script file on deployment
          to Heroku.
        </p>
        <p>
          I developed this buildpack while working on DigiCourse, a full-stack application built on
          PostgreSQL. I wrote this build pack to automate the execution of a PostgreSQL setup script
          file in the Git repo on deployment to Heroku from Github.
        </p>
      </>
    ),
    links: [
      {
        name: 'GitHub repository',
        link: 'https://github.com/DigiPie/psql-heroku-buildpack'
      }
    ],
    bgColor: 'alternate'
  }
];

export default projects;
