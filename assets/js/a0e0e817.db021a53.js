"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[338],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={},s="Prompts",p={unversionedId:"generator-file/prompts",id:"generator-file/prompts",title:"Prompts",description:"The prompts section is where you define the questions that the user will see and answer. The answers to the questions you ask the user will be available through the rest of the generators runtime sections.",source:"@site/docs/generator-file/prompts.md",sourceDirName:"generator-file",slug:"/generator-file/prompts",permalink:"/Grit/docs/generator-file/prompts",editUrl:"https://github.com/TimCrooker/Grit/edit/master/docs/docs/generator-file/prompts.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Prepare",permalink:"/Grit/docs/generator-file/prepare"},next:{title:"Completed",permalink:"/Grit/docs/generator-file/completed"}},u=[{value:"How to define",id:"how-to-define",children:[{value:"As an object",id:"as-an-object",children:[],level:3},{value:"As a function",id:"as-a-function",children:[],level:3}],level:2},{value:"What is a prompt?",id:"what-is-a-prompt",children:[{value:"Structure",id:"structure",children:[{value:"Type",id:"type",children:[],level:4}],level:3}],level:2},{value:"Prompt Types",id:"prompt-types",children:[{value:"Input",id:"input",children:[],level:3},{value:"Confirm",id:"confirm",children:[],level:3},{value:"List",id:"list",children:[{value:"List Choice",id:"list-choice",children:[],level:4}],level:3},{value:"Checkbox",id:"checkbox",children:[{value:"Checkbox Choice",id:"checkbox-choice",children:[],level:4}],level:3},{value:"Number",id:"number",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"prompts"},"Prompts"),(0,l.kt)("p",null,"The prompts section is where you define the questions that the user will see and answer. The answers to the questions you ask the user will be available through the rest of the generators runtime sections."),(0,l.kt)("h2",{id:"how-to-define"},"How to define"),(0,l.kt)("p",null,"This section can be defined in the generator config in 2 different ways depending on your use case and preference. Either as either an object containing an array of prompt objects, or a function (can be async) that returns an array of prompts."),(0,l.kt)("h3",{id:"as-an-object"},"As an object"),(0,l.kt)("p",null,"Defining your prompts as an object makes it quick and easy to define prompts for more simplistic generator use cases."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note that the prompt object contains a single array which itself contains all of the prompts.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Generator, GeneratorConfig } from 'gritenv'\n\nconst config = { \n prompts: {\n  [/*insert-prompt-objects*/]\n },\n} as GeneratorConfig\n\nexport = new Generator(config)\n")),(0,l.kt)("h3",{id:"as-a-function"},"As a function"),(0,l.kt)("p",null,"Defining the prompts section as a function allows for much more dynamic and complex prompting logic. This is the preferred way to define prompts for most use cases."),(0,l.kt)("p",null,"The the only constraints of the prompts function is that the return value must be an array of prompt objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Generator, GeneratorConfig } from 'gritenv'\n\nconst config = { \n prompts() {\n  return [/*insert-prompt-objects*/]\n },\n} as GeneratorConfig\n\nexport = new Generator(config)\n")),(0,l.kt)("p",null,"If you opt for this section to be a function, then you have access to methods that make it even easier to add prompts to the generator that we will address later."),(0,l.kt)("h2",{id:"what-is-a-prompt"},"What is a prompt?"),(0,l.kt)("p",null,"A prompt is an object that contains information used to get input from the user that can be used to alter the output of the generator"),(0,l.kt)("h3",{id:"structure"},"Structure"),(0,l.kt)("p",null,"A  single prompt is always defined by a single object. Each prompt object has unique properties specific to the data type it works with but all prompts have a few data fields in common."),(0,l.kt)("p",null,"Prompts must always be defined with the type, name and message"),(0,l.kt)("h4",{id:"type"},"Type"),(0,l.kt)("p",null,"This field identifies the type of prompt you are defining. Each prompt type has a different set of properties and a different output data type."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Input => string"),(0,l.kt)("li",{parentName:"ul"},"Number => number"),(0,l.kt)("li",{parentName:"ul"},"Confirm => Boolean"),(0,l.kt)("li",{parentName:"ul"},"List => string"),(0,l.kt)("li",{parentName:"ul"},"Checkbox => Array of strings"),(0,l.kt)("li",{parentName:"ul"},"Password => string")),(0,l.kt)("h2",{id:"prompt-types"},"Prompt Types"),(0,l.kt)("p",null,"There are multiple prompt types availiable to you for obtaining different data types users of the generator."),(0,l.kt)("h3",{id:"input"},"Input"),(0,l.kt)("p",null,"The input prompt is a pretty basic prompt type. It is used to obtain string input from the user."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example will ask the user for their name and allow them to enter a string value in response.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n type: 'input',\n name: 'name',\n message: 'What is your name?'\n}\n")),(0,l.kt)("h3",{id:"confirm"},"Confirm"),(0,l.kt)("p",null,"The confirm prompt is nice for quickly obtaining yes/no answers from users. It will be saved as a boolean value."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example will ask the user if they want to install a generator (y/n).")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n type: 'confirm',\n name: 'generator',\n message: 'Do you want to install a generator?'\n}\n")),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("p",null,"The List prompt type is great for allowing a user to an option from a list of choices. Think of this like a multiple choice question. The response value to this prompt will be single string representing the value of the selected choice."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example will ask the user to pick their favorite fruit from the list of fruits.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n type: 'list',\n name: 'favFruit',\n message: 'What is your favorite fruit?',\n choices: [\n{ \n    name: 'Apple',\n    value: 'apple'\n   },\n   { \n    name: 'Pineapple',\n    value: 'pine'\n   },\n   { \n    name: 'Pizza',\n    value: 'za'\n   }\n ]\n // the returned value from selecting Pizza would be the string: za\n}\n")),(0,l.kt)("h4",{id:"list-choice"},"List Choice"),(0,l.kt)("p",null,"To create a list, you must define a choices array. This array is a list of Choice objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n name: 'name',\n value: 'value',\n disabled: false\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text that will be shown to the user"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"the string value returned if this choice is selected"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"does not show the choice to the user as an option"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"checkbox"},"Checkbox"),(0,l.kt)("p",null,"The Checkbox prompt type is great for allowing a user to select any number of items from a list. The response value to this prompt will be an array of strings representing all of the selected choices' values."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example will ask the user to select any number of items from the list.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n type: 'checkbox',\n name: 'name',\n message: 'Select all of your favorite Grit commands?'\n choices: [\n  { \n   name: 'Grit Install',\n   value: 'install'\n  },\n  { \n   name: 'Grit Update',\n   value: 'update'\n  },\n  { \n   name: 'Grit Remove',\n   value: 'remove'\n  }\n ]\n}\n// The returned value from a user selecting all three would be ['install', 'update', 'remove']\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"choices"),(0,l.kt)("td",{parentName:"tr",align:null},"an array of choice objects"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h4",{id:"checkbox-choice"},"Checkbox Choice"),(0,l.kt)("p",null,"To create a Checkbox list, you must define a choices array. This array is a list of Choice objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Standalone choice object\n{\n name: 'name',\n value: 'value', \n checked: false \n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"text that will be shown to the user"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"the string value appened to the response array if this choice is selected"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checked"),(0,l.kt)("td",{parentName:"tr",align:null},"selects the choice to by default when its true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"number"},"Number"),(0,l.kt)("p",null,"The number prompt is another pretty basic prompt type. It is used to obtain number input from the user rather than string."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example will ask the user for their age and allow them to enter a number value in response.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n type: 'number',\n name: 'age',\n message: 'How old are you?'\n}\n")))}m.isMDXComponent=!0}}]);