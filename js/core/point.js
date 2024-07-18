class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(vector) {
        this.x += vector.dx;
        this.y += vector.dy;
        return this;
    }
}