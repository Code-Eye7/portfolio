let scoreListDisplay = document.getElementById('scoreListDisplay');
let highScore = JSON.parse(localStorage.getItem('myScore'));
scoreListDisplay.innerHTML = highScore.map((score) => {
    return `<li class="high-score"> ${score.name}--${score.score}`
}).join("-_-");