import{S as p,i}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){const s="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"44326586-33d8e1982942c3360c5af8426",q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${t}?${n}`;return fetch(e).then(r=>r.json())}function f(o){return o.hits.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}">
          <div class="cards-wrapper">
          <div class="card-wrapper">
            <strong>Likes</strong>
            <p>${t.likes}</p>
          </div>
          <div class="card-wrapper">
            <strong>Views</strong>
            <p>${t.views}</p>
          </div>
          <div class="card-wrapper">
            <strong>Comments</strong>
            <p>${t.comments}</p>
          </div>
          <div class="card-wrapper">
            <strong>Downloads</strong>
            <p>${t.downloads}</p>
          </div>
        </div>
        </a>
      </li>`).join("")}const g="/goit-js-hw-11/assets/alert-e987a0ca.svg",c=document.querySelector(".search-form"),l=document.querySelector(".search-input"),h=document.querySelector(".search-btn"),d=document.querySelector(".loader"),u=document.querySelector(".gallery");let y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});h.addEventListener("click",o=>{if(o.preventDefault(),!l.value.trim()){c.reset();return}u.innerHTML="",d.classList.remove("visually-hidden"),m(l.value.trim()).then(s=>{s.total||i.error({iconUrl:g,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u.insertAdjacentHTML("afterbegin",f(s)),y.refresh(),d.classList.add("visually-hidden")}).catch(s=>{i.warning({title:"Error",message,position:"topRight",timeout:5e3})}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
