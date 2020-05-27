class Alien {
    constructor() {
        this.r = 50;
        this.x = width;
        this.y =
            Math.round(Math.random() * (height - this.r - this.r)) + this.r;
        this.random = Math.floor(random() * 2);
        // this.r ~ height-this.r
        // min ≤ r ≤ max
        // Math.round(Math.random() * (max - min)) + min;
    }

    move() {
        this.x -= 5;
    }
    show() {
        let alienPic = [alien1Img, alien2Img];

        image(alienPic[this.random], this.x, this.y, this.r, this.r);
    }
}
