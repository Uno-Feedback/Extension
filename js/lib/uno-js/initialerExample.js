/**
 * Top of file
 * */
// /* Start: Add for Initialize */
// const startButton = document.createElement("button");
// startButton.setAttribute("id", "start-btn");
// startButton.style.position = "absolute";
// startButton.style.display = "none";
// document.body.appendChild(startButton);
// /* End: Add for Initialize */
/**
 * Bottom of file */
// /* Start: Add for Initialize */
// chrome.storage.sync.get(null, function (items) {
//   const requiredData = {
//     fullName: null,
//     autoSecretKey: null,
//     requestUrl: null,
//     apiKey: null,
//   };
//   Object.keys(items).forEach((item) => {
//     requiredData[item] = items[item];
//   });
//   const options = {
//     user: {
//       fullName: requiredData.fullName,
//       email: "j.doe@example.com",
//       avatar: null,
//     },
//     autoSecretKey: requiredData.autoSecretKey,
//     callbacks: {
//       onOpenWidget: () => console.log("Widget opened"),
//       onCloseWidget: () => console.log("Widget closed"),
//       onStartMask: () => console.log("Started mask"),
//       onStopMask: () => console.log("Stopped mask"),
//       onStartTimer: ({ second, minute, hours }) =>
//         console.log(
//           "Started recording timer: " + second + ":" + minute + ":" + hours
//         ),
//       onStopTimer: () => console.log("Stopped recording timer"),
//       onStartRecording: () => console.log("Started recording!"),
//       onStopRecording: () => console.log("Stopped recording!"),
//       onSubmit: () => console.log("Submitted!"),
//       onError: () => console.log("Error!"),
//     },
//     subscriptionData: {
//       apiKey: requiredData.apiKey,
//       requestUrl: requiredData.requestUrl,
//     },
//     startButtonId: "start-btn",
//   };
//   console.log({ options });
//   unoJS.initialize(options);
//   setTimeout(() => {
//     startButton.click();
//   }, 100);
// });
// /* End: Add for Initialize */
