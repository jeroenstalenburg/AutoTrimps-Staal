// ==UserScript==
// @name         AutoTrimps-Staal
// @version      1.0-Staal
// @namespace    https://github.com/jeroenstalenburg/AutoTrimps-Staal
// @updateURL    https://github.com/jeroenstalenburg/AutoTrimps-Staal/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Staalli2
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *https://github.com/jeroenstalenburg/AutoTrimps-Staal*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest 
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Staal';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://raw.githubusercontent.com/jeroenstalenburg/AutoTrimps-Staal/main/AutoTrimps2.js?token=AKLVYK2K2L6JNAM32VA7MFLBP7CPE';
script.setAttribute('crossorigin',"use-credentials");
// script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
