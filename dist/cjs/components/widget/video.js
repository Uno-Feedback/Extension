"use strict";
/**
 *
 * Implementation of a record video with various controls (start/stop record, mute/unmute, mask/unmask).
 *
 * The `openRecordWidget()` function creates a new record widget and opens it.\
 * The `onStartRecord` function is called when the user clicks the start record button.\
 * The `onStopRecord` function is called when the user clicks the stop record button.\
 * The `onStartMask` function is called when the user clicks the start mask button.\
 * The `onStopMask` function is called when the user clicks the stop mask button.\
 * The `onStartMute` function is called when the user clicks the start mute button.\
 * The `onStopMute` function is called when the user clicks the stop mute button.\
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskStopButton = exports.maskStartButton = exports.maskWrapper = exports.muteStopButton = exports.muteStartButton = exports.muteWrapper = exports.recordingButton = exports.stopRecordButton = exports.startRecordButton = exports.recordWrapper = exports.counter = exports.timerWrapper = void 0;
// Timer element
const svg_1 = require("../../assets/svg");
// Timer Elements
exports.timerWrapper = document.createElement("div");
exports.counter = document.createElement("span");
// Icons Wrapper
const iconsWrapper = document.createElement("div");
// Record Elements
exports.recordWrapper = document.createElement("div");
exports.startRecordButton = document.createElement("span");
exports.stopRecordButton = document.createElement("span");
exports.recordingButton = document.createElement("span");
// Mic Elements
exports.muteWrapper = document.createElement("div");
exports.muteStartButton = document.createElement("span");
exports.muteStopButton = document.createElement("span");
// Mask Elements
exports.maskWrapper = document.createElement("div");
exports.maskStartButton = document.createElement("span");
exports.maskStopButton = document.createElement("span");
const initialVideoElements = (wrapper) => {
    // Timer elements
    exports.timerWrapper.classList.add("uno-timer");
    wrapper.appendChild(exports.timerWrapper);
    exports.counter.classList.add("uno-timer-counter");
    exports.counter.innerText = "00:00";
    exports.timerWrapper.appendChild(exports.counter);
    // Icons Wrapper
    iconsWrapper.classList.add("uno-icons-wrapper");
    wrapper.appendChild(iconsWrapper);
    // Record Elements
    exports.recordWrapper.classList.add("uno-record");
    iconsWrapper.appendChild(exports.recordWrapper);
    exports.startRecordButton.classList.add("uno-record-start");
    exports.startRecordButton.innerHTML = svg_1.recordIcon;
    exports.recordWrapper.appendChild(exports.startRecordButton);
    exports.stopRecordButton.classList.add("uno-record-stop");
    exports.stopRecordButton.innerHTML = svg_1.stopRecordIcon;
    exports.recordingButton.classList.add("uno-record-recording");
    exports.recordingButton.innerHTML = svg_1.recordingIcon;
    exports.timerWrapper.appendChild(exports.recordingButton);
    // Mic Elements
    exports.muteWrapper.classList.add("uno-mute");
    iconsWrapper.appendChild(exports.muteWrapper);
    exports.muteStartButton.classList.add("uno-mute-start");
    exports.muteStartButton.innerHTML = svg_1.muteIcon;
    exports.muteWrapper.appendChild(exports.muteStartButton);
    exports.muteStopButton.classList.add("uno-mute-stop");
    exports.muteStopButton.innerHTML = svg_1.unmuteIcon;
    // Mask Elements
    exports.maskWrapper.classList.add("uno-mask");
    iconsWrapper.appendChild(exports.maskWrapper);
    exports.maskStartButton.classList.add("uno-mask-start");
    exports.maskStartButton.innerHTML = svg_1.maskIcon;
    exports.maskWrapper.appendChild(exports.maskStartButton);
    exports.maskStopButton.classList.add("uno-mask-stop");
    exports.maskStopButton.innerHTML = svg_1.stopMaskIcon;
};
exports.default = initialVideoElements;
