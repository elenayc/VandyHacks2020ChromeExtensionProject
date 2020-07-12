console.log("background works");
var waterNotification = "water-notification";

chrome.runtime.onStartup.addListener(function() {
  function launch() {
    chrome.app.window.create('index.html',{
     bounds:{width:620, heightL:500}
    });
  }

  // Add a method when a alarm is triggerd
  browser.alarms.onAlarm.addListener(handleAlarm);


  // Create the basic notification
function createNoti(){

  chrome.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/icon-96.png"),
    "title": "Time for a break!",
    "message": "Have you had water recently?"
  });

  chrome.runtime.onStartup.addListener(launch);
  chrome.alarms.onAlarm.addListener(function( alarm ) {
    chrome.storage.local.get(dbName, showNotification);
  });

  // when the alarm is triggerd print the alarm name and create the notification call
  function handleAlarm(alarmInfo) {
    console.log("on alarm: " + alarmInfo.name);
  	createNoti();
  }

}

  chrome.notifications.onClicked.addListener(function() {
  launch();
  });
});
