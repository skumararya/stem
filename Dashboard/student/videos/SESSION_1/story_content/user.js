/*
window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
};
*/


window.InitUserScripts = function () {

  console.log("InitUserScripts fired");

  function waitForAPI() {
    let api = window.API_1484_11 || window.API;

    if (!api) {
      return setTimeout(waitForAPI, 1000);
    }

    console.log("✅ SCORM API detected");

    // Hook SetValue (SCORM 2004)
    const originalSetValue = api.SetValue || api.LMSSetValue;

    api.SetValue = api.LMSSetValue = function (key, value) {

      console.log("📊 SCORM:", key, "=>", value);

      // 🎯 Capture SCORE
      if (
        key.includes("score") ||
        key.includes("lesson_status") ||
        key.includes("completion") ||
        key.includes("success")
      ) {

        console.log("🎯 IMPORTANT DATA:", key, value);

        // 🚀 Send to parent (React)
        window.parent.postMessage({
          type: "SCORM_DATA",
          key: key,
          value: value
        }, "*");
      }

      return originalSetValue.apply(this, arguments);
    };
  }

  waitForAPI();
};