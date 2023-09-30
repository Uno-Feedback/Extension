"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeRecordWidget = exports.resetWidget = exports.checkRecordState = exports.openRecordWidget = void 0;
const svg_1 = require("../../assets/svg");
const video_1 = require("./video");
const langs_1 = require("../../shared/langs");
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
        { title: langs_1.lang.en.widget.video, icon: svg_1.videoCameraIcon },
        { title: langs_1.lang.en.widget.image, icon: svg_1.cameraIcon },
        { title: langs_1.lang.en.widget.voice, icon: svg_1.micIcon },
        { title: langs_1.lang.en.widget.note, icon: svg_1.noteIcon }
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
    title.innerText = langs_1.lang.en.widget.title;
    widget.appendChild(title);
    // Tabs
    tabsWrapper.classList.add("uno-tabs-wrapper");
    initialTabs();
    widget.appendChild(tabsWrapper);
    // Close Element
    closeButton.classList.add("uno-close");
    closeButton.innerHTML = svg_1.crossIcon;
    widget.appendChild(closeButton);
    // Wrapper
    wrapper.classList.add("uno-tab-content");
    widget.appendChild(wrapper);
    // Initial Video Elements
    (0, video_1.default)(wrapper);
};
const appendRecordWrapperToBody = () => new Promise(resolve => {
    initialInnerElements();
    document.body.appendChild(widget);
    resolve(video_1.counter);
});
const openRecordWidget = ({ onStartRecord, onStopRecord, onStartMask, onStopMask, onStartMute, onStopMute, onCloseWidget }) => __awaiter(void 0, void 0, void 0, function* () {
    video_1.startRecordButton.onclick = () => {
        onStartRecord(true);
    };
    video_1.stopRecordButton.onclick = () => {
        onStopRecord(true);
        (0, exports.resetWidget)();
    };
    video_1.maskStartButton.onclick = () => {
        onStartMask(true);
        video_1.maskStartButton.remove();
        video_1.maskWrapper.appendChild(video_1.maskStopButton);
    };
    video_1.maskStopButton.onclick = () => {
        onStopMask(true);
        video_1.maskStopButton.remove();
        video_1.maskWrapper.appendChild(video_1.maskStartButton);
    };
    video_1.muteStartButton.onclick = () => {
        onStartMute(true);
        video_1.muteStartButton.remove();
        video_1.muteWrapper.appendChild(video_1.muteStopButton);
    };
    video_1.muteStopButton.onclick = () => {
        onStopMute(true);
        video_1.muteStopButton.remove();
        video_1.muteWrapper.appendChild(video_1.muteStartButton);
    };
    closeButton.onclick = () => {
        onCloseWidget(true);
        (0, exports.closeRecordWidget)();
    };
    return yield appendRecordWrapperToBody().then(response => response);
});
exports.openRecordWidget = openRecordWidget;
/* todo: find better name for this fn */
const checkRecordState = (recordIsStarted) => {
    if (!recordIsStarted)
        return;
    video_1.startRecordButton.remove();
    video_1.recordWrapper.appendChild(video_1.stopRecordButton);
    video_1.recordingButton.style.display = "inline";
    widget.classList.add("recording");
};
exports.checkRecordState = checkRecordState;
const resetWidget = () => {
    video_1.stopRecordButton.remove();
    video_1.recordWrapper.appendChild(video_1.startRecordButton);
    video_1.recordingButton.style.display = "";
    setTimeout(() => {
        widget.classList.remove("recording");
    }, 500);
};
exports.resetWidget = resetWidget;
const closeRecordWidget = () => {
    widget.remove();
    wrapper.remove();
    video_1.timerWrapper.remove();
    video_1.counter.remove();
    closeButton.remove();
    video_1.muteWrapper.remove();
    video_1.muteStartButton.remove();
    video_1.muteStopButton.remove();
    video_1.maskWrapper.remove();
    video_1.maskStartButton.remove();
    video_1.maskStopButton.remove();
    video_1.recordWrapper.remove();
    video_1.recordingButton.remove();
    video_1.startRecordButton.remove();
    video_1.stopRecordButton.remove();
    tabsWrapper.innerHTML = "";
    tabsWrapper.remove();
    title.remove();
    video_1.recordingButton.style.display = "";
};
exports.closeRecordWidget = closeRecordWidget;
