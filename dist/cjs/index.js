"use strict";
/**
 * This file is the main entry point for the uno-js library.
 *
 * It provides the following functions:
 *
 * - `initialize`: This function is used to initialize the library. It takes three arguments:
 *   `startButtonId`: The ID of the HTML element that will be used as the start button.
 *   `subscriptionData`: An object that contains the subscription data, such as the request URL and API key.
 *   `options`: An object that contains the user data, such as the full name, email, and avatar.
 *
 * - `startRecord`: This function is to start recording.
 * - `stopRecord`: This function is to stop recording.
 * - `startMask`: This function is to start the screen mask.
 * - `stopMask`: This function is to stop the screen mask.
 * - `startMute`: This function is to start muting the microphone.
 * - `stopMute`: This function is to stop muting the microphone.
 * - `closeWidget`: This function is to close the widget.
 *
 * For more information, please see the [uno-js documentation](https://github.com/Uno-Feedback/UnoJs#readme).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const widget_1 = require("./components/widget");
const screen_mask_1 = require("./components/screen-mask");
const timer_1 = require("./components/timer");
const states_1 = require("./shared/states");
const observable_1 = require("./components/observable");
const auto_secret_1 = require("./components/auto-secret");
const media_stream_recorder_1 = require("./components/media-stream-recorder");
const constants_1 = require("./shared/constants");
/**
 * The UnoJSBuilder class is the main entry point for the uno-js package.
 * It provides methods for starting and stopping recording, as well as for managing the mask and mute features.
 */
class UnoJSBuilder {
    constructor() {
        /**
         Validates the initialization options.
         @param options The initialization options.
         @returns Whether the options are valid.
         */
        this.validateInitialization = (options) => {
            if (!options.subscriptionData) {
                console.error("[uno-js] Subscription data not set.");
                return false;
            }
            if (!options.subscriptionData.requestUrl) {
                console.error("[uno-js] Request url not set.");
                return false;
            }
            if (!options.subscriptionData.requestUrl) {
                console.error("[uno-js] Api key not set.");
                return false;
            }
            if (!options.startButtonId) {
                console.error("[uno-js] Start button not set.");
                return false;
            }
            if (!(options === null || options === void 0 ? void 0 : options.user)) {
                console.error("[uno-js] User data not set.");
                return false;
            }
            if (!(options === null || options === void 0 ? void 0 : options.autoSecretKey))
                console.warn("[uno-js] Auto secret data attribute not set.");
            return true;
        };
        this.startRecord = () => {
            if (!this.screenRecorder)
                return;
            this.screenRecorder
                .start()
                .then(record => {
                if (!record) {
                    (0, widget_1.resetWidget)();
                    return;
                }
                (0, auto_secret_1.startSecret)();
                this.setRecordState(true);
                (0, timer_1.runTimer)(this.timerWrapper, this.observeTime);
                console.info("[uno-js] Record started");
            })
                .catch(error => {
                this.closeWidget();
                this.setRecordState(false);
                console.error(`[uno-js] Error while starting record: ${error}`);
            });
            observable_1.default.subscribe("closeWidget", this.closeWidget);
            observable_1.default.subscribe("setRecordState", this.setRecordState);
        };
        this.stopRecord = () => {
            if (!this.screenRecorder || !this.recordIsStarted)
                return;
            console.info("[uno-js] Record stopped!");
            this.screenRecorder.stopRecording();
            (0, timer_1.stopTimer)();
            this.setRecordState(false);
        };
        this.startMask = () => {
            this.screenMask.start();
            this.maskIsRunning = true;
            console.info("[uno-js] Mask started!");
        };
        this.stopMask = () => {
            if (!this.maskIsRunning)
                return;
            this.screenMask.stop();
            this.maskIsRunning = false;
            console.info("[uno-js] Mask stopped!");
        };
        this.startMute = () => {
            if (this.recordIsStarted)
                return;
            /* todo mute only before start recording */
            this.audio = false;
            console.info("[uno-js] Mute started!");
        };
        this.stopMute = () => {
            this.audio = true;
            console.info("[uno-js] Mute stopped!");
        };
        this.closeWidget = () => {
            this.stopMask();
            this.stopRecord();
            (0, auto_secret_1.endSecret)();
            (0, timer_1.stopTimer)();
            (0, widget_1.closeRecordWidget)();
            console.info("[uno-js] Widget closed!");
        };
        this.setRecordState = (state) => {
            (0, widget_1.checkRecordState)(state);
            this.recordIsStarted = state;
        };
        this.initialize = (options) => {
            var _a, _b;
            if (!this.validateInitialization(options))
                return;
            const startButton = document.getElementById(options.startButtonId);
            // TODO: we should be encapsulated this assignments
            states_1.default.user = options.user;
            states_1.default.autoSecretKey = (_a = options.autoSecretKey) !== null && _a !== void 0 ? _a : undefined;
            states_1.default.subscriptionData = options.subscriptionData;
            (_b = options.videoMaxLength) !== null && _b !== void 0 ? _b : (options.videoMaxLength = options.videoMaxLength);
            this.screenRecorder = new media_stream_recorder_1.default({
                displayMediaConstraints: {
                    audio: this.audio,
                    video: true
                },
                userMediaConstraints: {
                    audio: {
                        sampleSize: constants_1.AUDIO_SAMPLE_SIZE,
                        frameRate: { max: constants_1.MAX_FRAME_RATE },
                        channelCount: constants_1.AUDIO_CHANNEL_COUNT
                    }
                },
                mimeType: "video/webm"
            });
            if (startButton)
                startButton.addEventListener("click", () => {
                    (0, widget_1.openRecordWidget)({
                        onStartRecord: this.startRecord,
                        onStopRecord: this.stopRecord,
                        onStartMask: this.startMask,
                        onStopMask: this.stopMask,
                        onStartMute: this.startMute,
                        onStopMute: this.stopMute,
                        onCloseWidget: this.closeWidget
                    }).then(response => {
                        this.timerWrapper = response;
                    });
                });
            console.info("[uno-js] Package initialized!"); //TODO: after develop these methods should be removed
        };
        this.screenMask = new screen_mask_1.default();
        this.screenRecorder = null;
        this.timerWrapper = null;
        this.audio = true;
        this.maskIsRunning = false;
        this.recordIsStarted = false;
    }
    observeTime({ minutes }) {
        if (minutes === states_1.default.videoMaxLength) {
            this.stopRecord();
        }
    }
}
const unoJS = new UnoJSBuilder();
exports.default = unoJS;
