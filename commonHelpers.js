import{a as w,i as h,S as L}from"./assets/vendor-ed396e71.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const b=w.create({baseURL:"https://pixabay.com/api/",headers:{"Content-Type":"application/json"},params:{key:"41582613-5fd86df2fe5af6dc3c1a0bcd8",type:"photo",orientation:"horizontal",safesearch:"true"}}),S=t=>t.data,q=async t=>{try{const s=await b.get("",{params:t});return S(s)}catch(s){console.log(s.message)}},C="/goit-js-hw-12/assets/bi_x-octagon-4d6c239e.svg",p=t=>{h.error({message:t,position:"topRight",backgroundColor:"red",messageColor:"white",iconUrl:`${C}`,iconColor:"white"})},f=t=>{h.error({message:t,position:"topRight",backgroundColor:"green",messageColor:"white",iconColor:"white"})};document.querySelector(".search-button");const k=document.querySelector(".search-form"),m=document.querySelector(".search-input"),v=document.querySelector(".loader-div"),l=document.querySelector(".load-button");let c=1,n=null,y=[],d="";const R=async()=>{if(n!==null&&(l.removeEventListener("click",n),n=null),u(),I(),d=x(),!d){f("Input your request!");return}const t=P(d);n=async()=>{try{y=await g(t),E(y),$()}catch(s){console.log(s.message)}};try{await g(n)}catch(s){console.log(s.message)}l.addEventListener("click",n),M()},$=()=>{const s=document.querySelector(".card").getBoundingClientRect();c-1>1&&window.scrollBy({top:s.height*2,behavior:"smooth"})},x=()=>m.value.trim().split(" ").join("+");k.addEventListener("submit",t=>{t.preventDefault(),R()});const E=t=>{const s=document.querySelector(".gallery-list");let r="";r=t.reduce((a,e)=>a+`<li class="card">
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
        `,""),s.insertAdjacentHTML("beforeend",r),j.refresh()},P=t=>{c=1;const s=40;let r=!1;return async()=>{try{if(r)return[];const{hits:a,total:e}=await q({q:t,page:c,per_page:s});return e===0?(u(),p("Sorry, there are no images matching your search query. Please try again!")):c>=Math.ceil(e/s)?(r=!0,u(),f("We're sorry, but you've reached the end of search results.")):B(),c+=1,a}catch{p("Error! No connection with server!")}}},g=async t=>{U();try{return await t()}catch(s){console.log(s.message)}finally{O()}},B=()=>{l.style.display="flex"},u=()=>{l.style.display="none"},I=()=>{const t=document.querySelector(".gallery-list");t.innerHTML=""},M=()=>{m.value=""},O=()=>{v.style.display="none"},U=()=>{v.style.display="flex"};let j=new L(".gallery a",{overlayOpacity:.1,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
