let score = 0;
let timeLeft = 10;
let timer;
let box = document.getElementById("box");

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = timeLeft;

    box.style.display = "block";
    moveBox();

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            box.style.display = "none";
            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
}

box.addEventListener("click", function () {
    score++;
    document.getElementById("score").innerText = score;
    moveBox();
});

function moveBox() {
    let gameArea = document.getElementById("gameArea");
    let maxX = gameArea.clientWidth - 50;
    let maxY = gameArea.clientHeight - 50;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}
