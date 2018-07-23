chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == "runContentScript"){
      chrome.tabs.executeScript({file: 'jquery.js'},function() {
        chrome.tabs.executeScript({file: 'addCyberButtons.js'});
      });
    }
 });