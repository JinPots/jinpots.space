(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function b(){}function V(e){return e()}function J(){return Object.create(null)}function I(e){e.forEach(V)}function D(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function ne(e,t){return P||(P=document.createElement("a")),P.href=t,e===P.href}function re(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function w(){return O(" ")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e){return Array.from(e.childNodes)}function S(e,t,n,s){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}let H;function x(e){H=e}const $=[],C=[],E=[],K=[],oe=Promise.resolve();let M=!1;function le(){M||(M=!0,oe.then(Q))}function F(e){E.push(e)}const N=new Set;let j=0;function Q(){const e=H;do{for(;j<$.length;){const t=$[j];j++,x(t),ce(t.$$)}for(x(null),$.length=0,j=0;C.length;)C.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];N.has(n)||(N.add(n),n())}E.length=0}while($.length);for(;K.length;)K.pop()();M=!1,N.clear(),x(e)}function ce(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const T=new Set;let ue;function U(e,t){e&&e.i&&(T.delete(e),e.i(t))}function ae(e,t,n,s){if(e&&e.o){if(T.has(e))return;T.add(e),ue.c.push(()=>{T.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function fe(e){e&&e.c()}function X(e,t,n,s){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),s||F(()=>{const c=e.$$.on_mount.map(V).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...c):I(c),e.$$.on_mount=[]}),i.forEach(F)}function Y(e,t){const n=e.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&($.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,s,r,i,c,o=[-1]){const u=H;x(e);const a=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};c&&c(a.root);let _=!1;if(a.ctx=n?n(e,t.props||{},(d,m,...v)=>{const p=v.length?v[0]:m;return a.ctx&&r(a.ctx[d],a.ctx[d]=p)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](p),_&&de(e,d)),m}):[],a.update(),_=!0,I(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const d=ie(t.target);a.fragment&&a.fragment.l(d),d.forEach(L)}else a.fragment&&a.fragment.c();t.intro&&U(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Q()}x(u)}class ee{$destroy(){Y(this,1),this.$destroy=b}$on(t,n){if(!D(n))return b;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const he="/assets/mafuyu.a6eb3db2.png";function W(e,t,n){const s=e.slice();return s[1]=t[n],s}function R(e){let t,n,s,r=e[1].name+"",i,c,o,u=e[1].desc+"",a,_;return{c(){t=h("span"),n=h("h2"),s=h("a"),i=O(r),c=w(),o=h("h5"),a=O(u),_=w(),l(s,"href",e[1].link),l(n,"class","text-teal-500"),l(t,"class","m-2 roundedtext-center justify-center")},m(d,m){q(d,t,m),f(t,n),f(n,s),f(s,i),f(t,c),f(t,o),f(o,a),f(t,_)},p:b,d(d){d&&L(t)}}}function me(e){let t,n,s=e[0],r=[];for(let i=0;i<s.length;i+=1)r[i]=R(W(e,s,i));return{c(){t=h("work"),n=h("div");for(let i=0;i<r.length;i+=1)r[i].c();l(n,"id","container"),S(n,"padding-top","5%"),S(n,"padding-left","3%"),l(t,"id","work")},m(i,c){q(i,t,c),f(t,n);for(let o=0;o<r.length;o+=1)r[o].m(n,null)},p(i,[c]){if(c&1){s=i[0];let o;for(o=0;o<s.length;o+=1){const u=W(i,s,o);r[o]?r[o].p(u,c):(r[o]=R(u),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},i:b,o:b,d(i){i&&L(t),se(r,i)}}}function pe(e){return[[{name:"Fishu Portfolio",link:"https://fishutechno.me",desc:"A personal website made for Fishu."},{name:"KanPots",link:"https://discord.com/api/oauth2/authorize?client_id=741242820115038209&permissions=156766694464&scope=bot",desc:"A discord bot I made for o!rdr rendering."},{name:"osu!droid skins website",link:"https://tsukushi.site",desc:"Website for all osu!droid skins that's available for everyone."},{name:"Facebook 60 FPS Re-encoder",link:"https://github.com/JinPots/fb60fps-neutralino",desc:"An app to encode your video to lower bitrate for 60fps on facebook."}]]}class _e extends ee{constructor(t){super(),Z(this,t,pe,me,G,{})}}function ge(e){let t,n,s,r,i,c,o,u,a,_,d,m,v,p,z,k,g,B,A;return p=new _e({}),{c(){t=h("main"),n=h("div"),s=h("div"),r=w(),i=h("mainContainer"),c=h("div"),c.innerHTML='<h1 id="name"><a href="https://www.facebook.com/jinpots.official/" style="font-size: 6rem" class="fancy-font name svelte-1ktlsw6">JinPots</a></h1>',o=w(),u=h("div"),a=h("div"),a.innerHTML=`<p>Hello, welcome to my portfolio web! This is a meaningless web, I just
          want to make a web with Svelte. <br/>
          I&#39;m a 15 years old student from Vietnam, I&#39;m currently learning web development
          and I&#39;m also a osu! player. <br/></p>`,_=w(),d=h("div"),m=h("h1"),m.textContent="My works:",v=w(),fe(p.$$.fragment),z=w(),k=h("div"),g=h("img"),l(s,"id","bar_inside"),l(s,"class","svelte-1ktlsw6"),l(n,"id","bar"),l(n,"class","svelte-1ktlsw6"),l(c,"id","info"),l(c,"class","justify-center svelte-1ktlsw6"),l(a,"id","para"),l(a,"class"," svelte-1ktlsw6"),l(m,"class","text-3xl"),l(d,"id","work"),l(d,"class","text-center justify-center xl:absolute svelte-1ktlsw6"),ne(g.src,B=he)||l(g,"src",B),l(g,"alt","My wife!"),l(g,"class","max-h-screen absolute svelte-1ktlsw6"),l(g,"id","mafuyu"),S(g,"right","0"),l(k,"id","mafuyu"),l(k,"class","invisible xl:visible svelte-1ktlsw6"),l(u,"id","alltheinfos"),l(u,"class","grid grid-rows-2 xl:grid-cols-3"),l(i,"class","svelte-1ktlsw6"),l(t,"class","svelte-1ktlsw6")},m(y,te){q(y,t,te),f(t,n),f(n,s),e[2](s),e[3](n),f(t,r),f(t,i),f(i,c),f(i,o),f(i,u),f(u,a),f(u,_),f(u,d),f(d,m),f(d,v),X(p,d,null),f(u,z),f(u,k),f(k,g),A=!0},p:b,i(y){A||(U(p.$$.fragment,y),A=!0)},o(y){ae(p.$$.fragment,y),A=!1},d(y){y&&L(t),e[2](null),e[3](null),Y(p)}}}function ye(e,t,n){let s,r,i=100;setTimeout(()=>{n(0,s.style.width="60%",s),setTimeout(()=>{n(1,r.style.width=i+"%",r),setTimeout(()=>{n(0,s.style.opacity=0,s),setTimeout(()=>{n(0,s.style.display="none",s),document.querySelector("mainContainer").style.opacity=1},1300)},1e3)},1300)},1e3);function c(u){C[u?"unshift":"push"](()=>{r=u,n(1,r)})}function o(u){C[u?"unshift":"push"](()=>{s=u,n(0,s)})}return[s,r,c,o]}class we extends ee{constructor(t){super(),Z(this,t,ye,ge,G,{})}}new we({target:document.getElementById("app")});
