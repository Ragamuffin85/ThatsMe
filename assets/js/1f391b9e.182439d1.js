"use strict";(self.webpackChunkthats_me=self.webpackChunkthats_me||[]).push([[6061],{665:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var i=n(4164),r=n(7289),l=n(204),a=n(2362),s=n(4848);function c(e){let{className:t}=e;return(0,s.jsx)(a.A,{type:"caution",title:(0,s.jsx)(r.Rc,{}),className:(0,i.A)(t,l.G.common.unlistedBanner),children:(0,s.jsx)(r.Uh,{})})}function o(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.AE,{}),(0,s.jsx)(c,{...e})]})}},1021:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(6540),r=n(3115);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)})),i}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,i.useRef)(void 0),n=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:a}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let r=t;r<=n;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),o=c(s,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var d=n(6289),_=n(4848);function g(e){let{toc:t,className:n,linkClassName:i,isChild:r}=e;return t.length?(0,_.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,_.jsxs)("li",{children:[(0,_.jsx)(d.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,_.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:d,...g}=e;const u=(0,r.p)(),f=o??u.tableOfContents.minHeadingLevel,x=d??u.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>a({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return m((0,i.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:x}}),[s,c,f,x])),(0,_.jsx)(h,{toc:v,className:n,linkClassName:s,...g})}},2075:(e,t,n)=>{n.d(t,{A:()=>m});n(6540);var i=n(4164),r=n(7289),l=n(204),a=n(2362),s=n(4848);function c(e){let{className:t}=e;return(0,s.jsx)(a.A,{type:"caution",title:(0,s.jsx)(r.Yh,{}),className:(0,i.A)(t,l.G.common.draftBanner),children:(0,s.jsx)(r.TT,{})})}var o=n(665);function m(e){let{metadata:t}=e;const{unlisted:n,frontMatter:i}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||i.unlisted)&&(0,s.jsx)(o.A,{}),i.draft&&(0,s.jsx)(c,{})]})}},3668:(e,t,n)=>{n.d(t,{A:()=>y});n(6540);var i=n(57),r=n(6784),l=n(7107),a=n(7875),s=n(6188);const c=Object.freeze({SoftwareDeveloper:Symbol("fa-solid fa-code"),Architect:Symbol("fa-solid fa-compass-drafting"),DevOps:Symbol("fa-solid fa-console")});var o=n(4164),m=n(4848);const d=e=>{let{className:t,style:n,children:i,shadow:r}=e;const l=r?`item shadow--${r}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card",t,l),style:n,children:i})},_=e=>{let{className:t,style:n,children:i,textAlign:r,variant:l,italic:a=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=r?`text--${r}`:"",u=l?`text--${l}`:"",f=a?"text--italic":"",x=s?"text-no-decoration":"",v=c?`text--${c}`:"",p=d?"text--break":"",k=_?"text--truncate":"",y=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__body",t,h,v,u,f,x,p,k,y),style:n,children:i})},g=e=>{let{className:t,style:n,children:i,textAlign:r,variant:l,italic:a=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=r?`text--${r}`:"",u=l?`text--${l}`:"",f=a?"text--italic":"",x=s?"text-no-decoration":"",v=c?`text--${c}`:"",p=d?"text--break":"",k=_?"text--truncate":"",y=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__footer",t,h,v,u,f,x,p,k,y),style:n,children:i})},h=e=>{let{className:t,style:n,children:i,textAlign:r,variant:l,italic:a=!1,noDecoration:s=!1,transform:c,breakWord:d=!1,truncate:_=!1,weight:g}=e;const h=r?`text--${r}`:"",u=l?`text--${l}`:"",f=a?"text--italic":"",x=s?"text-no-decoration":"",v=c?`text--${c}`:"",p=d?"text--break":"",k=_?"text--truncate":"",y=g?`text--${g}`:"";return(0,m.jsx)("div",{className:(0,o.A)("card__header",t,h,v,u,f,x,p,k,y),style:n,children:i})};var u=n(9030);const f=e=>{let{className:t,style:n,cardImageUrl:i,alt:r,title:l}=e;const a=(0,u.Ay)(i);return(0,m.jsx)("img",{className:(0,o.A)("card__image",t),style:n,src:a,alt:r,title:l})};const x={timeline:"timeline_xnUW",timeline__item:"timeline__item_y8u3","timeline__item--left":"timeline__item--left_SQWS","timeline__item--right":"timeline__item--right_TSjb",timeline__content:"timeline__content_RcTe","timeline__content--black":"timeline__content--black_kjfH","timeline__content--white":"timeline__content--white_usf2","timeline__content--primary":"timeline__content--primary_DXzr","timeline__content--primary-dark":"timeline__content--primary-dark_EyG4","timeline__content--primary-darker":"timeline__content--primary-darker_JwXQ","timeline__content--primary-darkest":"timeline__content--primary-darkest_MmEm","timeline__content--primary-light":"timeline__content--primary-light__hJH","timeline__content--primary-lighter":"timeline__content--primary-lighter_ADro","timeline__content--primary-lightest":"timeline__content--primary-lightest_ascF","timeline__content--success":"timeline__content--success_UvPh","timeline__content--success-dark":"timeline__content--success-dark_nQVM","timeline__content--success-darker":"timeline__content--success-darker_J8SI","timeline__content--success-darkest":"timeline__content--success-darkest_BHLR","timeline__content--success-light":"timeline__content--success-light_cdLM","timeline__content--success-lighter":"timeline__content--success-lighter_RRC2","timeline__content--success-lightest":"timeline__content--success-lightest_IJX4","timeline__content--warning":"timeline__content--warning_KK64","timeline__content--warning-dark":"timeline__content--warning-dark_RBNQ","timeline__content--warning-darker":"timeline__content--warning-darker_uHQe","timeline__content--warning-darkest":"timeline__content--warning-darkest_bbCE","timeline__content--warning-light":"timeline__content--warning-light_wv4L","timeline__content--warning-lighter":"timeline__content--warning-lighter_vLtM","timeline__content--warning-lightest":"timeline__content--warning-lightest_ETmJ","timeline__content--danger":"timeline__content--danger_itDT","timeline__content--danger-dark":"timeline__content--danger-dark_VJcr","timeline__content--danger-darker":"timeline__content--danger-darker_ZwlY","timeline__content--danger-darkest":"timeline__content--danger-darkest_wbZp","timeline__content--danger-light":"timeline__content--danger-light_YENt","timeline__content--danger-lighter":"timeline__content--danger-lighter_YOVk","timeline__content--danger-lightest":"timeline__content--danger-lightest_tstF","timeline__content--info":"timeline__content--info_qnhm","timeline__content--info-dark":"timeline__content--info-dark_dnAO","timeline__content--info-darker":"timeline__content--info-darker_L3ab","timeline__content--info-darkest":"timeline__content--info-darkest_z0q3","timeline__content--info-light":"timeline__content--info-light_a5jW","timeline__content--info-lighter":"timeline__content--info-lighter_pYTI","timeline__content--info-lightest":"timeline__content--info-lightest_BK0O","timeline--primary":"timeline--primary_HiUt","timeline--primary-dark":"timeline--primary-dark_M9qg","timeline--primary-darker":"timeline--primary-darker_dls8","timeline--primary-darkest":"timeline--primary-darkest_tRve","timeline--primary-light":"timeline--primary-light_ilSb","timeline--primary-lighter":"timeline--primary-lighter_zZpw","timeline--primary-lightest":"timeline--primary-lightest_gBUp","timeline--success":"timeline--success_rLhF","timeline--success-dark":"timeline--success-dark_p9Xs","timeline--success-darker":"timeline--success-darker_pOx0","timeline--success-darkest":"timeline--success-darkest_jmP7","timeline--success-light":"timeline--success-light_IcqJ","timeline--success-lighter":"timeline--success-lighter_DEo_","timeline--success-lightest":"timeline--success-lightest_aVJd","timeline--warning":"timeline--warning_tCsw","timeline--warning-dark":"timeline--warning-dark_Cn4m","timeline--warning-darker":"timeline--warning-darker_atvE","timeline--warning-darkest":"timeline--warning-darkest_z03P","timeline--warning-light":"timeline--warning-light_gfh0","timeline--warning-lighter":"timeline--warning-lighter_wvED","timeline--warning-lightest":"timeline--warning-lightest_AmER","timeline--danger":"timeline--danger_ljr5","timeline--danger-dark":"timeline--danger-dark_AhkR","timeline--danger-darker":"timeline--danger-darker_F6ju","timeline--danger-darkest":"timeline--danger-darkest_XPG2","timeline--danger-light":"timeline--danger-light_QNwh","timeline--danger-lighter":"timeline--danger-lighter_G3Yw","timeline--danger-lightest":"timeline--danger-lightest_puFT","timeline--info":"timeline--info_ILAG","timeline--info-dark":"timeline--info-dark_y9i5","timeline--info-darker":"timeline--info-darker_XmfN","timeline--info-darkest":"timeline--info-darkest_Anh8","timeline--info-light":"timeline--info-light_edyw","timeline--info-lighter":"timeline--info-lighter_jJBt","timeline--info-lightest":"timeline--info-lightest_jTYt"},v=e=>{let{className:t,style:n,children:i,variant:r}=e;const l=r?x[`timeline--${r}`]:"";return(0,m.jsx)("div",{className:(0,o.A)(x.timeline,l,t),style:n,children:i})},p=e=>{let{className:t,style:n,children:i,align:r="left",textAlign:l="justify",variant:a="primary",italic:s=!1,noDecoration:c=!1,transform:d,breakWord:_=!1,truncate:g=!1,weight:h,color:u,shadow:f="tl"}=e;const v=f?`item shadow--${f}`:"",p=a?x[`timeline__content--${a}`]:"",k=r?x[`timeline__item--${r}`]:"",y=l?`text--${l}`:"",j=u?`text--${u}`:"",w=s?"text--italic":"",A=c?"text-no-decoration":"",b=d?`text--${d}`:"",N=_?"text--break":"",C=g?"text--truncate":"",L=h?`text--${h}`:"";return(0,m.jsx)("div",{className:(0,o.A)(x.timeline__item,k),children:(0,m.jsx)("div",{className:(0,o.A)(x.timeline__content,p,t,v,y,b,j,w,A,N,C,L),style:n,children:i})})},k=e=>{let{icon:t,position:n,location:i,employeer:l,fromDate:a,toDate:s}=e;var c="fa-solid ".concat(t),o=a?"(".concat(a," - ",s||"Today",")"):"";return(0,m.jsxs)("div",{children:[(0,m.jsx)(r.g,{icon:c,size:"2Ox"}),"  ",(0,m.jsxs)("b",{children:[" ",n," "]})," ",(0,m.jsx)("i",{children:o}),(0,m.jsx)("br",{}),(0,m.jsxs)("p",{children:[l,", ",(0,m.jsx)("i",{children:i})]})]})};l.Yv.add(a.Cvc,s.X7I);const y={MDXComponents:i.A,CvIcons:c,Card:d,CardHeader:h,CardBody:_,CardFooter:g,CardImage:f,Columns:function(e){let{children:t,className:n,style:i}=e;return(0,m.jsx)("div",{className:"container center",children:(0,m.jsx)("div",{className:(0,o.A)("row",n),style:i,children:t})})},Column:function(e){let{children:t,className:n,style:i}=e;return(0,m.jsx)("div",{className:(0,o.A)("col",n),style:i,children:t})},Timeline:v,TimelineItem:p,TimelineCareerHeaderItem:k,FAIcon:r.g}},7289:(e,t,n)=>{n.d(t,{AE:()=>c,Rc:()=>a,TT:()=>m,Uh:()=>s,Yh:()=>o});n(6540);var i=n(539),r=n(7143),l=n(4848);function a(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(r.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function m(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},7959:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var i=n(4164),r=n(1021);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=n(4848);const s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,i.A)(l.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(r.A,{...n,linkClassName:s,linkActiveClassName:c})})}},9181:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});n(6540);var i=n(4164),r=n(1082),l=n(204),a=n(1833),s=n(7985),c=n(7959),o=n(2075),m=n(5783);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var _=n(4848);function g(e){const{content:t}=e,{metadata:n,assets:g}=t,{title:h,editUrl:u,description:f,frontMatter:x,lastUpdatedBy:v,lastUpdatedAt:p}=n,{keywords:k,wrapperClassName:y,hide_table_of_contents:j}=x,w=g.image??x.image,A=!!(u||p||v);return(0,_.jsx)(r.e3,{className:(0,i.A)(y??l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,_.jsxs)(a.A,{children:[(0,_.jsx)(r.be,{title:h,description:f,keywords:k,image:w}),(0,_.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,_.jsxs)("div",{className:(0,i.A)("row",d.mdxPageWrapper),children:[(0,_.jsxs)("div",{className:(0,i.A)("col",!j&&"col--8"),children:[(0,_.jsx)(o.A,{metadata:n}),(0,_.jsx)("article",{children:(0,_.jsx)(s.A,{children:(0,_.jsx)(t,{})})}),A&&(0,_.jsx)(m.A,{className:(0,i.A)("margin-top--sm",l.G.pages.pageFooterEditMetaRow),editUrl:u,lastUpdatedAt:p,lastUpdatedBy:v})]}),!j&&t.toc.length>0&&(0,_.jsx)("div",{className:"col col--2",children:(0,_.jsx)(c.A,{toc:t.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}}}]);