class Rectangle extends Figure {
    constructor(position, width, height) {
        super(position);
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.rect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
        ctx.fill();
    }
}