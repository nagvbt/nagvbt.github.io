"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[13751],{10727:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});a(67294);var s=a(86010),n=a(10833),r=a(35281),l=a(35155),c=a(26090),i=a(90197),g=a(92503),o=a(85893);function u(t){let{title:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.d,{title:e}),(0,o.jsx)(i.Z,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:a}=t;return(0,o.jsx)(n.FG,{className:(0,s.Z)(r.k.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(g.Z,{as:"h1",children:a}),(0,o.jsx)(c.Z,{tags:e})]})})})})}function d(t){const e=(0,l.M)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...t,title:e}),(0,o.jsx)(h,{...t,title:e})]})}},13008:(t,e,a)=>{a.d(e,{Z:()=>c});a(67294);var s=a(86010),n=a(39960);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(85893);function c(t){let{permalink:e,label:a,count:c}=t;return(0,l.jsxs)(n.Z,{href:e,className:(0,s.Z)(r.tag,c?r.tagWithCount:r.tagRegular),children:[a,c&&(0,l.jsx)("span",{children:c})]})}},26090:(t,e,a)=>{a.d(e,{Z:()=>g});a(67294);var s=a(35155),n=a(13008),r=a(92503);const l={tag:"tag_Nnez"};var c=a(85893);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(r.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:l.tag,children:(0,c.jsx)(n.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function g(t){let{tags:e}=t;const a=(0,s.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},35155:(t,e,a)=>{a.d(e,{M:()=>n,P:()=>r});var s=a(95999);const n=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);