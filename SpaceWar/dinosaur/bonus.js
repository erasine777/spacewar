//觸發大絕可用機制

class Bonus {
    constructor() {
        //FIXME:報錯randomNum未宣告
        // var randomNum =
        //     Math.round(Math.random() * (height - this.r - this.r)) + this.r;
        // var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

        //FIXME:靜態方法報錯bonus.js:8 Uncaught TypeError: MyMath.randomNum is not a constructor

        // var rangeRandom = new MyMath.randomNum(height, this.r);
        // var pOrM = new MyMath.plusOrMinus();

        //FIXME:沒報錯但bonus沒出現

        //TODO:多了解靜態方法再來調用
        this.r = 50;
        this.x = width;
        this.y =
            Math.round(Math.random() * (height - this.r - this.r)) + this.r;

    }

    move() {
        this.x -= 10;
        // this.y =
        //     (Math.random() < 0.5 ? -1 : 1) *
        //     (Math.floor(Math.random() * (max - min - min)) + min);
    }
    show() {
        image(bonusImg, this.x, this.y, this.r, this.r);

        // //debug
        // fill(0,255,0,50);
        // rect(this.x, this.y, this.r, this.r);
    }
}
