class Ball extends Circle {
    constructor(position, radius, moveDirection, initialSpeed, acceleration) {
        super(position, radius)
        this.moveDirection = moveDirection;
        this.initialSpeed = initialSpeed;
        this.acceleration = acceleration;
        this.accerelatedSpeed = 0;
    }

    update() {
        let speedVector = new Vector(
            this.moveDirection.dx * (this.initialSpeed + this.accerelatedSpeed),
            this.moveDirection.dy * (this.initialSpeed + this.accerelatedSpeed),
        );

        this.position.addVector(speedVector);

        this.accerelatedSpeed += this.acceleration;
    }

    putInField() {
        this.position = new Point(canvas.width / 2, canvas.height / 2);
        this.moveDirection = new Vector(1, 1);
        this.accerelatedSpeed = 0;
    }

    get rightEdgeX() {
        return this.position.x + this.radius;
    }

    get leftEdgeX() {
        return this.position.x - this.radius;
    }
}