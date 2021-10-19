// This file will be moved to a service worker later
// When the extension is installed for the first time open a tab of the empty collections page
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("collection.html");
  let tab = await chrome.tabs.create({ url });

  // Set the property for storing articles on install if not already present in sync storage
  chrome.storage.sync.get(["rod_articles"], (res) => {
    if (Object.keys(res).length === 0)
      chrome.storage.sync.set({ rod_articles: [] });
  });

  console.log(`Created new tab ${tab.id}`);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.sync.get(["rod_articles"], (res) => {
    res.rod_articles.push(tab.url);
    chrome.storage.sync.set({ rod_articles: res.rod_articles });
  });

  console.log(`added ${tab.url} to articles list`);
});
