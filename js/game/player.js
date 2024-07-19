class Player extends Rectangle {
    constructor(position, width, height, step, score) {
        super(position, width, height)
        this.step = step;
        this.score = score;
    }

    moveDownOneStep() {
        const finalY = this.position.y + this.step;

        if (finalY <= canvas.height - (this.height / 2)) {
            this.position.y = finalY;
        }
    }

    moveUpOneStep() {
        const finalY = this.position.y - this.step;

        if (finalY >= this.height / 2) {
            this.position.y = finalY;
        }
    }

    get rightEdgeX() {
        return this.position.x + this.width / 2;
    }

    get leftEdgeX() {
        return this.position.x - this.width / 2;
    }
}