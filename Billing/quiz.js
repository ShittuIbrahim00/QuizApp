let questions = [
    { question: "Where are you from?", 
        options: ["California", "Option B", "Option C", "Option D"], 
        correct: 0 },
    { question: "Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: 3 },
    { question: "Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: 2 },
    { question: "Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: 1 },
    { question: "Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: 3 },
    { question: "Question 1?", options: ["Option A", "Option B", "Option C", "Option D"], correct: 1 },
    // Add more questions here
  ];
  
  let nextQuestion = 0;
  let totalScore = 0;
  
  let getQuestion = () => {
    let question = questions[nextQuestion];
    let questionCtn =(`
      <p>Question: ${nextQuestion + 1} / ${questions.length}</p>
      <p class="question">${question.question}</p>
    `);
    
    let buttonCtn = `
    <div id="button-container">
      ${question.options.map((option, index) => `
        <button class="option-btn" type="button" value="${index}">${option}</button>
      `).join('')}
    </div>
  `;
    $("#myForm").html(questionCtn + buttonCtn);
  
    if (nextQuestion === questions.length - 1) {
    $("#submit").html("Submit Quiz");
    } else {
    $("#submit").html("Next Question");
    }

  };
  
  getQuestion();
  $("#myForm").on("click", ".option-btn", function() {
    $(".option-btn").removeClass("clicked");
    $(this).addClass("clicked");
  });
  

  $("#submit").on("click", () => {
    let optionSelected = $(".option-btn.clicked").val();

    if (optionSelected === undefined || optionSelected === "") {
        alert("Please choose an answer");
    } else {
        let optionSelectedValue = parseInt(optionSelected);
    
        if (optionSelectedValue === questions[nextQuestion].correct) {
            totalScore++;
        }
         if (nextQuestion === questions.length - 1) {
    if (confirm("Are you ready to submit your quiz?")) {
      localStorage.setItem("totalScore", totalScore);
      localStorage.setItem("questionsLength", questions.length);
      window.location.href = "result.html";
    }
  } else {
    nextQuestion++;
    getQuestion();
  }
}

});
