// import functions and grab DOM elements
import { verifyYes } from './verify-yes.js';

const button = document.getElementById('launch-button');
const testResults = document.getElementById('test-results');
const numQuestions = 3

button.addEventListener('click', () => {
    // user's name                                     
    const userName = prompt('What is your name, child?');

    // confirm if user wants to take test
    const confirmSoul = confirm(`Are you sure you want grow as a person, ${userName}?`);
    
    if (!confirmSoul) {
        alert('Another time then perhapse.');
        return;
    }

    let correctAnswers = 0;

    // Three YES/NO questions (using `prompt` calls) about the subject. Use your `countsAsAYes` function to determine the user's response, then compare to the correct answer. Track number of correct responses.
    const question1Responce = prompt(`${userName}, has the fight for justice been won?`);

    if (!verifyYes(question1Responce)) {
        correctAnswers++;
    }

    const question2Responce = prompt(`${userName}, is one's body inviolable, subject to one's own will alone?`);

    if (verifyYes(question2Responce)) {
        correctAnswers++;
    }

    const question3Responce = prompt(`Last question, ${userName}. Should one distort science to fit one's beliefs?`);

    if (!verifyYes(question3Responce)) {
        correctAnswers++;
    }

    alert(`${userName} We are finished here. Procede to see your results.`);

    testResults.textContent = `${userName}, you answered ${correctAnswers} correctly out of ${numQuestions} questions.`;

    if (correctAnswers <= 2) {
        testResults.style.backgroundImage = 
    }
});
// initialize state
// class hidden if score is 4 out of 4 then display
// set event listeners to update state and DOM