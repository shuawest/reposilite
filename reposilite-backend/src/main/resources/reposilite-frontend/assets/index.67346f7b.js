var Ie=Object.defineProperty;var le=Object.getOwnPropertySymbols;var Te=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ie=(o,t,a)=>t in o?Ie(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,ce=(o,t)=>{for(var a in t||(t={}))Te.call(t,a)&&ie(o,a,t[a]);if(le)for(var a of le(t))Ce.call(t,a)&&ie(o,a,t[a]);return o};import{r as j,a as de,u as ue,w as H,d as Ee,b as Le,c as m,o as d,e as u,f as l,g as h,t as x,h as T,n as ee,i as pe,E as Se,S as Me,j as f,k as w,l as Oe,m as G,v as K,p as qe,q as B,s as _e,x as me,y as P,z as S,A,P as je,B as Be,C as N,D as te,F as M,G as q,T as Pe,H as Ae,I as Re,J as Ve,K as De,L as he,M as He,N as Ne,O as ze,Q as Ue,R as We,U as Ge}from"./vendor.18f96a99.js";const Ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}};Ke();const z=j({isDark:!1}),ge="dark-theme";function fe(){return{theme:z,fetchTheme:()=>{z.isDark=localStorage.getItem(ge)==="true"},toggleTheme:()=>{z.isDark=!z.isDark,localStorage.setItem(ge,z.isDark)}}}function D(){const o=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH"),t=o?"{{REPOSILITE.BASE_PATH}}":"/",a=o?"{{REPOSILITE.ID}}":"reposilite-repository",e=o?"{{REPOSILITE.TITLE}}":"Reposilite Repository",s=o?"{{REPOSILITE.DESCRIPTION}}":"Public Maven repository hosted through the Reposilite",i=o?"{{REPOSILITE.ORGANIZATION_WEBSITE}}":location.protocol+"//"+location.host+t;return{available:o,basePath:t,id:a,title:e,description:s,organizationWebsite:i,organizationLogo:o?"{{REPOSILITE.ORGANIZATION_LOGO}}":"https://avatars.githubusercontent.com/u/75123628?s=200&v=4",icpLicense:o?"{{REPOSILITE.ICP_LICENSE}}":"\u56FDICP\u5907000000000\u53F7"}}const{basePath:Fe}=D(),oe=()=>window.location.protocol+"//"+location.host+Fe,Qe=()=>oe().endsWith("/")?oe().slice(0,-1):oe(),F=o=>Qe()+o,ne=(o,t)=>{const a=()=>o&&t?e(o,t):{},e=(n,r)=>({headers:{Authorization:`xBasic ${btoa(`${n}:${r}`)}`}}),s=(n,r)=>(r=r||a(),de.get(F(n),ce({},r)));return{createURL:F,client:{auth:{me(n,r){return s("/api/auth/me",e(n,r))}},console:{},maven:{content(n){return s(`/${n}`)},details(n){return s(`/api/maven/details/${n||""}`)}}}}},O="",ve="session-token-name",be="session-token-secret",Ye="access-token:manager",Q=j({name:O,secret:O}),ke={id:O,name:O,createdAt:O,permissions:[],routes:[]},Y=j({details:ke});function U(){const o=(n,r)=>{localStorage.setItem(ve,n),Q.name=n,localStorage.setItem(be,r),Q.secret=r},t=()=>{o(O,O),Y.details=ke},a=async(n,r)=>{try{const{client:p}=ne();if(n==O)throw new Error("Missing credentials");const c=await p.auth.me(n,r);return o(n,r),Y.details=c.data,{token:Q,session:Y}}catch(p){throw t(),p}};return{token:Q,session:Y,login:a,logout:t,fetchSession:()=>a(localStorage.getItem(ve),localStorage.getItem(be)),isLogged:n=>(n==null?void 0:n.name)!=O,isManager:n=>{var r;return(r=n==null?void 0:n.permissions)==null?void 0:r.find(p=>p.identifier==Ye)}}}const Z=j({watchable:0,path:""});function Ze(o){const t=ue();return H(()=>t.params.qualifier,a=>{Z.path=a,Z.watchable++},{immediate:!0}),H(()=>o.name,a=>Z.watchable++),{qualifier:Z}}var v=(o,t)=>{for(const[a,e]of t)o[a]=e;return o};const Je=Ee({setup(){const{title:o,description:t,organizationLogo:a,icpLicense:e}=D();Le({title:o,description:t});const{theme:s,fetchTheme:i}=fe(),{fetchSession:n,token:r,session:p}=U(),{qualifier:c}=Ze(r);return i(),n().catch(g=>{}),{theme:s,qualifier:c,token:r,session:p,icpLicense:e}}}),Xe={class:"min-h-screen dark:bg-black dark:text-white"},et={key:0,class:"absolute h-8 pb-2 w-full text-center text-xs dark:bg-black dark:text-white"},tt={href:"https://beian.miit.gov.cn",target:"_blank"};function ot(o,t,a,e,s,i){const n=m("router-view");return d(),u("div",{class:ee({dark:o.theme.isDark})},[l("div",Xe,[h(n,{class:"router-view-full",qualifier:o.qualifier,token:o.token,session:o.session},null,8,["qualifier","token","session"]),o.icpLicense?(d(),u("div",et,[l("a",tt,x(o.icpLicense),1)])):T("",!0)])],2)}var nt=v(Je,[["render",ot]]);const st={},rt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},at=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),lt=[at];function it(o,t){return d(),u("svg",rt,lt)}var ct=v(st,[["render",it]]);const dt={components:{GlobeIcon:ct},setup(){const{description:o,organizationWebsite:t,organizationLogo:a}=D();return{description:o,organizationWebsite:t,organizationLogo:a}}},ut={class:"bg-gray-100 dark:bg-black"},pt={class:"container mx-auto flex flex-row <sm:flex-col <sm:items-center"},_t={class:"w-35 <sm:mb-2"},mt=["src"],ht={class:"flex flex-col justify-center px-10 <sm:px-0"},gt={class:"<sm:text-center"},ft={class:"flex flex-row py-2 <sm:justify-center"},vt=["href"];function bt(o,t,a,e,s,i){const n=m("GlobeIcon");return d(),u("div",ut,[l("div",pt,[l("div",_t,[l("img",{class:"border-2 rounded-full dark:border-gray-700",src:e.organizationLogo},null,8,mt)]),l("div",ht,[l("div",gt,x(e.description),1),l("div",ft,[h(n),l("a",{class:"px-3 text-gray-500",href:e.organizationWebsite},x(e.organizationWebsite),9,vt)])])])])}var kt=v(dt,[["render",bt]]);const yt={},xt={class:"mx-2 py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm cursor-pointer max-h-35px min-w-93px"};function wt(o,t){return d(),u("div",xt,[pe(o.$slots,"default")])}var $t=v(yt,[["render",wt]]);const It={inheritAttrs:!1,components:{VueFinalModal:Se,ModalsContainer:Me},setup(){const{login:o}=U(),t=f(!1),a=f(""),e=f(""),s=()=>t.value=!1;return{name:a,secret:e,close:s,showLogin:t,signin:(n,r)=>{o(n,r).then(p=>B(`Dashboard accessed as ${n}`,{position:"bottom-right"})).then(p=>s()).catch(p=>{console.log(p),B(`${p.response.status}: ${p.response.data.message}`,{type:"danger"})})}}}},Tt=o=>(_e("data-v-1d9af69e"),o=o(),me(),o),Ct={class:"relative border bg-white dark:bg-gray-900 border-gray-100 dark:border-black m-w-20 py-5 px-10 rounded-2xl shadow-xl text-center"},Et=Tt(()=>l("p",{class:"font-bold text-xl pb-4"},"Login with access token",-1)),Lt={class:"text-right mt-1"};function St(o,t,a,e,s,i){const n=m("vue-final-modal");return d(),u("div",null,[h(n,qe({modelValue:e.showLogin,"onUpdate:modelValue":t[6]||(t[6]=r=>e.showLogin=r)},o.$attrs,{classes:"flex justify-center items-center"}),{default:w(()=>[l("div",Ct,[Et,l("form",{class:"flex flex-col w-96",onSubmit:t[4]||(t[4]=Oe(r=>e.signin(e.name,e.secret),["prevent"]))},[G(l("input",{placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=r=>e.name=r),type:"text",class:"input"},null,512),[[K,e.name]]),G(l("input",{placeholder:"Secret","onUpdate:modelValue":t[1]||(t[1]=r=>e.secret=r),type:"password",class:"input"},null,512),[[K,e.secret]]),l("div",Lt,[l("button",{onClick:t[2]||(t[2]=r=>e.close()),class:"text-blue-400 text-xs"},"\u2190 Back to index")]),l("div",{class:"bg-gray-100 dark:bg-gray-800 py-2 my-3 rounded-md cursor-pointer",onClick:t[3]||(t[3]=r=>e.signin(e.name,e.secret))},"Sign in")],32),l("button",{class:"absolute top-0 right-0 mt-5 mr-5",onClick:t[5]||(t[5]=r=>e.close())},"\u{1F5D9}")])]),_:1},16,["modelValue"]),l("div",{onClick:t[7]||(t[7]=r=>e.showLogin=!0)},[pe(o.$slots,"button",{},void 0,!0)])])}var Mt=v(It,[["render",St],["__scopeId","data-v-1d9af69e"]]);const Ot={},qt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},jt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),Bt=[jt];function Pt(o,t){return d(),u("svg",qt,Bt)}var At=v(Ot,[["render",Pt]]);const Rt={},Vt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Dt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Ht=[Dt];function Nt(o,t){return d(),u("svg",Vt,Ht)}var zt=v(Rt,[["render",Nt]]);const Ut={},Wt={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Gt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},null,-1),Kt=[Gt];function Ft(o,t){return d(),u("svg",Wt,Kt)}var Qt=v(Ut,[["render",Ft]]);const Yt={components:{LogoutIcon:Qt,MenuButton:$t,LoginModal:Mt,MoonIcon:At,SunIcon:zt},props:{token:{type:Object,required:!0}},setup(o){const{theme:t,toggleTheme:a}=fe(),{title:e}=D(),{isLogged:s,logout:i}=U(),n=o.token,r=P(()=>s(n));return{token:n,title:e,logged:r,signout:()=>i(),theme:t,toggleTheme:a}}},Zt={class:"flex flex-row <sm:max-w-100px <sm:flex-wrap <sm:flex-1 <sm:justify-end <sm:min-w-1/2"},Jt={key:0,class:"pt-1.1 px-2 <sm:py-2 <sm:max-w-full <sm:truncate"},Xt=A(" Welcome "),eo={class:"font-bold underline"},to=A(" Sign in "),oo=A(" Logout "),no={key:2,class:"hidden px-2.7 pt-0.8 mr-1.5 cursor-pointer rounded-full bg-white dark:bg-gray-900 max-h-35px <sm:block"};function so(o,t,a,e,s,i){const n=m("MenuButton"),r=m("LoginModal"),p=m("LogoutIcon"),c=m("SunIcon"),g=m("MoonIcon");return d(),u("nav",Zt,[e.logged?(d(),u("div",Jt,[Xt,l("span",eo,x(e.token.name),1)])):T("",!0),h(r,null,{button:w(()=>[e.logged?T("",!0):(d(),S(n,{key:0},{default:w(()=>[to]),_:1}))]),_:1}),e.logged?(d(),S(n,{key:1,onClick:t[0]||(t[0]=_=>e.signout()),class:"<sm:hidden"},{default:w(()=>[oo]),_:1})):T("",!0),e.logged?(d(),u("div",no,[h(p,{onClick:t[1]||(t[1]=_=>e.signout())})])):T("",!0),l("div",{class:"pl-2 pt-1.3 cursor-pointer rounded-full bg-white dark:bg-gray-900 max-h-35px",onClick:t[2]||(t[2]=_=>e.toggleTheme())},[e.theme.isDark?(d(),S(c,{key:0,class:"mr-1.9"})):(d(),S(g,{key:1,class:"mr-1.5"}))])])}var ro=v(Yt,[["render",so]]);const ao={components:{Hero:kt,Menu:ro},props:{token:{type:Object,required:!0}},setup(o){const t=o.token,{title:a}=D();return{token:t,title:a}}},lo={class:"bg-gray-100 dark:bg-black dark:text-white"},io={class:"container mx-auto flex flex-row py-10 justify-between <sm:pb-2 <sm:pt-5 <sm:px-5 <sm:justify-start"},co={class:"text-xl font-medium py-1 <sm:w-1/2"};function uo(o,t,a,e,s,i){const n=m("router-link"),r=m("Menu"),p=m("Hero");return d(),u("header",lo,[l("div",io,[l("h1",co,[h(n,{to:"/"},{default:w(()=>[A(x(e.title),1)]),_:1})]),h(r,{token:e.token,class:"mt-0.5"},null,8,["token"])]),h(p,{class:"pt-2 pb-11 <sm:pb-4"})])}var po=v(ao,[["render",uo]]);function _o(){return{createSnippets:(t,a,e)=>[{name:"Maven",lang:"xml",snippet:`
<dependency>
  <groupId>${t}</groupId>
  <artifactId>${a}</artifactId>
  <version>${e}</version>
</dependency>`.trim()},{name:"Gradle Groovy",lang:"xml",snippet:`implementation "${t}:${a}:${e}"`},{name:"Gradle Kotlin",lang:"kotlin",snippet:`implementation("${t}:${a}:${e}")`},{name:"SBT",lang:"scala",snippet:`"${t}" %% "${a}" %% "${e}"`}]}}function mo(){const{basePath:o,id:t,title:a}=D();return{createRepositories:s=>{const i=P(()=>s.path.split("/")[0]),n=t+(s.path?`-${i.value}`:""),r=location.protocol+"//"+location.host+o+(o.endsWith("/")?"":"/")+(s.path?`${i.value}`:"{repository}");return[{name:"Maven",lang:"xml",snippet:`
<repository>
  <id>${n}</id>
  <name>${a}</name>
  <url>${r}</url>
</repository>
        `.trim()},{name:"Gradle Groovy",lang:"groovy",snippet:`maven {
    url "${r}"
 }`.trim()},{name:"Gradle Kotlin",lang:"kotlin",snippet:`maven {
    url = uri("${r}")
}`},{name:"SBT",lang:"scala",snippet:`resolvers += "${n}" at "${r}"`}]}}}const ho=new DOMParser;function go(){return{parseMetadata:s=>ho.parseFromString(s,"text/xml"),groupId:s=>{var i,n;return(n=(i=s==null?void 0:s.getElementsByTagName("groupId")[0])==null?void 0:i.firstChild)==null?void 0:n.nodeValue},artifactId:s=>{var i,n;return(n=(i=s==null?void 0:s.getElementsByTagName("artifactId")[0])==null?void 0:i.firstChild)==null?void 0:n.nodeValue},versions:s=>{var i,n,r;return(r=(n=Array.from((i=s==null?void 0:s.getElementsByTagName("versioning")[0])==null?void 0:i.children))==null?void 0:n.map(p=>p.firstChild.nodeValue))!=null?r:["{unknown}"]}}}const fo={},vo={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},bo=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},null,-1),ko=[bo];function yo(o,t){return d(),u("svg",vo,ko)}var xo=v(fo,[["render",yo]]);const wo={},$o={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Io=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),To=[Io];function Co(o,t){return d(),u("svg",$o,To)}var Eo=v(wo,[["render",Co]]);const Lo={components:{PrismEditor:je,CopyIcon:xo,DownIcon:Eo},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0}},setup(o){const t=o.qualifier,a=o.token,e=f(""),s=f([]),{createRepositories:i}=mo(),{createSnippets:n}=_o(),{parseMetadata:r,groupId:p,artifactId:c,versions:g}=go(),{client:_}=ne(a.name,a.secret),{copy:C,isSupported:b}=Be(),$=f(localStorage.getItem("card-tab")||"Maven"),R=f(localStorage.getItem("dropdown-open")||!1);N(()=>localStorage.setItem("card-tab",$.value)),N(()=>localStorage.setItem("dropdown-open",R.value));const W=()=>{s.value=i(t),e.value="Repository details"},L=(k,E)=>{const y=r(k);s.value=n(p(y),c(y),g(y)[E?g(y).indexOf(E):0]),e.value="Artifact details"};N(()=>{const k=t.path.split("/");if(k.length==1&&k[0]==""){W();return}_.maven.content(`${t.path}/maven-metadata.xml`).then(E=>L(E.data)).catch(E=>{_.maven.content(`${t.path.substring(0,t.path.indexOf(k[k.length-1])-1)}/maven-metadata.xml`).then(y=>L(y.data,k[k.length-1])).catch(y=>{y.message!=="Request failed with status code 404"&&console.log(y),W()})})}),N(()=>{s.value.forEach(k=>{k.highlighter=E=>{var y;return te.highlight(E,(y=te.languages[k.lang])!=null?y:te.languages.js)}})});const V=f("slide-right");return H($,(k,E)=>{const y=s.value.findIndex(X=>X.name===k),$e=s.value.findIndex(X=>X.name===E);V.value=y-$e<0?"slide-left":"slide-right"}),{title:e,configurations:s,selectedTab:$,transitionName:V,copy:async()=>{const{snippet:k}=s.value.find(E=>E.name===$.value);return await C(k),B("Copied snippet",{type:"info"})},isCopySupported:b,dropdownOpen:R}}},So={class:"bg-white dark:bg-gray-900 shadow-lg p-7 rounded-xl border-gray-100 dark:border-black"},Mo={class:"flex flex-row justify-between"},Oo={class:"font-bold flex items-center w-full"},qo={class:"flex <sm:hidden"},jo=["onClick"],Bo={class:"hidden flex-col items-center mt-24px <sm:flex"},Po={class:"w-20px h-25px float-right m-auto flex items-center"},Ao={key:0,class:"rounded-lg w-full box-border p-2 bg-true-gray-100 dark:bg-dark-600"},Ro=["onClick"],Vo=l("hr",{class:"dark:border-gray-800 <sm:hidden"},null,-1),Do={class:"overflow-hidden"};function Ho(o,t,a,e,s,i){const n=m("copy-icon"),r=m("down-icon"),p=m("prism-editor");return d(),u("div",So,[l("div",Mo,[l("h1",Oo,[A(x(e.title)+" ",1),e.isCopySupported?(d(),u("span",{key:0,onClick:t[0]||(t[0]=(...c)=>e.copy&&e.copy(...c)),class:"ml-auto cursor-pointer"},[h(n)])):T("",!0)])]),l("div",qo,[(d(!0),u(M,null,q(e.configurations,c=>(d(),u("div",{key:c.name,onClick:g=>e.selectedTab=c.name,class:ee(["py-4 px-7 flex-grow text-center border-b-2 cursor-pointer border-transparent",{"!border-gray-800":c.name===e.selectedTab}])},x(c.name),11,jo))),128))]),l("div",Bo,[l("div",{class:"w-full box-border py-5px p-2 rounded-lg border-1 border-true-gray-200 dark:border-dark-300",onClick:t[1]||(t[1]=c=>e.dropdownOpen=!e.dropdownOpen)},[A(x(e.selectedTab)+" ",1),l("div",Po,[h(r)])]),e.dropdownOpen?T("",!0):(d(),u("ul",Ao,[(d(!0),u(M,null,q(e.configurations,c=>(d(),u("li",{key:c.name,onClick:g=>{e.selectedTab=c.name,e.dropdownOpen=!e.dropdownOpen},class:ee(["dropdown py-1",{hidden:c.name===e.selectedTab}])},x(c.name),11,Ro))),128))]))]),Vo,l("div",Do,[h(Pe,{name:e.transitionName,mode:"out-in"},{default:w(()=>[(d(),u("div",{key:e.selectedTab,class:"relative h-33 mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-gray-800"},[(d(!0),u(M,null,q(e.configurations,c=>(d(),u(M,null,[c.name===e.selectedTab?(d(),S(p,{key:0,class:"snippet absolute text-sm",modelValue:c.snippet,"onUpdate:modelValue":g=>c.snippet=g,highlight:c.highlighter,readonly:"","line-numbers":""},null,8,["modelValue","onUpdate:modelValue","highlight"])):T("",!0)],64))),256))]))]),_:1},8,["name"])])])}var No=v(Lo,[["render",Ho]]);const zo={props:{file:{type:Object,required:!0}},setup(o){return{file:o.file,prettyBytes:Ae}}},Uo={class:"flex flex-row justify-between mb-1.5 py-3 rounded-full bg-white dark:bg-gray-900 lg:max-w-2/5 xl:max-w-1/2 cursor-pointer"},Wo={class:"flex flex-row"},Go={key:0,class:"text-xm px-6 pt-1.75"},Ko={key:1,class:"text-xm px-6 pt-1.75"},Fo={class:"font-semibold"},Qo={key:0,class:"px-6"};function Yo(o,t,a,e,s,i){return d(),u("div",Uo,[l("div",Wo,[e.file.type=="DIRECTORY"?(d(),u("div",Go,"\u26AB")):(d(),u("div",Ko,"\u26AA")),l("div",Fo,x(e.file.name),1)]),e.file.contentLength?(d(),u("div",Qo,x(e.prettyBytes(e.file.contentLength)),1)):T("",!0)])}var Zo=v(zo,[["render",Yo]]);const Jo={components:{Card:No,Entry:Zo},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0}},setup(o){const t=o.qualifier,a=o.token,e=f(""),s=f([]),i=f(!1),n=f(void 0),r=_=>_.type=="DIRECTORY",p=ue(),c=_=>(_.endsWith("/")?_.slice(0,-1):_).split("/").slice(0,-1).join("/")||"/";H(()=>t.watchable,async _=>{const{client:C}=ne(a.name,a.secret);C.maven.details(t.path).then(b=>{s.value=b.data.files,i.value=s.value.length==0,n.value=void 0}).catch(b=>{console.log(b),B(`${b.response.status}: ${b.response.data.message}`,{type:"danger"}),n.value=b}),e.value=c(`/${t.path}`)},{immediate:!0});const g=P(()=>{const _=p.path.split("/");return _.map((C,b)=>({link:_.slice(0,b+1).join("/")||"/",name:b===_.length-1?C:C+"/"}))});return{qualifier:t,token:a,parentPath:e,files:s,isEmpty:i,isErrored:n,isDirectory:r,createURL:F,breadcrumbs:g}}},Xo={class:"bg-gray-100"},en={class:"bg-gray-100 dark:bg-black"},tn={class:"container mx-auto"},on={class:"pt-7 pb-3 pl-2 font-semibold"},nn=l("span",{class:"select-none"},"Index of ",-1),sn={class:"select-text"},rn=l("span",{class:"font-normal text-xl text-gray-500 select-none"}," \u2934 ",-1),an={class:"dark:bg-black"},ln={class:"container mx-auto relative min-h-320px mb-1.5"},cn={class:"lg:absolute pt-5 -top-5 right-8"},dn={class:"pt-4"},un=["href"],pn={key:0},_n=l("p",null,"Directory is empty",-1),mn=[_n],hn={key:1},gn=l("p",null,"Directory not found",-1),fn=[gn];function vn(o,t,a,e,s,i){const n=m("router-link"),r=m("Card"),p=m("Entry");return d(),u("div",Xo,[l("div",en,[l("div",tn,[l("p",on,[nn,l("span",sn,[(d(!0),u(M,null,q(e.breadcrumbs,c=>(d(),S(n,{key:c.link,to:c.link},{default:w(()=>[A(x(c.name),1)]),_:2},1032,["to"]))),128))]),h(n,{to:e.parentPath},{default:w(()=>[rn]),_:1},8,["to"])])])]),l("div",an,[l("div",ln,[l("div",cn,[h(r,{qualifier:e.qualifier,token:e.token},null,8,["qualifier","token"])]),l("div",dn,[(d(!0),u(M,null,q(e.files,c=>(d(),u("div",{key:c},[e.isDirectory(c)?(d(),S(n,{key:0,to:o.append(o.$route.path,c.name)},{default:w(()=>[h(p,{file:c},null,8,["file"])]),_:2},1032,["to"])):(d(),u("a",{key:1,href:e.createURL(o.$route.path+"/"+c.name),target:"_blank"},[h(p,{file:c},null,8,["file"])],8,un))]))),128)),e.isEmpty?(d(),u("div",pn,mn)):T("",!0),e.isErrored?(d(),u("div",hn,fn)):T("",!0)])])])])}var bn=v(Jo,[["render",vn]]);const kn={},yn={class:"container mx-auto pt-10 px-15"},xn=l("i",null,"Endpoints :: soon\u2122",-1),wn=[xn];function $n(o,t){return d(),u("div",yn,wn)}var In=v(kn,[["render",$n]]);const ye=["Other","Trace","Debug","Info","Warn","Error"],se=j({}),xe=f(""),Tn=f(0),J=j([]),Cn=new Re,En=o=>{var t;return(t=ye.find(a=>o.includes(`${a.toUpperCase()} | `)))!=null?t:"Other"},we=o=>Cn.toHtml(o.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll(" ","&nbsp;"));function Ln(){ye.forEach(e=>{se[e]={name:e,enabled:!0,count:P(()=>J.reduce((s,i)=>s+(i.level===e),0))}});const o=P(()=>J.filter(e=>e.message.toLowerCase().includes(xe.value.toLowerCase())).filter(e=>se[e.level].enabled));return{levels:se,log:o,filter:xe,sanitizeMessage:we,logMessage:e=>{J.push({id:Tn.value++,message:we(e),level:En(e)})},clearLog:()=>{J.length=0}}}const I=f(),re=f("");function Sn(){const o=F("/api/console/sock").replace("https","wss").replace("http","ws"),t=()=>{var c;return((c=I.value)==null?void 0:c.readyState)===WebSocket.OPEN},a=()=>{t()&&I.value.close()},e=()=>{I.value.send(re.value),re.value=""},s=f(),i=f(),n=f(),r=f();return{connection:I,connect:c=>{try{I.value=new WebSocket(o),I.value.onopen=()=>{I.value.send(`Authorization:${c.name}:${c.secret}`),s==null||s.value()},I.value.onmessage=_=>{_.data!="keep-alive"&&(i==null||i.value(_.data))},I.value.onerror=_=>n==null?void 0:n.value(_),I.value.onclose=()=>r==null?void 0:r.value();const g=setInterval(()=>{var _;t()?(_=I==null?void 0:I.value)==null||_.send("keep-alive"):clearInterval(g)},1e3*5)}catch(g){console.log(g),n==null||n.value(g)}},close:a,onOpen:s,onMessage:i,onError:n,onClose:r,command:re,execute:e}}const Mn={props:{selectedTab:{type:Object,required:!0}},setup(o){const t=o.selectedTab,{levels:a,log:e,logMessage:s,filter:i,clearLog:n}=Ln(),{onOpen:r,onMessage:p,onClose:c,onError:g,connect:_,close:C,command:b,execute:$}=Sn();Ve(()=>C());const R=()=>{const L=document.getElementById("console");L.scrollTop=L.scrollHeight},W=()=>{B("Connecting to the remote console",{type:"info"});const{token:L}=U();r.value=()=>n(),p.value=V=>{s(V),he(()=>R())},g.value=V=>B(`${V||""}`,{type:"danger"}),c.value=()=>B("Connection with console has been lost",{type:"danger"}),_(L),he(()=>setTimeout(()=>document.getElementById("consoleInput").focus(),1e3))};return H(()=>t.value,L=>L==="Console"?W():C(),{immediate:!0}),{log:e,command:b,execute:$,levels:a,filter:i}}},On={class:"container mx-auto pt-10 px-15 pb-10 text-xs"},qn={class:"flex text-sm flex-col xl:flex-row w-full py-2 justify-between"},jn={class:"flex flex-row justify-around w-full xl:w-1/2 <md:flex-wrap"},Bn=["checked","onChange"],Pn={class:"pl-2 pr-4"},An={class:"bg-white dark:bg-gray-900 rounded-lg"},Rn={id:"console",class:"overflow-scroll h-144 px-4"},Vn=["innerHTML"],Dn=l("hr",{class:"dark:border-dark-300"},null,-1);function Hn(o,t,a,e,s,i){return d(),u("div",On,[l("div",qn,[G(l("input",{placeholder:"Filter","onUpdate:modelValue":t[0]||(t[0]=n=>e.filter=n),class:"w-full xl:w-1/2 mr-5 py-1 px-4 rounded-lg bg-white dark:bg-gray-900"},null,512),[[K,e.filter]]),l("div",jn,[(d(!0),u(M,null,q(e.levels,n=>(d(),u("div",{key:n.name,class:"pt-1.9 xl:pt-0.8 font-sans whitespace-nowrap"},[l("input",{type:"checkbox",checked:n.enabled,onChange:r=>n.enabled=!n.enabled},null,40,Bn),l("span",Pn,x(n.name)+" ("+x(n.count)+")",1)]))),128))])]),l("div",An,[l("div",Rn,[(d(!0),u(M,null,q(e.log,n=>(d(),u("p",{key:n.id,innerHTML:n.message,class:"whitespace-nowrap"},null,8,Vn))),128))]),Dn,G(l("input",{id:"consoleInput",placeholder:"Type command or '?' to get help",class:"w-full py-2 px-4 rounded-b-lg bg-white dark:bg-gray-900 dark:text-white","onUpdate:modelValue":t[1]||(t[1]=n=>e.command=n),onKeyup:t[2]||(t[2]=De(n=>e.execute(),["enter"]))},null,544),[[K,e.command]])])])}var Nn=v(Mn,[["render",Hn]]);const zn={components:{Header:po,Browser:bn,Endpoints:In,Console:Nn},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0},session:{type:Object,required:!0}},setup(o){const t=o.qualifier,a=o.token,e=o.session,{isManager:s}=U(),i=j({value:localStorage.getItem("selectedTab")||"Overview"});N(()=>localStorage.setItem("selectedTab",i.value));const n=[{name:"Overview"},{name:"Endpoints"},{name:"Console",manager:!0}],r=P(()=>n.filter(c=>!(c==null?void 0:c.manager)||s(e.details)).map(c=>c.name)),p=P(()=>r.value.some(c=>c=="Console"));return{qualifier:t,token:a,isManager:s,menuTabs:r,consoleEnabled:p,selectedTab:i}}},Un=o=>(_e("data-v-66350ebe"),o=o(),me(),o),Wn={class:"bg-gray-100 dark:bg-black"},Gn={class:"container mx-auto <sm:px-0"},Kn=Un(()=>l("hr",{class:"dark:border-gray-700"},null,-1)),Fn={class:"overflow-auto"};function Qn(o,t,a,e,s,i){const n=m("Header"),r=m("tab"),p=m("tabs"),c=m("Browser"),g=m("tab-panel"),_=m("Endpoints"),C=m("Console"),b=m("tab-panels");return d(),u("div",null,[h(n,{token:e.token},null,8,["token"]),l("div",Wn,[l("div",Gn,[h(p,{modelValue:e.selectedTab.value,"onUpdate:modelValue":t[0]||(t[0]=$=>e.selectedTab.value=$)},{default:w(()=>[(d(!0),u(M,null,q(e.menuTabs,($,R)=>(d(),S(r,{class:"item font-normal",key:`menu${R}`,val:$,label:$,indicator:!0},null,8,["val","label"]))),128))]),_:1},8,["modelValue"])]),Kn,l("div",Fn,[h(b,{modelValue:e.selectedTab.value,"onUpdate:modelValue":t[1]||(t[1]=$=>e.selectedTab.value=$),animate:!0},{default:w(()=>[h(g,{val:"Overview"},{default:w(()=>[h(c,{qualifier:e.qualifier,token:e.token,ref:""},null,8,["qualifier","token"])]),_:1}),h(g,{val:"Endpoints"},{default:w(()=>[h(_)]),_:1}),e.consoleEnabled?(d(),S(g,{key:0,val:"Console"},{default:w(()=>[h(C,{selectedTab:e.selectedTab},null,8,["selectedTab"])]),_:1})):T("",!0)]),_:1},8,["modelValue"])])])])}var Yn=v(zn,[["render",Qn],["__scopeId","data-v-66350ebe"]]);const Zn=He({history:Ne(),routes:[{path:"/:qualifier(.*)",name:"Index",component:Yn}]});const ae=ze(nt);ae.config.globalProperties.append=(o,t)=>o+(o.endsWith("/")?"":"/")+t;ae.config.globalProperties.drop=o=>(o.endsWith("/")?o.slice(0,-1):o).split("/").slice(0,-1).join("/");ae.use(Ue()).use(We,de).use(Ge).use(Zn).mount("#app");
