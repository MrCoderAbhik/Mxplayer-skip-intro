// ==UserScript==
// @name         MXPlayer Skip Intro
// @namespace    https://www.mxplayer.in/
// @author       MrCoderAbhi
// @description  Auto-skip intro on supported MxPlayer series
// @version      0.1.5
// @match      https://www.mxplayer.in/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


// Define config variables

// Variable in which the time of the last activation of the button is stored
var time_pressed = null;
// Interval in which the button is searched for
var refresh_interval = 800;
// Time interval that is waited before the button can be pressed again
var guard_interval = 10000;

// MxPlayer css variables
//var buttonname = document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-active > div.skip-intro-play-next-container.active > div.skip-container > div > div');
//1080p Selector
//#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-active > div.player-ui.show > div.right-actions > div:nth-child(2) > span > ul > li.list-item.list-item-selected
setInterval(function () {
    'use strict';
      if (document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-active > div.skip-intro-play-next-container.active > div.skip-container > div > div') !== null) {
          console.log("queryExists");
       document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-active > div.skip-intro-play-next-container.active > div.skip-container > div > div').click();
      }
else {
    //It should be null
    // console.log(document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-active > div.skip-intro-play-next-container.active > div.skip-container > div > div'));
    }
    }, refresh_interval);
setInterval(function () {
    'use strict';
      if (document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-inactive > div.player-ui > div.right-actions > div:nth-child(2) > span > ul > li:nth-child(5)') !== null) {
          console.log("queryExists for 1080p");
       document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-inactive > div.player-ui > div.right-actions > div:nth-child(2) > span > ul > li:nth-child(5)').click();
      }
else {
    //It should be null
    //console.log(document.querySelector('#main > div > div.bd-header > div.bd-player > div > div > div.player-overlay.user-inactive > div.player-ui > div.right-actions > div:nth-child(2) > span > ul > li:nth-child(5)'));
    }
    }, refresh_interval);
