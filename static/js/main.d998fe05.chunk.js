(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{106:function(e,t){},124:function(e,t){},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(76),r=n.n(c),s=n(23),i=n(2),o=n.n(i),l=n(10),u=n(20),d=n(5),j=n(4),b=n(0),m=n(18),p=n(84),f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTRACT_NAME||"cutepenguinclub.tenk.near";function O(){var e={networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",contractName:f,GAS:"200000000000000",DEFAULT_NEW_ACCOUNT_AMOUNT:"5",contractMethods:{changeMethods:["nft_mint_one","nft_mint_many","create_linkdrop","nft_transfer"],viewMethods:["cost_per_token","discount","token_storage_cost","total_cost","nft_supply_for_owner","nft_total_supply","nft_tokens","nft_tokens_for_owner","tokens_left","cost_of_linkdrop","nft_metadata","get_key_balance","check_key"]}};return e=Object(j.a)(Object(j.a)({},e),{},{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"})}var x=n(21),h=O(),_=h.networkId,v=h.nodeUrl,g=h.walletUrl,k=h.contractName,N=h.contractMethods,y=x.utils.format,w=y.formatNearAmount,C=(y.parseNearAmount,function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.connect({networkId:_,nodeUrl:v,walletUrl:g,deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}});case 2:return t=e.sent,n=new x.WalletAccount(t),e.abrupt("return",{near:t,wallet:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;return new x.Contract(e,k,Object(j.a)(Object(j.a)({},t),{},{sender:e.accountId}))},A=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c,r,s,i,l,u,b,m,p,f,O,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadContract(k,Object(j.a)({},N));case 2:return n=e.sent,a="aa.near",e.next=6,Promise.all([n.discount({num:10,minter:a}),n.total_cost({num:10,minter:a}),n.token_storage_cost({}),n.cost_per_token({num:1,minter:a}),n.cost_of_linkdrop({minter:a})]);case 6:return c=e.sent,r=Object(d.a)(c,5),s=r[0],i=r[1],l=r[2],u=r[3],b=r[4],m=w(s),p=w(i),f=w(u),O=w(l),x={oneNFT:f-O,manyNFTS:p-10*O,tokenStorageFormat:O,discountFormat:m,tenTokenCost:i,oneTokenCost:u,costLinkDrop:b},e.abrupt("return",x);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(28),T=O(),P=(T.networkId,T.nodeUrl,T.walletUrl,T.GAS),E=T.contractName,F=T.contractMethods,D=x.utils.format,U=D.formatNearAmount,R=(D.parseNearAmount,Object(p.a)(/https:\/\/wallet.near.org\/linkdrop\/(?:(?!\/)[\s\S])+\/(.+)\?redirectUrl=/,{key:1}));function L(e){var t=e.match(R).groups.key;return I.KeyPairEd25519.fromString(t).getPublicKey()}var B=function(e,t){var n,c,r=function(){return n},s=Object(a.createContext)(e),i=s.Provider,o=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(0===a.length)return Object(j.a)(Object(j.a)({},t),n);var c=a.split("."),r=c[0];return(t=Object(j.a)({},t))[r]||(t[r]={}),1===c.length?t[r]=n&&"object"===typeof n&&!Array.isArray(n)?Object(j.a)(Object(j.a)({},t[r]),n):n:t[r]=Object(j.a)(Object(j.a)({},t[r]),e(t[r],n,c.slice(1).join("."))),t},l=function(t){var c=t.children,s=Object(a.useReducer)((function(e,t){var a=t.path,c=t.newState;return void 0===a?e:n=o(e,c,a)}),e),l=Object(d.a)(s,2),u=l[0],j=l[1],m=function(e,t){j({path:e,newState:t})};return Object(b.jsx)(i,{value:{update:m,state:u,dispatch:function e(t){return t({update:m,getState:r,dispatch:e})}},children:c})};return t?(c={},Object(u.a)(c,"".concat(t,"Store"),s),Object(u.a)(c,"".concat(t.substr(0,1).toUpperCase()+t.substr(1),"Provider"),l),c):{store:s,Provider:l}}({app:{soldOut:!0,oneCount:1,manyCount:10,revealMisfits:JSON.parse(localStorage.getItem("revealMisfits"))||{},misfitsArray:[],linkDropArray:[],urlIpfs:"",tokensLeft:void 0,modalOpen:!1},near:{initialized:!1},price:{oneNFT:5,manyNFTS:31.99,tokenStorageFormat:0,discountFormat:0}},"app"),M=B.appStore,K=B.AppProvider,W=n(3),J=function(e){var t=e.path,n=e.exact,a=e.routes;return Object(b.jsx)(W.b,{path:t,exact:n,render:function(t){return Object(b.jsx)(e.component,Object(j.a)(Object(j.a)({},t),{},{routes:a}))}})},q=function(){var e=Object(W.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),Object(b.jsx)(b.Fragment,{})},G=function(e){var t=e.routes;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(W.d,{children:[t.map((function(e){return Object(b.jsx)(J,Object(j.a)({},e),e.key)})),Object(b.jsx)(W.a,{to:"/"})]}),Object(b.jsx)(q,{})]})},H=function(){var e=Object(W.g)(),t=Object(a.useContext)(M).state.contract,n=function(){var n=Object(l.a)(o.a.mark((function n(a,c){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.toString(),console.log("transfer"),n.next=4,t.nft_transfer({args:{receiver_id:c,token_id:r},amount:"1"});case 4:e.push("/my-nfts");case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return{nftTransfer:n}},V={nft:void 0,account:""},X=function(){var e=Object(a.useContext)(M),t=e.update,n=e.state,c=n.account,r=n.app,s=H().nftTransfer,i=Object(a.useState)(V),o=Object(d.a)(i,2),l=o[0],m=o[1],p=Object(a.useState)(!1),f=Object(d.a)(p,2),O=f[0],x=f[1];Object(a.useEffect)((function(){return document.addEventListener("keydown",h,!1),function(){document.removeEventListener("keydown",h,!1)}}),[]);var h=Object(a.useCallback)((function(e){27===e.keyCode&&t("app.modalOpen",!1)}),[]),_=function(e){var t=e.target,n=t.value;"account"===t.name&&(n=t.value.trim().toLowerCase()),m((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.name,n))}))};return Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal__box",children:[O?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"modal__nft-id",children:["Account ",Object(b.jsx)("span",{className:"modal__nft-id-white",children:"name"})]}),Object(b.jsx)("input",{name:"account",onChange:_,value:l.account,className:"modal__input",placeholder:"Enter account name recipient"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"modal__nft-id",children:["NFT ",Object(b.jsx)("span",{className:"modal__nft-id-white",children:"ID"})]}),Object(b.jsx)("input",{type:"number",name:"nft",onChange:_,value:l.nft,className:"modal__input",placeholder:"Enter number of nft"})]}),Object(b.jsxs)("div",{className:"modal__controls",children:[Object(b.jsx)("button",{className:"modal__close-btn",type:"button",onClick:function(){return t("app.modalOpen",!1)},children:"Cancel"}),Object(b.jsx)("button",{className:"modal__send-btn",type:"button",onClick:function(){var e=Number(l.nft);if(O){if(l.account===c.accountId||!l.account.includes(".near"))return;s(e,l.account)}else{if(null===l.nft||void 0===l.nft||Number.isNaN(l.nft)||""===l.nft||l.nft>1923||!r.misfitsArray.some((function(t){return t.token_id==e})))return;x(!0)}},children:"OK"})]})]})})},Y=function(e){var t=e.className,n=e.signedIn;return Object(b.jsx)("nav",{className:"navigation ".concat(t||""),children:Object(b.jsxs)("ul",{className:"navigation__list",children:[Object(b.jsx)("li",{className:"navigation__list-item",children:Object(b.jsx)(s.b,{to:"/#generate",className:"navigation__link",children:"Generate"})}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{className:"navigation__list-item",children:Object(b.jsx)(s.b,{to:"/my-nfts",className:"navigation__link",children:"My NFTs"})}),Object(b.jsx)("li",{className:"navigation__list-item",children:Object(b.jsx)(s.b,{to:"/link-drop",className:"navigation__link",children:"LinkDrop"})})]})]})})};Y.defaultProps={className:"",signedIn:!1};var $=Y,z=n(6),Z=n.p+"static/media/social-face.1e1c5d3d.svg",Q=n.p+"static/media/social-twitter.f8b88ebe.svg",ee=function(e){var t=e.className;return Object(b.jsxs)("div",{className:"social-links ".concat(t||""),children:[Object(b.jsx)("a",{href:"https://paras.id/collection/cutepenguinclub.tenk.near",rel:"noopener noreferrer",target:"_blank",children:Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/social-paras-2x.webp 2x, ./images/social-paras.webp 1x"}),Object(b.jsx)("img",{className:"social-links__item",src:"./images/social-paras.png",alt:"paras"})]})}),Object(b.jsx)("a",{href:"https://discord.com/invite/E9BguAWBTt",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(z.a,{className:"social-links__item",src:Z})}),Object(b.jsx)("a",{href:"https://twitter.com/NEARCollectible",rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)(z.a,{className:"social-links__item",src:Q})})]})};ee.defaultProps={className:""};var te=ee,ne=function(e){var t=e.handleClick,n=e.text;return Object(b.jsx)("button",{className:"connect-wallet",type:"button",onClick:t,children:n?Object(b.jsx)("p",{className:"connect-wallet__text connect-wallet__text-name",children:n}):Object(b.jsx)("p",{className:"connect-wallet__text",children:"Connect Wallet"})})},ae=function(){return Object(b.jsxs)("div",{className:"lds-ring",children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})},ce=function(){var e=Object(a.useContext)(M).state,t=e.wallet,n=e.account;return t?Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)($,{className:"header__navigation",signedIn:t.signedIn}),Object(b.jsx)(te,{className:"header__social"}),(null===n||void 0===n?void 0:n.accountId)?Object(b.jsx)(ne,{text:n.accountId,handleClick:function(){return t.signOut()}}):Object(b.jsx)(ne,{handleClick:function(){return t.signIn()}})]}):Object(b.jsx)(ae,{})},re=Object(a.memo)(ce),se=n.p+"static/media/footer-near-logo.2d4a6e76.svg",ie=function(){var e=(Object(a.useContext)(M).state||{}).wallet;return e?Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("div",{className:"footer__container",children:[Object(b.jsx)($,{className:"footer__navigation",signedIn:e.signedIn}),Object(b.jsx)(te,{className:"footer__social"}),Object(b.jsx)("p",{className:"footer__built",children:"Built on"}),Object(b.jsx)(z.a,{className:"footer__logo",src:se}),Object(b.jsx)("p",{className:"footer__text",children:"NEAR Collectibles NFTs are built on top of NEAR Protocol, where minting NFTs cost less than a cent per item."}),Object(b.jsx)("p",{className:"footer__copyright ",children:"\xa9 2022 NEAR Collectibles. All Rights Reserved."}),Object(b.jsx)("a",{href:"https://tenkbay.com/",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("p",{className:"footer__tenkbay ",children:"Powered by Tenk Bay and Open Source Code."})})]})}):Object(b.jsx)(b.Fragment,{})},oe=Object(a.memo)(ie),le=function(e){var t=e.children,n=Object(W.h)(),c=n.pathname,r=n.hash,s=Object(W.g)(),i=Object(a.useContext)(M).state.app.modalOpen;return Object(a.useEffect)((function(){r&&(setTimeout((function(){document.querySelector(r).scrollIntoView({behavior:"smooth"})}),100),"#generate-block"!==r&&s.push(c))}),[r]),document.body.style.overflow=i?"hidden":"",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(re,{}),t,Object(b.jsx)(oe,{}),i&&Object(b.jsx)(X,{})]})},ue=function(e){var t=e.className,n=e.text,a=e.onClick;return Object(b.jsx)("button",{type:"button",className:"buy-more-btn ".concat(t||""),onClick:a,children:n})};ue.defaultProps={onClick:function(){}};var de=ue,je=function(e){var t=e.className,n=Object(a.useContext)(M),c=n.state,r=n.update,s=c.account,i=c.app.misfitsArray.length,o=Boolean(s&&i);return Object(b.jsxs)("div",{className:"generate-sold-out ".concat(t||""),children:[Object(b.jsxs)("a",{className:"generate-sold-out__link",href:"https://paras.id/collection/cutepenguinclub.tenk.near",target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)("p",{children:"Buy on Paras"}),Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/generate-paras-2x.webp 2x, ./images/generate-paras.webp 1x"}),Object(b.jsx)("img",{src:"./images/generate-paras.png",alt:"paras marketplace icon",className:"generate-sold-out__img"})]})]}),o&&Object(b.jsx)(de,{text:"Send an NFT",className:"buy__nft",onClick:function(){return r("app.modalOpen",!0)}})]})};je.defaultProps={className:""};var be=je,me=function(e){var t=e.count,n=e.isActive,a=e.onClick,c=e.className,r=t>1?"generate-count-btn__many":"",s=n?"generate-count-btn__active":"";return Object(b.jsx)("button",{type:"button",onClick:a,className:"generate-count-btn ".concat(r," ").concat(s," ").concat(c),children:Object(b.jsxs)("p",{children:["Buy ",t]})})};me.defaultProps={count:1,onClick:function(){},className:"",isActive:!1};var pe=me,fe=function(){var e=Object(a.useContext)(M).state,t=e.contract,n=e.price,c=function(){var e=Object(l.a)(o.a.mark((function e(){var a,c,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.length>0&&void 0!==r[0]?r[0]:1,c="".concat(window.location.origin,"/my-nfts"),1===a?t.nft_mint_one({args:{},gas:"50000000000000",amount:n.oneTokenCost,callbackUrl:c}):t.nft_mint_many({args:{num:a},gas:"230000000000000",amount:n.tenTokenCost,callbackUrl:c});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{mintNft:c}},Oe=n(83),xe=function(){var e=Object(a.useContext)(M).state,t=e.contract,n=e.account,c=e.app,r=e.price,s=function(e,t,n){return"https://wallet.near.org/linkdrop/".concat(e,"/").concat(t,"?redirectUrl=").concat(n,"/my-nfts")},i=function(){var e=Object(l.a)(o.a.mark((function e(){var a,i,l,u,d,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I.KeyPairEd25519.fromRandom(),i=window.location.origin,l=s(t.contractId,a.secretKey.toString(),i),u=c.linkDropArray,localStorage.setItem("linkDropArray:".concat(n.accountId),JSON.stringify([].concat(Object(m.a)(u),[{link:l,text:"",id:Object(Oe.generate)(),isUsed:!1}]))),d=r.costLinkDrop,j=a.getPublicKey().toString(),e.prev=7,e.next=10,t.create_linkdrop({args:{public_key:j},gas:P,amount:d,callbackUrl:"".concat(i,"/link-drop")});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(){return e.apply(this,arguments)}}();return{createLinkDrop:i}},he=function(e){var t=Object(a.useContext)(M).state,n=fe().mintNft,c=xe().createLinkDrop,r=e?"Generate gift links":"Buy",s=Object(a.useState)(),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),p=m[0],f=m[1],O=Object(a.useState)(""),x=Object(d.a)(O,2),h=x[0],_=x[1];Object(a.useEffect)((function(){p&&setTimeout((function(){f(!1)}),3e3)}),[p]);var v=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u?e?c(u):n(u):f(!0);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{text:r,count:u,state:t,showMessage:p,setShowMessage:f,showCountAnimation:h,formatPrice:function(e){var t=e.toString().split("").join("");return e.toString().split("").forEach((function(e,n,a){if("."===e){var c=n+2>=a.length?n+2:n+3;t=a.slice(0,c).join("")}})),t},handleClick:v,handleNumberClick:function(e){u!==e&&(j(e),_("generate-block__animation-hide"),setTimeout((function(){return _("generate-block__animation-price")}),0))}}},_e=function(){var e=fe().mintNft,t=he(),n=t.count,a=t.state,c=t.showCountAnimation,r=t.formatPrice,s=t.handleNumberClick,i=a.wallet,o=a.price,l=a.app;return Object(b.jsxs)("div",{id:"generate-block",className:"generate-block",children:[Object(b.jsx)("div",{className:"generate-block__line"}),Object(b.jsx)("div",{className:"generate-block__vertical-line "}),Object(b.jsxs)("div",{className:"generate-block__price ",children:[Object(b.jsx)("span",{className:"generate-block__near",children:"\u24c3\xa0"}),Object(b.jsx)("p",{className:"generate-block__count  ".concat(c),children:n===l.manyCount?r(o.manyNFTS):r(o.oneNFT)})]}),Object(b.jsx)(pe,{count:l.oneCount,onClick:function(){s(l.oneCount),function(){if(i.signedIn)e(n);else{var t="".concat(window.location.origin,"/#generate-block");i.signIn(t)}}()},isActive:n===l.oneCount})]})},ve=Object(a.memo)(_e),ge=function(){var e=Object(a.useContext)(M).state,t=e.app.soldOut,n=e.price.oneNFT,c=he().formatPrice;return Object(b.jsx)("section",{className:"generate",id:"generate",children:Object(b.jsxs)("div",{className:"generate__container",children:[Object(b.jsxs)("div",{className:"generate__information",children:[Object(b.jsx)("h2",{className:"generate__title",children:"$NEARCollectibles"}),Object(b.jsxs)("p",{className:"generate__text",children:["Releasing collection of 2,222 ",Object(b.jsx)("strong",{children:"Cute Penguins"})," to the $NEAR Blockchain"]}),Object(b.jsxs)("p",{className:"generate__text",children:["NEARCollectibles are priced at a flat rate of ",c(n)," ","NEAR."]}),Object(b.jsx)("h3",{className:"generate__title",children:"Pre-Sale Limit 3"})]}),Object(b.jsxs)("div",{className:"generate__block",children:[t?Object(b.jsx)(be,{}):Object(b.jsx)(ve,{}),Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/generate-penguins.webp 2x, ./images/generate-penguins.webp 1x"}),Object(b.jsx)("img",{className:"generate__img ".concat(t?"generate__img-sold-out":""),src:"./images/generate-penguins.webp",alt:"generate misfits"})]})]})]})})},ke=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsx)(ge,{})})},Ne=n.p+"static/media/twitter.830c0cc6.svg",ye=n.p+"static/media/linkedin.cbd326bd.svg",we=n.p+"static/media/instagram.de28769a.svg",Ce=n.p+"static/media/email.e78adde3.svg",Se=n.p+"static/media/facebook.9a0f14fc.svg",Ae=n.p+"static/media/wechat.b73e171e.svg",Ie=n.p+"static/media/telegram.6f0d4136.svg",Te=n.p+"static/media/discord.10c3485c.svg",Pe=function(e){var t=e.className,n=e.color,a=e.text,c=e.link,r=e.onClick,s="purpure"===n?"share-social-links__purpure":"share-social-links__blue";return Object(b.jsxs)("ul",{className:t,children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://twitter.com/intent/tweet?url=".concat(c,"/&text=").concat(a),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(z.a,{className:s,src:Ne})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(c),target:"_blank",rel:"noopener noreferrer","data-social":"linkedin",children:Object(b.jsx)(z.a,{className:s,src:ye})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/direct/inbox/",target:"_blank",rel:"noopener noreferrer","data-social":"instagram",onClick:r,children:Object(b.jsx)(z.a,{className:s,src:we})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"mailto:?body=".concat(a,"   ").concat(c),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(z.a,{className:s,src:Ce})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(c,"&quote=").concat(a),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(z.a,{className:s,src:Se})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"weixin://",target:"_blank",rel:"noopener noreferrer","data-social":"wechat",onClick:r,children:Object(b.jsx)(z.a,{className:s,src:Ae})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://telegram.me/share/?text=".concat(a,"&url=").concat(c),target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)(z.a,{className:s,src:Ie})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://discord.com/channels/@me",target:"_blank",rel:"noopener noreferrer","data-social":"discord",onClick:r,children:Object(b.jsx)(z.a,{className:s,src:Te})})})]})};Pe.defaultProps={className:"",color:"blue",text:"",link:"",onClick:function(){}};var Ee=Pe,Fe=function(e){var t=e.price,n=e.className,a=he().formatPrice;return Object(b.jsxs)("div",{className:"price",children:[Object(b.jsx)("span",{className:"price__near",children:"\u24c3\xa0"}),Object(b.jsx)("span",{className:"price__count ".concat(n),children:a(t)})]})},De=function(e){var t=e.activeCount,n=e.handleNumberClick,a=e.showAnimation,c=e.price,r=e.currentCount;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"buy-more__wrapper",children:Object(b.jsx)(pe,{count:r,onClick:function(){return n(r)},isActive:t===r,className:"buy-more__count"})}),Object(b.jsx)("div",{className:"buy-more__wrapperp",children:Object(b.jsx)(Fe,{price:1===r?c.oneNFT:c.manyNFTS,className:" ".concat(t===r?a:"")})})]})},Ue=function(e){var t=e.isLinkDrop,n=he(t),a=n.text,c=n.count,r=n.state,s=n.showMessage,i=n.showCountAnimation,o=n.handleClick,l=n.handleNumberClick,u=r.price,d=r.app,j=d.tokensLeft>=d.manyCount,m=j?"select ".concat(d.oneCount," or ").concat(d.manyCount," Cute Penguin Club"):"select ".concat(d.oneCount," Cute Penguin Club");return Object(b.jsxs)("div",{className:"buy-more",children:[Object(b.jsxs)("div",{className:"buy-more__center",children:[Object(b.jsx)(De,{activeCount:c,handleNumberClick:l,showAnimation:i,price:u,currentCount:d.oneCount}),s&&Object(b.jsx)("div",{className:"buy-more__message",style:{transform:"translateX(".concat(t||j?"0":"-25px",")")},children:t?"select 1 link drop":m}),t&&Object(b.jsx)("p",{className:"buy-more__top-text",children:"Share a mystery NFT for your friend"})]}),Object(b.jsx)("div",{className:"buy-more__center",children:Object(b.jsx)(de,{text:a,onClick:o})})]})};Ue.defaultProps={isLinkDrop:!1};var Re=Object(a.memo)(Ue),Le=function(e){var t=e.soldOut,n=Object(a.useContext)(M).update;return Object(b.jsx)("div",{className:"buy",children:Object(b.jsx)("div",{className:"buy__data",children:t?Object(b.jsxs)("div",{className:"buy__sold-out-wrapper",children:[Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/generate-penguins.webp 2x, ./images/generate-penguins.webp 1x"}),Object(b.jsx)("img",{className:"buy__image",src:"./images/generate-penguins.webp",alt:"sold out background"})]}),Object(b.jsx)(be,{className:"buy__sold-out"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Re,{}),Object(b.jsx)(Re,{isLinkDrop:!0}),Object(b.jsx)(de,{text:"Send an NFT",className:"buy__nft",onClick:function(){return n("app.modalOpen",!0)}})]})})})};Le.defaultProps={soldOut:!1};var Be=Le,Me=function(e){var t=e.soldOut,n=Object(W.h)().pathname;return Object(b.jsx)("div",{className:"no-nfts",children:Object(b.jsxs)("div",{className:"no-nfts__data",children:[Object(b.jsxs)("div",{className:"no-nfts__data-top",children:[Object(b.jsxs)("div",{className:"no-nfts__information",children:[Object(b.jsxs)("p",{className:"no-nfts__title",children:["You don't have any"," ",Object(b.jsx)("span",{className:"no-nfts__text-purpure",children:"/link-drop"===n?"LinkDrops":"NFTs"})," ","yet"]}),Object(b.jsxs)("p",{className:"no-nfts__text",children:["Buy your first ",Object(b.jsx)("span",{className:"no-nfts__text-purpure",children:"NFT"})]}),Object(b.jsx)(Ee,{className:"no-nfts__links",color:"purpure"})]}),Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/generate-penguins.webp 2x, ./images/generate-penguins.webp 1x"}),Object(b.jsx)("img",{className:"no-nfts__img",src:"./images/generate-penguins.webp",alt:"no nft background"})]})]}),t?Object(b.jsx)(be,{className:"no-nfts__sold-out"}):Object(b.jsx)(Be,{})]})})};Me.defaultProps={soldOut:!1};var Ke=Me,We=n.p+"static/media/link-drop-background.7d06707f.svg",Je=function(){return{handleCopy:function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},qe=n.p+"static/media/copy-icon.8eb03ea1.svg",Ge=function(e){var t=e.link,n=Je().handleCopy,c=Object(a.useState)(""),r=Object(d.a)(c,2),s=r[0],i=r[1];return Object(b.jsxs)("button",{className:"shareable-link",type:"button",onClick:function(){n(t),setTimeout((function(){return i("shareable-link__animation")}),0),setTimeout((function(){return i("")}),1e3)},children:[Object(b.jsxs)("p",{className:"shareable-link__text",children:[t," "]}),Object(b.jsx)(z.a,{className:"shareable-link__icon",src:qe}),Object(b.jsx)("p",{className:"shareable-link__copied ".concat(s),children:"copied"})]})};Ge.defaultProps={link:"https://genc.win"};var He=Ge,Ve=function(e){var t=e.text,n=e.onBlur,c=e.index,r=Object(a.useState)(t),s=Object(d.a)(r,2),i=s[0],o=s[1];return Object(b.jsx)("input",{className:"shareable-input","data-index":c,onBlur:n,onChange:function(e){return o(e.target.value)},value:i,placeholder:"Enter text"})};Ve.defaultProps={text:"",onBlur:function(){},index:void 0};var Xe=Ve,Ye=function(e){var t=e.activeLinkForShare,n=e.index,a=e.onClick;return Object(b.jsx)("button",{type:"button",onClick:function(){return a(n)},className:"shareable-circle ".concat(n===t?"shareable-circle__active":"")})},$e=function(e){var t=e.linkDropArray,n=Object(a.useState)(""),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(b.jsxs)("a",{href:function(){var e="data:attachment/text,",n=t.map((function(e,t){var n=e.link,a=e.text;return"".concat(t,": ").concat(a?"".concat(a," : "):""," \n").concat(n)})).join("\n\n\n");return e+=encodeURI(n)}(),className:"save-btn",download:"my-link-drops.txt",onClick:function(){setTimeout((function(){return s("save-btn__animation")}),0),setTimeout((function(){return s("")}),1e3)},target:"_blank",children:["Save",Object(b.jsx)("p",{className:"save-btn__saved ".concat(r),children:"saved"})]})};$e.defaultProps={linkDropArray:[]};var ze=$e,Ze=function(){var e,t,n=Object(W.g)(),c=Object(a.useContext)(M),r=c.state,s=c.update,i=r.app,o=r.account,l=Object(a.useState)(Object(m.a)(i.linkDropArray)),u=Object(d.a)(l,2),p=u[0],f=u[1],O=Object(a.useState)(0),x=Object(d.a)(O,2),h=x[0],_=x[1],v=Je().handleCopy;Object(a.useEffect)((function(){i.linkDropArray.length&&f(Object(m.a)(i.linkDropArray))}),[i.linkDropArray.length]),Object(a.useEffect)((function(){localStorage.undefined_wallet_auth_key||n.push("/")}));var g=function(e){var t=e.target.value,n=+e.target.dataset.index,a=p.map((function(e,a){return n===a?Object(j.a)(Object(j.a)({},e),{},{text:t}):e}));f(a),s("app.linkDropArray",Object(m.a)(a)),localStorage.setItem("linkDropArray:".concat(o.accountId),JSON.stringify(Object(m.a)(a)))},k=function(e){return _(e)};return p.length?Object(b.jsxs)("div",{className:"link-drop",children:[Object(b.jsxs)("div",{className:"link-drop__data-wrapper",id:"share-nft",children:[Object(b.jsx)(z.a,{src:We,className:"link-drop__background"}),Object(b.jsxs)("div",{className:"link-drop__data",children:[Object(b.jsxs)("header",{className:"link-drop__header",children:[Object(b.jsx)("span",{className:"link-drop__header-purpure",children:"Share"})," a mystery"," ",Object(b.jsx)("span",{className:"link-drop__header-purpure",children:"NFT"})," with your friend"]}),Object(b.jsxs)("div",{className:"link-drop__center",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{className:"link-drop__list",children:p.map((function(e,t){return Object(b.jsxs)("li",{className:"link-drop__item",children:[Object(b.jsx)(Ye,{activeLinkForShare:h,onClick:k,index:t}),Object(b.jsxs)("div",{className:"link-drop__inputs",children:[Object(b.jsx)(He,{link:e.link}),Object(b.jsx)(Xe,{text:e.text,index:t,onBlur:g})]})]},e.id)}))}),Object(b.jsx)("div",{className:"link-drop__save",children:Object(b.jsx)(ze,{linkDropArray:p})}),Object(b.jsx)(Ee,{color:"blue",className:"link-drop__share-links",text:null===(e=p[h])||void 0===e?void 0:e.text,link:null===(t=p[h])||void 0===t?void 0:t.link,onClick:function(){var e,t,n=null===(e=p[h])||void 0===e?void 0:e.text,a=null===(t=p[h])||void 0===t?void 0:t.link,c="".concat(n,"  ").concat(a);v(c)}})]}),Object(b.jsx)("picture",{children:Object(b.jsx)("source",{srcSet:"./images/misfits-big-2x.webp 2x, ./images/misfits-big.webp 1x"})})]})]})]}),Object(b.jsx)(Be,{soldOut:i.soldOut})]}):Object(b.jsx)(Ke,{soldOut:i.soldOut})},Qe=n.p+"static/media/rarity-common.c156c166.svg",et=function(e){var t,n=e.className,c=e.item,r=e.urlIpfs,s=e.info,i=Object(a.useRef)();return Object(a.useEffect)((function(){var e,t=(null===i||void 0===i||null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect()).right;if(t>window.innerWidth){var n=window.innerWidth;i.current.style.transform="translateX(-".concat(t-n+50,"px)")}})),Object(b.jsxs)("div",{ref:i,className:"nft-item-info  ".concat(n||""),children:[Object(b.jsxs)("div",{className:"nft-item-info__icon-wrapper",children:[Object(b.jsx)("div",{className:"nft-item-info__image-wrapper",children:Object(b.jsx)("img",{className:"nft-item-info__image",src:"".concat(r,"/").concat(c.media),alt:"misfit"})}),Object(b.jsxs)("p",{className:"nft-item-info__number",children:["# ",null===c||void 0===c||null===(t=c.title)||void 0===t?void 0:t.padStart(5,"0")]}),Object(b.jsx)(z.a,{className:"nft-item-info__rarity",src:c.rarity||Qe})]}),Object(b.jsxs)("div",{className:"nft-item-info__stats",children:[Object(b.jsxs)("p",{children:["kind : ",(null===s||void 0===s?void 0:s.kind)||"no data"]}),Object(b.jsxs)("p",{children:["seed : ",(null===s||void 0===s?void 0:s.seed)||"no data"]})]})]})},tt=n.p+"static/media/rarity-rare.355ec026.svg",nt=n.p+"static/media/rarity-uncommon.df7f70d0.svg",at=n.p+"static/media/rarity-very-rare.681bd7e2.svg",ct=n.p+"static/media/rarity-super-rare.383d07f3.svg",rt=function(e){var t=e.handleClick,n=e.title;return Object(b.jsxs)("div",{className:"reveal__item",onClick:t,children:[Object(b.jsxs)("div",{className:"reveal__top",children:[Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{srcSet:"./images/reveal-2x.webp 2x, ./images/reveal.webp 1x"}),Object(b.jsx)("img",{className:"reveal__image",src:"./images/reveal.png",alt:"reveal"})]}),Object(b.jsxs)("div",{className:"reveal__question-sign",children:["?",Object(b.jsx)("span",{className:"reveal__question-sign-big",children:"?"}),"?"]}),Object(b.jsx)("div",{className:"reveal__text-hover",children:"Reveal"})]}),Object(b.jsxs)("div",{className:"reveal__title",children:[Object(b.jsxs)("span",{children:["# ",n.padStart(5,"0")]}),Object(b.jsx)("div",{className:"reveal__question-grey",children:"?"})]})]})};rt.defaultProps={handleClick:function(){},title:""};var st=rt,it={Normies:Qe,Skellies:tt,Zombies:nt,Meerkats:at,Glitches:ct},ot=function(e){var t,n=e.item,c=e.onClick,r=e.isReveal,s=e.urlIpfs,i=Object(a.useState)(r),j=Object(d.a)(i,2),m=j[0],p=j[1],f=Object(a.useState)({}),O=Object(d.a)(f,2),x=O[0],h=O[1];Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/").concat(n.reference));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,h(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);return Object(b.jsx)("div",{className:"nft-item",children:m?Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"nft-item__img",src:"".concat(s,"/").concat(n.media),alt:"misfit"}),Object(b.jsxs)("div",{className:"nft-item__footer",children:[Object(b.jsxs)("p",{className:"nft-item__hash",children:["# ",null===n||void 0===n||null===(t=n.title)||void 0===t?void 0:t.padStart(5,"0")]}),Object(b.jsx)(z.a,{src:it[null===x||void 0===x?void 0:x.kind]||Qe})]}),Object(b.jsx)(et,{className:"nft-item__info",item:n,urlIpfs:s,info:x})]}):Object(b.jsx)(st,{title:null===n||void 0===n?void 0:n.title,handleClick:function(){p(!0),c(Object(u.a)({},n.title,!0))}})})};ot.defaultProps={item:{},onClick:function(){}};var lt=ot,ut=function(){var e=Object(a.useContext)(M),t=e.state,n=e.update,c=t.app,r=function(e){var t=Object(j.a)(Object(j.a)({},c.revealMisfits),e);n("app",{revealMisfits:t}),localStorage.setItem("revealMisfits",JSON.stringify(t))};return Object(b.jsx)("div",{className:"nfts-list",children:c.misfitsArray.map((function(e){return Object(b.jsx)(lt,{item:e.metadata,isReveal:c.revealMisfits[e.token_id],urlIpfs:c.urlIpfs,onClick:r},e.token_id)}))})},dt=function(){var e=Object(W.g)(),t=Object(a.useContext)(M).state,n=t.app.soldOut,c=t.app.misfitsArray.length;return Object(a.useEffect)((function(){localStorage.undefined_wallet_auth_key||e.push("/")})),c?Object(b.jsxs)("div",{className:"my-nfts",children:[Object(b.jsx)("div",{className:"my-nfts__data",children:Object(b.jsx)(ut,{})}),Object(b.jsx)(Be,{soldOut:n})]}):Object(b.jsx)(Ke,{soldOut:n})},jt=[{path:"/",key:"ROOT",exact:!0,component:function(){return Object(b.jsx)(ke,{})}},{path:"/my-nfts",key:"MY_NFTS",component:function(){return Object(b.jsx)(dt,{})}},{path:"/link-drop",key:"LINK_DROP",component:function(){return Object(b.jsx)(Ze,{})}}],bt=(n(165),function(){var e=Object(a.useContext)(M).dispatch;return Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,t.dispatch)(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c,r,s,i,u,b,p,f,O,h,_,v,g,k,N,y,w;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.update,a=t.getState,e.prev=1,e.next=4,C();case 4:return c=e.sent,r=c.near,s=c.wallet,e.next=9,A(r);case 9:if(i=e.sent,s.signIn=function(e){s.requestSignIn({successUrl:e,contractId:E})},u=s.signOut,s.signOut=function(){u.call(s),n("wallet.signedIn",!1),n("",{account:null}),localStorage.removeItem("undefined_wallet_auth_key"),s.signedIn=s.isSignedIn(),(new x.keyStores.BrowserLocalStorageKeyStore).clear()},s.signedIn=s.isSignedIn(),!s.signedIn){e.next=44;break}return b=s.account(),p=S(b,F),e.t0=U,e.next=20,s.account().getAccountBalance();case 20:return e.t1=e.sent.available,s.balance=(0,e.t0)(e.t1,2),e.next=24,n("",{wallet:s,account:b,contract:p,price:i,near:r});case 24:return f=JSON.parse(localStorage.getItem("linkDropArray:".concat(b.accountId)))||[],e.next=27,Promise.all([p.tokens_left(),p.nft_total_supply(),p.nft_tokens_for_owner({account_id:b.accountId}),p.nft_metadata()].concat(Object(m.a)(f.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L(t.link).toString(),e.next=3,p.check_key({public_key:n});case 3:t.isUsed=!e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))));case 27:return O=e.sent,h=Object(d.a)(O,4),_=h[0],v=h[1],g=h[2],k=h[3].base_uri,N=0===_,f=f.filter((function(e){return!e.isUsed})),localStorage.setItem("linkDropArray:".concat(b.accountId),JSON.stringify(Object(m.a)(f))),y=a(),w=Object(j.a)(Object(j.a)({},y.app),{},{misfitsArray:g,urlIpfs:k,linkDropArray:f,soldOut:N,tokensLeft:_}),e.next=40,n("",{app:w});case 40:return console.log("tokens_left:",_),console.log("nft_total_supply",v),console.log("state:",a()),e.abrupt("return");case 44:return e.next=46,n("",{near:r,wallet:s,account:b,price:i});case 46:console.log("state:",a()),e.next=52;break;case 49:e.prev=49,e.t2=e.catch(1),console.log("error:",e.t2);case 52:case"end":return e.stop()}}),e,null,[[1,49]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsx)(le,{children:Object(b.jsx)(G,{routes:jt})})});r.a.render(Object(b.jsx)(K,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(bt,{})})}),document.getElementById("root"))},96:function(e,t){}},[[166,1,2]]]);
//# sourceMappingURL=main.d998fe05.chunk.js.map