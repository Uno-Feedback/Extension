/**
 *
 * Implementation of a record widget with various controls.
 *
 * The `onCloseWidget` function is called when the user clicks the close button.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cameraIcon, crossIcon, micIcon, noteIcon, videoCameraIcon } from "../../assets/svg";
import initialVideoElements, { counter, maskStartButton, maskStopButton, maskWrapper, muteStartButton, muteStopButton, muteWrapper, recordingButton, recordWrapper, startRecordButton, stopRecordButton, timerWrapper } from "./video";
import { lang } from "../../shared/langs";
// Widget Element
const widget = document.createElement("div");
// Wrapper Element
const wrapper = document.createElement("div");
// Title Element
const title = document.createElement("p");
// Tabs Wrapper Element
const tabsWrapper = document.createElement("div");
// Close Element
const closeButton = document.createElement("span");
const initialTabs = () => {
    // Tab Element
    const tab = document.createElement("div");
    tab.classList.add("uno-tab");
    // Icon Element
    const icon = document.createElement("span");
    icon.classList.add("uno-tab-icon");
    // Text Element
    const text = document.createElement("span");
    text.classList.add("uno-tab-text");
    const tabs = [
        { title: lang.en.widget.video, icon: videoCameraIcon },
        { title: lang.en.widget.image, icon: cameraIcon },
        { title: lang.en.widget.voice, icon: micIcon },
        { title: lang.en.widget.note, icon: noteIcon }
    ];
    tabs.forEach((tabInfo, index) => {
        const cloneTab = tab.cloneNode(true);
        if (index === 0)
            cloneTab.classList.add("active");
        const cloneIcon = icon.cloneNode(true);
        const cloneText = text.cloneNode(true);
        cloneIcon.innerHTML = tabInfo.icon;
        cloneText.innerText = tabInfo.title;
        cloneTab.appendChild(cloneIcon);
        cloneTab.appendChild(cloneText);
        tabsWrapper.appendChild(cloneTab);
    });
};
const initialInnerElements = () => {
    // Widget
    widget.setAttribute("id", "uno-widget");
    widget.classList.add("uno-widget");
    // Title
    title.classList.add("uno-widget-title");
    title.innerText = lang.en.widget.title;
    widget.appendChild(title);
    // Tabs
    tabsWrapper.classList.add("uno-tabs-wrapper");
    initialTabs();
    widget.appendChild(tabsWrapper);
    // Close Element
    closeButton.classList.add("uno-close");
    closeButton.innerHTML = crossIcon;
    widget.appendChild(closeButton);
    // Wrapper
    wrapper.classList.add("uno-tab-content");
    widget.appendChild(wrapper);
    // Initial Video Elements
    initialVideoElements(wrapper);
};
const appendRecordWrapperToBody = () => new Promise(resolve => {
    initialInnerElements();
    document.body.appendChild(widget);
    resolve(counter);
});
export const openRecordWidget = ({ onStartRecord, onStopRecord, onStartMask, onStopMask, onStartMute, onStopMute, onCloseWidget }) => __awaiter(void 0, void 0, void 0, function* () {
    startRecordButton.onclick = () => {
        onStartRecord(true);
    };
    stopRecordButton.onclick = () => {
        onStopRecord(true);
        resetWidget();
    };
    maskStartButton.onclick = () => {
        onStartMask(true);
        maskStartButton.remove();
        maskWrapper.appendChild(maskStopButton);
    };
    maskStopButton.onclick = () => {
        onStopMask(true);
        maskStopButton.remove();
        maskWrapper.appendChild(maskStartButton);
    };
    muteStartButton.onclick = () => {
        onStartMute(true);
        muteStartButton.remove();
        muteWrapper.appendChild(muteStopButton);
    };
    muteStopButton.onclick = () => {
        onStopMute(true);
        muteStopButton.remove();
        muteWrapper.appendChild(muteStartButton);
    };
    closeButton.onclick = () => {
        onCloseWidget(true);
        closeRecordWidget();
    };
    return yield appendRecordWrapperToBody().then(response => response);
});
/* todo: find better name for this fn */
export const checkRecordState = (recordIsStarted) => {
    if (!recordIsStarted)
        return;
    startRecordButton.remove();
    recordWrapper.appendChild(stopRecordButton);
    recordingButton.style.display = "inline";
    widget.classList.add("recording");
};
export const resetWidget = () => {
    stopRecordButton.remove();
    recordWrapper.appendChild(startRecordButton);
    recordingButton.style.display = "";
    setTimeout(() => {
        widget.classList.remove("recording");
    }, 500);
};
export const closeRecordWidget = () => {
    widget.remove();
    wrapper.remove();
    timerWrapper.remove();
    counter.remove();
    closeButton.remove();
    muteWrapper.remove();
    muteStartButton.remove();
    muteStopButton.remove();
    maskWrapper.remove();
    maskStartButton.remove();
    maskStopButton.remove();
    recordWrapper.remove();
    recordingButton.remove();
    startRecordButton.remove();
    stopRecordButton.remove();
    tabsWrapper.innerHTML = "";
    tabsWrapper.remove();
    title.remove();
    recordingButton.style.display = "";
};
