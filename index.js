var canvas, g;
var canvas_b, g_b;
var characterPosX, characterPosY, characterimage;
var backgroundPosX, backgroundPosY, backgroundimage;
var speed, acceleration;

////サイト接続時のパスワード入力
//let master = "2525";
//let word = "";
//let number ="0123456789";
//for (let o = 0; o < 4; o++) {
//    word += number[Math.floor(Math.random() * number.length)];
//}
//console.log(word);
//
//let i = 0;
//do{
//    let pas = prompt('パスワードを入力してください');
//    if(pas == word || pas == master) {
//        i = i+1;
//    } else {
//        alert("パスワードが違います");
//    }
//}while(i == 0)

onload = function () {
  // 描画コンテキストの取得
  canvas = document.getElementById("gamecanvas");
  canvas_b = document.getElementById("gamecanvas-b")
  g = canvas.getContext("2d");
  g_b = canvas_b.getContext("2d");
  // 初期化
  init();
  // 入力処理の指定
  document.onkeydown = keydown();
  // ゲームループの設定 60FPS
  setInterval("gameloop()", 16);
};

function audio() {
  document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
  document.getElementById('btn_audio').play(); //クリックしたら音を再生
}

function init() {
  backgroundPosX = 0;
  backgroundPosY = -30;
  backgroundimage = new Image();
  backgroundimage.src = "./background.png";
  console.log("背景描画");


  characterPosX = 240;
  characterPosY = 240;
  characterimage = new Image();
  characterimage.src = "./hori2.png";
  console.log("堀参戦");

}
addEventListener("keydown", keydown);
  function keydown() {
    speed = 0;
    acceleration = 0;
  }

//乱数
function buttle(){
  let buttle_pa = "";
  let number ="0123456789";
  for (let o = 0; o < 2; o++) {
      buttle_pa += number[Math.floor(Math.random() * number.length)];
      if(buttle_pa === "00" || buttle_pa === "01" || buttle_pa === "02"){
        audio();
      }
  }
  console.log(buttle_pa);

}

addEventListener("keydown", wasd);
  function wasd(e) {
    if(e.key === 'd' || e.key === 'D' || e.key === "ArrowRight") {
        //console.log("right");
        backgroundPosX = backgroundPosX - 2;
        buttle();
      }else{if (e.key === 'a' || e.key === 'A' || e.key === "ArrowLeft"){
        //console.log("left");
        backgroundPosX = backgroundPosX + 2;
        buttle();
      }else{if(e.key === 's' || e.key === "ArrowDown"){
        backgroundPosY = backgroundPosY - 2;
        buttle();
      }else{if(e.key === 'w' || e.key === "ArrowUp"){
        backgroundPosY = backgroundPosY + 2;
        buttle();
      }}
        return;
      }
      }
  }

function gameloop() {
  update();
  draw();
}

function update() {
  speed = speed + acceleration;
  characterPosY = characterPosY + speed;
  if(backgroundPosX < -30) {
    backgroundPosX = -30;
  }
  if(backgroundPosY < -30) {
    backgroundPosY = -30
  }
  if(backgroundPosX > 500) {
    backgroundPosX = 500;
  }
  if(backgroundPosY > 500) {
    backgroundPosY = 500;
  }
  
}


function draw() {
  g_b.fillStyle = "rgb(0,0,0)";
  g_b.fillRect(0, 0, 480, 480);

  canvas.width = canvas.width;
  g.drawImage(
    characterimage,
    characterPosX - characterimage.width / 2,
    characterPosY - characterimage.height / 2
  );
  canvas_b.width = canvas_b.width;
  g_b.drawImage(
    backgroundimage,
    backgroundPosX - backgroundimage.width / 2,
    backgroundPosY - backgroundimage.height / 2
  );
}