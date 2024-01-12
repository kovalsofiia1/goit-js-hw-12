import{a as g,i as p,S as f}from"./assets/vendor-ed396e71.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=g.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41582613-5fd86df2fe5af6dc3c1a0bcd8",type:"photo",orientation:"horizontal",safesearch:"true"}}),v=t=>t.data,w=async t=>v(await m.get("",{params:t})),L="/goit-js-hw-12/assets/bi_x-octagon-4d6c239e.svg",d=t=>{p.error({message:t,position:"topRight",backgroundColor:"red",messageColor:"white",iconUrl:`${L}`,iconColor:"white"})},b=t=>{p.error({message:t,position:"topRight",backgroundColor:"green",messageColor:"white",iconColor:"white"})};document.querySelector(".search-button");const S=document.querySelector(".search-form"),y=document.querySelector(".search-input"),h=document.querySelector(".loader-div"),c=document.querySelector(".load-button");let n=null;const q=async()=>{n!==null&&(c.removeEventListener("click",n),n=null),i(),x();const t=R(C());n=async()=>{const{hits:s,page:r}=await u(t);k(s);const e=document.querySelector(".card").getBoundingClientRect();r-1>1&&window.scrollBy({top:e.height*2,behavior:"smooth"})},await u(n),c.addEventListener("click",n),E()},C=()=>y.value.trim().split(" ").join("+");S.addEventListener("submit",t=>{t.preventDefault(),q()});const k=t=>{const s=document.querySelector(".gallery-list");let r="";r=t.reduce((a,e)=>a+`<li class="card">
            <a href="${e.largeImageURL}">
          <img
            src="${e.webformatURL}"
            alt="${e.tags}"
            class="image"
          />
          </a>
          <div class="description">
            <div class="desc-part">
              <span class="bold">Likes</span><span>${e.likes}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Views</span><span>${e.views}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Comments</span><span>${e.comments}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Downloads</span><span>${e.downloads}</span>
            </div>
          </div>
        </li>
        `,""),s.insertAdjacentHTML("beforeend",r),O.refresh()},R=t=>{let s=1;const r=40;let a=!1;return async()=>{try{if(a)return[];const{hits:e,total:o}=await w({q:t,page:s,per_page:r});return o===0?(i(),d("Sorry, there are no images matching your search query. Please try again!")):s>=Math.ceil(o/r)?(a=!0,i(),b("We're sorry, but you've reached the end of search results.")):$(),s+=1,{hits:e,page:s}}catch{return d("Error! No connection with server!"),[]}}},u=async t=>{M();const s=await t();return B(),s},$=()=>{c.style.display="flex"},i=()=>{c.style.display="none"},x=()=>{const t=document.querySelector(".gallery-list");t.innerHTML=""},E=()=>{y.value=""},B=()=>{h.style.display="none"},M=()=>{h.style.display="flex"};let O=new f(".gallery a",{overlayOpacity:.1,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
