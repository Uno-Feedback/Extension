var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AUDIO_SAMPLE_SIZE, MAX_FRAME_RATE, AUDIO_CHANNEL_COUNT } from "../../shared/constants";
import Observable from "../observable/observable";
import videoPreview from "../video-preview/video-preview";
class MediaStreamRecorder {
    constructor(options) {
        var _a, _b, _c;
        // Start recording function
        this.startRecording = (stream) => __awaiter(this, void 0, void 0, function* () {
            // Create a media recorder
            const recorder = new MediaRecorder(stream);
            // The stream data is stored in this array
            console.info("[uno-js] Stream data is stored in this array.");
            let data = [];
            // Push frames to array
            console.info("[uno-js] Pushing frames to array.");
            recorder.ondataavailable = event => data === null || data === void 0 ? void 0 : data.push(event.data);
            // Start media recorder
            console.info("[uno-js] Starting media recorder...");
            recorder.start();
            // Check if the stream is stopped
            console.info("[uno-js] Checking if stream is stopped...");
            let stopped = new Promise((resolve, reject) => {
                recorder.onstop = resolve;
                recorder.onerror = () => { var _a; return reject(`[uno-js] MediaRecorder error: ${(_a = recorder.onerror) === null || _a === void 0 ? void 0 : _a.name}`); };
                console.info("[uno-js] Stream is stopped.");
            });
            // When stream is stopped, return data
            yield Promise.all([stopped]);
            return data;
        });
        this.renderStream = (stream) => {
            // Check if stream is stopped with the browser button
            stream.getVideoTracks()[0].onended = () => this.stopRecording();
            this.startRecording(stream).then(recordedChunks => {
                const mimeType = this.mimeType;
                // Create Blob and video file
                const recordedBlob = new Blob(recordedChunks, { type: mimeType });
                // Fire observer
                Observable.fire("setRecordState", false);
                Observable.fire("closeWidget");
                // Preview of video file
                videoPreview(recordedBlob);
                // openRequestFormModal(recordedBlob);
                console.info(`[uno-js] Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`);
            });
        };
        // Stop recording function
        this.stopRecording = () => {
            // Stop every track of each stream
            console.info("[uno-js] Stopped recording.");
            if (this.videoStreamState)
                this.videoStreamState.getTracks().forEach(track => track.stop());
            if (this.audioStreamState)
                this.audioStreamState.getTracks().forEach(track => track.stop());
        };
        // Create a mixed stream from display media and user media
        this.createStream = () => __awaiter(this, void 0, void 0, function* () {
            // Get display media
            console.info("[uno-js] Getting display media...");
            this.videoStreamState = yield navigator.mediaDevices
                .getDisplayMedia(this.displayMediaConstraints)
                .then(video => video)
                .catch(() => undefined);
            if (!this.videoStreamState) {
                console.error("[uno-js] Permission or display media not found!");
                return false;
            }
            // Get user media (Just Audio)
            console.info("[uno-js] Getting audio...");
            try {
                this.audioStreamState = yield navigator.mediaDevices.getUserMedia(this.userMediaConstraints);
                // Get the Audio track of this moment
                const audioTrack = this.audioStreamState.getAudioTracks()[0];
                // Add microphone audio to display video
                this.videoStreamState.addTrack(audioTrack);
            }
            catch (_d) {
                // do nothing
                console.error("[uno-js] Microphone or system audio not found!");
            }
            // Return mixed stream
            return this.videoStreamState;
        });
        // Start to get permission
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            // Create recorded chunks and wait for stop
            console.info("[uno-js] Starting recording...");
            return yield this.createStream()
                .then(stream => {
                if (!stream) {
                    console.info("[uno-js] Stream is not created.");
                    return false;
                }
                console.info("[uno-js] Stream is created.");
                this.renderStream(stream);
                return true;
            })
                .catch(error => {
                if (error.name === "NotFoundError") {
                    console.error("[uno-js] Camera or microphone not found. Can't record.");
                }
                else {
                    console.error(error);
                }
            });
        });
        // Declare constraints
        this.displayMediaConstraints = (_a = options === null || options === void 0 ? void 0 : options.displayMediaConstraints) !== null && _a !== void 0 ? _a : { audio: true, video: true };
        this.userMediaConstraints = (_b = options === null || options === void 0 ? void 0 : options.userMediaConstraints) !== null && _b !== void 0 ? _b : {
            audio: {
                sampleSize: AUDIO_SAMPLE_SIZE,
                frameRate: { max: MAX_FRAME_RATE },
                channelCount: AUDIO_CHANNEL_COUNT
            }
        };
        // Declare a mime type
        this.mimeType = (_c = options === null || options === void 0 ? void 0 : options.mimeType) !== null && _c !== void 0 ? _c : "video/webm";
    }
}
export default MediaStreamRecorder;
