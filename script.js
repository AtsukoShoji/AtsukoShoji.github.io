'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//1-森の背景で、クリックするたびにちがう動物の画像とそのペアの値を表示させる
//2-1の最後に選んだボタンによって物語を変える（クイズにする？）

//右側に表示させたい文章が入った配列をつくる。（文だけだとわかりにくかったのでclass名も加えてオブジェクトにした）
const array = [
    {
        class: "bear", 
      text: "くまさんがいたよ！　こんにちは！",
    },
    {
      class: "none", //使わないがわかりやすいように表示
      text: "だれか　かくれているよ。<br>おしてみよう！",
    },
    {
      class: "rabbit",
      text: "うさぎさんみつけた！<br>  ",
    },
    {
      class: "birdTail",
      text: "またかくれているよ。<br>さがしてみよう！",
    },
    {
      class: "bird",
      text: "とりさんだった！<br>  ",
    },
    {
      class: "tyranHead",
      text: "つぎはだれかな？",
    },
    {
      class: "tyranno",
      text: "うわあ！きょうりゅうだ！<br>どうしよう？",
    }
];

    
//imgを取得
const picture = document.getElementsByTagName("img");
//textのclassNameを取得
const text = document.getElementsByClassName("text");
//ボタン２は非表示にしておく
document.querySelector(".button2").style.visibility = "hidden";

//ボタンをクリックしたらgetPictureのイベントを呼び出す
const button1 = document.querySelector(".button1");
button1.addEventListener("click", getPicture);

//クリック数は最初は0
let clickCount = 0;

//ボタンを押したら絵と文字を表示させる関数を宣言
function getPicture(){ 
    console.log(clickCount);
    if (clickCount < 6){
        //右側に表示させる文字を変える（文字はひとつだけなので左辺のindexは0固定。
        text[0].innerHTML = array[clickCount].text;
        //for-loopを使用で一旦すべての絵を非表示にする（ひとつ前の画像だけhiddenだとうまくいかなかった）
        for (let i = 0; i < array.length; i++){
            picture[i].style.visibility= "hidden";
        }
        //クリックした回数に対応した絵を表示させる
        picture[clickCount].style.visibility = "visible";
        
        //鳥のしっぽと恐竜の鼻？の所はボタン非表示にしたい
        if (clickCount === 1 || clickCount === 3 || clickCount === 5){
            button1.style.visibility = 'hidden';
            // document.querySelector(".button1").style.visibility = 'hidden';
        } 
        //処理順としては、次に 鳥のしっぽ か恐竜の頭を押す（別のクリックイベント）
    //最後（恐竜がでた後）だったら、main1を非表示にしてmain2を出す
    } else {
        document.getElementById("main").style.display = 'none';
        document.getElementById("main2").style.display = "block";
    } 
    //クリック数に１を足す
    clickCount += 1
}



//birdTailおしたら
const birdTail = document.querySelector(".birdTail");
const rabbitEar = document.querySelector(".rabbitEar")
birdTail.addEventListener("click", bird);
rabbitEar.addEventListener("click", rabbit);

function bird(){
    birdTail.style.visibility = "hidden";
    text[0].innerHTML = array[clickCount].text;
    picture[clickCount].style.visibility = "visible";
    button1.style.visibility = "visible";
    clickCount += 1
};

function rabbit(){
  rabbitEar.style.visibility = "hidden";
  text[0].innerHTML = array[clickCount].text;
  picture[clickCount].style.visibility = "visible";
  button1.style.visibility = "visible";
  clickCount += 1
};

//tyranHeadおしたら
const tyranHead = document.querySelector(".tyranHead");
const tyranno = document.querySelector(".tyranno");
tyranHead.addEventListener("click", tyranAppear);

function tyranAppear(){
    tyranHead.style.visibility = "hidden";
    button1.style.visibility = 'visible';
    //ボタンを「くりっくしてね！」ではなく「にげる！」に変更
    button1.innerHTML = "　　にげる！　　 "
    document.querySelector(".button2").style.visibility = "visible";
    picture[clickCount].style.visibility = "visible";
    text[0].innerHTML = array[clickCount].text;
 
    //tyrannoを動かす
    tyranno.animate( [ 
        {transform: "translateX(0)"},
        {transform: "translateX(1800px)"}
        ],
        {duration: 30000,
        iterations:Infinity
        })  
};


//いっしょにあそぼう！(button2）をクリックしたらmain1を非表示にしてmain2を表示する
const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
  document.getElementById("main").style.display = 'none';
  document.getElementById("main3").style.display = 'block';
});

//main2,main3つくる


