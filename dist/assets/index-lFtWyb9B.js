(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h={en:{navbar:{about:"About Me",projects:"Projects",skills:"Skill Matrix"},header:{title:"Hey, I'm Finn!",subtitle:"I am a"},about:{title:"About Me",intro:"My educational background so far:",abiturYear:"est. 2027 – Abitur",gymYear:"2024-today – High school",praktikum:"June 2024 – Two-week student internship",gymSince2018:"2018-today – Gymnasium",grundschule:"2014-2018 – Elementary School"},projects:{title:"Projects",proj1:"Project 1: Portfolio Website",grabbeAI:"GrabbeAI"},skills:{title:"Skill Matrix",cpp:"planned - 0%"},footer:{rights:"© 2025 Finn Busse. All rights reserved.",madeWith:"Made with ♥ by Finn Busse"}},de:{navbar:{about:"Lebenslauf",projects:"Projekte",skills:"Kompetenzen"},header:{title:"Hey, ich bin Finn!",subtitle:"Ich bin ein"},about:{title:"Über mich",intro:"Dies ist meine bisherige Bildung:",abiturYear:"vsl. 2027 – Abitur",gymYear:"2024-heute – Gymnasiale Oberstufe",praktikum:"Juni 2024 – Zweiwöchiges Schülerbetriebspraktikum",gymSince2018:"2018-heute – Gymnasium",grundschule:"2014-2018 – Grundschule"},projects:{title:"Projekte",proj1:"Projekt 1: Portfolio-Website",grabbeAI:"GrabbeAI"},skills:{title:"Meine Kompetenzen",cpp:"geplant - 0%"},footer:{rights:"© 2025 Finn Busse. Alle Rechte vorbehalten.",madeWith:"Made with ♥ by Finn Busse"}}};document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("dropdown-button"),n=document.getElementById("dropdown-menu"),a=document.getElementById("selected-language"),l=[{label:"English",emoji:"🇬🇧",lang:"en"},{label:"German",emoji:"🇩🇪",lang:"de"}];let e="en";r.addEventListener("click",()=>{n.classList.toggle("hidden")}),n.addEventListener("click",s=>{const o=s.target.closest("a");if(o&&o.dataset.lang){e=o.dataset.lang;const c=l.find(i=>i.lang===e);a.innerHTML=`${c.emoji} ${c.label}`,n.classList.add("hidden"),t(e)}});function t(s){document.querySelectorAll("[data-translate-key]").forEach(o=>{const c=o.dataset.translateKey.split(".");let i=h[s];c.forEach(u=>{i=i[u]}),o.textContent=i||o.dataset.translateKey})}t(e)});(function(){const r=document.querySelector(".button-switch"),n=document.querySelector(".outer-span"),a=document.querySelector(".light-switch"),l=document.querySelector(".dark-switch"),e=document.documentElement;(()=>{localStorage.getItem("hs_theme")==="dark"?(e.classList.add("dark"),r.classList.add("bg-gray-800"),n.classList.add("translate-x-5"),a.classList.remove("opacity-100"),l.classList.add("opacity-100")):(e.classList.remove("dark"),r.classList.remove("bg-gray-800"),n.classList.remove("translate-x-5"),a.classList.add("opacity-100"),l.classList.remove("opacity-100"))})(),r.addEventListener("click",()=>{const s=e.classList.toggle("dark");localStorage.setItem("hs_theme",s?"dark":"light"),n.classList.toggle("translate-x-5"),r.classList.toggle("bg-gray-800"),a.classList.toggle("opacity-100"),l.classList.toggle("opacity-100")})})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("typing-text");if(!r){console.error("Element mit ID 'typing-text' nicht gefunden.");return}const n=[{text:"Machine Learning Expert",gradient:"from-yellow-500 to-pink-300",size:"text-6xl"},{text:"Python Problem-Solver",gradient:"from-blue-600 to-blue-300",size:"text-5xl"},{text:"AI Enthusiast",gradient:"from-red-500 to-orange-300",size:"text-6xl"},{text:"Web Developer",gradient:"from-green-500 to-teal-300",size:"text-6xl"},{text:"High-School Student",gradient:"from-purple-500 to-indigo-300",size:"text-6xl"}],a=200,l=150,e=2e3;let t=0,s=0,o=!1;function c(u){r.className="bg-clip-text text-transparent bg-gradient-to-r ${current.gradient}",r.classList.forEach(g=>{(g.startsWith("from-")||g.startsWith("to-"))&&r.classList.remove(g)});const[d,m]=u.split(" ");r.classList.add(d,m)}function i(){const d=n[t].text;o?(r.textContent=d.substring(0,s-1),s--,s===0?(o=!1,t=(t+1)%n.length,c(n[t].gradient),setTimeout(i,a)):setTimeout(i,l)):(r.textContent=d.substring(0,s+1),s++,s===d.length?(o=!0,setTimeout(i,e)):setTimeout(i,a))}c(n[t].gradient),i()});
