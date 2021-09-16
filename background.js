// This file will be moved to a service worker later
// When the extension is installed for the first time open a tab of the empty collections page
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("collection.html");
  let tab = await chrome.tabs.create({ url });

  console.log(`Created new tab ${tab.id}`);
});
