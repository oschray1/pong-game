class Vector {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    flipX() {
        this.dx *= -1;
    }

    flipY() {
        this.dy *= -1;
    }
}