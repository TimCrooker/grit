"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237],{2515:function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r,a,i,l,o=e(7294),c=e(4814),s=e(2736),d=e(1880),p=e(186),m=p.ZP.a(r||(r=(0,d.Z)(["\n\tpadding: 0.75rem 1.5rem;\n\ttext-align: center;\n\tfont-size: 1.15rem;\n\tfont-weight: 500;\n\ttext-decoration: none !important;\n\tborder-bottom: none;\n\ttransition: all 0.2s ease-out;\n\tmax-width: 50%;\n\tborder-radius: 5px;\n\n\t&.primary {\n\t\tcolor: white;\n\t\tbackground-color: var(--ifm-color-primary);\n\n\t\t&::after {\n\t\t\tcontent: '\u203a';\n\t\t\tfont-size: 24px;\n\t\t\tmargin-left: 8px;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcolor: black;\n\t\t\tbackground-color: white;\n\t\t}\n\t}\n\n\t&.secondary {\n\t\tbackground-color: var(--ifm-color-secondary);\n\t\tcolor: black;\n\n\t\t&:hover {\n\t\t\tcolor: white;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 480px) {\n\t\tmax-width: 100%;\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\twhite-space: nowrap;\n\t}\n"]))),u=p.ZP.section(a||(a=(0,d.Z)(["\n\t@import '../../css/shared';\n\n\twidth: 100%;\n\tpadding-top: 50px;\n\tpadding-bottom: 50px;\n\toverflow-x: hidden;\n\tmargin: 0 auto;\n\n\th1,\n\th2 {\n\t\tfont-size: 50px;\n\t\tfont-weight: 800;\n\t}\n\n\t&.Section {\n\t\tborder-top: 1px solid var(--ifm-table-border-color);\n\t}\n\n\t&.tint {\n\t\tbackground-color: var(--ifm-menu-color-background-active);\n\t}\n\n\t&.dark {\n\t\tbackground-color: var(--dark);\n\t}\n\n\tp a {\n\t\t@extend %link-style;\n\t}\n\n\thtml[data-theme='dark'] p a {\n\t\t@extend %link-style-dark;\n\t}}\n"])));p.ZP.div(i||(i=(0,d.Z)(["\n\tdisplay: grid;\n\tjustify-content: center;\n\n\t.column {\n\t\twidth: 100%;\n\n\t\t&.first {\n\t\t\tgrid-area: first;\n\t\t}\n\n\t\t&.last {\n\t\t\tgrid-area: last;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 961px) {\n\t\tmargin: 0 auto;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tgrid-template-areas: 'first last';\n\n\t\t&.reverse {\n\t\t\tgrid-template-areas: 'last first';\n\t\t}\n\n\t\t.column {\n\t\t\t&.left {\n\t\t\t\tpadding-right: 50px;\n\t\t\t}\n\n\t\t\t&.right {\n\t\t\t\tpadding-left: 50px;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 960px) {\n\t\t&.reverse {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tgrid-template-areas: 'first' 'last';\n\t\t}\n\n\t\t.column {\n\t\t\tpadding: 0 4rem;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 480px) {\n\t\t.column {\n\t\t\tpadding: 0 1.25rem;\n\t\t}\n\t}\n"]))),p.ZP.h2(l||(l=(0,d.Z)(["\n\tfont-size: 25px;\n\tcolor: var(--ifm-font-color-base);\n\tline-height: 1.2;\n\tmargin-top: 0;\n\tmargin-bottom: 20px;\n\tfont-weight: 700;\n"])));function g(t){var n=t.children,e=t.className,r=t.background,a=void 0===r?"light":r;return o.createElement(u,{className:"section "+e+" "+a},n)}function f(t){var n=t.href,e=t.type,r=void 0===e?"primary":e,a=t.target,i=t.children;return o.createElement(m,{className:r,href:n,target:a},i)}function h(t){var n=t.publicId,e=t.imageUrl,r=t.cloudName,a=t.alt,i=t.style,l=void 0===i?{}:i;return o.createElement(o.Fragment,null,n&&o.createElement(s.Ee,{cloudName:null!=r?r:"dfmg5c8l9",secure:"true",alt:a,publicId:n,className:"super-image",style:l}),e&&o.createElement("img",{alt:a,src:e,className:"super-image"}))}var x,b=e(4996);function w(){return o.createElement(o.Fragment,null,o.createElement(f,{type:"primary",href:(0,b.Z)("docs/getting-started/introduction"),target:"_self"},"Get started"),o.createElement(f,{type:"secondary",href:(0,b.Z)("docs/product-problem"),target:"_self"},"Learn more"))}var v=(0,p.ZP)(g)(x||(x=(0,d.Z)(["\npadding: 100px 24px 50px 24px;\n\n.wrapper {\n\tmax-width: 900px;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t.super-image {\n\t\tmin-width: 200px;\n\t}\n\n\t.socialLinks {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmax-width: 1200px;\n\t\tmargin: -10px auto 0;\n\n\t\t.twitter-follow-button,\n\t\t.github-button {\n\t\t\tmargin-right: 1rem;\n\t\t}\n\t}\n\n\t.title {\n\t\tfont-size: 4.2rem;\n\t\tcolor: var(--ifm-color-gray-800);\n\t\tline-height: 1;\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 20px;\n\t\tfont-weight: 900;\n\t\ttext-align: center;\n\n\t\t.code-text {\n\t\t\twhite-space: nowrap;\n\t\t\tcolor: var(--brand);\n\t\t}\n\n\t\t.boilerplate-text {\n\t\t\tcolor: var(--ifm-color-danger);\n\t\t\tposition: relative;\n\n\t\t\t/* &::after {\n\t\t\t\tcontent: '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^';\n\t\t\t\tletter-spacing: -3px;\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tcolor: red;\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 10px;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 0;\n\t\t\t\twidth: inherit;\n\t\t\t} */\n\t\t}\n\t}\n\n\t.subtitle {\n\t\tpadding-top: 20px;\n\t\tmax-width: 600px;\n\t\ttext-align: center;\n\t\tfont-size: 1.2rem;\n\t\tcolor: var(--ifm-color-gray-600);\n\t}\n\n\t.buttons {\n\t\tmargin-top: 40px;\n\t\tdisplay: flex;\n\t\tgap: 20px;\n\t}\n\n\t@media only screen and (max-width: 760px) {\n\t\t.title {\n\t\t\tfont-size: 3.5rem;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 480px) {\n\t\t.buttons {\n\t\t\twidth: 100%;\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t.title {\n\t\t\tfont-size: 2.8rem;\n\t\t}\n\n\t\t.subtitle {\n\t\t\tfont-size: 1.1rem;\n\t\t}\n\t}\n}\n}\n"])));var y=function(){return o.createElement(v,{background:"light"},o.createElement("div",{className:"wrapper"},o.createElement("h1",{className:"title"},"Write ",o.createElement("span",{className:"code-text"},"<Code />")," Not"," ",o.createElement("span",{className:"boilerplate-text"},"Boilerplate")),o.createElement("p",{className:"subtitle"},"Perfectplate is a simple, modular project generation CLI that builds and configures your web application infrestructure in seconds."),o.createElement("div",{className:"buttons"},o.createElement(w,null))))};var k,E,Z,N,I=function(t){return"perfect-boilerplate/frameworks/logos/"+t},j=function(t){return"perfect-boilerplate/plugins/logos/"+t},P=function(t){return"perfect-boilerplate/databases/logos/"+t},z=[{publicId:I("react"),title:"React",link:"https://reactjs.org/"},{publicId:I("nextjs"),title:"Next",link:"https://nextjs.org/"},{publicId:I("angular"),title:"Angular",link:"https://angular.io/"},{publicId:I("react"),title:"React Native",link:"https://reactnative.dev/"},{publicId:I("vue"),title:"Vue",link:"https://vuejs.org/"},{publicId:I("svelte"),title:"Svelte",link:"https://svelte.dev/"},{publicId:I("express"),title:"Express",link:"https://expressjs.com/"},{publicId:I("koa"),title:"KOA",link:"https://koajs.com/"}],C=[{publicId:P("mongodb"),title:"MongoDB",link:"https://www.mongodb.com/"},{publicId:P("mysql"),title:"MySql",link:"https://dev.mysql.com/"},{publicId:P("postgres"),title:"PostgreSQL",link:"https://www.postgresql.org/"}],q=(j("styled-components"),j("tailwind"),j("element-ui"),j("eslint"),j("stylelint"),j("docker"),j("css"),j("bootstrap"),j("material-ui"),j("redux"),e(3739)),L=(0,p.ZP)(g)(k||(k=(0,d.Z)(["\n\tmargin-top: 100px;\n\toverflow: hidden;\n\n\t.feature-grid {\n\t\tmargin: 0 auto;\n\n\t\t.feature {\n\t\t\tborder-radius: 50%;\n\t\t\tpadding: 16px;\n\t\t\tbox-shadow:\n\t\t\t\trgba(0, 0, 0, 0.02) 0 1px 3px 0,\n\t\t\t\trgba(27, 31, 35, 0.15) 0 0 0 1px;\n\n\t\t\t.super-image {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 997px) {\n\t\t.feature-grid {\n\t\t\tgrid-template-columns: repeat(auto-fill, 180px);\n\t\t\tmax-width: 80%;\n\t\t}\n\t}\n"]))),S=(0,p.ZP)(q.E.a)(E||(E=(0,d.Z)(["\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),B=p.ZP.div(Z||(Z=(0,d.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(6, 1fr);\n\talign-items: center;\n\tjustify-content: center;\n\n\t.feature {\n\t\twidth: 75px;\n\t\theight: 75px;\n\t\tmargin: 75px auto 0 auto;\n\t}\n\n\t@media only screen and (max-width: 997px) {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\n\t\t.feature {\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t\tmargin: 50px auto 0 auto;\n\t\t}\n\t}\n\n\t@media only screen and (max-width: 480px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\n\t\t.feature {\n\t\t\twidth: 50px;\n\t\t\theight: 50px;\n\t\t\tmargin: 50px auto 0 auto;\n\t\t}\n\t}\n"])));p.ZP.div(N||(N=(0,d.Z)(["\n\tdisplay: flex;\n\n\t.feature {\n\t\tflex-shrink: 0;\n\t\tmargin: 32.5px;\n\t\twidth: 75px;\n\t\theight: 75px;\n\t}\n"])));function F(t){var n=t.feature,e=t.key;return o.createElement(S,{key:e,whileHover:{scale:.9},className:"feature",href:n.link,target:"_blank"},o.createElement(h,{alt:n.title,publicId:n.publicId,imageUrl:n.imageUrl}))}function U(t){var n=t.features;return o.createElement(o.Fragment,null,null==n?void 0:n.map((function(t,n){return o.createElement(F,{key:n,feature:t})})))}function _(t){var n=t.features;return o.createElement(B,{className:"feature-grid"},o.createElement(U,{features:n}))}var A=function(){var t=[].concat(z,C);return o.createElement(L,{background:"light"},o.createElement("div",null,o.createElement("div",null,o.createElement("h2",{className:"text--center"},"Build Your Tech stack")),o.createElement(_,{features:t})))};var D=function(){return o.createElement(c.Z,{description:"Description will go into a meta tag in <head />",wrapperClassName:"homepage"},o.createElement(y,null),o.createElement("main",null,o.createElement(A,null)))}}}]);