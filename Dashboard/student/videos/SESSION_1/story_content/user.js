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


(function () {

  console.log("🚀 Hooking TinCan (xAPI)");

  function waitForTinCan() {

    if (!window.TinCan || !TinCan.prototype.sendStatement) {
      return setTimeout(waitForTinCan, 1000);
    }

    console.log("✅ TinCan detected");

    const original = TinCan.prototype.sendStatement;

    TinCan.prototype.sendStatement = function (statement, callback) {

      console.log("📊 xAPI Statement:", statement);

      // 🎯 Capture SCORE
      if (statement.result && statement.result.score) {

        const score = statement.result.score.raw;

        console.log("🎯 SCORE:", score);

        window.parent.postMessage({
          type: "SCORM_SCORE",
          score: score
        }, "*");
      }

      // 🎯 Completion
      if (statement.result && statement.result.completion) {
        console.log("✅ COMPLETION:", statement.result.completion);
      }

      // 🎯 Pass/Fail
      if (statement.result && statement.result.success !== undefined) {
        console.log("🏁 SUCCESS:", statement.result.success);
      }

      return original.apply(this, arguments);
    };
  }

  waitForTinCan();

})();