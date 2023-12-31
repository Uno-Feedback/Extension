import { MAX_VIDEO_LENGTH } from "./constants";
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
    videoMaxLength: MAX_VIDEO_LENGTH,
    isExtension: false
};
export default optionsState;
