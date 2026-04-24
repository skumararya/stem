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

  console.log("✅ InitUserScripts fired");

  setTimeout(function () {

    try {
      var player = GetPlayer();

      console.log("🔥 Hooking into player...");

      const originalSetVar = player.SetVar;

      player.SetVar = function (name, value) {
        console.log("🧩 SET VAR:", name, "=>", value);
        return originalSetVar.apply(this, arguments);
      };

      console.log("✅ Hook attached successfully");

    } catch (e) {
      console.error("❌ Hook failed:", e);
    }

  }, 4000); // wait for full load

};