class Game {
    static draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        Game.drawField();
        Game.drawPlayersScore();
        Game.drawOpponentsScore();

        player.draw();
        opponent.draw();
        ball.draw();
    }

    static drawField() {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
    }

    static drawPlayersScore() {
        ctx.font = "20px serif";
        const playerScore = player.score;
        const text = ctx.measureText(playerScore);
        ctx.fillText(playerScore, canvas.width / 2 - text.width - 15, 20);
    }

    static drawOpponentsScore() {
        ctx.font = "20px serif";
        const opponentsScore = opponent.score;
        const text = ctx.measureText(opponentsScore);
        ctx.fillText(opponentsScore, canvas.width / 2 + 15, 20);
    }

    static update() {
        CollisionService.checkCollisions();
        ball.update();
    }

    static gameLoop() {
        Game.draw();
        Game.update();
        requestAnimationFrame(Game.gameLoop);
    }
}

ball = new Ball(
    new Point(canvas.width / 2, canvas.height / 2),
    5,
    new Vector(1, 1),
    2,
    0);

player = new Player(new Point(2.5, canvas.height / 2), 5, 30, 5, 0);
opponent = new Player(new Point(canvas.width - 2.5, canvas.height / 2), 5, 30, 5, 0);


Game.gameLoop();