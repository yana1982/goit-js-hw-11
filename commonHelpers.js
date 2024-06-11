import{S as p,i}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=o=>fetch(`https://pixabay.com/api/?key=44326586-33d8e1982942c3360c5af8426&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()});function f(o){return o.hits.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}">
          <div class="cards-wrapper">
          <div class="card-wrapper">
            <strong>Likes</strong>
            <p>${s.likes}</p>
          </div>
          <div class="card-wrapper">
            <strong>Views</strong>
            <p>${s.views}</p>
          </div>
          <div class="card-wrapper">
            <strong>Comments</strong>
            <p>${s.comments}</p>
          </div>
          <div class="card-wrapper">
            <strong>Downloads</strong>
            <p>${s.downloads}</p>
          </div>
        </div>
        </a>
      </li>`).join("")}const g="/goit-js-hw-11/assets/alert-e987a0ca.svg",h="/goit-js-hw-11/assets/сaution-3a1f6716.svg",c=document.querySelector(".search-form"),l=document.querySelector(".search-input"),y=document.querySelector(".search-btn"),d=document.querySelector(".loader-hidden"),u=document.querySelector(".gallery");let v=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("click",o=>{if(o.preventDefault(),!l.value.trim()){c.reset();return}u.innerHTML="",d.classList.remove("visually-hidden"),m(l.value.trim()).then(r=>{r.total||i.error({iconUrl:g,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u.insertAdjacentHTML("afterbegin",f(r)),v.refresh(),d.classList.add("visually-hidden")}).catch(r=>{i.warning({iconUrl:h,position:"topRight",message:`${r}`})}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
