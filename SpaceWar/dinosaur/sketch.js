//TODO:ULT充能

let dino;
let boss;
let obstacles = [];
let bullets = [];
let ults = [];
let ults1 = [];
let ults2 = [];
let aliens = [];
let bonuses = [];
let bossAttacks = [];

let playerImg;
let bulletImg;
let obstacleImg; // obstacle which can't be destor
let alien1Img; // can be shoot and get scroe
let alien2Img;
let ultImg;
let bonusImg;
let heartImg;
let bossImg;
let bossAttackImg;
let backgroundImg;

var score = 0;
var life = 3;
var difficulty = 0.005;
var timeStart, timeEnd, time;
var ultPrepared = false;
var bossSet = false;
var distFlag = false;

function preload() {
    backgroundImg = loadImage("./img/background.png");
    playerImg = loadImage("./img/player.png");
    bulletImg = loadImage("./img/bullet1.png");
    obstacleImg = loadImage("./img/rock2.png");
    alien1Img = loadImage("./img/alien1.png");
    alien2Img = loadImage("./img/alien2.png");
    ultImg = loadImage("./img/ult.png");
    bonusImg = loadImage("./img/bonus.png");
    heartImg = loadImage("./img/heart.png");
    bossImg = loadImage("./img/boss.png");
    bossAttackImg = loadImage("./img/bossAttack.png");
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    collideDebug(true); // debug mode
    dino = new Dino();
    boss = new Boss();

    noLoop();
    startBtn = createButton("Game Start!");
    startBtn.position(windowWidth / 2 - 150, windowHeight / 2);
    startBtn.style("font-size:50px;background:none;color:white");
    startBtn.mousePressed(startBtnPressed);

    pauseBtn = createButton("Pause");
    pauseBtn.position(windowWidth / 2 - 120, windowHeight - 50);
    pauseBtn.style("font-size:20px;background:none;color:white");
    pauseBtn.mousePressed(pauseBtnPressed);
    pauseBtn.style("display:none");

    reStartBtn = createButton("Again");
    reStartBtn.position(windowWidth / 2 + 40, windowHeight - 50);
    reStartBtn.style("font-size:20px;background:none;color:white");
    reStartBtn.mousePressed(reStartBtnPressed);
    reStartBtn.style("display:none");
}

function startBtnPressed() {
    loop();
    startBtn.style("display:none");
    pauseBtn.style("display:inline");
    reStartBtn.style("display:inline");
}

function pauseBtnPressed() {
    noLoop();
    startBtn.style("display:inline");
    pauseBtn.style("display:none");
}
//TODO:找出restart的方法
function reStartBtnPressed() {
    // reset(setup());
}

//FIXME:難度不會調整
// Difficulty
// console.log(typeof score); //number
// if (score == 0) {
//     difficulty = 0.01;
//     console.log("難度" + difficulty);
// } else if ((score >= 10) & (score < 20)) {
//     difficulty = 0.05;
//     console.log("難度" + difficulty);
// } else if (score >= 20) {
//     difficulty = 0.1;
//     console.log("難度" + difficulty);
// }

// //
// case "5":
//     difficulty = 0.05;
//     console.log("難度" + difficulty);
//     break;
// case "20":
//     difficulty = 0.1;
//     console.log("難度" + difficulty);
//     break;
// default:
//     difficulty = 0.01;
//     console.log("難度" + difficulty);

// SpaceBar keyCode = 32

function keyPressed() {
    //bullet
    if (keyCode == 32) {
        var bullet = new Bullet(dino.x + dino.r, dino.y + (dino.r / 2 + 8)); //特別對齊太空船槍口XD
        bullets.push(bullet);
    }
    // ctrl => ult
    else if (keyCode == 17) {
        //吃到ult才可以使用 || 充能3s
        //充能3s

        if (ultPrepared) {
            //TODO:充能3s
            // if (ultCoolDown) {
            var ult = new Ult(dino.x + dino.r, dino.y);
            ults.push(ult);
            // ultCoolDown = false;
            // clearTimeout(ultTimer);
            // }

            // var ult = new Ult(dino.x + dino.r, dino.y);
            // var ult1 = new Ult(dino.x + dino.r, dino.y + 30);
            // var ult2 = new Ult(dino.x + dino.r, dino.y - 30);

            // ults.push(ult);
            // ults1.push(ult1);
            // ults2.push(ult2);
            // ultCoolDown = false;
        }
    }
    // up down right left
    else if (keyCode) {
        dino.move();
    }
}

// function getTimeNow() {
//     //獲取此刻時間
//     var now = new Date();
//     return now.getTime();
// }
// timeStart = getTimeNow(); //獲取鍵盤按下時的時間
// time = setInterval(function() //setInterval會每100毫秒執行一次
// {
//     timeEnd = getTimeNow(); //也就是每100毫秒獲取一次時間
//     if (timeEnd - timeStart > 300) {
//         //如果此時檢測到的時間與第一次獲取的時間差有500毫秒
//         clearInterval(time); //便不再繼續重覆此函數 （clearInterval取消周期性執行）
//         console.log("長按");
//         var ult = new Ult(dino.x + dino.r, dino.y);
//         ults.push(ult);
//         console.log("長按" + time);
//     }
// }, 100);
// function keyReleased(){
//     clearInterval(time);
// }

