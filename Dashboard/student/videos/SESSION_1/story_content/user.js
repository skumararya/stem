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

  setTimeout(() => {
    const checkEnd = setInterval(() => {
      try {
        const currentSlide = document.querySelector(".slide-layer, .primary-slide");

        if (currentSlide) {
          const text = currentSlide.innerText || "";

          if (/congratulations|completed|thank you|finished/i.test(text)) {
            console.log("🎉 Course Completed");

            window.parent.postMessage({
              type: "COURSE_COMPLETED"
            }, "*");

            clearInterval(checkEnd);
          }
        }
      } catch {}
    }, 2000);
  }, 5000);

};