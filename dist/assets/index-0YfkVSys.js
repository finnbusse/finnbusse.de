(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const u={en:{navbar:{about:"About Me",projects:"Projects",skills:"Skill Matrix"},header:{title:"Hey, I'm Finn!",subtitle:"I am a"},about:{title:"About Me",intro:"My educational background so far:",abiturYear:"est. 2027 – Abitur",gymYear:"2024-today – High school",praktikum:"June 2024 – Two-week student internship",gymSince2018:"2018-today – Gymnasium",grundschule:"2014-2018 – Elementary School"},projects:{title:"Projects",proj1:"Project 1: Portfolio Website",grabbeAI:"GrabbeAI"},skills:{title:"Skill Matrix",cpp:"planned - 0%"},footer:{rights:"© 2025 Finn Busse. All rights reserved.",madeWith:"Made with ♥ by Finn Busse"}},de:{navbar:{about:"Lebenslauf",projects:"Projekte",skills:"Kompetenzen"},header:{title:"Hey, ich bin Finn!",subtitle:"Ich bin ein"},about:{title:"Über mich",intro:"Dies ist meine bisherige Bildung:",abiturYear:"vsl. 2027 – Abitur",gymYear:"2024-heute – Gymnasiale Oberstufe",praktikum:"Juni 2024 – Zweiwöchiges Schülerbetriebspraktikum",gymSince2018:"2018-heute – Gymnasium",grundschule:"2014-2018 – Grundschule"},projects:{title:"Projekte",proj1:"Projekt 1: Portfolio-Website",grabbeAI:"GrabbeAI"},skills:{title:"Meine Kompetenzen",cpp:"geplant - 0%"},footer:{rights:"© 2025 Finn Busse. Alle Rechte vorbehalten.",madeWith:"Made with ♥ by Finn Busse"}}};document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("dropdown-button"),s=document.getElementById("dropdown-menu"),r=document.getElementById("selected-language"),t=[{label:"English",emoji:"🇬🇧",lang:"en"},{label:"German",emoji:"🇩🇪",lang:"de"}];let e="en";o.addEventListener("click",()=>{s.classList.toggle("hidden")}),s.addEventListener("click",i=>{const a=i.target.closest("a");if(a&&a.dataset.lang){e=a.dataset.lang;const c=t.find(l=>l.lang===e);r.innerHTML=`${c.emoji} ${c.label}`,s.classList.add("hidden"),n(e)}});function n(i){document.querySelectorAll("[data-translate-key]").forEach(a=>{const c=a.dataset.translateKey.split(".");let l=u[i];c.forEach(d=>{l=l[d]}),a.textContent=l||a.dataset.translateKey})}n(e)});(function(){const o=document.querySelector(".button-switch"),s=document.querySelector(".outer-span"),r=document.querySelector(".light-switch"),t=document.querySelector(".dark-switch"),e=document.documentElement;(()=>{localStorage.getItem("hs_theme")==="dark"?(e.classList.add("dark"),o.classList.add("bg-gray-800"),s.classList.add("translate-x-5"),r.classList.remove("opacity-100"),t.classList.add("opacity-100")):(e.classList.remove("dark"),o.classList.remove("bg-gray-800"),s.classList.remove("translate-x-5"),r.classList.add("opacity-100"),t.classList.remove("opacity-100"))})(),o.addEventListener("click",()=>{const i=e.classList.toggle("dark");localStorage.setItem("hs_theme",i?"dark":"light"),s.classList.toggle("translate-x-5"),o.classList.toggle("bg-gray-800"),r.classList.toggle("opacity-100"),t.classList.toggle("opacity-100")})})();document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("typing-text"),s=[{text:"Machine Learning Expert",gradient:"from-yellow-500 to-pink-300"},{text:"Python Problem-Solver",gradient:"from-blue-600 to-blue-300"},{text:"AI Enthusiast",gradient:"from-red-500 to-orange-300"},{text:"Web Developer",gradient:"from-green-500 to-teal-300"},{text:"High-School Student",gradient:"from-purple-500 to-indigo-300"}];let r=0,t=0,e=!1;const n=80,i=50,a=1500;function c(){if(!o)return;const l=s[r];o.className=`text-6xl text-transparent bg-clip-text bg-gradient-to-r ${l.gradient}`;const d=l.text;e?(t--,o.textContent=d.slice(0,t),t===0&&(e=!1,r=(r+1)%s.length)):(t++,o.textContent=d.slice(0,t),t===d.length&&setTimeout(()=>e=!0,a)),setTimeout(c,e?i:n)}c()});document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("typing-text"),s=[{text:"Machine Learning Expert",gradient:"from-yellow-500 to-pink-300"},{text:"Python Problem-Solver",gradient:"from-blue-600 to-blue-300"},{text:"AI Enthusiast",gradient:"from-red-500 to-orange-300"},{text:"Web Developer",gradient:"from-green-500 to-teal-300"},{text:"High-School Student",gradient:"from-purple-500 to-indigo-300"}];let r=0,t=0,e=!1;const n=80,i=50,a=1500;function c(){if(!o)return;const l=s[r];o.className=`text-6xl text-transparent bg-clip-text bg-gradient-to-r ${l.gradient}`;const d=l.text;e?(t--,o.textContent=d.slice(0,t),t===0&&(e=!1,r=(r+1)%s.length)):(t++,o.textContent=d.slice(0,t),t===d.length&&setTimeout(()=>e=!0,a)),setTimeout(c,e?i:n)}c()});
