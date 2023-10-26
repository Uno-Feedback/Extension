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
      files: ["./js/lib/uno-js/bundle.js"],
    });
    chrome.scripting.insertCSS({
      files: ["./js/lib/uno-js/css/index.css"],
      target: { tabId: tab.id },
    });
  });
};
