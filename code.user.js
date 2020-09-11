// ==UserScript==
// @name         Обход linkfilter в Steam
// @namespace    bypass_steam_linkfilter
// @version      1.0
// @description  Обход подтверждения перехода по ссылке в форуме Steam
// @author       AlexStank
// @match        https://steamcommunity.com/*
// @grant        none
// ==/UserScript==

(function() {
    let links = document.getElementsByClassName('bb_link');
    for (let link of links) {
        if (link.href.includes('linkfilter')) link.href = link.href.split('?url=').pop();
    }
})();
