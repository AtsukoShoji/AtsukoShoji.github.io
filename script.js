// 1行目に記載している 'use strict' は削除しないでください

//1-森の背景で、クリックするたびにちがう動物の画像とそのペアの値を表示させる
//2-違う背景で、選択式の物語かクイズを出す

//右側に表示させたい文章が入った配列をつくる。（文だけだとわかりにくかったので
const array = [
    {
      class: "bear", 
      text: "くまさんがいたよ！　こんにちは！",
    },
    {
      class: "rabbit",
      text: "うさぎさんもいたよ！",
    },
    {
      class: "none", //使わないがわかりやすいように表示
      text: "あれ？　だれもいない？",
    },
    {
      class: "birdTail",
      text: "だれか　かくれているよ。<br>おしてみよう！",
    },
    {
      class: "bird",
      text: "とりさんだった！",
    },
    {
      class: "tyranHead",
      text: "だれか　きたよ。<br>おしてみよう！",
    },
    {
      class: "tyranno",
      text: "うわあ！　きょうりゅうだ！　にげろー！",
    }
];

    
//imgを取得
const picture = document.getElementsByTagName("img");
//textのclassNameを取得
const text = document.getElementsByClassName("text");

//クリック数は最初は0
let clickCount = 0;

//ボタンを押したら絵と文字を表示させる関数を宣言
function getPicture(){ 
    console.log(clickCount);
    if (clickCount < 6){
        //右側に表示させる文字を変える（文字はひとつだけなので左辺のindexは0固定。
        text[0].innerHTML = array[clickCount].text;
        // 一旦すべての絵を非表示にする（ひとつ前の画像だけhiddenだとうまくいかなかった）
        for (let i = 0; i < array.length; i++){
            picture[i].style.visibility= "hidden";
        }
        //クリックした回数に対応した絵を表示させる
        picture[clickCount].style.visibility = "visible";
        
        //鳥のしっぽと恐竜の鼻？の所はボタン非表示にしたい
        if (clickCount === 3 || clickCount === 5){
            document.getElementsByClassName("button")[0].style.visibility = 'hidden';
        }    
    //最後（恐竜がでた後）だったら、背景・恐竜・文字・ボタンも消して「またあそぼうね！」を出す
    } else {
        document.querySelector(".button").style.visibility = 'hidden';
        document.querySelector(".tyranno").style.visibility = 'hidden'
        text[0].innerHTML = "";
        document.querySelector(".backmori1").className = "backend";

        //最後の文章を書く
        document.getElementById("main").textContent = "またあそぼうね！"
    } 
    //クリック数に１を足す
    clickCount += 1
}
    

//ボタンをクリックしたらgetPictureのイベントを呼び出す
const target = document.getElementsByClassName("button");
target[0].addEventListener("click", getPicture);


//birdTailおしたら
const birdTail = document.querySelector(".birdTail");
birdTail.addEventListener("click", bird);

function bird(){
    birdTail.style.visibility = "hidden";
    text[0].innerHTML = array[clickCount].text;
    picture[clickCount].style.visibility = "visible";
    document.getElementsByClassName("button")[0].style.visibility = "visible";
    clickCount += 1
};

//tyranHeadおしたら
const tyranHead = document.querySelector(".tyranHead");
const tyranno = document.querySelector(".tyranno");
tyranHead.addEventListener("click", tyranAppear);

function tyranAppear(){
    tyranHead.style.visibility = "hidden";
    document.querySelector(".button").style.visibility = 'visible';
    document.querySelector(".button").innerHTML = "　　にげる！　　 "
    picture[clickCount].style.visibility = "visible";
    text[0].innerHTML = array[clickCount].text;
 
    //tyrannoを動かす
    tyranno.animate( [ 
        {transform: "translateX(0)"},
        {transform: "translateX(1800px)"}
        ],
        {duration: 40000,
        iterations:Infinity
        })  
};

