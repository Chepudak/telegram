let tg = window.Telegram.WebAdd;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "2cab37";

let item = "";

let abtn1 = document.getElementsByClassName("add");
let abtn2 = document.getElementsByClassName("add");
let abtn3 = document.getElementsByClassName("add");
let abtn4 = document.getElementsByClassName("add");
let abtn5 = document.getElementsByClassName("add");
let abtn6 = document.getElementsByClassName("add");

let rbtn1 = document.getElementsByClassName("remove");
let rbtn2 = document.getElementsByClassName("remove");
let rbtn3 = document.getElementsByClassName("remove");
let rbtn4 = document.getElementsByClassName("remove");
let rbtn5 = document.getElementsByClassName("remove");
let rbtn6 = document.getElementsByClassName("remove");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById("btn5");
// let btn6 = document.getElementById("btn6");

abtn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 1!");
    item = "";
    tg.MainButton.show();
  }
});
abtn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 2!");
    item = "";
    tg.MainButton.show();
  }
});
abtn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 3!");
    item = "";
    tg.MainButton.show();
  }
});
abtn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 4!");
    item = "";
    tg.MainButton.show();
  }
});
abtn5.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 5!");
    item = "";
    tg.MainButton.show();
  }
});
abtn6.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Оплатить товар 6!");
    item = "";
    tg.MainButton.show();
  }
});

rbtn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы убрали товар 1!");
    item = "";
    tg.MainButton.show();
  }
});
rbtn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы убрали товар 2!");
    item = "";
    tg.MainButton.show();
  }
});
rbtn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы убрали товар 3!");
    item = "";
    tg.MainButton.show();
  }
});
rbtn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы  убрали товар 4!");
    item = "";
    tg.MainButton.show();
  }
});
rbtn5.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы убрали товар 5!");
    item = "";
    tg.MainButton.show();
  }
});
rbtn6.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText("Вы убрали товар 6!");
    item = "";
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainBottonClicked", function () {
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.firs_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
