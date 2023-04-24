# Component Development Guide

This document details about the React Foundation Component Development.

- [Prerequisites](#prerequisites)
- [Steps to Create a Sample Component](#steps-to-create-a-sample-component)
  - [Component Logic](#component-logic)
    - [IconButton.jsx](#iconbuttonjsx)
    - [Do this](#do-this)
    - [Do not do this](#do-not-do-this)
    - [Styled-Components](#styled-components)
    - [Documentation](#documentation)
  - [Story](#story)
    - [IconButton.stories.jsx](#iconbuttonstoriesjsx)
    - [Do this](#do-this-1)
    - [AddOn:](#addon-)
      - [1. Controls](#1-controls)
      - [2. Actions](#2-actions)
      - [3. Accessibility](#3-accessibility)
      - [4. Story](#4-story)
      - [5. CSS resources](#5-css-resources)
      - [6. RTL support](#6-rtl-support)
  - [Unit Testing](#unit-testing)
    - [Do this](#do-this-2)
    - [IconButton.test.jsx](#iconbuttontestjsx)

# Prerequisites

<!-- 1. Complete the [Training](/docs/design-system-getting-started-training--page). -->
2. React Foundation components are built on top of Atomic Design, Storybook, MaterialUI. So be familiar with below topics.

<!-- - [Atomic Design](/docs/design-system-atomic-design--page)
- [Storybook](/docs/design-system-story-book--page)
- [MaterialUI](/docs/design-system-material-ui--page) -->

##### Conventions:

: Denotes code omitted

# Steps to Create a Sample Component

1. Create a folder with component name say ‘IconButton’

2. Add the following files

| #   | File                   | Purpose               |
| --- | ---------------------- | --------------------- |
| 1   | IconButton.jsx         | Component Logic       |
| 2   | index.js               | Export the component  |
| 3   | style.js               | Styles of a Component |
| 4   | IconButton.stories.jsx | Story                 |
| 5   | IconButton.test.jsx    | Unit Test             |

## Component Logic

All the component Logic will go here

#### IconButton.jsx

```jsx
import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

/**
- Component for Icon Button.
- Icon buttons are commonly used in app bars and toolbars.
*/
function IconButton({
  color,
  size,
  children,
  onClick,
}) {
  return (
    <MuiIconButton
      color={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  );
}

// PropType check
IconButton.propTypes = {
  /**
   * Color of the component to use
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * On Click handler
   */
  onClick: PropTypes.func,

  /**
   * Icon element
   */
  children: PropTypes.node,
 :
 :
};

IconButton.defaultProps = {
  color: 'default',
  size: 'medium',
  onClick: undefined,
  children: undefined,
 :
 :
};

export default IconButton;
```

#### ✔️ Do this

1. Add proptypes and defaultProps
2. Create a new component when there is considerable amount of code to be written or use variant in the
   same component

#### ❌ Do not do this

1. Avoid using spread operator for props (…props) add the props that are required for the component
2. Avoid using in-line styles use only styled-components.

### index.js

index.js file provides easy entry points for components. You no need to import write the IconButton twice during import.

```js
export { default } from './IconButton';
```

#### ✔️ Do this

```jsx
import IconButton from '_atoms/IconButton';

:
component code
:
```

#### ❌ Do not do this

```jsx
 import IconButton from '../IconButton/IconButton';
 :
component code
:
```

### Aliasing

Alias for Clean Imports. Following are the alias that are configured in this project.

| #   | Path                       | Alias        |
| --- | -------------------------- | ------------ |
| 1   | ./src/assets               | `_assets`    |
| 2   | ./src/contexts             | `_contexts`  |
| 3   | ./src/hooks                | `_hooks`     |
| 4   | ./src/utilities            | `_utilities` |
| 5   | ./src/components/atoms     | `_atoms`     |
| 6   | ./src/components/molecules | `_molecules` |
| 7   | ./src/components/organisms | `_organisms` |
| 7   | ./src/components/templates | `_templates` |

#### ✔️ Do this

```jsx
import IconButton from '_atoms/IconButton';

:
component code
:
```

#### ❌ Do not do this

Don't use the Relative paths like '../../../' .

```jsx
 import IconButton from '../IconButton/IconButton';
 :
component code
:
```

#### Styled-Components

styled-components allows you to describe your styles with CSS in our React components.
Reference: https://styled-components.com/

All the style components should be placed in the `style.js` file. And import them in the component file.

### style.js

```jsx
import MuiCheckbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';

export const StyledCheckbox = styled(MuiCheckbox)`
  .MuiSvgIcon-root {
    height: 1.25rem;
    width: 1.25rem;
  }
`;
```

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from 'style.js';

/**
 * Component for Checkbox
 */
function Checkbox({
  checked,
  value,
  disabled,
  onChange,
  ariaLabel,
  inputProps
}) {
  return (
    <StyledCheckbox
      checked={checked}
      value={value}
      color='primary'
      disabled={disabled}
      onChange={onChange}
      size='small'
      inputProps={{
        ...inputProps,
        'aria-label': ariaLabel
      }}
    />
  );
}
```

#### ✔️ Do this

Only Component Styles should be part of style.js

#### ❌ Do not do this

Don't include Story styles in the style.js instead write styles of the Story inside the `*.stories.jsx` files.

#### Documentation

1. Add JSdoc to the Component (in src/IconButton.jsx) that provides a description to be read:

```jsx
/**
 * Component for Icon Button.
 */
```

2. For Bullet Points Use below code – (optional )

```jsx
/**
- Component for Icon Button.
- Icon buttons are commonly used in app bars and toolbars.
*/
```

2. Storybook Docs automatically generated the args table that shows types and default values. Add comments in your proptypes to render them in the auto-generated args table.
   <img src='./images/comp-dev-comments-argtable.png' width='700px' />

## Story

All the variations for a component should be added as a story.

#### IconButton.stories.jsx

```jsx
import React from 'react';
import IconButton from './IconButton';
import MaterialIcon from '../MaterialIcon/MaterialIcon';

export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: { disable: true } },
    onClick: { action: 'Icon Button clicked' }
  }
};

export function IconButtons(args) {
  return (
    <div>
      <IconButton label='Dehaze icon button' {...args}>
        <MaterialIcon iconName='Dehaze' />
      </IconButton>
      <IconButton label='Search icon button' {...args}>
        <MaterialIcon iconName='Search' />
      </IconButton>
      <IconButton label='Close icon button' {...args}>
        <MaterialIcon iconName='Close' />
      </IconButton>
    </div>
  );
}

IconButtons.args = {
  size: 'medium',
  color: 'primary',
  disableRipple: false,
  disableFocusRipple: false
};
```

#### ✔️ Do this

1. Each variant of a Component should have a different story

#### AddOn:

###### 1. Controls

Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code.

To use the Controls addon, you need to write your stories using args.

Refer: https://storybook.js.org/docs/react/essentials/controls

By default all the Props will be shown under the controls tab. If you want to disable any any prop based on the sepec you can disable it.
In the below example `children` prop was disabled.

```jsx
export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: { disable: true } },
    :
    :
  }
};
```

<img src='./images/controls-addon.png' />

###### 2. Actions

The actions addon is used to display data received by event handler (callback) arguments in your stories.
You can use argTypes to tell Storybook that an arg to your story should be an action.
Refer: https://storybook.js.org/docs/react/essentials/actions

```jsx
export default {
  title: 'Components/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    :
    :
    onClick: { action: 'Icon Button clicked' }
  }
};
```

<img src='./images/actions-addon.png' />

###### 3. Accessibility

Test components for user accessibility in Storybook. This Adon runs on top of the Axe Accessibility Engine developed by Deque Systems (https://www.deque.com/).
Refer: https://github.com/storybookjs/storybook/tree/master/addons/a11y

**How to use the a11y addon**
This addon displays three tabs: violations, passes, and incompletions. Axe defines “incomplete” as a rule state that “occur(s) when Axe can tell that a rule does not definitely pass, but cannot quite tell whether it definitely fails — in this case, it will gather some information that can be presented to a human for a decision”. Next to each tab is the number of rules that will be shown if the option is chosen. The default option shown is the violations tab.

<img src='./images/a11y-1.png' />

Within the tabs, an accordion-like design is used to display each of the rules that have met the criteria. Upon clicking one of these accordion bars, information is displayed about that rule along with a link that contains in-depth information on the rule.

<img src='./images/a11y-2.png' />

**Visualizing accessibility rules**
A checkbox is located to the right side of each rule that enables you to highlight flagged DOM elements in the Storybook canvas.

<img src='./images/a11y-3.png' />

Once you’ve pinpointed accessibility violations and incompletions, you can modify your code and use hot reloading. This initiates another a11y test run.

**Accessibility guidance:**

When you are creating content, components and pages, these should work with accessibility tools. There are Accessibility Principles that should be followed in order to assure your content, components and pages are accessibility support.

We should follow below combination of browser and accessibility tool.

Chrome/Jaws

IE/Jaws

Firefox/NNDA

Safari/VOICEOVER

To find the accessibility issues use Axe tool for chrome and Firefox.

To learn fundamentals of accessibility, refer URLs below: -

https://www.w3.org/WAI/fundamentals/

Internal accessibility guidance for components design.

http://ux.sumtotalsystems.com/overview

###### 4. Story

Show stories source in the addon panel
Refer: https://github.com/storybookjs/storybook/tree/master/addons/storysource

<img src='./images/story-addon.png' />


###### 5. RTL support

We have support for RTL through 'jss-rtl' plugin for Material UI and 'stylis-plugin-rtl' plugin for styled-components.
We also have a toobar icon in storybook to check the RTL view of the components.
For all the components that we build, we recommend you to test the RTL view using this toolbar button and make any changes required for your component styles accordingly.

<img src='./images/RTL-addon.png' />

## Unit Testing

React Testing Library and Jest is used for writing unit test cases.

#### ✔️ Do this

1. Ensure to write test cases that covers all the scenarios
2. Run `yarn test:dev` to run the test cases, you can check the code coverage in the command line for more details you see the html report (in react-foundation\coverage\lcov-report\index.html) for more details.
3. We have a utility file (src/utilities/test-utils.jsx) that re exports everything from React Testing Library along with a custom reder function. This custom render function supports the Theme availability for test runner.
   So, we should use the methods from this utility file instead of directly importing them from the library.

#### IconButton.test.jsx

```jsx
import React from 'react';
import { render, screen } from '../../../utilities/test-utils';
import IconButton from './IconButton';
import '@testing-library/jest-dom/extend-expect';

describe('IconButton', () => {
  it('IconButton should render with out any errors', () => {
    render(<IconButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Small size IconButton', () => {
    render(<IconButton size='small' />);
    expect(screen.getByRole('button')).toHaveClass('MuiIconButton-sizeSmall');
  });

  it('Icon button should disabled', () => {
    render(<IconButton size='small' disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```
