"use strict";
/**
 * This file contains a function for sending a request.
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
// Import necessary types from the "type" module.
const states_1 = require("../../shared/states");
/**
 * Function to send a request along with recorded audio file and form values.
 *
 * @param recordedBlob - The recorded audio blob to be sent.
 * @param fileName - The name of the audio file.
 * @param values - Form values containing user input.
 * @returns response - A promise containing the JSON response from the server.
 */
const request = (recordedBlob, fileName, values) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a File instance from the recordedBlob
    const file = new File([recordedBlob], fileName);
    // Create a FormData instance to send data to the server
    const formData = new FormData();
    // Construct the description object
    const description = {
        FullName: states_1.default.user.fullName,
        Subject: values["subject"],
        Description: values["description"],
        Type: values["type"],
        Priority: values["priority"],
        apiKey: states_1.default.subscriptionData.apiKey
    };
    // Append the audio file and description to the FormData
    formData.append("File", file, `${fileName}.webm`);
    formData.append("Description", JSON.stringify(description));
    // Send the request using the fetch API
    const response = yield fetch(states_1.default.subscriptionData.requestUrl, {
        method: "POST",
        body: formData
    });
    // Parse and return the JSON response from the server
    return response.json();
});
// Export the request function as the default export
exports.default = request;
