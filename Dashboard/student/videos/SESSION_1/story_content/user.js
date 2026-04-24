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

  var player = GetPlayer();

  var originalSetVar = player.SetVar;
  var originalGetVar = player.GetVar;

  console.log("✅ Storyline Player Initialized");

  // 🎯 Hook ALL variable changes
  player.SetVar = function (name, value) {
    console.log("🧩 SET VAR:", name, "=>", value);
    return originalSetVar.apply(this, arguments);
  };

  // 🎯 Hook ALL variable reads (optional)
  player.GetVar = function (name) {
    try {
      var val = originalGetVar.apply(this, arguments);
      console.log("🔍 GET VAR:", name, "=>", val);
      return val;
    } catch (e) {
      console.warn("❌ GET ERROR:", name);
    }
  };

};