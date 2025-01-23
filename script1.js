
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const correctAnswers = {
                q1: 'a', 
                q2: 'b', 
                q3: 'c', 
                q4: 'b', 
                q5: 'a', 
                q6: 'c', 
                q7: 'c', 
                q8: 'b', 
                q9: 'b', 
                q10: 'a' 
    };

    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackElement = document.getElementById(`feedback-${questionName}`);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[questionName]) {
                score++;
                feedbackElement.textContent = "Правильно!";
                feedbackElement.classList.add("correct");
                feedbackElement.classList.remove("incorrect");
            } else {
                feedbackElement.textContent = "Неправильно. Правильный ответ: " + correctAnswers[questionName];
                feedbackElement.classList.add("incorrect");
                feedbackElement.classList.remove("correct");
            }
            feedbackElement.classList.remove("hidden");
        } else {
            feedbackElement.textContent = "Вы не выбрали ответ.";
            feedbackElement.classList.add("incorrect");
            feedbackElement.classList.remove("correct");
            feedbackElement.classList.remove("hidden");
        }
    }

    const resultsDiv = document.getElementById('results');
    const scoreText = `Вы ответили правильно на ${score} из 10 вопросов.`;
    document.getElementById('score').textContent = scoreText;
    resultsDiv.classList.remove('hidden');
});
