var quizStart = document.querySelector("#btnStart");
var firstEl = document.querySelector("#wellcome-holder");
var stateFEL = firstEl.getAttribute("data-state");
var divEl = document.createElement("div");
var allLi = document.querySelectorAll("li");
var lE1 = document.createElement("li");
var lE2 = document.createElement("li");
var lE3 = document.createElement("li");
var lE4 = document.createElement("li");
var bEl = document.createElement("button");
var olEl = document.createElement("ol");
var pEl = document.createElement("p");
var timerEl = document.getElementById("timer");
var timer = parseInt(timerEl.innerHTML);

function countDown() {
  var timeInterVal = setInterval(() => {
    timerEl.innerHTML = timer--;
    if (timer === 0) {
      clearInterval(timeInterVal);
      timerEl.textContent = "time is out";
    }
  }, 1000);
}

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
    choose: [" min(x,y);", "Math.min(x,y);", "Math.min(xy);", "min(xy);"],
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
    olEl.setAttribute("style", "background:#333333; padding:5px; color:black;margin:5px");
    lE1.setAttribute(
      "style",
      " color:red; background: #666666; padding: 5px; margin: 35px;"
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
    if (i < javascriptQuiz.length) {
      addContents(i)

      olEl.appendChild(lE1);
      olEl.appendChild(lE2);
      olEl.appendChild(lE3);
      olEl.appendChild(lE4);
      document.body.appendChild(divEl);
      divEl.appendChild(pEl);
      divEl.appendChild(olEl);
      bEl.textContent = "Check";
      divEl.appendChild(bEl);
      bEl.addEventListener("click", function () {
        if (i === javascriptQuiz.length) {
          divEl.style.display = "none";
          clearInterval(timeInterVal)
          timerEl.textContent='all quzes finished'
          document.body.append("end quiz");
        }
        i++;
        addContents(i)
      
     
         
   
      });
    }
   
  }
});
function addContents(j){
    pEl.textContent = javascriptQuiz[j].question;

      lE1.textContent = javascriptQuiz[j].choose[0];
      lE2.textContent = javascriptQuiz[j].choose[1];
      lE3.textContent = javascriptQuiz[j].choose[2];
      lE4.textContent = javascriptQuiz[j].choose[3];
}
