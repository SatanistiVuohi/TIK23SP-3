const path = "./images/img_ivanin_peli/"
const questions = [
    {
        image: "12_00.png",
        options: ["12:00", "12:30", "13:30", "11:30"],
        correctAnswer: 1
    },
    {
        image: "12_10.png",
        options: ["13:00", "14:00", "14:30", "13:30"],
        correctAnswer: 2
    },
    {
        image: "12_25.png",
        options: ["16:30", "17:00", "17:30", "15:30"],
        correctAnswer: 2
    },
    {
        image: "12_05.png",
        options: ["16:30", "13:00", "17:30", "15:30"],
        correctAnswer: 2
    },   
    {
        image: "12_20.png",
        options: ["17:30", "16:30", "16:00", "15:30"],
        correctAnswer: 3
    },
    {
        image: "12_15.png",
        options: ["14:00", "15:00", "13:30", "16:30"],
        correctAnswer: 2
    },    
    {
        image: "12_35.png",
        options: ["19:00", "20:30", "14:00", "14:30"],
        correctAnswer: 1
    },
    {
        image: "12_30.png",
        options: ["14:30", "14:00", "17:30", "18:00"],
        correctAnswer: 4
    },  
    {
        image: "12_40.png",
        options: ["20:30", "20:00", "19:30", "16:30"],
        correctAnswer: 2
    },
    {
        image: "12_50.png",
        options: ["12:30", "22:00", "21:30", "19:30"],
        correctAnswer: 2
    }
];


let currentQuestionIndex = 0;
let points = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-image").src = path + currentQuestion.image;
    document.getElementById("result").innerText = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        document.getElementsByClassName("btn")[i].innerText = currentQuestion.options[i];
    }
}
loadQuestion();

function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedButton = document.getElementsByClassName("btn")[optionIndex];
    if (optionIndex === currentQuestion.correctAnswer - 1) {
        document.getElementById("result").innerText = "Oikein!";
        points++;
    } else {
        document.getElementById("result").innerText = "Väärin.";
    }
    selectedButton.classList.add('selected'); // Add the 'selected' class to the selected button
    setTimeout(() => {
        selectedButton.classList.remove('selected'); // Remove the 'selected' class after 2 seconds
        loadNextQuestion();
    }, 2000);

}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText = "Olet suorittanut pelin. Pisteesi: " + points;
        document.getElementById("playAgainButton").style.display = "block";
    }
}

function resetGame() {
    window.location.reload(); 
}

function navigateToPage() {
    window.location.href = "http://127.0.0.1:5500/pelit.html"; 
}

window.onload = loadQuestion;