/*buttons*/
var deButton1 = document.querySelector("section button:first-of-type");
var deButton2 = document.querySelector("section button:nth-of-type(2)");
var deButton3 = document.querySelector("section button:nth-of-type(3)");
var deButton4 = document.querySelector("section button:nth-of-type(4)");
var deButton5 = document.querySelector("section button:nth-of-type(5)");
var deButton6 = document.querySelector("section button:nth-of-type(6)");


/********************/
/*aapjes*/
var deEerste = document.querySelector("ol li:first-of-type img");
var deTweede = document.querySelector("ol li:nth-of-type(2) img");
var deDerde = document.querySelector("ol li:nth-of-type(3) img");
var deVierde = document.querySelector("ol li:nth-of-type(4) img");
var deVijfde = document.querySelector("ol li:nth-of-type(5) img");
var deZesde = document.querySelector("ol li:nth-of-type(6) img");
var isBlack = true;


/********************/
/*darkmodus*/
var darkButton = document.querySelector("main > button");


/********************/
/*muziekje*/
var music = document.querySelector("audio");
var musicButton = document.querySelector("main > button:nth-of-type(2)");
var isPlaying = false


/********************/
/*buttons laten klikken*/
deButton1.addEventListener("click", ikBenGeklikt1);
deButton2.addEventListener("click", ikBenGeklikt2);
deButton3.addEventListener("click", ikBenGeklikt3);
deButton4.addEventListener("click", ikBenGeklikt4);
deButton5.addEventListener("click", ikBenGeklikt5);
deButton6.addEventListener("click", ikBenGeklikt6);


/********************/
/*darkmodus*/
darkButton.addEventListener("click", ikBenDonker);


/********************/
/*muziekje*/
musicButton.addEventListener("click", speelMuziek);


/********************/
/*button 1*/
function ikBenGeklikt1() {
    deEerste.classList.toggle("ikHebKleurGekregen1");
    if (deEerste.classList.contains("ikHebKleurGekregen1")) {
        deEerste.src = "../images/DK_1986.svg";
    } else {
        deEerste.src = "../images/DK_1986_bw.png";
    }
}

/*button 2*/
function ikBenGeklikt2() {
    deTweede.classList.toggle("ikHebKleurGekregen2");
    if (deTweede.classList.contains("ikHebKleurGekregen2")) {
        deTweede.src = "../images/DK_1988.svg";
    } else {
        deTweede.src = "../images/DK_1988_bw.png";
    }
}

/*button 3*/
function ikBenGeklikt3() {
    deDerde.classList.toggle("ikHebKleurGekregen3");
    if (deDerde.classList.contains("ikHebKleurGekregen3")) {
        deDerde.src = "../images/DK_1994.png";
    } else {
        deDerde.src = "../images/DK_1994_bw.png";
    }
}

/*button 4*/
function ikBenGeklikt4() {
    deVierde.classList.toggle("ikHebKleurGekregen4");
    if (deVierde.classList.contains("ikHebKleurGekregen4")) {
        deVierde.src = "../images/DK_1999.png";
    } else {
        deVierde.src = "../images/DK_1999_bw.png";
    }
}

/*button 5*/
function ikBenGeklikt5() {
    deVijfde.classList.toggle("ikHebKleurGekregen5");
    if (deVijfde.classList.contains("ikHebKleurGekregen5")) {
        deVijfde.src = "../images/DK_2010.png";
    } else {
        deVijfde.src = "../images/DK_2010_bw.png";
    }
}

/*button 6*/
function ikBenGeklikt6() {
    deZesde.classList.toggle("ikHebKleurGekregen6");
    if (deZesde.classList.contains("ikHebKleurGekregen6")) {
        deZesde.src = "../images/DK_2014.png";
    } else {
        deZesde.src = "../images/DK_2014_bw.png";
    }
}


/********************/
/*darkmodus*/
function ikBenDonker() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


/********************/
/*muziekje*/
function speelMuziek() {
    if (isPlaying) {
        music.pause()
        isPlaying = false
    } else {
        music.play()
        isPlaying = true
    }
}
