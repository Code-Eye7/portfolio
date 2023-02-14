let userName = document.getElementById('userName');
let saveHighScoreBtn = document.getElementById('saveHighScoreBtn');
let finalScore = document.getElementById('finalScore');
let recentScore = localStorage.getItem('recentScore');

console.log(recentScore)
let highScore = JSON.parse(localStorage.getItem('myScore')) || [];

console.log(highScore);
finalScore.innerText = recentScore;

userName.addEventListener('keyup', () => {
    saveHighScoreBtn.disabled = !userName.value;

});

saveHighScore = (e) => {
    e.preventDefault();
    const score = {
        score: recentScore,
        name: userName.value
    };
    highScore.push(score);
    highScore.sort((a, b) => {
        return b.score - a.score;
    });
    highScore.splice(5);
    // console.log(highScore + "wow")

    localStorage.setItem('myScore', JSON.stringify(highScore))
    // console.log(localStorage.setItem('hasan', JSON.stringify(highScore)))
};

