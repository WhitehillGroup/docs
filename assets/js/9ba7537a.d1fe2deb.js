"use strict";(self.webpackChunkjsm_docs=self.webpackChunkjsm_docs||[]).push([[502],{298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(4848),i=n(8453);const s={sidebar_position:1},a="Installation",r={id:"jsm/eas/installation",title:"Installation",description:"Download the recent available file for this product via Axon.",source:"@site/docs/jsm/eas/installation.mdx",sourceDirName:"jsm/eas",slug:"/jsm/eas/installation",permalink:"/jsm/eas/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"jsmSidebar",previous:{title:"EAS",permalink:"/category/eas"},next:{title:"SCO v3",permalink:"/category/sco-v3"}},l={},c=[{value:"1) Enable HTTP Requests",id:"1",level:3},{value:"2) Product Insertion",id:"2",level:3},{value:"3) Monitoring Station &amp; Operator Barcodes",id:"3",level:3},{value:"4) Gate Configuration",id:"4",level:3},{value:"5) Creation of Items",id:"5",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"installation",children:"Installation"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Download the recent available file for this product via ",(0,o.jsx)(t.a,{href:"https://axon.whitehill.group",children:"Axon"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"1",children:"1) Enable HTTP Requests"}),"\n",(0,o.jsx)("iframe",{width:"705.61",height:"397.5",src:"https://www.youtube.com/embed/qtKN_3Moi7M",title:"Enabling HTTP Requests",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"}),"\n",(0,o.jsx)(t.h3,{id:"2",children:"2) Product Insertion"}),"\n",(0,o.jsx)(t.p,{children:"Insert your file by 'dragging' the product file into Roblox Studio with your game fully loaded. The deactivation field has been purposely left unobfuscated to show you an example of disabling tags, you could place this in one-way systems to reduce the amount of activations by trolling customers."}),"\n",(0,o.jsx)(t.p,{children:"Your game will need to be published for the product to work."}),"\n",(0,o.jsx)(t.h3,{id:"3",children:"3) Monitoring Station & Operator Barcodes"}),"\n",(0,o.jsxs)(t.p,{children:["The monitoring station is used to keep track of activation events. It also comes with an integration for ",(0,o.jsx)(t.a,{href:"https://discord.com/invite/3DR632F",children:"VoCoVo"})," and ",(0,o.jsx)(t.a,{href:"https://discord.com/invite/kybo",children:"Walvo"})]}),"\n",(0,o.jsx)(t.p,{children:"Setting up Integrations is simple with the 'AutomaticIntegrations' setting, with this setting you can choose if you want to use the Applegate VoCoVo or the Kybo Walvo. Setting the value next to it to true will enable it."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Want to use the same accounts as SCO V3? Set the 'SCOv3Location' to your SCOv3 folder."})}),"\n",(0,o.jsxs)(t.p,{children:["Make sure the 'OperatorID' in the Settings.Account module are the same as the one in your JSM | Operator Barcode.\n",(0,o.jsx)(t.img,{alt:"accountsConfig",src:n(6567).A+"",width:"356",height:"270"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"exampleOperatorBarcode",src:n(967).A+"",width:"306",height:"263"})}),"\n",(0,o.jsx)(t.h3,{id:"4",children:"4) Gate Configuration"}),"\n",(0,o.jsx)(t.p,{children:"If you're planning to use more than one set of anti-theft gates for your store, you will need to setup 'zones'. This needs to be done for the gate & sensor."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"In explorer, click the 'Sensor' for your desired gate"}),"\n",(0,o.jsxs)(t.li,{children:["Change the ",(0,o.jsx)(t.code,{children:"Zone"})," to a unique numerical value that isn't used by any other gate"]}),"\n",(0,o.jsx)(t.li,{children:"Repeat this for both of your anti-theft gates, using the same numerical value as your sensor"}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["You can have an unlimited number of sensor and anti-theft gates for your game, just adjust the ",(0,o.jsx)(t.code,{children:"Zone"})," in each model to link them together."]})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["This step is very important to prevent activations all over your store. If a sensor/gate isn't working, double check that you ",(0,o.jsx)(t.a,{href:"#4",children:"set the zones correctly"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"5",children:"5) Creation of Items"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Test Tag"})," can be used to test your gates, it can also show you how to 'protect' your product to raise an alarm from the anti-theft gates."]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Click onto your desired tool in explorer"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Inside"})," the Tool, click the plus & search for ",(0,o.jsx)(t.code,{children:"BindableFunction"})]}),"\n",(0,o.jsxs)(t.li,{children:["Change the name of the ",(0,o.jsx)(t.code,{children:"BindableFunction"})," to ",(0,o.jsx)(t.code,{children:"JSM | EAS Test Tag"})]}),"\n",(0,o.jsx)(t.li,{children:"Add a 'booleen' attribute into the 'JSM | EAS Test Tag', it should be called 'EASActive'"}),"\n",(0,o.jsx)(t.li,{children:"Enable the 'EASActive' value to 'arm' the tag for future activations."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Products like SCO v3 will search for the 'JSM | Item Data' object and disable the EASActive value."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6567:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/AccountSettings-854ae1dca3b5a00810ec0d4b57454426.png"},967:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/BarcodeProps-6210671495410519db1768d79c3bf301.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);