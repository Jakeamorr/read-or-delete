const list = document.getElementById("articles-list");

chrome.storage.sync.get(["rod_articles"], (res) => {
  if (Object.keys(res).length !== 0) {
    for (index in res.rod_articles) {
      const newListItem = document.createElement("li");
      newListItem.textContent = res.rod_articles[index];
      list.appendChild(newListItem);
    }
  }
});
