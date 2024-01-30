function onBallClick() {
    var ball = document.querySelector('.ball');
    var value = parseInt(ball.style.height) || 100;
    value += 50;

    ball.style.width = value + 'px';
    ball.style.height = value + 'px';
    ball.style.borderRadius = value + 'px';
    ball.innerHTML = value

}