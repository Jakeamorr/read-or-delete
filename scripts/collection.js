const list = document.getElementById("articles-list");
const clearButton = document.getElementById("clear-articles-btn");

chrome.storage.sync.get(["rod_articles"], (res) => {
  // Check if there are any articles
  if (Object.keys(res.rod_articles).length !== 0) {
    // Remove placeholder text
    list.firstElementChild.remove();
    // Iterate through articles and add them to the list
    for (index in res.rod_articles) {
      // Create link and place in list element
      const newListItem = document.createElement("li");
      const newLink = document.createElement("a");
      newLink.setAttribute("href", res.rod_articles[index]);
      newLink.textContent = res.rod_articles[index];
      newListItem.appendChild(newLink);
      list.appendChild(newListItem);
    }
  }
});

clearButton.addEventListener("click", () => {
  // Remove all articles
  chrome.storage.sync.get(["rod_articles"], (res) => {
    res.rod_articles = [];
    chrome.storage.sync.set({ rod_articles: res.rod_articles });
  });

  // Replace placeholder text after clearling list
  list.appendChild("Add new articles here...");
});
