var quizStart = document.querySelector("#btnStart");
var firstEl = document.querySelector("#wellcome-holder");
var stateFEL = firstEl.getAttribute("data-state");
//on start quiz button the visibility of start page is hidden and the quiz will show up
quizStart.addEventListener("click", function () {
  if (stateFEL === "visibile") {
    firstEl.style.innerHtml='node'
  }
});
