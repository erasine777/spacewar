class Obstacle {
    constructor() {
        this.r = 50;
        this.x = width;
        this.y =
            Math.round(Math.random() * (height - this.r - this.r)) + this.r;
        // this.r ~ height-this.r
        // min ≤ r ≤ max
        // Math.round(Math.random() * (max - min)) + min;
    }

    move() {
        this.x -= 10;
    }
    show() {
        //just for debug
        // fill(255,50);
        // ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.r, this.r);

        //TODO:影像大小在調整
        image(obstacleImg, this.x, this.y, this.r + 20, this.r);

        // //debug
        // fill(0,255,0,50);
        // rect(this.x, this.y, this.r, this.r);
    }
}
