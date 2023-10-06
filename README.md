# nag-website

<!--markdownlint-disable MD029-->

1. Initial template created by docusaurus with below command by docusaurus
   with below command

   ```js
   npx create-docusaurus@latest my-website classic --typescript
   ```

2. Add eslint, prettier and husky

3. Added markdownlint

4. Added Fontawesome icons support
   [Refer](https://docusaurus.community/knowledge/design/icons/fontawesome/)

   - Usage in markdown

   ```md
   <icon icon="fa-brands fa-github" size="lg" /> This is a GitHub icon.
   ```

   - Usage in React

   ```tsx
   // fontawesome icons import
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
   <FontAwesomeIcon icon={faEnvelope} />;
   ```

5. Added PageHeader component

   - Usage in Page

   ```tsx
   import { PageHeader } from '../../components/PageHeader';
   <PageHeader title="Disclaimer" subTitle="Iam Not resposible" />;
   ```

6. Blog Sidebar Customization

   - To show all blog posts ( default is only resent ones )
   - Note: don't use `slug` in blog posts.

7. BlogArchive

   - with List of blog posts archived by Year

8. Feed options (RSS, Atom)

   - changes values in docusaurus.config.js

   ```js
   feedOptions: {
            type: ['rss', 'atom'],
            // highlight-next-line
            title: 'I CAN MAKE THIS WORK',
            description: 'The blog of Nag',
   }
   ```

   - change url in footer

   ```js
      {
         label: 'RSS feed',
         href: 'https://nagvbt.github.io/blog/rss.xml'
      },
      {
         label: 'Atom feed',
         href: 'https://nagvbt.github.io/blog/atom.xml'
      }

   ```

9. Youtube Talks Page

- Modify `talks-data.ts` to add more talks

10. Github open source projects showcase

11. Projects Page to show case any project

12. Typed - Integration refer UI page
