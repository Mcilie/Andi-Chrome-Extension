// background.js
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set(
    { url: "https://andisearch.com/nav/?query={searchTerms}" },
    function () {
      console.log("Default search engine set to Andi Search.");
    }
  );
});
