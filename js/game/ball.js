class Ball extends Circle {
    constructor(position, radius, moveDirection, initialSpeed, acceleration) {
        super(position, radius)
        this.moveDirection = moveDirection;
        this.initialSpeed = initialSpeed;
        this.acceleration = acceleration;
        this.time = 0;
    }

    update() {
        let speedVector = new Vector(
            this.moveDirection.dx * (this.initialSpeed + this.acceleration * this.time),
            this.moveDirection.dy * (this.initialSpeed + this.acceleration * this.time),
        );

        this.position.addVector(speedVector);

        this.checkBorders(); 

        this.time += 0.01;
    }

    checkBorders() {
        const distanceToUpperBorder = this.position.y - this.radius;
        const distanceToLowerBorder = canvas.height - this.position.y - this.radius;

        if (distanceToLowerBorder <= 0 || distanceToUpperBorder <= 0) {
            this.moveDirection.flipY();
        }

        const distanceToLeftBorder = this.position.x - this.radius;
        const distanceToRightBorder = canvas.width - this.position.x - this.radius;

        if (distanceToLeftBorder <= 0 || distanceToRightBorder <= 0) {
            this.moveDirection.flipX();
        }



    }
}