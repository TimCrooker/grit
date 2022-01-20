"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[922],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6229:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],s={},c="Completed",l={unversionedId:"generator-file/completed",id:"generator-file/completed",title:"Completed",description:"The completed section is similar to the Prepare section in that there is no single designated use case. There are quite a few specific use-cases however, that are commonly seen and very useful",source:"@site/docs/generator-file/completed.md",sourceDirName:"generator-file",slug:"/generator-file/completed",permalink:"/Grit/docs/generator-file/completed",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/generator-file/completed.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Prompts",permalink:"/Grit/docs/generator-file/prompts"}},u=[{value:"Common Use-Cases",id:"common-use-cases",children:[{value:"Git",id:"git",children:[{value:"Initialize Repo",id:"initialize-repo",children:[],level:4},{value:"Create Commits",id:"create-commits",children:[],level:4}],level:3},{value:"Running Scripts",id:"running-scripts",children:[],level:3},{value:"Displaying Success Message",id:"displaying-success-message",children:[],level:3},{value:"Generator Chaining",id:"generator-chaining",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"completed"},"Completed"),(0,o.kt)("p",null,"The completed section is similar to the ",(0,o.kt)("a",{parentName:"p",href:"create-generator/generator-file/prepare"},"Prepare")," section in that there is no single designated use case. There are quite a few specific use-cases however, that are commonly seen and very useful"),(0,o.kt)("h2",{id:"common-use-cases"},"Common Use-Cases"),(0,o.kt)("h3",{id:"git"},"Git"),(0,o.kt)("h4",{id:"initialize-repo"},"Initialize Repo"),(0,o.kt)("p",null,"Grit has a method for initializing a git repo in the generator output directory. This is nice if you want to further shrink the number of things a user of your generator has to worry about."),(0,o.kt)("h4",{id:"create-commits"},"Create Commits"),(0,o.kt)("p",null,"Grit has a method for creating git commits that takes in only a message argument. This allows you to automatically create commits with any message on the users repository."),(0,o.kt)("h3",{id:"running-scripts"},"Running Scripts"),(0,o.kt)("p",null,"Grit has 2 methods for running scripts. A general script runner that can run any terminal command in a separate thread. Additionally there is an abstracted method that will run npm scripts from the package.json of the output files. This is great for automatically running builds, serving files, running tests, or any other use case you can derive from the scripts in a package.json."),(0,o.kt)("h3",{id:"displaying-success-message"},"Displaying Success Message"),(0,o.kt)("p",null,"Grit has a simple method for displaying a success message to the user indicating that the generator completed successfully."),(0,o.kt)("h3",{id:"generator-chaining"},"Generator Chaining"),(0,o.kt)("p",null,"You can read more about generator chaining in other sections of the docs, but this is very useful for composing endless number of smaller generators into large complex generators with very little effort."))}m.isMDXComponent=!0}}]);