"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[63301],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(o),b=n,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},52859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={},i="Storybook Architecture",l={unversionedId:"articles/Storybook/Architecture",id:"articles/Storybook/Architecture",title:"Storybook Architecture",description:"Storybook addons",source:"@site/docs/articles/Storybook/Architecture.md",sourceDirName:"articles/Storybook",slug:"/articles/Storybook/Architecture",permalink:"/docs/articles/Storybook/Architecture",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storybook",permalink:"/docs/category/storybook"},next:{title:"Code Review Checklist",permalink:"/docs/articles/Storybook/CodeReviewChecklist"}},s={},c=[{value:"Storybook addons",id:"storybook-addons",level:2},{value:"Storybook Theming",id:"storybook-theming",level:2},{value:"Use Storybook&#39;s light theme as a baseline",id:"use-storybooks-light-theme-as-a-baseline",level:3},{value:"Custom Branding",id:"custom-branding",level:3},{value:"Brand Title:",id:"brand-title",level:4},{value:"Version number:",id:"version-number",level:4},{value:"Brand url:",id:"brand-url",level:4},{value:"Import the theme into Storybook",id:"import-the-theme-into-storybook",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storybook-architecture"},"Storybook Architecture"),(0,n.kt)("h2",{id:"storybook-addons"},"Storybook addons"),(0,n.kt)("p",null,"Following are the Storybook Addons used in the React Foundation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Controls"),(0,n.kt)("li",{parentName:"ul"},"Actions (addon-essentials)"),(0,n.kt)("li",{parentName:"ul"},"Accessibility (addon-a11y)"),(0,n.kt)("li",{parentName:"ul"},"Story (addon-storysource)"),(0,n.kt)("li",{parentName:"ul"},"Theming (@react-theming/storybook-addon)"),(0,n.kt)("li",{parentName:"ul"},"RTL (storybook-rtl-addon)")),(0,n.kt)("h2",{id:"storybook-theming"},"Storybook Theming"),(0,n.kt)("p",null,"Inside your .storybook directory, create a new file called storybookTheme.js and the following code.\nThe easiest way to customize Storybook is to generate a new theme using the create() function from storybook/theming."),(0,n.kt)("h3",{id:"use-storybooks-light-theme-as-a-baseline"},"Use Storybook's light theme as a baseline"),(0,n.kt)("p",null,"Customize the font, toolbar, form colors using the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"\n  base: 'light',\n\n  colorPrimary: 'silver',\n  colorSecondary: '#7D4CDB',\n\n  // UI\n  appBg: '#F8F8F8',\n  appBorderColor: '#EDEDED',\n  appBorderRadius: 6,\n\n  // Typography\n  fontBase: '\"Open Sans\", sans-serif',\n\n  // Toolbar default and active colors\n  barTextColor: '#999999',\n  barSelectedColor: '#7D4CDB',\n  barBg: '#FFFFFF',\n\n  // Form colors\n  inputBg: 'white',\n  inputBorder: 'rgba(0,0,0,.1)',\n  inputTextColor: '#333333',\n  inputBorderRadius: 4,\n")),(0,n.kt)("h3",{id:"custom-branding"},"Custom Branding"),(0,n.kt)("h4",{id:"brand-title"},"Brand Title:"),(0,n.kt)("p",null,"The brand title which was shown on left side of the storybook which will be rendered using the follow html element"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<b style="font-size: 25px; color: darkslateblue; ">Sumtotal</b>')),(0,n.kt)("h4",{id:"version-number"},"Version number:"),(0,n.kt)("p",null,"Version number for the storybook was taken from the package.json using and it is part of ",(0,n.kt)("inlineCode",{parentName:"p"},"brandTitle")," and presented as\n",(0,n.kt)("inlineCode",{parentName:"p"},"React Foundation v.${version}")),(0,n.kt)("h4",{id:"brand-url"},"Brand url:"),(0,n.kt)("p",null,"Set the brand link to open in the new window using ",(0,n.kt)("inlineCode",{parentName:"p"},"brandUrl"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import { create } from '@storybook/theming/create';\nimport { version } from '../package.json';\n\nexport default create({\n  base: 'light',\n\n  colorPrimary: 'silver',\n  colorSecondary: '#7D4CDB',\n\n  // UI\n  appBg: '#F8F8F8',\n  appBorderColor: '#EDEDED',\n  appBorderRadius: 6,\n\n  // Typography\n  fontBase: '\"Open Sans\", sans-serif',\n\n  // Toolbar default and active colors\n  barTextColor: '#999999',\n  barSelectedColor: '#7D4CDB',\n  barBg: '#FFFFFF',\n\n  // Form colors\n  inputBg: 'white',\n  inputBorder: 'rgba(0,0,0,.1)',\n  inputTextColor: '#333333',\n  inputBorderRadius: 4,\n\n  // Title\n  brandTitle: `<b style=\"font-size: 25px; color: darkslateblue; \">NagVbt</b>\n    <div style=\"font-weight: 200; font-size: 0.7em; color: grey; margin-left: 0.5em; text-transform: uppercase;\">\n    React Foundation v.${version}\n    </div>`,\n\n  // Url\n  brandUrl: 'http://nagvbt.com'\n});\n")),(0,n.kt)("h3",{id:"import-the-theme-into-storybook"},"Import the theme into Storybook"),(0,n.kt)("p",null,"Create a new file called manager.js in .storybook directory and add the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/manager.js\n\nimport { addons } from '@storybook/addons';\nimport storybookTheme from './storybookTheme';\n\naddons.setConfig({\n  theme: storybookTheme\n});\n")),(0,n.kt)("p",null,"Now the custom theme will replace Storybook's default theme, and we can see a similar set of changes in the UI."))}p.isMDXComponent=!0}}]);