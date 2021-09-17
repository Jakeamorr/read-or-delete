// This file will be moved to a service worker later
// When the extension is installed for the first time open a tab of the empty collections page
chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("collection.html");
  let tab = await chrome.tabs.create({ url });

  chrome.storage.sync.set({ articles: ["a", "b"] });
  chrome.storage.sync.get(["articles"], (res) => {
    console.log("Articles value is: " + res.articles);
  });

  chrome.storage.sync.set({ articles: ["a", "b", "c"] });

  chrome.storage.sync.get(["articles"], (res) => {
    console.log("Articles value is: " + res.articles);
  });

  console.log(`Created new tab ${tab.id}`);
});

// chrome.action.onClicked.addListener(async (tab) => {
//   tab.url;
//   let articles = chrome.storage.sync.get("articles");
//   articles.push(tab.url);
//   chrome.storage.sync.set({ articles });
//   console.log(articles);
// });
