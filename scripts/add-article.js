chrome.storage.sync.get(["rod-articles"], (res) => {
  res.push(chrome.tabs.url);
  chrome.storage.sync.set({ rod_articles: res });
});
