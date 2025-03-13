// Function to check the selected answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button
    const userAnswerValue = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (userAnswerValue) {
        // Extract the value first
        const userAnswer = userAnsweValuer.value;

        // Now compare userAnswerValue with correctAnswer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
