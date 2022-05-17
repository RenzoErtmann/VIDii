/*buttons*/
var deButton1 = document.querySelector(".eerste");
var deButton2 = document.querySelector(".tweede");
var deButton3 = document.querySelector(".derde");
var deButton4 = document.querySelector(".vierde");
var deButton5 = document.querySelector(".vijfde");
var deButton6 = document.querySelector(".zesde");

/*aapjes*/
var deEerste = document.querySelector(".eersteaap");
var deTweede = document.querySelector(".tweedeaap");
var deDerde = document.querySelector(".derdeaap");
var deVierde = document.querySelector(".vierdeaap");
var deVijfde = document.querySelector(".vijfdeaap");
var deZesde = document.querySelector(".zesdeaap");

var isBlack = true;

/*buttons laten klikken*/
deButton1.addEventListener("click", ikBenGeklikt1);
deButton2.addEventListener("click", ikBenGeklikt2);
deButton3.addEventListener("click", ikBenGeklikt3);
deButton4.addEventListener("click", ikBenGeklikt4);
deButton5.addEventListener("click", ikBenGeklikt5);
deButton6.addEventListener("click", ikBenGeklikt6);

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
