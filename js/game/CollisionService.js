class CollisionService {
    static checkCollisions() {
        this.checkBallCollisionWithWalls();
        this.checkCollisionWithPlayers();
    }

    static checkBallCollisionWithWalls() {
        const distanceToUpperBorder = ball.position.y - ball.radius;
        const distanceToLowerBorder = canvas.height - ball.position.y - ball.radius;

        if (distanceToLowerBorder <= 0 || distanceToUpperBorder <= 0) {
            ball.moveDirection.flipY();
        }

        const distanceToLeftBorder = ball.position.x - ball.radius;

        if (distanceToLeftBorder <= 0) {
            opponent.score++;
            ball.putInField();
        }

        const distanceToRightBorder = canvas.width - ball.position.x - ball.radius;

        if (distanceToRightBorder <= 0) {
            player.score++;
            ball.putInField();
        }
    }

    static getClosestXOfBall() {
        let closestEdge = ball.position.x;
        if (ball.moveDirection.dx > 0)
            return closestEdge + ball.radius;
        else return closestEdge - ball.radius;
    }

    static checkCollisionWithPlayers() {
        [player, opponent].forEach((entity) => {
            const distanceToEntity = Math.abs(entity.position.x - this.getClosestXOfBall());
            const entitiesXCoverage = entity.width / 2

            if (distanceToEntity <= entitiesXCoverage) {
                const distanceToEntitiesX = Math.abs(entity.position.y - ball.position.y);
                const entitiessCoverageY = (entity.height / 2) + ball.radius;

                if (distanceToEntitiesX <= entitiessCoverageY) {
                    ball.moveDirection.flipX();
                }
            }
        });
    }
}