const app = {

    SCORE_KEY: "quizScores",

    // reset the score array to all zeroes
    resetScore: function(size) {
        const scores = Array(size).fill(0);
        localStorage.setItem(this.SCORE_KEY, JSON.stringify(scores));
    },

    // update the score for a specific question
    updateScore: function(index, size, result) {
        const scores = JSON.parse(localStorage.getItem(this.SCORE_KEY)) || Array(size).fill(0);
        if (index > 0 && index <= size)
            scores[index-1] = result ? 1 : 0;
        localStorage.setItem(this.SCORE_KEY, JSON.stringify(scores));
    },

    // get the final result for the quiz
    getResult: function(size) {
        const scores = JSON.parse(localStorage.getItem(this.SCORE_KEY)) || Array(size).fill(0);
        return scores.reduce((total, score) => total + score, 0);
    },

    // check if the user selected the correct answer(s)
    check: function() {

        // check if any selected answers are incorrect
        const selectedOptions = document.querySelectorAll('#quiz-container input:checked');
        for (const option of selectedOptions) {
            if (!option.classList.contains('correct-answer')) {
                return false;
            }
        }

        // check if any correct answers are not selected
        const correctOptions = document.querySelectorAll('#quiz-container .correct-answer');
        for (const option of correctOptions) {
            if (!option.checked) {
                return false;
            }
        }
        return true;
    },

    // process answer submission
    submit: function(index, size) {

        // warn user if no answers are selected
        const selectedOption = document.querySelector('#quiz-container input:checked');
        if (!selectedOption) {
            document.getElementById("noAnswer").classList.remove("d-none");
            return;
        } else
            document.getElementById("noAnswer").classList.add("d-none");

        // show user if the answer is correct
        const result = this.check();
        if (result)
            document.getElementById("correctAnswer").classList.remove("d-none");
        else
            document.getElementById("incorrectAnswer").classList.remove("d-none");

        // update score
        this.updateScore(index, size, result);

        // disable all buttons in the quiz container
        document.getElementById("quiz-container").classList.add("disabled");

        // enable the red/green feedback colors
        document.getElementById("quiz-container").classList.add("show-feedback");

        // hide the submit button
        document.getElementById('submitButton').classList.add("d-none");

        // reveal the next button
        document.getElementById("nextButton").classList.remove("d-none");
    },

    // show quiz results
    showResults: function(size) {

        // get final score
        const score = this.getResult(size);
        const percentage = 100 * score / size;

        // update labels
        document.getElementById("scoreLabel").innerText = score;
        document.getElementById("percentageLabel").innerText = percentage + "%";

        // update score bar
        document.getElementById("scoreBar").style.width = percentage + "%";
        document.getElementById("scoreBar").innerText = percentage + "%";

        // update passed label
        const passed = percentage >= 80; 
        document.getElementById("passedLabel").innerText = passed ? "passed" : "failed";
        document.getElementById("passedLabel").classList.add(passed ? "text-success" : "text-danger");
    }
};