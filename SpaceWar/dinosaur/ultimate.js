class Ult {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 80;
    }
    show() {
        // image(圖片, x, y, 寬高) x,y左上角
        image(ultImg, this.x, this.y, this.r, this.r);
        // debug
        // fill(0, 255, 0, 50);
        // rect(this.x, this.y, this.r, this.r);
    }

    hits(enemy) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = enemy.x + enemy.r * 0.5;
        let y2 = enemy.y + enemy.r * 0.5;
        return collideCircleCircle(x1, y1, this.r, x2, y2, enemy.r);
    }

    move(r, c = 0) {
        //r橫 c直
        this.x += r;
        this.y += c;
    }
}
