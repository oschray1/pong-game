class Circle extends Figure {
    constructor(position, radius) {
        super(position);
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}