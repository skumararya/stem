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

  function waitForSCORM() {
    if (window.SCORM2004_API || window.API) {
      console.log("✅ SCORM API found");

      const api = window.SCORM2004_API || window.API;

      const originalSetValue = api.SetValue;

      api.SetValue = function (key, value) {
        console.log("📊 SCORM SET:", key, "=>", value);

        // 🎯 capture important data
        if (key.includes("score") || key.includes("completion") || key.includes("success")) {
          console.log("🎯 IMPORTANT:", key, value);
        }

        return originalSetValue.apply(this, arguments);
      };

    } else {
      setTimeout(waitForSCORM, 1000);
    }
  }

  waitForSCORM();
};