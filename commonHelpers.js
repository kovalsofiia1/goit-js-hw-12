import{a as m,i as y,S as v}from"./assets/vendor-ed396e71.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w=m.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41582613-5fd86df2fe5af6dc3c1a0bcd8",type:"photo",orientation:"horizontal",safesearch:"true"}}),L=t=>t.data,b=async t=>L(await w.get("",{params:t})),S="/goit-js-hw-12/assets/bi_x-octagon-4d6c239e.svg",d=t=>{y.error({message:t,position:"topRight",backgroundColor:"red",messageColor:"white",iconUrl:`${S}`,iconColor:"white"})},h=t=>{y.error({message:t,position:"topRight",backgroundColor:"green",messageColor:"white",iconColor:"white"})};document.querySelector(".search-button");const q=document.querySelector(".search-form"),g=document.querySelector(".search-input"),f=document.querySelector(".loader-div"),c=document.querySelector(".load-button");let n=null;const C=async()=>{if(n!==null&&(c.removeEventListener("click",n),n=null),i(),x(),!u()){h("Input your request!");return}const o=R(u());n=async()=>{const{hits:r,page:a}=await p(o);k(r);const s=document.querySelector(".card").getBoundingClientRect();a-1>1&&window.scrollBy({top:s.height*2,behavior:"smooth"})},await p(n),c.addEventListener("click",n),E()},u=()=>g.value.trim().split(" ").join("+");q.addEventListener("submit",t=>{t.preventDefault(),C()});const k=t=>{const o=document.querySelector(".gallery-list");let r="";r=t.reduce((a,e)=>a+`<li class="card">
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
        `,""),o.insertAdjacentHTML("beforeend",r),M.refresh()},R=t=>{let o=1;const r=40;let a=!1;return async()=>{try{if(a)return[];const{hits:e,total:s}=await b({q:t,page:o,per_page:r});return s===0?(i(),d("Sorry, there are no images matching your search query. Please try again!")):o>=Math.ceil(s/r)?(a=!0,i(),h("We're sorry, but you've reached the end of search results.")):$(),o+=1,{hits:e,page:o}}catch{return d("Error! No connection with server!"),[]}}},p=async t=>{I();const o=await t();return B(),o},$=()=>{c.style.display="flex"},i=()=>{c.style.display="none"},x=()=>{const t=document.querySelector(".gallery-list");t.innerHTML=""},E=()=>{g.value=""},B=()=>{f.style.display="none"},I=()=>{f.style.display="flex"};let M=new v(".gallery a",{overlayOpacity:.1,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
