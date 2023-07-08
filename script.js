let chosenPalette = 0;
let previousPaletteBox = null; // Önceki seçim için bir değişken

paletteBox1DOM = document.querySelector(".pal-ind");
paletteBox2DOM = document.querySelector("#palbox2");
paletteBox3DOM = document.querySelector("#palbox3");
paletteBox4DOM = document.querySelector("#palbox4");
paletteBox5DOM = document.querySelector("#palbox5");

inpBtnDOM = document.getElementById("sub")

sliderDOM = document.getElementById("myRange")


window.onload = function () {
    const frequency = localStorage.getItem('frequency');
    console.log(frequency); // Frekansı konsola yazdırır

    const sliderDOM = document.getElementById("myRange");
    sliderDOM.value = 10
}


paletteBox1DOM.addEventListener("click", choosingPalette1);
paletteBox2DOM.addEventListener("click", choosingPalette2);
paletteBox3DOM.addEventListener("click", choosingPalette3);
paletteBox4DOM.addEventListener("click", choosingPalette4);
paletteBox5DOM.addEventListener("click", choosingPalette5);


function defFrequency() {
    rangeValue = 10;
}

function setFrequency() {
    const rangeValue = parseInt(document.getElementById('myRange').value);
    let frequency;

    switch (rangeValue) {
        case 1:
            frequency = 475;
            break;
        case 2:
            frequency = 450;
            break;
        case 3:
            frequency = 425;
            break;
        case 4:
            frequency = 400;
            break;
        case 5:
            frequency = 375;
            break;
        case 6:
            frequency = 350;
            break;
        case 7:
            frequency = 325;
            break;
        case 8:
            frequency = 300;
            break;
        case 9:
            frequency = 275;
            break;
        case 10:
            frequency = 250;
            break;
        case 11:
            frequency = 225;
            break;
        case 12:
            frequency = 200;
            break;
        case 13:
            frequency = 175;
            break;
        case 14:
            frequency = 150;
            break;
        case 15:
            frequency = 125;
            break;
        case 16:
            frequency = 100;
            break;
        case 17:
            frequency = 75;
            break;
        case 18:
            frequency = 50;
            break;
        case 19:
            frequency = 25;
            break;
        case 20:
            frequency = 1;
            break;
        default:
            frequency = 0;
            break;
    }

    localStorage.setItem('frequency', frequency.toString());
}

function choosingPalette1() {
    if (previousPaletteBox) {
        previousPaletteBox.style.borderColor = "hsla(0, 0%, 100%, 0.699)"; // Eski seçimin kenar rengini geri al
    }
    chosenPalette = 1;
    console.log(chosenPalette);
    this.style.borderColor = "#5501fd";
    previousPaletteBox = this; // Geçerli seçimi kaydet
}
function choosingPalette2() {
    if (previousPaletteBox) {
        previousPaletteBox.style.borderColor = "hsla(0, 0%, 100%, 0.699)"; // Eski seçimin kenar rengini geri al
    }
    chosenPalette = 2;
    console.log(chosenPalette);
    this.style.borderColor = "#5501fd";
    previousPaletteBox = this; // Geçerli seçimi kaydet
}
function choosingPalette3() {
    if (previousPaletteBox) {
        previousPaletteBox.style.borderColor = "hsla(0, 0%, 100%, 0.699)"; // Eski seçimin kenar rengini geri al
    }
    chosenPalette = 3;
    console.log(chosenPalette);
    this.style.borderColor = "#5501fd";
    previousPaletteBox = this; // Geçerli seçimi kaydet
}
function choosingPalette4() {
    if (previousPaletteBox) {
        previousPaletteBox.style.borderColor = "hsla(0, 0%, 100%, 0.699)"; // Eski seçimin kenar rengini geri al
    }
    chosenPalette = 4;
    console.log(chosenPalette);
    this.style.borderColor = "#5501fd";
    previousPaletteBox = this; // Geçerli seçimi kaydet
}
function choosingPalette5() {
    if (previousPaletteBox) {
        previousPaletteBox.style.borderColor = "hsla(0, 0%, 100%, 0.699)"; // Eski seçimin kenar rengini geri al
    }
    chosenPalette = 5;
    console.log(chosenPalette);
    this.style.borderColor = "#5501fd";
    previousPaletteBox = this; // Geçerli seçimi kaydet
}

inpBtnDOM.addEventListener("click", sendDisco);

function sendDisco(e) {
    e.preventDefault();
    if (chosenPalette === 1) {
        window.location.href = "classic-colors.html";
    } else if (chosenPalette === 2) {
        window.location.href = "bisexsual-colors.html";
    } else if (chosenPalette === 3) {
        window.location.href = "pastel-colors.html";
    } else if (chosenPalette === 4) {
        window.location.href = "retro-colors.html";
    } else if (chosenPalette === 5) {
        window.location.href = "summer-colors.html";
    } else {
        openModal();
    }
}

function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    setTimeout(function () {
        closeModal();
    }, 1250);
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
