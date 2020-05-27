class Boss {
    constructor() {
        this.x = windowWidth;
        this.y = height / 2;
        this.r = 150;
        this.life = 200;
        this.xSpeed = 5;
        this.ySpeed = -2;
    }
    show() {
        image(bossImg, this.x, this.y, this.r, this.r);
        // fill(0, 255, 0, 50);
        // rect(this.x, this.y, this.r, this.r);
    }
    lifeBar(currentLife) {
        //lifeBar
        // rect(x, y, 寬, 高);

        fill(255, 0, 0, 50);
        rect(this.x, this.y - 10, this.r, 10);
        fill(255, 0, 0, 100);
        rect(this.x, this.y - 10, 150 - (200 - currentLife) * (150 / 200), 10);

        textSize(20);
        fill(255);
        text(currentLife + "/200", this.x + 37.5, this.y - 20);
    }
    set() {
        if (this.x >= width/1.5) {
            this.x += -5;
            //boss出場動畫只set一次
            // if (this.x <= windowWidth/2) {
            //     bossSet = true;
            // }
        } else bossSet = true;
    }

    move() {
        if (this.x >= width - this.r || this.x <= width / 2) {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.r || this.y < this.r) {
            this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}
