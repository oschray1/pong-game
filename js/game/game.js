var ball = new Ball(new Point(50, 50), 5, new Vector(1.3, 1.7), 3, 0);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
}

function update() {
    ball.update();
}


function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();