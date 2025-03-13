// Function to check the selected answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Change text color for correct answer
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Change text color for incorrect answer
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange"; // Optional: Indicate no selection
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
