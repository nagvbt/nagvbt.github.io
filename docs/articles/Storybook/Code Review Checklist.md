# Code Review Checklist

##### 1. Use only rem NOT pixel

We use 1rem = 16 px

Example:

`font-size: 1rem` -- Correct

`font-size: 16px` -- Wrong

##### 2. Don't use spread (...) operator instead list all the props

##### 3. Use the Pascal Case for the Component Names and for the Story Titles

e.g:
Component File: MenuList.JSX

Story Title: title: 'Components/Atoms/MenuLists',

##### 4. Do not use any third-party components directly in any component file instead create a Wrapper component. Flow the below naming convention

##### Naming convention


Please the refer [Naming Conventions](?path=/docs/getting-started-development-naming-conventions--page) for more details.

##### 5. Component File Should have an Comment that need to be shown on the Storybook 'Docs' tab

Do's: Write the component Description

Don'ts: Do not write @parms or @return in the comments section

NOTE: This list will be updated as and when required.

##### 5. Add reference (url) to the Material-UI component in the Documents section for a component which has subset of the variations demonstrated in story based on the need and have more variations which are not considered in the component development.
