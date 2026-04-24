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

  // Wait until DS + views are ready
  const wait = setInterval(() => {
    if (window.DS && DS.views && DS.views.nsStack) {
      clearInterval(wait);

      console.log("✅ DS ready, hooking…");

      try {
        // Hook slide/timeline updates
        const stack = DS.views.nsStack;

        stack.forEach((view, i) => {
          if (!view) return;

          const originalUpdate = view.updateTabIndex;

          if (typeof originalUpdate === "function") {
            view.updateTabIndex = function () {
              console.log("📍 Slide / state update detected");
              return originalUpdate.apply(this, arguments);
            };
          }
        });

        console.log("✅ Hook attached to DS views");
      } catch (e) {
        console.error("Hook error:", e);
      }
    }
  }, 1000);
};