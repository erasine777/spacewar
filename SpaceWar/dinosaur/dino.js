class Dino {
    constructor() {
        this.r = 100;
        this.x = 20;
        this.y = height - this.r;
        this.moveSpeed = 10;
    }

    hits(stuff) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = stuff.x + stuff.r * 0.5;
        let y2 = stuff.y + stuff.r * 0.5;
        // //use lib cuz polygon detection too difficult
        return collideCircleCircle(x1, y1, this.r, x2, y2, stuff.r);
    }

    set() {
        //constrain(限制物,最小值,最大值)
        this.x = constrain(this.x, 0, width - this.r);
        this.y = constrain(this.y, 0, height - this.r);
    }
    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.moveSpeed;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.moveSpeed;
        } else if (keyIsDown(UP_ARROW)) {
            this.y -= this.moveSpeed;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y += this.moveSpeed;
        }
    }
    show() {
        //image(圖片,起始x,起始y,width,height);
        image(playerImg, this.x, this.y, this.r, this.r);

        //debug
        // fill(255,50);
        // rect(this.x, this.y, this.r, this.r);
    }
}
