/**
 * @typedef {Object} BlogPost - creates a new type named 'BlogPost'
 * @property {string} date - eg "2021-04-24T00:00:00.000Z"
 * @property {string} formattedDate - eg "April 24, 2021"
 * @property {string} title - eg "The Service Now API and TypeScript Conditional Types"
 * @property {string} permalink - eg "/2021/04/24/2011-05-31-mssql"
 */

export type BlogPost = {
  title: string;
  permalink: string;
  date: string;
  formattedDate: string;
};

export type YearPostsProps = {
  year: string;
  posts: BlogPost[];
};
