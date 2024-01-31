function onBallClick() {
    var ball = document.querySelector('.ball');
    if (ball.innerHTML >400) {
        ball.style.width = '100px'
        ball.style.height = '100px'
        ball.style.borderRadius = '100px'
        ball.innerHTML = '100'
        return
    }
    var value = parseInt(ball.style.height) || 100;
    value += getRandomInt(20, 60)

    ball.style.width = value + 'px'
    ball.style.height = value + 'px'
    ball.style.borderRadius = value + 'px'
    ball.innerHTML = value


}