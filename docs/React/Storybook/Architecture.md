# Storybook Architecture
<!--markdownlint-disable MD013 MD029 MD036 MD024 MD033-->
## Storybook addons

Following are the Storybook Addons used in the React Foundation

- Controls
- Actions (addon-essentials)
- Accessibility (addon-a11y)
- Story (addon-storysource)
- Theming (@react-theming/storybook-addon)
- RTL (storybook-rtl-addon)

## Storybook Theming

Inside your .storybook directory, create a new file called storybookTheme.js and the following code.
The easiest way to customize Storybook is to generate a new theme using the create() function from storybook/theming.

### Use Storybook's light theme as a baseline

Customize the font, toolbar, form colors using the following code:

```jsx

  base: 'light',

  colorPrimary: 'silver',
  colorSecondary: '#7D4CDB',

  // UI
  appBg: '#F8F8F8',
  appBorderColor: '#EDEDED',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#7D4CDB',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,
```

### Custom Branding

#### Brand Title

The brand title which was shown on left side of the storybook which will be rendered using the follow html element

`<b style="font-size: 25px; color: darkslateblue; ">Sumtotal</b>`

#### Version number

Version number for the storybook was taken from the package.json using and it is part of `brandTitle` and presented as
`React Foundation v.${version}`

#### Brand url

Set the brand link to open in the new window using `brandUrl`.

```jsx
import { create } from '@storybook/theming/create';
import { version } from '../package.json';

export default create({
  base: 'light',

  colorPrimary: 'silver',
  colorSecondary: '#7D4CDB',

  // UI
  appBg: '#F8F8F8',
  appBorderColor: '#EDEDED',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#7D4CDB',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(0,0,0,.1)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  // Title
  brandTitle: `<b style="font-size: 25px; color: darkslateblue; ">NagVbt</b>
    <div style="font-weight: 200; font-size: 0.7em; color: grey; margin-left: 0.5em; text-transform: uppercase;">
    React Foundation v.${version}
    </div>`,

  // Url
  brandUrl: 'http://nagvbt.com'
});
```

### Import the theme into Storybook

Create a new file called manager.js in .storybook directory and add the following:

```jsx
// .storybook/manager.js

import { addons } from '@storybook/addons';
import storybookTheme from './storybookTheme';

addons.setConfig({
  theme: storybookTheme
});
```

Now the custom theme will replace Storybook's default theme, and we can see a similar set of changes in the UI.
