const main = async () => {
    const httpResponse = await fetch("jeopardy.json");
    const data = await httpResponse.json();
    console.log(data);

    const score = $("#score");
    const one = $("#one");
    const two = $("#two");
    const four = $("#four");
    const six = $("#six");
    const eight = $("#eight");
    const question = $("#question");
    const form = $("#form");
    const answer = $("#answer");
    const submit = $("#submit");

    let randomQuestion; 
    let questionValue = 0;
    let isClicked = false;
    
    let totalScore = localStorage.getItem("totalScore");
    if (totalScore === null) {
        totalScore = 0;
        score.text(`Score: $ ${totalScore}`);
    } else {
        score.text(`Score: $ ${totalScore}`);
    }
    const randomQuestionGen = (value) => {
        randomQuestion = data[Math.ceil(Math.random() * data.length -1)];
        while (randomQuestion.value !== value) {
            randomQuestion = data[Math.ceil(Math.random() * data.length -1)];
        }
        console.log(randomQuestion);
        question.text(`Question: ${randomQuestion.question}?`);
        return randomQuestion;
    }

    one.on("click", (e) => {
        if (isClicked === false) {
            if ($(e.target).hasClass("Disable")) {
            
            } else {
                randomQuestionGen("$100");
                $(e.target).text("");
                $(e.target).addClass("Disable");
                questionValue = 100;
                isClicked = true;
                submit.prop("Disabled", false);
            }
        }
        
    });

    two.on("click", (e) => {
        if (isClicked === false) {
            if ($(e.target).hasClass("Disable")) {
            
            } else {
                randomQuestionGen("$200");
                $(e.target).text("");
                $(e.target).addClass("Disable");
                questionValue = 200;
                isClicked = true;
                submit.prop("Disabled", false);
            }
        }
    });

    four.on("click", (e) => {
        if (isClicked === false) {
            if ($(e.target).hasClass("Disable")) {
            } else {
                randomQuestionGen("$400");
                $(e.target).text("");
                $(e.target).addClass("Disable");
                questionValue = 400;
                isClicked = true;
                submit.prop("Disabled", false);
            }
        }
    });

    six.on("click", (e) => {
        if (isClicked === false) {
            if ($(e.target).hasClass("Disable")) {
            } else {
                randomQuestionGen("$600");
                $(e.target).text("");
                $(e.target).addClass("Disable");
                questionValue = 600;
                isClicked = true;
                submit.prop("Disabled", false);
            }
        }
    });

    eight.on("click", (e) => {
        if (isClicked === false) {
            if ($(e.target).hasClass("Disable")) {
            } else {
                randomQuestionGen("$800");
                $(e.target).text("");
                $(e.target).addClass("Disable");
                questionValue = 800;
                isClicked = true;
                submit.prop("Disabled", false);
            }
        }
    });

    form.on("submit", (e) => {
        e.preventDefault();
        console.log(answer.value);

        const correctAnswer = () => {
            totalScore = Number(totalScore) + Number(questionValue);

            score.text(`Your Current Score Is: $ ${totalScore}`);
            question.text("Correct!");
            answer.val("");
            localStorage.setItem("totalScore", totalScore);
            isClicked = false;
            submit.prop("Disabled", true);
        }

        const wrongAnswer = () => {
            totalScore = Number(totalScore)
            score.text(`Your Score Remains At: $ ${totalScore}`);
            question.text(`Wrong! The Correct Answer Is: ${randomQuestion.answer}`);
            answer.val("");
            localStorage.setItem("totalScore", totalScore);
            isClicked = false;
            submit.prop("Disabled", true);
        };

        if (answer.val().toString() === randomQuestion.answer.toString()) {
            correctAnswer();
        } else {
            console.log(answer.value);
            if (answer.val().toString() === undefined) {
                question.text(`Question: ${randomQuestion.question}? ... Enter Your Answer Below!`);
                submit.prop("Disabled", false);
              } else if (answer.val().toString() === "") {
                question.text(`Question: ${randomQuestion.question}? ... Enter Your Answer Below!`);
                submit.prop("Disabled", false);
              } else {
                wrongAnswer();
            }
        }
    });
};

main(); 