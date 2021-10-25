// ==UserScript==
// @name         AT-Zek-GraphsU2
// @namespace    https://github.com/jeroenstalenburg/AutoTrimps
// @version      3.0.0-Zek
// @updateURL    https://github.com/jeroenstalenburg/AutoTrimps/GraphsU2.user.js
// @description  Graphs Module (only for U2) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Zek
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var script = document.createElement('script');
script.id = 'AutoTrimps-GraphsU2';
script.src = 'https://jeroenstalenburg.github.io/AutoTrimps-Staal/GraphsU2.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