// draw() => main area

function draw() {
    background(backgroundImg);
    //SCORE
    textSize(50);
    fill(255, 255, 255);
    text("Score:" + score, 20, 60);

    //life
    textSize(50);
    fill(255);
    text("Life:", windowWidth - 300, 60);

    //obstacle
    if (!bossSet) {
        if (random(1) < 0.01) {
            obstacles.push(new Obstacle());
        }
        for (let obs of obstacles) {
            obs.show();
            obs.move();
            if (dino.hits(obs)) {
                life--;
                obstacles.splice(obstacles.indexOf(obs), 1);
            }
        }
    }
    //Game Over!
    if (life == 0) {
        console.log("Game Over!");
        noLoop();

        textSize(50);
        fill(255);
        text("Game Over!", windowWidth / 2 - 150, windowHeight / 2);
    }

    //當ultPrapared = true
    //ultBonus便不在出現
    if (!ultPrepared) {
        if (random(1) < 0.001) {
            bonuses.push(new Bonus());
            console.log("bonus come out");
        }
        for (let bonus of bonuses) {
            bonus.show();
            bonus.move();
            for (let i = 0; i < bonuses.length; i++) {
                if (dino.hits(bonus)) {
                    console.log("獲得大絕");
                    bonuses.splice(i, 1);
                    //觸發ctrl的啟動的bool
                    ultPrepared = true;
                }
            }
        }
    }

    //dino
    dino.show();
    dino.set();
    dino.move();

    //bullet
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        if (!bossSet) {
            //when bullet hits aliens, destory him and get score
            for (let j = 0; j < aliens.length; j++)
                if (bullets[i].hits(aliens[j])) {
                    //get score
                    score++;
                    console.log("得分" + score.toString());

                    //alien destory
                    // array.splice(indexOfarray,length,[content])
                    aliens.splice(j, 1);

                    //Eliminate bullets after shooting
                    bullets.splice(i, 1);
                }
        } else {
            if (bullets[i].hits(boss)) {
                bullets.splice(i, 1);
                boss.life--;
                console.log("boss血量:" + boss.life);
            }
        }
    }

    // heart
    // Image(圖片,x,y,寬,高)
    // TODO:請嘗試更有頭腦的做法
    switch (life) {
        case 3:
            image(heartImg, windowWidth - 200, 20, 50, 50);
            image(heartImg, windowWidth - 145, 20, 50, 50);
            image(heartImg, windowWidth - 90, 20, 50, 50);
            break;
        case 2:
            image(heartImg, windowWidth - 200, 20, 50, 50);
            image(heartImg, windowWidth - 145, 20, 50, 50);
            break;
        case 1:
            image(heartImg, windowWidth - 200, 20, 50, 50);
            break;
    }

    //ult
    for (let i = 0; i < ults.length; i++) {
        ults[i].show();
        ults[i].move(15);
        // ults1[i].show();
        // ults1[i].move(15, 2);
        // ults2[i].show();
        // ults2[i].move(15, -2);
        if (!bossSet) {
            for (let j = 0; j < aliens.length; j++) {
                if (
                    ults[i].hits(aliens[j])
                    // ||
                    // ults1[i].hits(aliens[j]) ||
                    // ults2[i].hits(aliens[j])
                ) {
                    score++;
                    console.log("得分" + score.toString());
                    aliens.splice(j, 1);
                }
            }
        } else {
            //FIXME:大招射出有問題
            //FIXME:先改單發,一次扣5滴
            if (ults[i].hits(boss)) {
                ults.splice(i, 1);
                boss.life -= 5;
            }
            // else if (ults1[i].hits(boss)) {
            //     ults1.splice(i, 1);
            //     boss.life--;
            // } else if (ults2[i].hits(boss)) {
            //     ults2.splice(i, 1);
            //     boss.life--;
            // }
        }
    }

    //alien
    if (!bossSet) {
        if (random(1) < difficulty) {
            aliens.push(new Alien());
            console.log("alien comeimg out");
        }
        for (let alien of aliens) {
            alien.show();
            alien.move();
        }
    }

    //boss
    //分數>=20 and 有大招 =>boss觸發
    //TODO:完成後再寫入條件 先寫score=1 做測試 完成後改20
    if (score >= 5 && ultPrepared) {
        boss.show();
        boss.lifeBar(boss.life);
        //TODO:兩個if是因為要先完成出場動畫再隨機移動,嘗試更好的寫法
        if (!bossSet) {
            boss.set();
        }
        if (bossSet) {
            boss.move();
            //TODO: bossAttack
            //FIXME:push new bossattack => boss變成上下動????
            if (random(1) < 0.01) {
                var bossAttack = new BossAttack(boss.x, boss.y+30);
                bossAttacks.push(bossAttack);
                console.log("boss attack");
            }
            for (let i = 0; i < bossAttacks.length; i++) {
                bossAttacks[i].show();
                bossAttacks[i].move();
                if (dino.hits(bossAttacks[i])) {
                    life--;
                    bossAttacks.splice(i, 1);
                    console.log("生命值剩下:" + life);
                }
            }
        }

        if (boss.life == 0) {
            console.log("Congratulations!");
            noLoop();

            textSize(50);
            fill(255);
            text("Congratulations !", windowWidth / 2 - 180, windowHeight / 2);
        }
    }
}
