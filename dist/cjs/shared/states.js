"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const optionsState = {
    user: {
        fullName: "",
        email: "",
        avatar: ""
    },
    subscriptionData: {
        apiKey: "",
        requestUrl: ""
    },
    startButtonId: "",
    videoMaxLength: constants_1.MAX_VIDEO_LENGTH
};
exports.default = optionsState;
