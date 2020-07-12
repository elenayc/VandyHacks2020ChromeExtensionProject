(function () {
    'use strict';
     var alarmName = 'remindme';

     // Method handling when the browser starts
   function handleStartup() {

     console.log('inside the handleStartup');

     var time = document.getElementById('time').value
     chrome.alarms.create("remind-me", {
         when: Date.now() + time, delayInMinutes: 0.1, periodInMinutes: 0.1});
   }});
