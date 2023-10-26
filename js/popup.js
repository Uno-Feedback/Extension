const recordButton = document.getElementById("record-button");
async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);
  return tabs[0];
}
recordButton.onclick = function () {
  recordButton.classList.add("record-started");
  recordButton.innerHTML = "Recording...";
  getCurrentTab().then((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./js/main.js"],
    });
    chrome.scripting.insertCSS({
      files: ["./css/main.css"],
      target: { tabId: tab.id },
    });
  });
};
