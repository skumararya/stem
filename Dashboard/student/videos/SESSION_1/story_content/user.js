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

  console.log("InitUserScripts loaded");

  function waitForScormFunctions() {

    if (typeof window.SCORM2004_CallSetValue !== "function") {
      return setTimeout(waitForScormFunctions, 1000);
    }

    console.log("✅ Hooking SCORM2004_CallSetValue");

    const original = window.SCORM2004_CallSetValue;

    window.SCORM2004_CallSetValue = function (key, value) {

      console.log("📊 SCORM DATA:", key, "=>", value);

      // 🎯 Capture score
      if (key === "cmi.score.raw") {
        console.log("🎯 FINAL SCORE:", value);

        window.parent.postMessage({
          type: "SCORM_SCORE",
          score: value
        }, "*");
      }

      // 🎯 Completion
      if (key === "cmi.completion_status") {
        console.log("✅ COMPLETION:", value);
      }

      // 🎯 Pass/Fail
      if (key === "cmi.success_status") {
        console.log("🏁 RESULT:", value);
      }

      return original.apply(this, arguments);
    };
  }

  waitForScormFunctions();
};