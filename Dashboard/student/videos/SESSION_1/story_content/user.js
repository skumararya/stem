/*window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
};
*/

window.InitUserScripts = function ()
{
  var player = GetPlayer();

  var getVar = player.GetVar;

  // 🔁 Check quiz result repeatedly
  setInterval(function () {
    try {
      var score = getVar("ScorePercent");
      var status = getVar("PassFail");

      // Only log when score exists (quiz completed)
      if (score !== undefined && score !== null && score !== "") {

        console.log("🎯 Quiz Result:");
        console.log("Score:", score);
        console.log("Status:", status);

        // OPTIONAL: send to parent page
        if (window.parent) {
          window.parent.postMessage({
            type: "QUIZ_RESULT",
            score: score,
            status: status
          }, "*");
        }
      }
    } catch (e) {
      // silently ignore until player ready
    }
  }, 3000);
};

