var quizStart = document.querySelector("#btnStart");
var des = document.getElementsByClassName("describtion");
var firstEl = document.querySelector("#wellcome-holder");
var stateFEL = firstEl.getAttribute("data-state");
var divEl = document.createElement("div");
divEl.classList.add("quizList");

var newDiv = document.createElement("div");
newDiv.setAttribute("style", "width:100%;text-align:center");
var new2Div = document.createElement("div");
var highScoreEL = document.createElement("h1");
var newOlEL = document.createElement("ol");
var newH3 = document.createElement("h3");
var newH4 = document.createElement("h4");
var formEl = document.createElement("form");
var lbEL = document.createElement("lable");
var gobackbtn = document.createElement("button");
var clearScoe = document.createElement("button");
lbEL.textContent = "Enter initials";
var inputEl = document.createElement("input");
var subEl = document.createElement("button");
var lE1 = document.createElement("p");
var lE2 = document.createElement("p");
var lE3 = document.createElement("p");
var lE4 = document.createElement("p");
lE1.classList.add("listItems");
lE2.classList.add("listItems");
lE3.classList.add("listItems");
lE4.classList.add("listItems");
var bEl = document.createElement("button");
var olEl = document.createElement("ol");
var pEl = document.createElement("h2");
pEl.setAttribute("style", "text-Align:center;padding:5px;color:snow;");
var timerEl = document.getElementById("timer");
var resultDisplay = document.createElement("h4");
newH3.style.color = "snow";
highScoreEL.style.color = "snow";
newH4.style.color = "snow";
lbEL.style.color = "snow";
resultDisplay.setAttribute(
  "style",
  "text-Align:center;padding:5px;border-top:solid 1px white;color:snow;"
);
var timer = parseInt(timerEl.innerHTML);
var wins = localStorage.getItem("wins");
var viewHighScore = document.getElementById("view-score");
var new3div = document.createElement("div");
new3div.classList.add("hightScoreList");
let i = 0;
window.addEventListener("load", () => {
  localStorage.removeItem("wins");
});
var javascriptQuiz = [
    //What is the correct syntax to use an external script called “new.js”?
    {
        question: "To add Element at start of Array we use?",
        choose: ["push()", "shift()", "unshift()", "pop()"],
        answer: "unshift()",
      },
    {
        question: "var num = [1, 2, 3]; \n var lastNum = num[num.length];\n What will be the variable lastNum?",
        choose: ["null", "Nan", "false", "undefined"],
        answer: "undefined",
      },
    {
        question: "When we don’t assign a value to a variable it will be?",
        choose: ["\"\" ", "undefined", "NaN", "null"],
        answer: "undefined",
      },
      {
        question: "var myArry= [];\nconsole.log(typeof myArry) print?",
        choose: ["Array", "undefind", "null", "object"],
        answer: "object",
      },
    {
        question: "To get the data type of some variable you will use",
        choose: ["dataType", "typeof", "typeOf", "All"],
        answer: "typeof",
      },
    {
        question: "How do you declare a JavaScript variable x.",
        choose: ["let myElem", "var myElem", "const myElem", "All"],
        answer: "All",
      },
  {
    question: "Inside what HTML tag you would put JavaScript code?.",
    choose: ["js", "scripting", "script", "javascript"],
    answer: "script",
  },
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
    question: "Where is the correct place to insert JavaScript on a web page?",
    choose: [
      "Inside body;",
      "Inside head;",
      "Inside head and body;",
      "none of this",
    ],
    answer: "Inside head and body;",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript??",
    choose: ["min(x,y);", "Math.min(x,y);", "Math.min(xy);", "min(xy);"],
    answer: "Math.min(x,y);",
  },
  {
    question: `Can you guess the return of the following code 10<9`,
    choose: ["true", "Nan", "false", "undefined"],
    answer: "true",
  },
  
];
//on start quiz button the visibility of start page is hidden and the quiz will show up

