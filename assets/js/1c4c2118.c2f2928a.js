"use strict";(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[43675],{13198:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>s});var o=r(85893),i=r(11151);const t={tags:["Ionic","Angular"]},c="Component Library With Ionic+Angular",a={permalink:"/blog/2021/06/02/ionic-lib",source:"@site/blog/2021-06-02-ionic-lib.md",title:"Component Library With Ionic+Angular",description:"1\\. Summary",date:"2021-06-02T00:00:00.000Z",formattedDate:"June 2, 2021",tags:[{label:"Ionic",permalink:"/blog/tags/ionic"},{label:"Angular",permalink:"/blog/tags/angular"}],readingTime:2.03,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["Ionic","Angular"]},unlisted:!1,prevItem:{title:"React Native App using Expo",permalink:"/blog/2021/06/06/react-native-app-using-expo"},nextItem:{title:"Building A Component Library With React",permalink:"/blog/2021/05/30/building-a-component-library-with-react"}},l={authorsImageUrls:[]},s=[{value:"1. Summary",id:"1-summary",level:2},{value:"2. How to Create a Ionic Library Refer Code:",id:"2-how-to-create-a-ionic-library-refer-code",level:2},{value:"Modify the Custom-Card Refer Code",id:"modify-the-custom-card-refer-code",level:4},{value:"3. Publish the Lib to npm",id:"3-publish-the-lib-to-npm",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"1-summary",children:"1. Summary"}),"\n",(0,o.jsx)(e.p,{children:"A component library is a collection of logically group components so that one can explore, select components and helps in maintaining consistent design across projects. nag-ionic-lib built using following components."}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Angular cli (ng generate library)"}),"\n",(0,o.jsx)(e.li,{children:"Ionic cli"}),"\n",(0,o.jsx)(e.li,{children:"Storybook"}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"2-how-to-create-a-ionic-library-refer-code",children:["2. How to Create a Ionic Library ",(0,o.jsx)(e.a,{href:"https://github.com/nagvbt/nag-ionic-lib/commit/773b8a681b655a705648fe43d4a887f6143cbf19",children:"Refer Code:"})]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Generate library skeleton in a new workspace with the following commands."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"    ng new nag-workspace --create-application=false\r\n    cd nag-workspace\r\n    ng generate library nag-ionic-lib\n"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Add a custom component"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"ng g component customCard"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Add symlink between your local node modules folder and this dist folder ",(0,o.jsx)(e.a,{href:"https://github.com/nagvbt/nag-ionic-lib/commit/4e2430e9812dd8e45d252e68ed294ed69524de51",children:"Refer Code:"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["You can now run ",(0,o.jsx)(e.code,{children:'yarn link "nag-ionic-lib"'})," in the projects where you want to use this package and it will be used instead."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'    ng build\r\n    cd dist/nag-ionic-lib\r\n    yarn link\r\n    \r\n    ****** Command output ******\r\n    yarn link\r\n    yarn link v1.22.4\r\n    warning package.json: No license field\r\n    warning package.json: No license field\r\n    success Registered "nag-ionic-lib".\r\n    info You can now run yarn link <span class="hljs-string">"nag-ionic-lib"</span> in the projects where you want to use this package and it will be used instead. Done in 0.09s. \n'})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Adding Ionic to your Library"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"    cd projects/nag-ionic-lib\r\n    yarn add --dev @ionic/angular\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"And Modify the 'nag-ionic-lib.module.ts'"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"    import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';\r\n    import { NagIonicLibComponent } from './nag-ionic-lib.component';\r\n    import { CustomCardComponent } from './custom-card/custom-card.component';\r\n    \r\n    import { CommonModule } from '@angular/common';\r\n    import { IonicModule } from '@ionic/angular';\r\n    import { HttpClientModule } from '@angular/common/http';\r\n    import { NagIonicLibService } from 'nag-ionic-lib';\r\n    \r\n    export interface LibConfig {\r\n      apiUrl: string;\r\n    }\r\n    \r\n    export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');\r\n    \r\n    @NgModule({\r\n      declarations: [\r\n        NagIonicLibComponent,\r\n        CustomCardComponent\r\n      ],\r\n      imports: [\r\n        CommonModule,\r\n        HttpClientModule,\r\n        IonicModule\r\n      ],\r\n      exports: [\r\n        NagIonicLibComponent, CustomCardComponent\r\n      ]\r\n    })\r\n    export class NagIonicLibModule {\r\n    static forRoot(config: LibConfig): ModuleWithProviders<NagIonicLibModule> {\r\n        return {\r\n          ngModule: NagIonicLibModule,\r\n          providers: [\r\n            NagIonicLibService,\r\n            {\r\n              provide: LibConfigService,\r\n              useValue: config\r\n            }\r\n          ]\r\n        };\r\n      }\r\n     }\n"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/nagvbt/nag-ionic-lib/commit/5afea14b8bfd457cf7396a56d96fb361ee4f7850",children:"Refer Code"})}),"\n",(0,o.jsxs)(e.h4,{id:"modify-the-custom-card-refer-code",children:["Modify the Custom-Card ",(0,o.jsx)(e.a,{href:"https://github.com/nagvbt/nag-ionic-lib/commit/ca6bdf5d2f1f6b4555095fa7e6d72a17de4167bc",children:"Refer Code"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"    // custom-card.component.ts\r\n    import { Component, OnInit, Input } from '@angular/core';\r\n    \r\n    @Component({\r\n      selector: 'custom-card',\r\n      templateUrl: './custom-card.component.html',\r\n      styleUrls: ['./custom-card.component.css']\r\n    })\r\n    export class CustomCardComponent implements OnInit {\r\n      @Input() title: string = \"\";\r\n      @Input() content: string = \"\";\r\n    \r\n      constructor() { }\r\n    \r\n      ngOnInit(): void {\r\n      }\r\n    \r\n    }\r\n    \r\n    \x3c!-- custom-card.component.html --\x3e\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>{{ title }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{ content }}\r\n      </ion-card-content>\r\n    </ion-card>\n"})}),"\n",(0,o.jsx)(e.h2,{id:"3-publish-the-lib-to-npm",children:"3. Publish the Lib to npm"}),"\n",(0,o.jsx)(e.p,{children:"Use the below commands"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"    ng build --prod\r\n    cd dist/nag-ionic-lib\r\n    npm publish\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>a,a:()=>c});var o=r(67294);const i={},t=o.createContext(i);function c(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);