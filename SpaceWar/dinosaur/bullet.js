class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 25;
    }

    show() {
        image(bulletImg, this.x, this.y, this.r, this.r);
    }

    hits(enemy) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = enemy.x + enemy.r * 0.5;
        let y2 = enemy.y + enemy.r * 0.5;
        return collideCircleCircle(x1, y1, this.r, x2, y2, enemy.r);
    }

    move() {
        this.x += 20;
    }
}
