/*! For license information please see 91522.c6904035.js.LICENSE.txt */
(self.webpackChunknagvbt=self.webpackChunknagvbt||[]).push([[91522],{91522:(e,t,r)=>{"use strict";function n(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}r.d(t,{v:()=>G});var o=r(85186);function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){var t,r;return!1!==s(e)&&(void 0===(t=e.constructor)||!1!==s(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf"))}var a=`octokit-endpoint.js/9.0.1 ${n()}`;function c(e,t){const r=Object.assign({},e);return Object.keys(t).forEach((n=>{i(t[n])?n in e?r[n]=c(e[n],t[n]):Object.assign(r,{[n]:t[n]}):Object.assign(r,{[n]:t[n]})})),r}function u(e){for(const t in e)void 0===e[t]&&delete e[t];return e}function l(e,t,r){if("string"==typeof t){let[e,n]=t.split(" ");r=Object.assign(n?{method:e,url:n}:{url:e},r)}else r=Object.assign({},t);var n;r.headers=(n=r.headers)?Object.keys(n).reduce(((e,t)=>(e[t.toLowerCase()]=n[t],e)),{}):{},u(r),u(r.headers);const o=c(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(o.mediaType.previews=e.mediaType.previews.filter((e=>!o.mediaType.previews.includes(e))).concat(o.mediaType.previews)),o.mediaType.previews=(o.mediaType.previews||[]).map((e=>e.replace(/-preview/,"")))),o}var p=/\{[^}]+\}/g;function h(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function d(e,t){return Object.keys(e).filter((e=>!t.includes(e))).reduce(((t,r)=>(t[r]=e[r],t)),{})}function f(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e})).join("")}function g(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function b(e,t,r){return t="+"===e||"#"===e?f(t):g(t),r?g(r)+"="+t:t}function y(e){return null!=e}function m(e){return";"===e||"&"===e||"?"===e}function v(e,t){var r=["+","#",".","/",";","?","&"];return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,(function(e,n,o){if(n){let e="";const o=[];if(-1!==r.indexOf(n.charAt(0))&&(e=n.charAt(0),n=n.substr(1)),n.split(/,/g).forEach((function(r){var n=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);o.push(function(e,t,r,n){var o=e[r],s=[];if(y(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),n&&"*"!==n&&(o=o.substring(0,parseInt(n,10))),s.push(b(t,o,m(t)?r:""));else if("*"===n)Array.isArray(o)?o.filter(y).forEach((function(e){s.push(b(t,e,m(t)?r:""))})):Object.keys(o).forEach((function(e){y(o[e])&&s.push(b(t,o[e],e))}));else{const e=[];Array.isArray(o)?o.filter(y).forEach((function(r){e.push(b(t,r))})):Object.keys(o).forEach((function(r){y(o[r])&&(e.push(g(r)),e.push(b(t,o[r].toString())))})),m(t)?s.push(g(r)+"="+e.join(",")):0!==e.length&&s.push(e.join(","))}else";"===t?y(o)&&s.push(g(r)):""!==o||"&"!==t&&"?"!==t?""===o&&s.push(""):s.push(g(r)+"=");return s}(t,e,n[1],n[2]||n[3]))})),e&&"+"!==e){var s=",";return"?"===e?s="&":"#"!==e&&(s=e),(0!==o.length?e:"")+o.join(s)}return o.join(",")}return f(o)}))}function w(e){let t,r=e.method.toUpperCase(),n=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),o=Object.assign({},e.headers),s=d(e,["method","baseUrl","url","headers","request","mediaType"]);const i=function(e){const t=e.match(p);return t?t.map(h).reduce(((e,t)=>e.concat(t)),[]):[]}(n);var a;n=(a=n,{expand:v.bind(null,a)}).expand(s),/^http/.test(n)||(n=e.baseUrl+n);const c=d(s,Object.keys(e).filter((e=>i.includes(e))).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map((t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`))).join(",")),n.endsWith("/graphql")&&e.mediaType.previews?.length)){const t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map((t=>`application/vnd.github.${t}-preview${e.mediaType.format?`.${e.mediaType.format}`:"+json"}`)).join(",")}return["GET","HEAD"].includes(r)?n=function(e,t){const r=/\?/.test(e)?"&":"?",n=Object.keys(t);return 0===n.length?e:e+r+n.map((e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`)).join("&")}(n,c):"data"in c?t=c.data:Object.keys(c).length&&(t=c),o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:n,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function k(e,t,r){return w(l(e,t,r))}var j=function e(t,r){const n=l(t,r),o=k.bind(null,n);return Object.assign(o,{DEFAULTS:n,defaults:e.bind(null,n),merge:l.bind(null,n),parse:w})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":a},mediaType:{format:""}});class q extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var O=r(30778),E=r.n(O),T=E()((e=>console.warn(e))),A=E()((e=>console.warn(e))),$=class extends Error{constructor(e,t,r){let n;super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,"headers"in r&&void 0!==r.headers&&(n=r.headers),"response"in r&&(this.response=r.response,n=r.response.headers);const o=Object.assign({},r.request);r.request.headers.authorization&&(o.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),o.url=o.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=o,Object.defineProperty(this,"code",{get:()=>(T(new q("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t)}),Object.defineProperty(this,"headers",{get:()=>(A(new q("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),n||{})})}};function S(e){const t=e.request&&e.request.log?e.request.log:console,r=!1!==e.request?.parseSuccessResponseBody;(i(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let n,o,s={},{fetch:a}=globalThis;if(e.request?.fetch&&(a=e.request.fetch),!a)throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");return a(e.url,{method:e.method,body:e.body,headers:e.headers,signal:e.request?.signal,...e.body&&{duplex:"half"}}).then((async i=>{o=i.url,n=i.status;for(const e of i.headers)s[e[0]]=e[1];if("deprecation"in s){const r=s.link&&s.link.match(/<([^>]+)>; rel="deprecation"/),n=r&&r.pop();t.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${s.sunset}${n?`. See ${n}`:""}`)}if(204!==n&&205!==n){if("HEAD"===e.method){if(n<400)return;throw new $(i.statusText,n,{response:{url:o,status:n,headers:s,data:void 0},request:e})}if(304===n)throw new $("Not modified",n,{response:{url:o,status:n,headers:s,data:await x(i)},request:e});if(n>=400){const t=await x(i),r=new $(function(e){if("string"==typeof e)return e;if("message"in e)return Array.isArray(e.errors)?`${e.message}: ${e.errors.map(JSON.stringify).join(", ")}`:e.message;return`Unknown error: ${JSON.stringify(e)}`}(t),n,{response:{url:o,status:n,headers:s,data:t},request:e});throw r}return r?await x(i):i.body}})).then((e=>({status:n,url:o,headers:s,data:e}))).catch((t=>{if(t instanceof $)throw t;if("AbortError"===t.name)throw t;throw new $(t.message,500,{request:e})}))}async function x(e){const t=e.headers.get("content-type");return/application\/json/.test(t)?e.json():!t||/^text\/|charset=utf-8$/.test(t)?e.text():function(e){return e.arrayBuffer()}(e)}var U=function e(t,r){const n=t.defaults(r);return Object.assign((function(t,r){const o=n.merge(t,r);if(!o.request||!o.request.hook)return S(n.parse(o));const s=(e,t)=>S(n.parse(n.merge(e,t)));return Object.assign(s,{endpoint:n,defaults:e.bind(null,n)}),o.request.hook(s,o)}),{endpoint:n,defaults:e.bind(null,n)})}(j,{headers:{"user-agent":`octokit-request.js/8.1.2 ${n()}`}});var C=class extends Error{constructor(e,t,r){super("Request failed due to following response errors:\n"+r.errors.map((e=>` - ${e.message}`)).join("\n")),this.request=e,this.headers=t,this.response=r,this.name="GraphqlResponseError",this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},P=["method","baseUrl","url","headers","request","query","mediaType"],D=["query","method","url"],R=/\/api\/v3\/?$/;function F(e,t){const r=e.defaults(t);return Object.assign(((e,t)=>function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const e in r)if(D.includes(e))return Promise.reject(new Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}const n="string"==typeof t?Object.assign({query:t},r):t,o=Object.keys(n).reduce(((e,t)=>P.includes(t)?(e[t]=n[t],e):(e.variables||(e.variables={}),e.variables[t]=n[t],e)),{}),s=n.baseUrl||e.endpoint.DEFAULTS.baseUrl;return R.test(s)&&(o.url=s.replace(R,"/api/graphql")),e(o).then((e=>{if(e.data.errors){const t={};for(const r of Object.keys(e.headers))t[r]=e.headers[r];throw new C(o,t,e.data)}return e.data.data}))}(r,e,t)),{defaults:F.bind(null,r),endpoint:r.endpoint})}F(U,{headers:{"user-agent":`octokit-graphql.js/7.0.2 ${n()}`},method:"POST",url:"/graphql"});var H=/^v1\./,I=/^ghs_/,N=/^ghu_/;async function z(e){const t=3===e.split(/\./).length,r=H.test(e)||I.test(e),n=N.test(e);return{type:"token",token:e,tokenType:t?"app":r?"installation":n?"user-to-server":"oauth"}}async function _(e,t,r,n){const o=t.endpoint.merge(r,n);return o.headers.authorization=function(e){return 3===e.split(/\./).length?`bearer ${e}`:`token ${e}`}(e),t(o)}var L=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if("string"!=typeof e)throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(z.bind(null,e),{hook:_.bind(null,e)})},B="5.0.1",G=class{static{this.VERSION=B}static defaults(e){return class extends(this){constructor(...t){const r=t[0]||{};super("function"!=typeof e?Object.assign({},e,r,r.userAgent&&e.userAgent?{userAgent:`${r.userAgent} ${e.userAgent}`}:null):e(r))}}}static{this.plugins=[]}static plugin(...e){const t=this.plugins;return class extends(this){static{this.plugins=t.concat(e.filter((e=>!t.includes(e))))}}}constructor(e={}){const t=new o.Collection,r={baseUrl:U.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};var s;if(r.headers["user-agent"]=[e.userAgent,`octokit-core.js/${B} ${n()}`].filter(Boolean).join(" "),e.baseUrl&&(r.baseUrl=e.baseUrl),e.previews&&(r.mediaType.previews=e.previews),e.timeZone&&(r.headers["time-zone"]=e.timeZone),this.request=U.defaults(r),this.graphql=(s=this.request,F(s,{method:"POST",url:"/graphql"})).defaults(r),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},e.log),this.hook=t,e.authStrategy){const{authStrategy:r,...n}=e,o=r(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:n},e.auth));t.wrap("request",o.hook),this.auth=o}else if(e.auth){const r=L(e.auth);t.wrap("request",r.hook),this.auth=r}else this.auth=async()=>({type:"unauthenticated"});this.constructor.plugins.forEach((t=>{Object.assign(this,t(this,e))}))}}},85186:(e,t,r)=>{var n=r(23698),o=r(92505),s=r(26417),i=Function.bind,a=i.bind(i);function c(e,t,r){var n=a(s,null).apply(null,r?[t,r]:[t]);e.api={remove:n},e.remove=n,["before","error","after","wrap"].forEach((function(n){var s=r?[t,n,r]:[t,n];e[n]=e.api[n]=a(o,null).apply(null,s)}))}function u(){var e={registry:{}},t=n.bind(null,e);return c(t,e),t}var l=!1;function p(){return l||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),l=!0),u()}p.Singular=function(){var e={registry:{}},t=n.bind(null,e,"h");return c(t,e,"h"),t}.bind(),p.Collection=u.bind(),e.exports=p,e.exports.Hook=p,e.exports.Singular=p.Singular,e.exports.Collection=p.Collection},92505:e=>{e.exports=function(e,t,r,n){var o=n;e.registry[r]||(e.registry[r]=[]);"before"===t&&(n=function(e,t){return Promise.resolve().then(o.bind(null,t)).then(e.bind(null,t))});"after"===t&&(n=function(e,t){var r;return Promise.resolve().then(e.bind(null,t)).then((function(e){return o(r=e,t)})).then((function(){return r}))});"error"===t&&(n=function(e,t){return Promise.resolve().then(e.bind(null,t)).catch((function(e){return o(e,t)}))});e.registry[r].push({hook:n,orig:o})}},23698:e=>{e.exports=function e(t,r,n,o){if("function"!=typeof n)throw new Error("method for before hook must be a function");o||(o={});if(Array.isArray(r))return r.reverse().reduce((function(r,n){return e.bind(null,t,n,r,o)}),n)();return Promise.resolve().then((function(){return t.registry[r]?t.registry[r].reduce((function(e,t){return t.hook.bind(null,e,o)}),n)():n(o)}))}},26417:e=>{e.exports=function(e,t,r){if(!e.registry[t])return;var n=e.registry[t].map((function(e){return e.orig})).indexOf(r);if(-1===n)return;e.registry[t].splice(n,1)}},30778:(e,t,r)=>{var n=r(52479);function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function s(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=n(o),e.exports.strict=n(s),o.proto=o((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return s(this)},configurable:!0})}))},52479:e=>{e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach((function(e){n[e]=t[e]})),n;function n(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=e[e.length-1];return"function"==typeof n&&n!==o&&Object.keys(o).forEach((function(e){n[e]=o[e]})),n}}}}]);