function timeOutQuizFinished() {
  subEl.textContent = "Submit";
  formEl.appendChild(lbEL);
  formEl.appendChild(inputEl);
  formEl.appendChild(subEl);
  document.body.append(newDiv);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newH4);
  newDiv.appendChild(formEl);
  subEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (!inputEl.value) {
      alert("please enter intial name");
    } else var highScore = JSON.parse(localStorage.getItem("highScore") || "[]");

    highScore.push({
      names: inputEl.value,
      score: localStorage.getItem("wins") || 0,
    });
    var scoresList = JSON.parse(localStorage.getItem("highScore"));
    let scoresArry = scoresList
      ? JSON.parse(localStorage.getItem("highScore")).sort(
          (x, y) => y.score - x.score
        )
      : null;
    if (!localStorage.getItem("wins")) {
      highScoreEL.textContent = "No Scores Available";
    } else {
      highScoreEL.textContent = "your Scores";
      var newLiEl = document.createElement("li");
      var result = localStorage.getItem("wins")
        ? localStorage.getItem("wins")
        : 0;
      newLiEl.innerHTML = `${inputEl.value}-${result}`;

      newOlEL.appendChild(newLiEl);
      new2Div.appendChild(newOlEL);
    }
    localStorage.clear();
    localStorage.setItem("highScore", JSON.stringify(highScore));

    newDiv.style.display = "none";

    document.body.appendChild(new2Div);

    new2Div.appendChild(highScoreEL);

    new2Div.appendChild(newOlEL);
    new2Div.style.textAlign = "center";

    gobackbtn.innerHTML = "Go Back";
    clearScoe.innerHTML = "Clear High Scores";
    new2Div.appendChild(gobackbtn);
    new2Div.appendChild(clearScoe);
    gobackbtn.addEventListener("click", function () {
      window.location.reload();
    });
    clearScoe.addEventListener("click", function () {
      highScoreEL.textContent = "No Scores Available";

      new2Div.removeChild(newOlEL);
      localStorage.clear();

      clearScoe.style.display = "none";
    });
  });
  if (localStorage.getItem("wins")) {
    newH4.textContent = `your finial Score is ${localStorage.getItem("wins")}`;
  } else {
    newH4.textContent = `your finial Score is ${0}`;
  }
}

quizStart.addEventListener("click", function tes() {
  var exit = document.getElementById("view-score");
  exit.innerHTML = "Exit Quiz";
  exit.addEventListener("click", () => {
    window.location.reload();
  });
  if (stateFEL === "visibile") {
    firstEl.style.display = "none";

    var timeInterVal = setInterval(() => {
      timerEl.innerHTML = timer-- + " seconds left!!";

      if (timer === 0) {
        clearInterval(timeInterVal);
        timerEl.textContent = "Out!";
        divEl.style.display = "none";
        newH3.textContent = "Time is out!";
        timeOutQuizFinished();
      }
    }, 1000);

    lE1.addEventListener("click", function () {
      if (javascriptQuiz[i].answer === lE1.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
      } else {
        resultDisplay.textContent = "Wrong";
        timer = timer > 10 ? (timer = timer - 10) : (timer = 0);
      }
      divEl.appendChild(resultDisplay);
      nextQuiz();
    });
    lE2.addEventListener("click", function () {
      if (javascriptQuiz[i].answer === lE2.innerHTML) {
        wins++;
        localStorage.setItem("wins", wins);
        resultDisplay.textContent = "Correct";
      } else {
        resultDisplay.textContent = "Wrong";
        timer = timer > 10 ? (timer = timer - 10) : (timer = 0);
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
        timer = timer > 10 ? (timer = timer - 10) : (timer = 0);
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
        timer = timer > 10 ? (timer = timer - 10) : (timer = 0);
      }
      divEl.appendChild(resultDisplay);
      nextQuiz();
    });
    setInterval(() => {
      resultDisplay.textContent = "";
    }, 4000);
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
            timerEl.textContent = "All answerd!";

            newH3.textContent = "All Done!";

            timeOutQuizFinished();
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
viewHighScore.addEventListener("click", () => {
  firstEl.style.display = "none";
  divEl.style.display = "none";
  new2Div.style.display = "none";

  document.getElementById("time-holder").style.display = "none";
  document.getElementById("view-score").style.display = "none";
  document.body.appendChild(new3div);
  new3div.appendChild(highScoreEL);
  highScoreEL.setAttribute("style", "color:snow;");
  newOlEL = document.createElement("ol");
  new3div.appendChild(newOlEL);

  if (!JSON.parse(localStorage.getItem("highScore"))) {
    highScoreEL.textContent = "No Scores Available";
  } else {
    let scoresArry = JSON.parse(localStorage.getItem("highScore")).sort(
      (x, y) => y.score - x.score
    );
    for (let i = 0; i < scoresArry.length; i++) {
      highScoreEL.textContent = "High Scores";
      var newLiEl = document.createElement("li");

      newLiEl.innerHTML = `${scoresArry[i].names}-${scoresArry[i].score}`;

      newOlEL.appendChild(newLiEl);
      new3div.appendChild(newOlEL);
    }
  }

  gobackbtn.innerHTML = "Go Back";
  clearScoe.innerHTML = "Clear High Scores";
  var btnholders = document.createElement("div");
  btnholders.classList.add("viewControl");
  btnholders.appendChild(gobackbtn);
  btnholders.appendChild(clearScoe);
  new3div.appendChild(btnholders);
  gobackbtn.addEventListener("click", function () {
    window.location.reload();
  });
  clearScoe.addEventListener("click", function () {
    highScoreEL.textContent = "No Scores Available";
    new3div.removeChild(newOlEL);
    localStorage.clear();

    clearScoe.style.display = "none";
  });
});
