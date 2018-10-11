$("#start").on("click", function(){
  $("#intro").addClass("hidden");

  $("#questions").removeClass("hidden")
});


$("#finishButton").on("click", function () {
    $("#questions").addClass("hidden");
});




// timer functions----------------------------------------------------------------

var number = 120;

var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + "Time Remaining: " + number + "</h2>");
    
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}

run();
// -----------------------------------------------------------------------------

// checks answers

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;

    if (question1 == "Gary") {
        correct++;
    }

    if (question2 == "Stanley") {
        correct++;
    }

    if (question3 == "Scranton") {
        correct++;
    }

    if (question4 == "Ryan Howard") {
        correct++;
    }

    if (question5 == "Hair Cancer") {
        correct++;
    }

    if (question6 == "Jim") {
        correct++;
    }

    if (question7 == "Benito Mussolini") {
        correct++;
    }

    if (question8 == "Big Tuna") {
        correct++;
    }

    if (question9 == "Varsity Blues") {
        correct++;
    }

    if (question10 == "Lovefool") {
        correct++;
    }


    var messages = ["Great Job!", "That's just okay", "You really need to do better"];
    var pictures = ["assets/images/win.gif", "assets/images/moron.gif", "assets/images/nogodno.gif"];
  
    var range;
        if (correct < 1){
            range = 2;
        }

        if (correct > 0 && correct < 5) {
            range = 1;
        }

        if (correct > 9) {
            range = 0;
        }



    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
    document.getElementById("picture").src = pictures[range]; 

}


