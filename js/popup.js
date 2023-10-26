const recordButton = document.getElementById("record-button");
console.log(recordButton);
recordButton.onclick = function () {
  recordButton.classList.add("record-started");
  recordButton.innerHTML = "Recording...";
  chrome.tabs.getSelected(null, function (tab) {
    chrome.tabs.executeScript(tab.id, {
      file: "./js/main.js",
    });
    chrome.tabs.insertCSS(tab.id, {
      file: "./css/main.css",
    });
  });
};
