(() => {
  /* Start: Add for Initialize */
  const startButton = document.createElement("button");
  startButton.setAttribute("id", "start-btn");
  startButton.style.position = "absolute";
  startButton.style.display = "none";
  document.body.appendChild(startButton);
  /* End: Add for Initialize */
  // js/lib/uno-js/assets/svg/index.js
  var videoCameraIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.79C2 4.63 3.05 3.58 6.21 3.58H12.53C15.69 3.58 16.74 4.63 16.74 7.79V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z" stroke="#15171A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.52 17.1L16.74 15.15V8.83999L19.52 6.88999C20.88 5.93999 22 6.51999 22 8.18999V15.81C22 17.48 20.88 18.06 19.52 17.1Z" stroke="#15171A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke="#15171A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var cameraIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.76002 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99C21.89 7.83 20.17 6 18 6C17.39 6 16.83 5.65 16.55 5.11L15.83 3.66C15.37 2.75 14.17 2 13.15 2H10.86C9.83001 2 8.63001 2.75 8.17001 3.66L7.45001 5.11C7.17001 5.65 6.61002 6 6.00002 6C3.83001 6 2.11001 7.83 2.25001 9.99L2.77001 18.25C2.89001 20.31 4.00002 22 6.76002 22Z" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 8H13.5" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var micIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2 8.55001C11.73 8.41001 12.28 8.41001 12.81 8.55001" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.09998 9.65002C5.09998 9.23581 4.76419 8.90002 4.34998 8.90002C3.93576 8.90002 3.59998 9.23581 3.59998 9.65002V11.35C3.59998 15.7315 6.96622 19.3367 11.25 19.7169V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V19.7169C17.0338 19.3367 20.4 15.7315 20.4 11.35V9.65002C20.4 9.23581 20.0642 8.90002 19.65 8.90002C19.2358 8.90002 18.9 9.23581 18.9 9.65002V11.35C18.9 15.1539 15.8089 18.2468 12.0058 18.25C12.0039 18.25 12.002 18.25 12 18.25C11.998 18.25 11.9961 18.25 11.9941 18.25C8.19103 18.2469 5.09998 15.1539 5.09998 11.35V9.65002Z" fill="#15171A" fill-opacity="0.6"/></svg>';
  var noteIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.75H9C6.57397 2.75 5.07086 3.2398 4.15533 4.15533C3.2398 5.07086 2.75 6.57397 2.75 9V15C2.75 17.426 3.2398 18.9291 4.15533 19.8447C5.07086 20.7602 6.57397 21.25 9 21.25H15C17.426 21.25 18.9291 20.7602 19.8447 19.8447C20.7602 18.9291 21.25 17.426 21.25 15V10.75H18C16.4585 10.75 15.1921 10.5028 14.3447 9.65533C13.4972 8.80791 13.25 7.54155 13.25 6V2.75ZM22.5303 9.46967C22.5437 9.48308 22.5566 9.4969 22.5688 9.51112C22.6801 9.6405 22.7421 9.80184 22.7493 9.96741C22.7499 9.98018 22.7501 9.99297 22.75 10.0058M22.75 10.0058V15C22.75 17.574 22.2398 19.5709 20.9053 20.9053C19.5709 22.2398 17.574 22.75 15 22.75H9C6.42603 22.75 4.42914 22.2398 3.09467 20.9053C1.7602 19.5709 1.25 17.574 1.25 15V9C1.25 6.42603 1.7602 4.42914 3.09467 3.09467C4.42914 1.7602 6.42603 1.25 9 1.25H13.9941H14C14.0115 1.25 14.023 1.25026 14.0343 1.25077M14.5307 1.47004L22.5303 9.46967L14.5307 1.47004ZM14.75 6V3.81066L20.1893 9.25H18C16.5415 9.25 15.8079 8.99725 15.4053 8.59467C15.0028 8.19209 14.75 7.45845 14.75 6Z" fill="#15171A" fill-opacity="0.6"/><path d="M7 13H13" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17H11" stroke="#15171A" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var recordIcon =
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M10,0C4.48,0,0,4.48,0,10s4.48,10,10,10,10-4.48,10-10S15.53,0,10,0Zm.03,14.23c-2.34,0-4.23-1.89-4.23-4.23s1.89-4.23,4.23-4.23,4.23,1.89,4.23,4.23-1.89,4.23-4.23,4.23Z" fill="#ef4438"/></svg>';
  var stopRecordIcon =
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M10,0C4.48,0,0,4.48,0,10s4.48,10,10,10,10-4.48,10-10S15.53,0,10,0Zm4.26,12.23c0,1.66-.34,2-2,2H7.8c-1.66,0-2-.34-2-2V7.77c0-1.66,.34-2,2-2h4.46c1.66,0,2,.34,2,2v4.46Z" fill="#ef4438"/></svg>';
  var muteIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.93C6.96001 21.93 2.85001 17.83 2.85001 12.78V10.9C2.85001 10.51 3.17001 10.2 3.55001 10.2C3.93001 10.2 4.25001 10.52 4.25001 10.9V12.78C4.25001 17.05 7.72001 20.52 11.99 20.52C16.26 20.52 19.73 17.05 19.73 12.78V10.9C19.73 10.51 20.05 10.2 20.43 10.2C20.81 10.2 21.13 10.52 21.13 10.9V12.78C21.15 17.83 17.04 21.93 12 21.93Z" fill="#15171A" fill-opacity="0.87"/><path d="M12 2C8.63999 2 5.89999 4.74 5.89999 8.1V12.79C5.89999 16.15 8.63999 18.89 12 18.89C15.36 18.89 18.1 16.15 18.1 12.79V8.1C18.1 4.74 15.36 2 12 2ZM14.18 10.59C14.11 10.86 13.86 11.04 13.59 11.04C13.54 11.04 13.48 11.03 13.43 11.02C12.41 10.74 11.33 10.74 10.31 11.02C9.97999 11.11 9.64999 10.92 9.55999 10.59C9.46999 10.27 9.65999 9.93 9.98999 9.84C11.22 9.5 12.52 9.5 13.75 9.84C14.08 9.93 14.27 10.26 14.18 10.59ZM15.03 7.82C14.94 8.07 14.71 8.22 14.46 8.22C14.39 8.22 14.32 8.21 14.25 8.18C12.72 7.62 11.04 7.62 9.50999 8.18C9.18999 8.3 8.83999 8.14 8.71999 7.82C8.60999 7.51 8.76999 7.16 9.08999 7.04C10.89 6.39 12.87 6.39 14.66 7.04C14.98 7.16 15.14 7.51 15.03 7.82Z" fill="#15171A" fill-opacity="0.87"/></svg>';
  var unmuteIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6199 5.72L7.00988 16.33C6.27988 15.34 5.87988 14.13 5.87988 12.82V8.11C5.87988 6.27 6.69988 4.62 7.99988 3.5V7.64C7.99988 8.03 8.31988 8.35 8.69988 8.35C9.08988 8.35 9.40988 8.03 9.40988 7.64V2.57C9.86988 2.34 10.3599 2.18 10.8699 2.09V5.75C10.8699 6.15 11.1899 6.46 11.5799 6.46C11.9699 6.46 12.2899 6.15 12.2899 5.75V2C14.6799 2.11 16.7399 3.61 17.6199 5.72Z" fill="#15171A" fill-opacity="0.87"/><path d="M18.1202 8.88V12.82C18.1202 16.19 15.3702 18.94 12.0002 18.94C11.8202 18.94 11.6402 18.93 11.4602 18.91C11.3802 18.91 11.3002 18.9 11.2302 18.89C11.1002 18.87 10.9702 18.85 10.8502 18.83C10.8002 18.83 10.7602 18.81 10.7002 18.8C10.5602 18.77 10.4202 18.73 10.2902 18.69C10.0702 18.63 9.86016 18.55 9.66016 18.47C9.53016 18.42 9.41016 18.37 9.29016 18.3C9.26016 18.29 9.24016 18.27 9.21016 18.26C9.11016 18.21 9.01016 18.16 8.91016 18.09L18.1202 8.88Z" fill="#15171A" fill-opacity="0.87"/><path d="M21.7502 11V13C21.7502 18.38 17.3802 22.75 12.0002 22.75C9.88018 22.75 7.85018 22.07 6.18018 20.82L7.26018 19.74C8.64018 20.72 10.2802 21.25 12.0002 21.25C16.5502 21.25 20.2502 17.55 20.2502 13V11C20.2502 10.59 20.5902 10.25 21.0002 10.25C21.4102 10.25 21.7502 10.59 21.7502 11Z" fill="#15171A" fill-opacity="0.87"/><path d="M21.7699 2.23C21.4699 1.93 20.9799 1.93 20.6799 2.23L2.22988 20.69C1.92988 20.99 1.92988 21.48 2.22988 21.78C2.37988 21.92 2.56988 22 2.76988 22C2.96988 22 3.15988 21.92 3.30988 21.77L21.7699 3.31C22.0799 3.01 22.0799 2.53 21.7699 2.23Z" fill="#15171A" fill-opacity="0.87"/></svg>';
  var maskIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.65 4.59C16.89 2.99 14.56 2.03 12 2.03C6.50003 2.03 2.03003 6.5 2.03003 12C2.03003 17.5 6.50003 21.97 12 21.97C14.56 21.97 16.89 21.01 18.65 19.41C20.69 17.6 21.97 14.94 21.97 12C21.97 9.06 20.69 6.4 18.65 4.59ZM11.97 16.39C11.95 18.04 10.72 18.44 9.57003 17.98C7.20003 17.03 5.53003 14.71 5.53003 12C5.53003 9.29 7.20003 6.97 9.57003 6.01C10.72 5.55 11.95 5.96 11.97 7.6V16.39Z" fill="#15171A" fill-opacity="0.87"/></svg>';
  var crossIcon =
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2" /><line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2" /></svg>';
  var submitIcon =
    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M14.14,.96L5.11,3.96C-.96,5.99-.96,9.3,5.11,11.32l2.68,.89,.89,2.68c2.02,6.07,5.34,6.07,7.36,0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91Zm.32,5.38l-3.8,3.82c-.15,.15-.34,.22-.53,.22s-.38-.07-.53-.22c-.29-.29-.29-.77,0-1.06l3.8-3.82c.29-.29,.77-.29,1.06,0,.29,.29,.29,.77,0,1.06Z" fill="#fff"/> <rect width="20" height="20" fill="none"/></svg>';
  var recordingIcon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2_1040)"><circle cx="12" cy="12" r="5" fill="#FF5158"/></g><defs><filter id="filter0_d_2_1040" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.154167 0 0 0 0 0.154167 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_1040"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_1040" result="shape"/></filter></defs></svg>';
  var stopMaskIcon =
    '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#5150AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M23.8,13V9.7  c0-5.4-2.2-7.6-7.6-7.6H9.8c-5.4,0-7.6,2.2-7.6,7.6v6.5c0,5.4,2.2,7.6,7.6,7.6H13"/><path fill="none" stroke="#5150AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M22.7,19.3l-1.8,0.6  c-0.5,0.2-0.9,0.5-1,1l-0.6,1.8c-0.5,1.5-2.7,1.5-3.1,0l-2-6.4c-0.4-1.3,0.8-2.5,2.1-2.1l6.5,2C24.2,16.6,24.2,18.8,22.7,19.3z"/><line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" x1="23.8" y1="2.2" x2="2.2" y2="23.8"/><line fill="none" stroke="#5150AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" x1="23.8" y1="2.2" x2="2.2" y2="23.8"/></svg>';

  // js/lib/uno-js/components/widget/video.js
  var timerWrapper = document.createElement("div");
  var counter = document.createElement("span");
  var iconsWrapper = document.createElement("div");
  var recordWrapper = document.createElement("div");
  var startRecordButton = document.createElement("span");
  var stopRecordButton = document.createElement("span");
  var recordingButton = document.createElement("span");
  var muteWrapper = document.createElement("div");
  var muteStartButton = document.createElement("span");
  var muteStopButton = document.createElement("span");
  var maskWrapper = document.createElement("div");
  var maskStartButton = document.createElement("span");
  var maskStopButton = document.createElement("span");
  var initialVideoElements = (wrapper2) => {
    timerWrapper.classList.add("uno-timer");
    wrapper2.appendChild(timerWrapper);
    counter.classList.add("uno-timer-counter");
    counter.innerText = "00:00";
    timerWrapper.appendChild(counter);
    iconsWrapper.classList.add("uno-icons-wrapper");
    wrapper2.appendChild(iconsWrapper);
    recordWrapper.classList.add("uno-record");
    iconsWrapper.appendChild(recordWrapper);
    startRecordButton.classList.add("uno-record-start");
    startRecordButton.innerHTML = recordIcon;
    recordWrapper.appendChild(startRecordButton);
    stopRecordButton.classList.add("uno-record-stop");
    stopRecordButton.innerHTML = stopRecordIcon;
    recordingButton.classList.add("uno-record-recording");
    recordingButton.innerHTML = recordingIcon;
    timerWrapper.appendChild(recordingButton);
    muteWrapper.classList.add("uno-mute");
    iconsWrapper.appendChild(muteWrapper);
    muteStartButton.classList.add("uno-mute-start");
    muteStartButton.innerHTML = muteIcon;
    muteWrapper.appendChild(muteStartButton);
    muteStopButton.classList.add("uno-mute-stop");
    muteStopButton.innerHTML = unmuteIcon;
    maskWrapper.classList.add("uno-mask");
    iconsWrapper.appendChild(maskWrapper);
    maskStartButton.classList.add("uno-mask-start");
    maskStartButton.innerHTML = maskIcon;
    maskWrapper.appendChild(maskStartButton);
    maskStopButton.classList.add("uno-mask-stop");
    maskStopButton.innerHTML = stopMaskIcon;
  };
  var video_default = initialVideoElements;

  // js/lib/uno-js/shared/langs.js
  var lang = {
    fa: {
      requestForm: {
        title:
          "\u0627\u0631\u0633\u0627\u0644 \u0628\u0627\u0632\u062E\u0648\u0631\u062F",
        submit:
          "\u0627\u0631\u0633\u0627\u0644 \u0628\u0627\u0632\u062E\u0648\u0631\u062F",
        sender: "\u0641\u0631\u0633\u062A\u0646\u062F\u0647",
        subject: "\u0645\u0648\u0636\u0648\u0639",
        description: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A",
        type: {
          bug: "\u0628\u0627\u06AF",
          feature:
            "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0648\u06CC\u0698\u06AF\u06CC",
          report: "\u06AF\u0632\u0627\u0631\u0634",
        },
        priority: {
          low: "\u06A9\u0645",
          medium: "\u0645\u062A\u0648\u0633\u0637",
          high: "\u0632\u06CC\u0627\u062F",
        },
      },
    },
    en: {
      widget: {
        title: "Report Your Issue",
        video: "video",
        image: "image",
        voice: "voice",
        note: "note",
      },
      videoPreview: {
        title: "Preview Video",
        confirm: "Confirm",
      },
      reportForm: {
        title: "Report Your Issue",
        type: {
          label: "Type",
          bug: "Uno-Bug",
          report: "Uno-Report",
          feature: "feature",
        },
        priority: {
          label: "Priority",
          low: "low",
          medium: "medium",
          high: "high",
        },
        fileTitle: "Content File",
        subject: "Subject",
        description: "Description",
        errorMessage: "is required",
        info: {
          url: "URL",
          captured: "Captured",
          deviceInfo: "Device Information",
          OS: "OS",
          windowSize: "Window Size",
          info: "Info",
          network: "Network",
          console: "Console",
        },
        submit: "Send",
        sendTo: {
          label: "Send to",
        },
      },
    },
  };

  // js/lib/uno-js/shared/constants.js
  var MAX_VIDEO_LENGTH = 1;
  var AUDIO_SAMPLE_SIZE = 100;
  var MAX_FRAME_RATE = 30;
  var AUDIO_CHANNEL_COUNT = 2;

  // js/lib/uno-js/shared/states.js
  var optionsState = {
    user: {
      fullName: "",
      email: "",
      avatar: "",
    },
    subscriptionData: {
      apiKey: "",
      requestUrl: "",
    },
    startButtonId: "",
    videoMaxLength: MAX_VIDEO_LENGTH,
    isExtension: false,
  };
  var states_default = optionsState;

  // js/lib/uno-js/components/widget/index.js
  var __awaiter = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var widget = document.createElement("div");
  var wrapper = document.createElement("div");
  var title = document.createElement("p");
  var tabsWrapper = document.createElement("div");
  var closeButton = document.createElement("span");
  var initialTabs = () => {
    const tab = document.createElement("div");
    tab.classList.add("uno-tab");
    const icon = document.createElement("span");
    icon.classList.add("uno-tab-icon");
    const text = document.createElement("span");
    text.classList.add("uno-tab-text");
    const tabs = [
      { title: lang.en.widget.video, icon: videoCameraIcon },
      { title: lang.en.widget.image, icon: cameraIcon },
      { title: lang.en.widget.voice, icon: micIcon },
      { title: lang.en.widget.note, icon: noteIcon },
    ];
    tabs.forEach((tabInfo, index) => {
      const cloneTab = tab.cloneNode(true);
      if (index === 0) cloneTab.classList.add("active");
      const cloneIcon = icon.cloneNode(true);
      const cloneText = text.cloneNode(true);
      cloneIcon.innerHTML = tabInfo.icon;
      cloneText.innerText = tabInfo.title;
      cloneTab.appendChild(cloneIcon);
      cloneTab.appendChild(cloneText);
      tabsWrapper.appendChild(cloneTab);
    });
  };
  var initialInnerElements = () => {
    widget.setAttribute("id", "uno-widget");
    widget.classList.add("uno-widget");
    if (states_default.isExtension)
      widget.classList.add("uno-widget-extension");
    title.classList.add("uno-widget-title");
    title.innerText = lang.en.widget.title;
    widget.appendChild(title);
    tabsWrapper.classList.add("uno-tabs-wrapper");
    initialTabs();
    widget.appendChild(tabsWrapper);
    closeButton.classList.add("uno-close");
    closeButton.innerHTML = crossIcon;
    widget.appendChild(closeButton);
    wrapper.classList.add("uno-tab-content");
    widget.appendChild(wrapper);
    video_default(wrapper);
  };
  var appendRecordWrapperToBody = () =>
    new Promise((resolve) => {
      initialInnerElements();
      document.body.appendChild(widget);
      resolve(counter);
    });
  var openRecordWidget = ({
    onStartRecord,
    onStopRecord,
    onStartMask,
    onStopMask,
    onStartMute,
    onStopMute,
    onCloseWidget,
  }) =>
    __awaiter(void 0, void 0, void 0, function* () {
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
      return yield appendRecordWrapperToBody().then((response) => response);
    });
  var checkRecordState = (recordIsStarted) => {
    if (!recordIsStarted) return;
    startRecordButton.remove();
    recordWrapper.appendChild(stopRecordButton);
    recordingButton.style.display = "inline";
    widget.classList.add("recording");
  };
  var resetWidget = () => {
    stopRecordButton.remove();
    recordWrapper.appendChild(startRecordButton);
    recordingButton.style.display = "";
    setTimeout(() => {
      widget.classList.remove("recording");
    }, 500);
  };
  var closeRecordWidget = () => {
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

  // js/lib/uno-js/components/screen-mask/index.js
  var ScreenMask = class {
    constructor() {
      this.createElement = () => {
        const element = document.createElement("div");
        const close = document.createElement("div");
        close.classList.add("close");
        close.innerHTML = crossIcon;
        element.setAttribute(
          "id",
          `mask-element-${Math.random().toString(16).slice(2)}`
        );
        close.addEventListener("click", () => this.removeElement(element));
        element.appendChild(close);
        document.body.appendChild(element);
        return element;
      };
      this.removeElement = (element) => element.remove();
      this.removeAllElements = () => {
        const elements = document.querySelectorAll(`[id^='mask-element-']`);
        elements.forEach((element) => element.remove());
      };
      this.mousedownListener = (event) => {
        const x = event.pageX;
        const y = event.pageY;
        this.startPosition = { x, y };
        this.clicked = true;
      };
      this.mousemoveListener = (event) => {
        var _a;
        const x = event.pageX;
        const y = event.pageY;
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        if (this.clicked) {
          event.preventDefault();
          if (!this.moved) this.element = this.createElement();
          if (!this.element) return;
          let right =
            this.startPosition.x < x
              ? this.startPosition.x
              : x > innerWidth
              ? innerWidth - 5
              : x;
          let left =
            x < 5 ? 5 : x < this.startPosition.x ? x : this.startPosition.x;
          const body2 = document.querySelector("body");
          const direction =
            (_a = getComputedStyle(body2).direction) !== null && _a !== void 0
              ? _a
              : "ltr";
          if (direction === "rtl") {
            right =
              x < this.startPosition.x
                ? innerWidth - this.startPosition.x
                : x < innerWidth
                ? innerWidth - x
                : 0;
            left =
              x < this.startPosition.x
                ? innerWidth - x
                : innerWidth - this.startPosition.x;
          }
          this.element.style.top = `${
            this.startPosition.y < y ? this.startPosition.y : y < 5 ? 5 : y
          }px`;
          this.element.style.bottom = `${
            y < this.startPosition.y
              ? this.startPosition.y
              : y > innerHeight
              ? innerHeight - 5
              : y
          }px`;
          this.element.style.right = `${right}px`;
          this.element.style.left = `${left}px`;
          this.element.style.width = `${
            this.startPosition.x > x
              ? x < 0
                ? this.startPosition.x - 5
                : this.startPosition.x - x
              : x > innerWidth
              ? innerWidth - this.startPosition.x - 5
              : x - this.startPosition.x
          }px`;
          this.element.style.height = `${
            this.startPosition.y > y
              ? y < 0
                ? this.startPosition.y - 5
                : this.startPosition.y - y
              : y > innerHeight
              ? innerHeight - this.startPosition.y - 5
              : y - this.startPosition.y
          }px`;
          this.moved = true;
        }
      };
      this.mouseupListener = () => {
        this.moved = false;
        this.clicked = false;
      };
      this.addMouseEvents = () => {
        document.addEventListener("mousedown", this.mousedownListener);
        document.addEventListener("mousemove", this.mousemoveListener);
        document.addEventListener("mouseup", this.mouseupListener);
      };
      this.removeMouseEvents = () => {
        document.removeEventListener("mousedown", this.mousedownListener);
        document.removeEventListener("mousemove", this.mousemoveListener);
        document.removeEventListener("mouseup", this.mouseupListener);
      };
      this.start = () => {
        this.addMouseEvents();
      };
      this.stop = () => {
        this.removeAllElements();
        this.removeMouseEvents();
      };
      this.moved = false;
      this.clicked = false;
      this.startPosition = { x: 0, y: 0 };
      this.element = null;
    }
  };
  var screen_mask_default = ScreenMask;

  // js/lib/uno-js/components/timer/index.js
  var timer;
  var timerRef;
  var runTimer = (ref, callback) => {
    timerRef = ref;
    let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    const displayTimer = () => {
      milliseconds += 10;
      if (milliseconds === 1e3) {
        milliseconds = 0;
        seconds++;
        updateCallback();
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      updateTimer();
    };
    const updateTimer = () => {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      if (timerRef) timerRef.innerText = `${hours < 1 ? "" : h + ":"}${m}:${s}`;
    };
    const updateCallback = () => callback({ seconds, minutes, hours });
    if (timer) clearInterval(timer);
    timer = setInterval(displayTimer, 10);
  };
  var stopTimer = () => {
    if (timerRef) timerRef.innerText = "00:00";
    clearInterval(timer);
  };

  // js/lib/uno-js/components/observable/index.js
  var Observable = class {
    constructor() {
      this.observers = [];
    }
    /**
     * Subscribe a new observer to the observable.
     *
     * @param key - The key associated with the observer.
     * @param fn - The function to be called when the observable is fired.
     */
    subscribe(key, fn) {
      this.observers.push({
        fn,
        key,
      });
    }
    /**
     * Unsubscribe an observer based on its key.
     *
     * @param key - The key of the observer to be unsubscribed.
     */
    unsubscribe(key) {
      this.observers = this.observers.filter(
        (subscriber) => subscriber.key !== key
      );
    }
    /**
     * Fire the observable by calling the associated observer functions.
     *
     * @param key - The key of the observers to be fired.
     * @param data - Optional data to be passed to the observer functions.
     */
    fire(key, data) {
      this.observers.forEach(
        (observer) => observer.key === key && observer.fn(data)
      );
    }
  };
  var observable_default = new Observable();

  // js/lib/uno-js/components/auto-secret/index.js
  var setBlur = (element) => {
    element.style.transition = "all 0.3s ease-in-out";
    element.style.filter = "blur(5px)";
    element.style.background = "#CCC";
    element.style.color = "#CCC";
  };
  var removeBlur = (element) => {
    element.style.transition = "";
    element.style.filter = "";
    element.style.background = "";
    element.style.color = "";
  };
  var startSecret = () => {
    const secretAttributes = document.querySelectorAll(
      `[data-${states_default.autoSecretKey}]`
    );
    if (!states_default.autoSecretKey || !secretAttributes) {
      console.warn("Auto secret attribute is not set!");
      return;
    }
    secretAttributes.forEach((secretAttribute) => {
      const element = secretAttribute;
      setBlur(element);
      secretAttribute.addEventListener("mouseover", () => {
        removeBlur(element);
      });
      secretAttribute.addEventListener("mouseout", () => {
        setBlur(element);
      });
    });
  };
  var endSecret = () => {
    const secretAttributes = document.querySelectorAll(
      `[data-${states_default.autoSecretKey}]`
    );
    if (!states_default.autoSecretKey || !secretAttributes) return;
    secretAttributes.forEach((secretAttribute) => {
      const element = secretAttribute;
      removeBlur(element);
    });
  };

  // js/lib/uno-js/components/modal/index.js
  var __awaiter2 = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var fade = document.createElement("div");
  var modal = document.createElement("div");
  var header = document.createElement("div");
  var closeButton2 = document.createElement("span");
  var content = document.createElement("div");
  var body = document.querySelector("body");
  var initialInnerElements2 = (title2) => {
    fade.classList.add("uno-modal-fade");
    body.appendChild(fade);
    modal.classList.add("uno-modal");
    modal.setAttribute("id", "uno-modal");
    fade.appendChild(modal);
    header.classList.add("uno-modal-header");
    modal.appendChild(header);
    header.appendChild(title2);
    closeButton2.setAttribute("id", "uno-modal-close");
    closeButton2.classList.add("uno-modal-close");
    closeButton2.innerHTML = crossIcon;
    header.appendChild(closeButton2);
    content.classList.add("uno-modal-content");
    modal.appendChild(content);
    return content;
  };
  var createTitle = (text) => {
    const title2 = document.createElement("h1");
    title2.classList.add("uno-modal-title");
    title2.innerHTML = text;
    return title2;
  };
  var initialModal = (title2, onCloseCallback) =>
    __awaiter2(void 0, void 0, void 0, function* () {
      closeButton2.onclick = () => {
        onCloseCallback();
        hideModal();
      };
      hideModal();
      return new Promise((resolve) => resolve(initialInnerElements2(title2)));
    });
  var showModal = () => {
    body.style.overflow = "hidden";
    fade.style.display = "block";
  };
  var hideModal = () => {
    body.style.overflow = "";
    fade.remove();
    modal.remove();
    header.innerHTML = "";
    header.remove();
    closeButton2.remove();
    content.innerHTML = "";
    content.remove();
  };
  var modal_default = initialModal;

  // js/lib/uno-js/components/request/index.js
  var __awaiter3 = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var request = (
    recordedBlob,
    fileName,
    { storeValues: storeValues2, information: information2 }
  ) =>
    __awaiter3(void 0, void 0, void 0, function* () {
      const metaDataConverter = (information3) => {
        const metadata = {};
        information3.forEach((item) => {
          metadata[item.label] = item.data;
        });
        return metadata;
      };
      const file = new File([recordedBlob], fileName);
      const formData = new FormData();
      const Reporter = states_default.user.fullName;
      const ReportUrl = window.location.href;
      const Subject = storeValues2["subject"];
      const Description = storeValues2["description"];
      const Type = storeValues2["type"];
      const Priority = storeValues2["priority"];
      const ClientMetaData = metaDataConverter(information2);
      const ProjectToken = "068F706D-5C3D-4490-AC11-08DC0EADED53";
      const AttachmentType = 10;
      const ConnectorId = "2CF4C00E-4D6E-4DCD-095E-08DC0EADF6FE";
      formData.append("ProjectToken", ProjectToken);
      formData.append("Reporter", Reporter);
      formData.append("ConnectorId", ConnectorId);
      formData.append("Subject", Subject);
      formData.append("ClientMetaData ", JSON.stringify(ClientMetaData));
      formData.append("ReportUrl", ReportUrl);
      formData.append("File", file, `${fileName}.webm`);
      formData.append(
        "ConnectorMetaData",
        JSON.stringify({
          IssueType: Type,
          IssuePriority: Priority,
        })
      );
      formData.append("Description", Description);
      formData.append("AttachmentType", JSON.stringify(AttachmentType));
      const response = yield fetch(states_default.subscriptionData.requestUrl, {
        method: "POST",
        body: formData,
      });
      return response.json();
    });
  var request_default = request;

  // js/lib/uno-js/components/report-form/index.js
  var storeValues = {
    type: "1",
    priority: "3",
    sendTo: "1",
    subject: "",
    description: "",
  };
  var OS = () => {
    if (navigator.appVersion.indexOf("Win") != -1) return "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) return "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) return "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) return "Linux";
    return "Unknown OS";
  };
  var information = [
    {
      label: `${lang.en.reportForm.info.url}:`,
      data: window.location.href,
    },
    {
      label: `${lang.en.reportForm.info.captured}:`,
      data: createName(),
    },
    {
      label: `${lang.en.reportForm.info.deviceInfo}:`,
      data: navigator.userAgent,
    },
    {
      label: `${lang.en.reportForm.info.OS}:`,
      data: OS(),
    },
    {
      label: `${lang.en.reportForm.info.windowSize}:`,
      data: `${window.innerWidth} x ${window.innerHeight}`,
    },
  ];
  var content2 = document.createElement("div");
  var contentInner = document.createElement("div");
  var submitButton = document.createElement("button");
  var footer = document.createElement("div");
  var attachment = document.createElement("div");
  var attachmentName = document.createElement("span");
  var attachmentSize = document.createElement("span");
  var form = document.createElement("div");
  var formRow = document.createElement("div");
  var onChangeValue = (event) => {
    const { name, value } = event.target;
    storeValues[name] = value;
  };
  var disableButton = (element) => {
    element.classList.add("disabled");
    element.disabled = true;
  };
  var enableButton = (element) => {
    element.classList.remove("disabled");
    element.disabled = false;
  };
  var handleError = (element) => {
    element.classList.add("uno-form-input-error");
  };
  var clearError = (element) => {
    element.classList.remove("uno-form-input-error");
  };
  var validateForm = () => {
    let isValid = true;
    const values = {
      subject: storeValues["subject"],
      description: storeValues["description"],
    };
    Object.keys(values).forEach((name) => {
      const value = values[name];
      if (!value) {
        const element = document.getElementById(name);
        handleError(element);
        isValid = false;
      }
    });
    return isValid;
  };
  var handleSubmit = (acceptButton, onSubmit) => {
    if (!validateForm()) return;
    onSubmit();
    disableButton(acceptButton);
    observable_default.subscribe("enableButton", () =>
      enableButton(acceptButton)
    );
  };
  var createFooter = ({}, onSubmit) => {
    footer.classList.add("uno-form-footer");
    submitButton.classList.add("uno-form-submit");
    const submitButtonText = document.createElement("span");
    const submitButtonIcon = document.createElement("span");
    submitButtonIcon.classList.add("uno-form-submit-icon");
    submitButtonText.innerText = lang.en.reportForm.submit;
    submitButtonIcon.innerHTML = submitIcon;
    submitButton.appendChild(submitButtonText);
    submitButton.appendChild(submitButtonIcon);
    submitButton.onclick = () => {
      handleSubmit(submitButton, onSubmit);
    };
    const sendToWrapper = document.createElement("div");
    sendToWrapper.classList.add("uno-form-send-wrapper");
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("uno-form-send-button-group");
    const sendOptions = [
      {
        label: "Jira",
        value: "1",
        icon: '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7719 9.41726L9.89484 0.919678L9.13695 0.0999756L3.22031 6.49912L0.512104 9.41726C0.444809 9.48985 0.391417 9.57609 0.354987 9.67103C0.318557 9.76598 0.299805 9.86777 0.299805 9.97056C0.299805 10.0734 0.318557 10.1751 0.354987 10.2701C0.391417 10.365 0.444809 10.4513 0.512104 10.5239L5.92347 16.3875L9.13695 19.8685L15.0662 13.4639L15.1572 13.3655L17.7719 10.5348C17.8407 10.462 17.8954 10.3751 17.9327 10.2791C17.9701 10.1832 17.9893 10.0801 17.9893 9.97602C17.9893 9.87192 17.9701 9.76887 17.9327 9.67291C17.8954 9.57696 17.8407 9.49004 17.7719 9.41726V9.41726ZM9.13695 12.9065L6.43379 9.98286L9.13695 7.05925L11.8401 9.98286L9.13695 12.9065Z" fill="#2684FF"/><path d="M9.1367 7.05927C8.29051 6.1379 7.81561 4.89195 7.81561 3.5933C7.81561 2.29464 8.29051 1.04869 9.1367 0.127319L3.20996 6.5128L6.42849 9.99381L9.1367 7.05927Z" fill="url(#paint0_linear_517_236)"/><path d="M11.8525 9.96375L9.13672 12.9065C9.5599 13.3633 9.89563 13.9059 10.1247 14.5032C10.3538 15.1005 10.4717 15.7408 10.4717 16.3875C10.4717 17.0341 10.3538 17.6744 10.1247 18.2718C9.89563 18.8691 9.5599 19.4117 9.13672 19.8685L15.0736 13.4557L11.8525 9.96375Z" fill="url(#paint1_linear_517_236)"/><defs><linearGradient id="paint0_linear_517_236" x1="8.65922" y1="4.10014" x2="4.58962" y2="7.86289" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient><linearGradient id="paint1_linear_517_236" x1="9.65967" y1="15.8301" x2="13.7213" y2="12.0722" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs></svg>',
      },
      {
        label: "Confluence",
        value: "2",
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.81138 17.025C2.60738 17.358 2.37638 17.748 2.19338 18.057C2.11322 18.1973 2.09 18.363 2.12853 18.5199C2.16705 18.6768 2.26437 18.8128 2.40038 18.9L6.50138 21.432C6.57249 21.4761 6.65165 21.5055 6.73426 21.5187C6.81687 21.5318 6.90127 21.5284 6.98253 21.5085C7.0638 21.4887 7.1403 21.4529 7.20758 21.4032C7.27485 21.3535 7.33156 21.2909 7.37438 21.219C7.53938 20.943 7.74938 20.586 7.97438 20.205C9.60038 17.535 11.2474 17.862 14.1904 19.263L18.2584 21.195C18.3346 21.2315 18.4173 21.2523 18.5017 21.2562C18.5861 21.26 18.6704 21.2469 18.7497 21.2175C18.8289 21.1881 18.9013 21.1431 18.9628 21.0851C19.0243 21.0271 19.0734 20.9574 19.1074 20.88L21.0604 16.47C21.1267 16.3204 21.1326 16.1509 21.0766 15.9971C21.0207 15.8433 20.9073 15.7171 20.7604 15.645C19.9024 15.24 18.1954 14.445 16.6654 13.695C11.1004 11.007 6.40538 11.184 2.81138 17.025Z" fill="url(#paint0_linear_517_247)"/><path d="M21.2009 7.00199C21.4079 6.66899 21.6389 6.27899 21.8189 5.96999C21.9024 5.82739 21.9263 5.65755 21.8853 5.49743C21.8443 5.33732 21.7417 5.19987 21.5999 5.11499L17.5049 2.58299C17.4338 2.53894 17.3546 2.50948 17.272 2.49634C17.1894 2.48321 17.105 2.48665 17.0237 2.50648C16.9425 2.52631 16.8659 2.56212 16.7987 2.61183C16.7314 2.66153 16.6747 2.72414 16.6319 2.79599C16.4699 3.07199 16.2569 3.42899 16.0319 3.80999C14.3999 6.49199 12.7679 6.16499 9.82187 4.76399L5.75687 2.83199C5.68159 2.79503 5.59968 2.77347 5.51595 2.76857C5.43223 2.76368 5.34837 2.77555 5.26929 2.80349C5.19022 2.83143 5.11751 2.87488 5.05545 2.93129C4.99339 2.9877 4.94321 3.05594 4.90787 3.13199L2.95487 7.55399C2.8876 7.70395 2.88129 7.87419 2.93727 8.02872C2.99326 8.18324 3.10715 8.30993 3.25487 8.38199C4.11587 8.78699 5.82287 9.58199 7.34987 10.332C12.8999 13.02 17.6099 12.843 21.2009 7.00199Z" fill="url(#paint1_linear_517_247)"/><defs><linearGradient id="paint0_linear_517_247" x1="20.9374" y1="22.743" x2="8.52938" y2="15.612" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="0.92" stop-color="#2380FB"/><stop offset="1" stop-color="#2684FF"/></linearGradient><linearGradient id="paint1_linear_517_247" x1="3.07487" y1="1.28099" x2="15.4859" y2="8.41199" gradientUnits="userSpaceOnUse"><stop stop-color="#0052CC"/><stop offset="0.92" stop-color="#2380FB"/><stop offset="1" stop-color="#2684FF"/></linearGradient></defs></svg>',
      },
    ];
    createRadio(
      sendToWrapper,
      buttonGroup,
      sendOptions,
      0,
      lang.en.reportForm.sendTo.label,
      "sendTo",
      false
    );
    footer.appendChild(submitButton);
  };
  var createInput = (
    row,
    col,
    inputLabel,
    label,
    name,
    initialValue,
    hasPlaceholder,
    isRequired
  ) => {
    const input = document.createElement("input");
    input.classList.add("uno-form-input");
    input.setAttribute("id", name);
    input.setAttribute("name", name);
    input.setAttribute("type", "text");
    if (hasPlaceholder) input.setAttribute("placeholder", label);
    input.onchange = (event) => onChangeValue(event);
    input.onfocus = () => clearError(input);
    if (initialValue) input.value = initialValue;
    inputLabel.innerHTML = `${label}${isRequired ? "<span>*</span>" : ""}`;
    inputLabel.setAttribute("for", name);
    const span = document.createElement("span");
    span.innerText = `${label} ${lang.en.reportForm.errorMessage}`;
    span.classList.add("uno-form-input-error-message");
    col.appendChild(inputLabel);
    col.appendChild(input);
    if (isRequired) col.appendChild(span);
    row.appendChild(col);
  };
  var createSelect = (row, col, selectLabel, options, label, name, active) => {
    const select = document.createElement("select");
    select.classList.add("uno-form-select");
    select.setAttribute("id", name);
    select.setAttribute("name", name);
    select.onchange = onChangeValue;
    const option = document.createElement("option");
    options.forEach((item, index) => {
      const clone = option.cloneNode(true);
      clone.value = item.value;
      clone.innerText = item.label;
      select.appendChild(clone);
      if (index === active) {
        select.value = item.value;
      }
    });
    selectLabel.innerHTML = `${label}<span>*</span>`;
    selectLabel.setAttribute("for", name);
    col.appendChild(selectLabel);
    col.appendChild(select);
    row.appendChild(col);
  };
  var createRadio = (row, col, options, active, label, name, isRequired) => {
    const span = document.createElement("span");
    const groupLabel = span.cloneNode(true);
    groupLabel.classList.add("uno-form-radio-group-label");
    groupLabel.innerHTML = `${label}${isRequired ? "<span>*</span>" : ""}`;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", name);
    input.classList.add("uno-form-radio-input");
    input.onchange = onChangeValue;
    const radioLabel = document.createElement("label");
    radioLabel.classList.add("uno-form-radio-label");
    const badge = span.cloneNode(true);
    badge.classList.add("uno-form-radio-badge");
    const icon = span.cloneNode(true);
    icon.classList.add("uno-form-radio-icon");
    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("uno-form-radio-wrapper");
    radioWrapper.appendChild(groupLabel);
    const resetLabelsStyle = () => {
      options.forEach((item) => {
        const label2 = document.querySelector(
          `label[for="id-${name}-${item.value}"]`
        );
        label2.style.borderColor = "#D0D0D0";
      });
    };
    const changeLabelStyle = (input2, label2) => {
      if (input2.checked) {
        label2.style.borderColor = "#7F56D9";
      } else {
        label2.style.borderColor = "#D0D0D0";
      }
    };
    options.forEach((item, index) => {
      var _a;
      const cloneInput = input.cloneNode(true);
      cloneInput.value = item.value;
      cloneInput.onchange = onChangeValue;
      cloneInput.setAttribute("id", `id-${name}-${item.value}`);
      const cloneLabel = radioLabel.cloneNode(true);
      if (item.color) {
        const cloneBadge = badge.cloneNode(true);
        cloneBadge.style.backgroundColor = item.color;
        cloneLabel.appendChild(cloneBadge);
      }
      if (item.icon) {
        const cloneIcon = icon.cloneNode(true);
        cloneIcon.innerHTML = item.icon;
        cloneLabel.appendChild(cloneIcon);
      }
      if ((_a = index === active) !== null && _a !== void 0 ? _a : 0) {
        cloneInput.setAttribute("checked", "checked");
        cloneLabel.style.borderColor = "#7F56D9";
      }
      const cloneSpan = span.cloneNode(true);
      cloneSpan.innerText = item.label;
      cloneLabel.appendChild(cloneSpan);
      cloneLabel.setAttribute("for", `id-${name}-${item.value}`);
      radioWrapper.appendChild(cloneInput);
      radioWrapper.appendChild(cloneLabel);
      cloneInput.onclick = () => {
        resetLabelsStyle();
        changeLabelStyle(cloneInput, cloneLabel);
      };
    });
    col.appendChild(radioWrapper);
    row.appendChild(col);
  };
  var createTextArea = (
    row,
    col,
    textAreaLabel,
    label,
    name,
    hasPlaceholder,
    isRequired
  ) => {
    const textArea = document.createElement("textarea");
    textArea.classList.add("uno-form-textarea");
    textArea.setAttribute("id", name);
    textArea.setAttribute("name", name);
    textArea.setAttribute("rows", "6");
    if (hasPlaceholder) textArea.setAttribute("placeholder", label);
    textArea.onchange = onChangeValue;
    textArea.onfocus = () => clearError(textArea);
    textAreaLabel.innerHTML = `${label}${isRequired ? "<span>*</span>" : ""}`;
    textAreaLabel.setAttribute("for", name);
    const span = document.createElement("span");
    span.innerText = `${label} ${lang.en.reportForm.errorMessage}`;
    span.classList.add("uno-form-input-error-message");
    col.appendChild(textAreaLabel);
    col.appendChild(textArea);
    if (isRequired) col.appendChild(span);
    row.appendChild(col);
  };
  var createRadioWrapper = (row, col) => {
    const div = document.createElement("div");
    const container = div.cloneNode(true);
    const buttonGroup = div.cloneNode(true);
    buttonGroup.classList.add("uno-form-button-group");
    const innerCol = div.cloneNode(true);
    const inputLabel = document.createElement("label");
    inputLabel.classList.add("uno-form-select-label");
    const typeOptions = [
      {
        label: lang.en.reportForm.type.bug,
        value: "Uno-Bug",
        color: "#F04438",
      },
      {
        label: lang.en.reportForm.type.report,
        value: "Uno-Report",
        color: "#F79009",
      },
      // {label: lang.en.reportForm.type.feature, value: "3", color: "#17B26A"}
    ];
    createRadio(
      buttonGroup,
      innerCol.cloneNode(true),
      typeOptions,
      0,
      lang.en.reportForm.type.label,
      "type",
      true
    );
    const priorityOptions = [
      { label: "Highest", value: "Highest" },
      { label: "High", value: "High" },
      { label: "Medium", value: "Medium" },
      { label: "Low", value: "Low" },
      { label: "Critical", value: "Critical" },
    ];
    createSelect(
      buttonGroup,
      innerCol.cloneNode(true),
      inputLabel.cloneNode(true),
      priorityOptions,
      lang.en.reportForm.priority.label,
      "priority",
      1
    );
    container.appendChild(buttonGroup);
    col.appendChild(container);
    row.appendChild(col);
  };
  var createForm = ({ fileName, fileSize }) => {
    form.classList.add("uno-form");
    formRow.classList.add("uno-form-row");
    form.appendChild(formRow);
    const col = document.createElement("div");
    col.classList.add("uno-form-col");
    const divider = document.createElement("div");
    divider.classList.add("uno-form-divider");
    const inputLabel = document.createElement("label");
    inputLabel.classList.add("uno-form-label");
    createRadioWrapper(formRow, col.cloneNode(true));
    formRow.appendChild(divider.cloneNode(true));
    createInput(
      formRow,
      col.cloneNode(true),
      inputLabel.cloneNode(true),
      lang.en.reportForm.subject,
      "subject",
      "",
      false,
      true
    );
    formRow.appendChild(divider.cloneNode(true));
    createTextArea(
      formRow,
      col.cloneNode(true),
      inputLabel.cloneNode(true),
      lang.en.reportForm.description,
      "description",
      false,
      true
    );
    formRow.appendChild(divider.cloneNode(true));
    const attachmentCol = col.cloneNode(true);
    attachmentCol.classList.add("last");
    const fileTitle = document.createElement("div");
    fileTitle.classList.add("uno-form-attachment-title");
    fileTitle.innerText = lang.en.reportForm.fileTitle;
    attachmentCol.appendChild(fileTitle);
    attachment.classList.add("uno-form-attachment");
    attachmentName.classList.add("uno-form-attachment-name");
    attachmentName.innerText = `${fileName}.mp4`;
    attachment.appendChild(attachmentName);
    attachmentSize.classList.add("uno-form-attachment-size");
    attachmentSize.innerText = `(${fileSize})`;
    attachment.appendChild(attachmentSize);
    attachmentCol.appendChild(attachment);
    formRow.appendChild(attachmentCol);
    return form;
  };
  var createInfo = () => {
    const aside = document.createElement("aside");
    aside.classList.add("uno-info");
    const tabsWrapper2 = document.createElement("div");
    tabsWrapper2.classList.add("uno-info-tabs");
    const tab = document.createElement("div");
    tab.classList.add("uno-info-tab");
    const text = document.createElement("span");
    text.classList.add("uno-info-tab-text");
    const tabs = [
      { title: lang.en.reportForm.info.info },
      { title: lang.en.reportForm.info.network },
      { title: lang.en.reportForm.info.console },
    ];
    tabs.forEach((tabInfo, index) => {
      const cloneTab = tab.cloneNode(true);
      if (index === 0) cloneTab.classList.add("active");
      const cloneText = text.cloneNode(true);
      cloneText.innerText = tabInfo.title;
      cloneTab.appendChild(cloneText);
      tabsWrapper2.appendChild(cloneTab);
    });
    aside.appendChild(tabsWrapper2);
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add("uno-info-list");
    information.forEach((info) => {
      const infoRow = document.createElement("div");
      infoRow.classList.add("uno-info-row");
      const label = document.createElement("span");
      label.classList.add("uno-info-label");
      label.innerHTML = info.label;
      const value = document.createElement("span");
      value.classList.add("uno-info-value");
      value.innerHTML = info.data;
      infoRow.appendChild(label);
      infoRow.appendChild(value);
      infoWrapper.appendChild(infoRow);
    });
    aside.appendChild(infoWrapper);
    return aside;
  };
  var createContent = ({ fileSize, fileName }) => {
    content2.setAttribute("id", "uno-report-form");
    contentInner.classList.add("uno-content");
    contentInner.appendChild(createForm({ fileSize, fileName }));
    contentInner.appendChild(createInfo());
    content2.appendChild(contentInner);
  };
  var initialInnerElements3 = ({}, { fileSize, fileName }, onSubmit) => {
    createContent({ fileSize, fileName });
    createFooter({ fileSize, fileName }, onSubmit);
  };
  var appendFormToModal = (
    { fullName, email, avatar },
    { fileSize, fileName },
    onSubmit
  ) => {
    modal_default(createTitle(lang.en.reportForm.title), () =>
      destroyRequestForm()
    ).then((modalContent) => {
      initialInnerElements3(
        { fullName, email, avatar },
        { fileSize, fileName },
        onSubmit
      );
      modalContent.appendChild(content2).appendChild(footer);
      showModal();
    });
  };
  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      "Bytes",
      "KiB",
      "MiB",
      "GiB",
      "TiB",
      "PiB",
      "EiB",
      "ZiB",
      "YiB",
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  function createName() {
    const now = /* @__PURE__ */ new Date();
    const yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let dd = now.getDate();
    let HH = now.getHours();
    let MM = now.getMinutes();
    let SS = now.getSeconds();
    if (dd < 10) dd = `0${dd}`;
    if (mm < 10) mm = `0${mm}`;
    if (HH < 10) HH = `0${HH}`;
    if (MM < 10) MM = `0${MM}`;
    if (SS < 10) SS = `0${SS}`;
    return `${yyyy}/${mm}/${dd} at ${HH}:${MM}:${SS}`;
  }
  var closeRequestFormModal = () => {
    hideModal();
    destroyRequestForm();
    observable_default.fire("enableButton");
  };
  var destroyRequestForm = () => {
    submitButton.replaceChildren();
    attachment.replaceChildren();
    footer.remove();
    formRow.replaceChildren();
    form.replaceChildren();
    content2.replaceChildren();
    content2.remove();
  };
  var openReportFormModal = (recordedBlob) => {
    const fileSize = formatBytes(recordedBlob.size, 2);
    const { fullName, email, avatar } = states_default.user;
    appendFormToModal(
      { fullName, email, avatar },
      { fileSize, fileName: createName() },
      () => {
        request_default(recordedBlob, createName(), {
          storeValues,
          information,
        })
          .then((response) => {
            console.info(`[uno-js] Response: ${response.message}`);
            closeRequestFormModal();
          })
          .catch((error) => {
            console.error(`[uno-js] ${error}`);
            observable_default.fire("enableButton");
          });
      }
    );
  };
  var report_form_default = openReportFormModal;

  // js/lib/uno-js/components/media-stream-recorder/index.js
  var __awaiter4 = function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var MediaStreamRecorder = class {
    constructor(options) {
      var _a, _b, _c;
      this.startRecording = (stream) =>
        __awaiter4(this, void 0, void 0, function* () {
          const recorder = new MediaRecorder(stream);
          console.info("[uno-js] Stream data is stored in this array.");
          let data = [];
          console.info("[uno-js] Pushing frames to array.");
          recorder.ondataavailable = (event) =>
            data === null || data === void 0 ? void 0 : data.push(event.data);
          console.info("[uno-js] Starting media recorder...");
          recorder.start();
          console.info("[uno-js] Checking if stream is stopped...");
          let stopped = new Promise((resolve, reject) => {
            recorder.onstop = resolve;
            recorder.onerror = () => {
              var _a2;
              return reject(
                `[uno-js] MediaRecorder error: ${
                  (_a2 = recorder.onerror) === null || _a2 === void 0
                    ? void 0
                    : _a2.name
                }`
              );
            };
            console.info("[uno-js] Stream is stopped.");
          });
          yield Promise.all([stopped]);
          return data;
        });
      this.renderStream = (stream) => {
        stream.getVideoTracks()[0].onended = () => this.stopRecording();
        this.startRecording(stream).then((recordedChunks) => {
          const mimeType = this.mimeType;
          const recordedBlob = new Blob(recordedChunks, { type: mimeType });
          observable_default.fire("setRecordState", false);
          observable_default.fire("closeWidget");
          report_form_default(recordedBlob);
          console.info(
            `[uno-js] Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`
          );
        });
      };
      this.stopRecording = () => {
        console.info("[uno-js] Stopped recording.");
        if (this.videoStreamState)
          this.videoStreamState.getTracks().forEach((track) => track.stop());
        if (this.audioStreamState)
          this.audioStreamState.getTracks().forEach((track) => track.stop());
      };
      this.createStream = () =>
        __awaiter4(this, void 0, void 0, function* () {
          console.info("[uno-js] Getting display media...");
          this.videoStreamState = yield navigator.mediaDevices
            .getDisplayMedia(this.displayMediaConstraints)
            .then((video) => video)
            .catch(() => void 0);
          if (!this.videoStreamState) {
            console.error("[uno-js] Permission or display media not found!");
            return false;
          }
          console.info("[uno-js] Getting audio...");
          try {
            this.audioStreamState = yield navigator.mediaDevices.getUserMedia(
              this.userMediaConstraints
            );
            const audioTrack = this.audioStreamState.getAudioTracks()[0];
            this.videoStreamState.addTrack(audioTrack);
          } catch (_d) {
            console.error("[uno-js] Microphone or system audio not found!");
          }
          return this.videoStreamState;
        });
      this.start = () =>
        __awaiter4(this, void 0, void 0, function* () {
          console.info("[uno-js] Starting recording...");
          return yield this.createStream()
            .then((stream) => {
              if (!stream) {
                console.info("[uno-js] Stream is not created.");
                return false;
              }
              console.info("[uno-js] Stream is created.");
              this.renderStream(stream);
              return true;
            })
            .catch((error) => {
              if (error.name === "NotFoundError") {
                console.error(
                  "[uno-js] Camera or microphone not found. Can't record."
                );
              } else {
                console.error(error);
              }
            });
        });
      this.displayMediaConstraints =
        (_a =
          options === null || options === void 0
            ? void 0
            : options.displayMediaConstraints) !== null && _a !== void 0
          ? _a
          : { audio: true, video: true };
      this.userMediaConstraints =
        (_b =
          options === null || options === void 0
            ? void 0
            : options.userMediaConstraints) !== null && _b !== void 0
          ? _b
          : {
              audio: {
                sampleSize: AUDIO_SAMPLE_SIZE,
                frameRate: { max: MAX_FRAME_RATE },
                channelCount: AUDIO_CHANNEL_COUNT,
              },
            };
      this.mimeType =
        (_c =
          options === null || options === void 0
            ? void 0
            : options.mimeType) !== null && _c !== void 0
          ? _c
          : "video/webm";
    }
  };
  var media_stream_recorder_default = MediaStreamRecorder;

  // js/lib/uno-js/index.js
  var UnoJSBuilder = class {
    constructor() {
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
        if (
          !(options === null || options === void 0
            ? void 0
            : options.autoSecretKey)
        )
          console.warn("[uno-js] Auto secret data attribute not set.");
        return true;
      };
      this.startRecord = () => {
        if (!this.screenRecorder) return;
        this.screenRecorder
          .start()
          .then((record) => {
            if (!record) {
              resetWidget();
              return;
            }
            startSecret();
            this.setRecordState(true);
            runTimer(this.timerWrapper, this.observeTime);
            console.info("[uno-js] Record started");
          })
          .catch((error) => {
            this.closeWidget();
            this.setRecordState(false);
            console.error(`[uno-js] Error while starting record: ${error}`);
          });
        observable_default.subscribe("closeWidget", this.closeWidget);
        observable_default.subscribe("setRecordState", this.setRecordState);
      };
      this.stopRecord = () => {
        if (!this.screenRecorder || !this.recordIsStarted) return;
        console.info("[uno-js] Record stopped!");
        this.screenRecorder.stopRecording();
        stopTimer();
        this.setRecordState(false);
      };
      this.startMask = () => {
        this.screenMask.start();
        this.maskIsRunning = true;
        console.info("[uno-js] Mask started!");
      };
      this.stopMask = () => {
        if (!this.maskIsRunning) return;
        this.screenMask.stop();
        this.maskIsRunning = false;
        console.info("[uno-js] Mask stopped!");
      };
      this.startMute = () => {
        if (this.recordIsStarted) return;
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
        endSecret();
        stopTimer();
        closeRecordWidget();
        console.info("[uno-js] Widget closed!");
      };
      this.setRecordState = (state) => {
        checkRecordState(state);
        this.recordIsStarted = state;
      };
      this.initialize = (options) => {
        var _a, _b, _c;
        if (!this.validateInitialization(options)) return;
        const startButton = document.getElementById(options.startButtonId);
        states_default.user = options.user;
        states_default.autoSecretKey =
          (_a = options.autoSecretKey) !== null && _a !== void 0 ? _a : void 0;
        states_default.subscriptionData = options.subscriptionData;
        states_default.isExtension =
          (_b = options.isExtension) !== null && _b !== void 0 ? _b : false;
        (_c = options.videoMaxLength) !== null && _c !== void 0
          ? _c
          : (options.videoMaxLength = options.videoMaxLength);
        this.screenRecorder = new media_stream_recorder_default({
          displayMediaConstraints: {
            audio: this.audio,
            video: true,
          },
          userMediaConstraints: {
            audio: {
              sampleSize: AUDIO_SAMPLE_SIZE,
              frameRate: { max: MAX_FRAME_RATE },
              channelCount: AUDIO_CHANNEL_COUNT,
            },
          },
          mimeType: "video/webm",
        });
        if (startButton)
          startButton.addEventListener("click", () => {
            openRecordWidget({
              onStartRecord: this.startRecord,
              onStopRecord: this.stopRecord,
              onStartMask: this.startMask,
              onStopMask: this.stopMask,
              onStartMute: this.startMute,
              onStopMute: this.stopMute,
              onCloseWidget: this.closeWidget,
            }).then((response) => {
              this.timerWrapper = response;
            });
          });
        console.info("[uno-js] Package initialized!");
      };
      this.screenMask = new screen_mask_default();
      this.screenRecorder = null;
      this.timerWrapper = null;
      this.audio = true;
      this.maskIsRunning = false;
      this.recordIsStarted = false;
    }
    observeTime({ minutes }) {
      if (minutes === states_default.videoMaxLength) {
        this.stopRecord();
      }
    }
  };
  var unoJS = new UnoJSBuilder();
  /* Start: Add for Initialize */
  chrome.storage.sync.get(null, function (items) {
    const requiredData = {
      fullName: null,
      autoSecretKey: null,
      requestUrl: null,
      apiKey: null,
    };
    Object.keys(items).forEach((item) => {
      requiredData[item] = items[item];
    });
    const options = {
      user: {
        fullName: requiredData.fullName,
        email: "j.doe@example.com",
        avatar: null,
      },
      autoSecretKey: requiredData.autoSecretKey,
      callbacks: {
        onOpenWidget: () => console.log("Widget opened"),
        onCloseWidget: () => console.log("Widget closed"),
        onStartMask: () => console.log("Started mask"),
        onStopMask: () => console.log("Stopped mask"),
        onStartTimer: ({ second, minute, hours }) =>
          console.log(
            "Started recording timer: " + second + ":" + minute + ":" + hours
          ),
        onStopTimer: () => console.log("Stopped recording timer"),
        onStartRecording: () => console.log("Started recording!"),
        onStopRecording: () => console.log("Stopped recording!"),
        onSubmit: () => console.log("Submitted!"),
        onError: () => console.log("Error!"),
      },
      subscriptionData: {
        apiKey: requiredData.apiKey,
        requestUrl: requiredData.requestUrl,
      },
      startButtonId: "start-btn",
      isExtension: true,
    };
    console.log({ options });
    unoJS.initialize(options);
    setTimeout(() => {
      startButton.click();
    }, 100);
  });
  /* End: Add for Initialize */
})();
