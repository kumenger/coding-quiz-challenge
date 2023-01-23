var quizStart = document.querySelector("#btnStart");
var firstEl = document.querySelector("#wellcome-holder");
var stateFEL = firstEl.getAttribute("data-state");
var divEl = document.createElement("div");
var allLi = document.querySelectorAll("p");
var lE1 = document.createElement("p");
var lE2 = document.createElement("p");
var lE3 = document.createElement("p");
var lE4 = document.createElement("p");
var bEl = document.createElement("button");
var olEl = document.createElement("ol");
var pEl = document.createElement("h2");
var timerEl = document.getElementById("timer");
var resultDisplay = document.createElement("h4");
var timer = parseInt(timerEl.innerHTML);
var wins = localStorage.getItem("wins");

let i = 0;

var javascriptQuiz = [
  {
    question: "JavaScript is a ___ -side programming language.",
    choose: ["client", "server", "both", "node"],
    answer: "both",
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choose: [
      "alertBox(“Hello DataFlair!”);",
      "alert(Hello DataFlair!);",
      "msgAlert(“Hello DataFlair!”);",
      "alert(“Hello DataFlair!”);",
    ],
    answer: "alert(Hello DataFlair!);",
  },
  {
    question: "choose",
    choose: [
      "alertBox(“Hello DataFlair!”);",
      "alert(Hello DataFlair!);",
      "msgAlert(“Hello DataFlair!”);",
      "alert(“Hello DataFlair!”);",
    ],
    answer: "alert(Hello DataFlair!);",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript??",
    choose: ["min(x,y);", "Math.min(x,y);", "Math.min(xy);", "min(xy);"],
    answer: "Math.min(x,y);",
  },
];
//on start quiz button the visibility of start page is hidden and the quiz will show up
quizStart.addEventListener("click", function tes() {
  if (stateFEL === "visibile") {
    firstEl.style.display = "none";
    var timeInterVal = setInterval(() => {
      timerEl.innerHTML = timer--;

      if (timer === 0) {
        clearInterval(timeInterVal);
        timerEl.textContent = "time is out";
      }
    }, 1000);

    // var newDiv=document.createElement('div')

    divEl.style.backgroundColor = "red";
    divEl.setAttribute(
      "style",
      "background-color:red;padding:10px;text-align:center"
    );
    olEl.setAttribute(
      "style",
      "background:#333333; padding:5px; color:black;margin:5px"
    );
    lE1.setAttribute(
      "style",
      "color:white;background: #666666; padding: 5px; margin: 35px;type:button;"
    );
    lE2.setAttribute(
      "style",
      " color:white; background: #777777; padding: 5px; margin: 35px;"
    );
    lE3.setAttribute(
      "style",
      " color:white; background: #888888; padding: 5px; margin: 35px;"
    );
    lE4.setAttribute(
      "style",
      " color:white; background: #999999; padding: 5px; margin: 35px;"
    );
    lE1.addEventListener("click", function () {
      console.log(javascriptQuiz[i].answer, lE1.innerHTML);
      if (javascriptQuiz[i].answer === lE1.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
        divEl.appendChild(resultDisplay);
      }
      nextQuiz();
    });
    lE2.addEventListener("click", function () {
      if (javascriptQuiz[i].answer === lE2.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
      } else {
        resultDisplay.textContent = "Wrong";
      }
      divEl.appendChild(resultDisplay);
      nextQuiz();
    });
    lE3.addEventListener("click", function () {
      if (javascriptQuiz[i].answer === lE3.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
      } else {
        resultDisplay.textContent = "Wrong";
      }
      divEl.appendChild(resultDisplay);
      nextQuiz();
    });
    lE4.addEventListener("click", function () {
      if (javascriptQuiz[i].answer === lE4.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
      } else {
        resultDisplay.textContent = "Wrong";
      }
      divEl.appendChild(resultDisplay);
      nextQuiz();
    });
    if (i < javascriptQuiz.length) {
      addContents(i);

      olEl.appendChild(lE1);
      olEl.appendChild(lE2);
      olEl.appendChild(lE3);
      olEl.appendChild(lE4);
      document.body.appendChild(divEl);
      divEl.appendChild(pEl);
      divEl.appendChild(olEl);

      function nextQuiz() {
        if (i === javascriptQuiz.length - 1) {
          setTimeout(() => {
            divEl.style.display = "none";
            clearInterval(timeInterVal);
            timerEl.textContent = "all quzes finished";
            var newDiv = document.createElement("div");
            newDiv.setAttribute("style", "width:100%;text-align:center");
            var newH3 = document.createElement("h3");
            var newH4 = document.createElement("h4");
            var formEl = document.createElement("form");
            var lbEL = document.createElement("lable");
            lbEL.textContent = "Enter initials :";
            var inputEl = document.createElement("input");
            var subEl = document.createElement("button");
            subEl.textContent = "Submit";
            formEl.appendChild(lbEL);
            formEl.appendChild(inputEl);
            formEl.appendChild(subEl);

            newH3.textContent = "All Done!";
            newH4.textContent = `your finial Score is ${localStorage.getItem(
              "wins"
            )}`;

            document.body.append(newDiv);
            newDiv.appendChild(newH3);
            newDiv.appendChild(newH4);
            newDiv.appendChild(formEl);
            subEl.addEventListener("click", function () {
              var highScore = JSON.parse(
                localStorage.getItem("highScore") || "[]"
              );

              highScore.push({
                names: inputEl.value,
                score: localStorage.getItem("wins"),
              });
              localStorage.clear();

              localStorage.setItem("highScore", JSON.stringify(highScore));
            });
          }, 1000);
        }
        i++;
        addContents(i);
      }
    }
  }
});
function addContents(j) {
  if (j < javascriptQuiz.length) {
    pEl.textContent = javascriptQuiz[j].question;

    lE1.textContent = javascriptQuiz[j].choose[0];
    lE2.textContent = javascriptQuiz[j].choose[1];
    lE3.textContent = javascriptQuiz[j].choose[2];
    lE4.textContent = javascriptQuiz[j].choose[3];
  }
}
