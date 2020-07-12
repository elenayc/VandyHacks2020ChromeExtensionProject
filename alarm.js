(function () {
    'use strict';
     var alarmName = 'remindme';

     // Method handling when the browser starts
   function handleStartup() {

     console.log('inside the handleStartup');

     var time = document.getElementById('time').value
     chrome.alarms.create("remind-me", {
         when: Date.now() + time, delayInMinutes: 0.1, periodInMinutes: 0.1});
   }
   (function () {
       'use strict';
        var alarmName = 'remindme';

        function checkAlarm(callback) {
          chrome.alarms.getAll(function(alarms) {
            var hasAlarm = alarms.some(function(a) {
              return a.name == alarmName;
            });
            var newLabel;
            if (hasAlarm) {
              newLabel = 'Cancel alarm';
            } else {
              newLabel = 'Activate alarm';
            }
            document.getElementById('toggleAlarm').innerText = newLabel;
            if (callback) callback(hasAlarm);
          })
        }

        function createAlarm() {
          var time = document.getElementById('time').value
          chrome.alarms.create(alarmName, {
            when: Date.now() + time, delayInMinutes: 0.1, periodInMinutes: 0.1});
        }

        function cancelAlarm() {
          chrome.alarms.clear(alarmName);
        }

        function doToggleAlarm() {
          checkAlarm( function(hasAlarm) {
            if (hasAlarm) {
              cancelAlarm();
            } else {
              createAlarm();
            }
            checkAlarm();
          });
        }
       $$('#toggleAlarm').addEventListener('click', doToggleAlarm);
       checkAlarm();
     })();

 });
