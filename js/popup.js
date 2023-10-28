/* Information Form */
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  chrome.storage.sync.set({ [name]: value });
};
const fullName = document.getElementById("fullName");
const autoSecretKey = document.getElementById("autoSecretKey");
const requestUrl = document.getElementById("requestUrl");
const apiKey = document.getElementById("apiKey");

const formInputs = [fullName, autoSecretKey, requestUrl, apiKey];

chrome.storage.sync.get(null, function (items) {
  if (Object.keys(items).length === 0) return;
  Object.keys(items).forEach((item) => {
    const input = formInputs.find((input) => input.name === item);
    input.value = items[item];
  });
});
formInputs.forEach(function (input) {
  input.addEventListener("change", handleChange);
});
/* Form Validation */
const handleValidation = function () {
  let error = false;
  formInputs.forEach(function (input) {
    let messageElement = input.nextElementSibling;
    if (!input.value) {
      error = true;
      messageElement.innerText = "Required!";
    } else messageElement.innerText = "";
  });
  return error;
};
/* Record Button */
const recordButton = document.getElementById("record-button");

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(queryOptions);
  return tabs[0];
}

recordButton.onclick = function () {
  if (handleValidation()) return;
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
