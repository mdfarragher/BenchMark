const app = {
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

    submit: function() {

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

        // disable all buttons in the quiz container
        document.getElementById("quiz-container").classList.add("disabled");

        // enable the red/green feedback colors
        document.getElementById("quiz-container").classList.add("show-feedback");

        // hide the submit button
        document.getElementById('submitButton').classList.add("d-none");

        // reveal the next button
        document.getElementById("nextButton").classList.remove("d-none");
    }
};