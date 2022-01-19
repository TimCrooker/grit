"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),a=["components"],o={sidebar_position:4},u="Generator Instance",s={unversionedId:"generator-instance",id:"generator-instance",title:"Generator Instance",description:"The generator instance is availiable in methods of the generator file via the this keyword which gives you access to all of the following properties and methods.",source:"@site/docs/generator-instance.md",sourceDirName:".",slug:"/generator-instance",permalink:"/Grit/docs/generator-instance",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/generator-instance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},p=[{value:"Properties",id:"properties",children:[{value:"answers",id:"answers",children:[],level:3},{value:"data",id:"data",children:[],level:3},{value:"pkg",id:"pkg",children:[],level:3},{value:"gitUser",id:"gituser",children:[],level:3},{value:"outDirName",id:"outdirname",children:[],level:3},{value:"outDir",id:"outdir",children:[],level:3},{value:"npmClient",id:"npmclient",children:[],level:3},{value:"logger",id:"logger",children:[],level:3},{value:"spinner",id:"spinner",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"gitInit",id:"gitinit",children:[],level:3},{value:"gitCommit",id:"gitcommit",children:[],level:3},{value:"npmInstall",id:"npminstall",children:[],level:3},{value:"runScript",id:"runscript",children:[],level:3},{value:"showProjectTips",id:"showprojecttips",children:[],level:3},{value:"createError",id:"createerror",children:[],level:3},{value:"getOutputFiles",id:"getoutputfiles",children:[],level:3},{value:"hasOutputFile",id:"hasoutputfile",children:[],level:3},{value:"readOutputFile",id:"readoutputfile",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"generator-instance"},"Generator Instance"),(0,l.kt)("p",null,"The generator instance is availiable in methods of the generator file via the ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," keyword which gives you access to all of the following properties and methods."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"answers"},"answers"),(0,l.kt)("p",null,"The answers to prompts. Cannot be accessing inside of ",(0,l.kt)("inlineCode",{parentName:"p"},"prompts")," in the generator."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"{[k: string]: any | undefined}"))),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("p",null,"A merged object combining the answers and any data returned from the ",(0,l.kt)("a",{parentName:"p",href:"generator-file/data"},"data method")," of generator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"{[k: string]: any | undefined}"))),(0,l.kt)("h3",{id:"pkg"},"pkg"),(0,l.kt)("p",null,"Read the contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file from the output directory. Will return undefined if it does not exist"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"{[k: string]: any | undefined}"))),(0,l.kt)("h3",{id:"gituser"},"gitUser"),(0,l.kt)("p",null,"The machines global git user config"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"{name: string, username: string, email: string}"))),(0,l.kt)("h3",{id:"outdirname"},"outDirName"),(0,l.kt)("p",null,"The basename of the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h3",{id:"outdir"},"outDir"),(0,l.kt)("p",null,"The absolute path to the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h3",{id:"npmclient"},"npmClient"),(0,l.kt)("p",null,"The users npm client"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"npm | yarn"))),(0,l.kt)("h3",{id:"logger"},"logger"),(0,l.kt)("p",null,"The logger instance for logging messages to the user with useful featureSvg"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("a",{parentName:"li",href:"/Grit/docs/logger"},"Logger"))),(0,l.kt)("h3",{id:"spinner"},"spinner"),(0,l.kt)("p",null,"The spinner instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/ora"},"Ora"))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"gitinit"},"gitInit"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"git init")," in the output directory synchronously"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"() => void"))),(0,l.kt)("h3",{id:"gitcommit"},"gitCommit"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"git Commit -m '[message]'")," in the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(commitMessage?: string) => Promise<void>"))),(0,l.kt)("h3",{id:"npminstall"},"npmInstall"),(0,l.kt)("p",null,"Installs dependencies in the output directory with preferred npm client"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"InstallPackages"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type InstallPackages = (opts: InstallOptions) => Promise<{ code: number }>\n\ninterface InstallOptions {\n /** Install directory */\n cwd: string\n /** Package manager being used */\n npmClient?: NPM_CLIENT\n /** Package manager install CLI options */\n installArgs?: string[]\n /** Names of additional packages to install */\n packages?: string[]\n /** Run install as devDependencies */\n saveDev?: boolean\n registry?: string\n}\n")),(0,l.kt)("h3",{id:"runscript"},"runScript"),(0,l.kt)("p",null,"Runs an npm script in the output directories package.json file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"RunScript"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type RunScript = (opts: RunNpmScriptOptions) => Promise<void>\n\ninterface RunNpmScriptOptions {\n /** the path to the directory commands will run in*/\n cwd?: string\n /** name of script from package.json to run */\n script: string\n /** Package manager being used */\n npmClient?: NPM_CLIENT\n /** Argunemets to be appended to the command line */\n args?: string[]\n}\n")),(0,l.kt)("h3",{id:"showprojecttips"},"showProjectTips"),(0,l.kt)("p",null,"Show the user a success message"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"() => void"))),(0,l.kt)("h3",{id:"createerror"},"createError"),(0,l.kt)("p",null,"Throw errors more elegantly with better logging of the error stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(message: string) => GritError"))),(0,l.kt)("h3",{id:"getoutputfiles"},"getOutputFiles"),(0,l.kt)("p",null,"Get a list of the files in the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"() => Promise<string[]>"))),(0,l.kt)("h3",{id:"hasoutputfile"},"hasOutputFile"),(0,l.kt)("p",null,"Check if a specific file exists in the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(file: string) => Promise<boolean>"))),(0,l.kt)("h3",{id:"readoutputfile"},"readOutputFile"),(0,l.kt)("p",null,"Get the stringified content of a specific file in the output directory"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"(file: string) => Promise<string>"))))}d.isMDXComponent=!0}}]);