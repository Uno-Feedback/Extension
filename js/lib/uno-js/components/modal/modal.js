/**
 * This file contains functions for creating and managing a modal dialog.
 * The `initialModal()` function creates a new modal dialog and returns a promise that resolves to the content element of the dialog.
 * The `showModal()` function shows the modal dialog.
 * The `hideModal()` function hides the modal dialog.
 * */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { crossIcon } from "../../assets/svg/svg";
/**
 * Create the necessary HTML elements for the modal.
 */
const fade = document.createElement("div");
const modal = document.createElement("div");
const header = document.createElement("div");
const closeButton = document.createElement("span");
const content = document.createElement("div");
const body = document.querySelector("body");
/**
 * Initialize the initial inner elements of the modal.
 *
 * @param title - The title element for the modal.
 * @returns contet - The content element of the modal.
 */
const initialInnerElements = (title) => {
    // Fade
    fade.classList.add("uno-modal-fade");
    body.appendChild(fade);
    // Modal
    modal.classList.add("uno-modal");
    modal.setAttribute("id", "uno-modal");
    fade.appendChild(modal);
    // Header
    header.classList.add("uno-modal-header");
    modal.appendChild(header);
    // Title
    header.appendChild(title);
    // Close Button
    closeButton.setAttribute("id", "uno-modal-close");
    closeButton.classList.add("uno-modal-close");
    closeButton.innerHTML = crossIcon;
    header.appendChild(closeButton);
    // Content
    content.classList.add("uno-modal-content");
    modal.appendChild(content);
    return content;
};
export const createTitle = (text) => {
    const title = document.createElement("h1");
    title.classList.add("uno-modal-title");
    title.innerHTML = text;
    return title;
};
/**
 * Initialize the modal and set up the close capability.
 *
 * @param title - The title element for the modal.
 * @param onCloseCallback - Callback function to be called when the modal is closed.
 * @returns prmise - A promise that resolves to the content element of the modal.
 */
const initialModal = (title, onCloseCallback) => __awaiter(void 0, void 0, void 0, function* () {
    // Close modal
    closeButton.onclick = () => {
        onCloseCallback();
        hideModal();
    };
    hideModal();
    return new Promise(resolve => resolve(initialInnerElements(title)));
});
/**
 * Show the modal by adjusting styles.
 */
export const showModal = () => {
    body.style.overflow = "hidden";
    fade.style.display = "block";
};
/**
 * Hide the modal and remove associated elements.
 */
export const hideModal = () => {
    body.style.overflow = "";
    fade.remove();
    modal.remove();
    header.innerHTML = "";
    header.remove();
    closeButton.remove();
    content.innerHTML = "";
    content.remove();
};
// Export the initialModal function as the default export.
export default initialModal;
