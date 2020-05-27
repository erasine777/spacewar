class MyMath {
    static plusOrMinus() {
        return Math.random() < 0.5 ? -1 : 1;
    }
    static randomNum(max, min) {
        // Math.round(Math.random() * (height - this.r - this.r)) + this.r;
        return Math.floor(Math.random() * (max - min - min)) + min;
    }
}
