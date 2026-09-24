/* =========================
   ELEMENTS
========================= */

const landingScreen = document.getElementById("landingScreen");
const introScreen = document.getElementById("introScreen");
const letterScreen = document.getElementById("letterScreen");

const shayari1Screen = document.getElementById("shayari1Screen");
const shayari2Screen = document.getElementById("shayari2Screen");
const shayari3Screen = document.getElementById("shayari3Screen");
const shayari4Screen = document.getElementById("shayari4Screen");
const shayari5Screen = document.getElementById("shayari5Screen");

const finalScreen = document.getElementById("finalScreen");


/* =========================
   BUTTONS
========================= */

const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const readLetterBtn = document.getElementById("readLetterBtn");

const shayariStartBtn = document.getElementById("shayariStartBtn");

const shayari1NextBtn = document.getElementById("shayari1NextBtn");
const shayari2NextBtn = document.getElementById("shayari2NextBtn");
const shayari3NextBtn = document.getElementById("shayari3NextBtn");
const shayari4NextBtn = document.getElementById("shayari4NextBtn");

const finalNoteBtn = document.getElementById("finalNoteBtn");
const replayBtn = document.getElementById("replayBtn");


/* =========================
   ALL SCREENS
========================= */

const screens = [
    landingScreen,
    introScreen,
    letterScreen,
    shayari1Screen,
    shayari2Screen,
    shayari3Screen,
    shayari4Screen,
    shayari5Screen,
    finalScreen
];


/* =========================
   SCREEN SWITCH FUNCTION
========================= */

function showScreen(screenToShow) {

    screens.forEach((screen) => {

        if (screen) {
            screen.classList.add("hidden");
        }

    });

    screenToShow.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   OPEN SURPRISE
========================= */

openSurpriseBtn.addEventListener("click", () => {

    showScreen(introScreen);

});


/* =========================
   READ LETTER
========================= */

readLetterBtn.addEventListener("click", () => {

    showScreen(letterScreen);

});


/* =========================
   START SHAYARI
========================= */

shayariStartBtn.addEventListener("click", () => {

    showScreen(shayari1Screen);

});


/* =========================
   SHAYARI 1 → SHAYARI 2
========================= */

shayari1NextBtn.addEventListener("click", () => {

    showScreen(shayari2Screen);

});


/* =========================
   SHAYARI 2 → SHAYARI 3
========================= */

shayari2NextBtn.addEventListener("click", () => {

    showScreen(shayari3Screen);

});


/* =========================
   SHAYARI 3 → SHAYARI 4
========================= */

shayari3NextBtn.addEventListener("click", () => {

    showScreen(shayari4Screen);

});


/* =========================
   SHAYARI 4 → SHAYARI 5
========================= */

shayari4NextBtn.addEventListener("click", () => {

    showScreen(shayari5Screen);

});


/* =========================
   SHAYARI 5 → FINAL NOTE
========================= */

finalNoteBtn.addEventListener("click", () => {

    showScreen(finalScreen);

});


/* =========================
   REPLAY STORY
========================= */

replayBtn.addEventListener("click", () => {

    showScreen(landingScreen);

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(".main-button");

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,0.35)";

        ripple.style.pointerEvents = "none";

        const rect = button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left - 5}px`;

        ripple.style.top =
            `${event.clientY - rect.top - 5}px`;

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);

        ripple.animate(
            [
                {
                    transform: "scale(1)",
                    opacity: 1
                },
                {
                    transform: "scale(18)",
                    opacity: 0
                }
            ],
            {
                duration: 600,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            ripple.remove();

        }, 650);

    });

});


/* =========================
   SMALL HEART EFFECT
========================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = "-30px";

    heart.style.fontSize =
        `${14 + Math.random() * 20}px`;

    heart.style.color =
        "rgba(232, 165, 168, 0.45)";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "0";

    document.body.appendChild(heart);

    const duration =
        5000 + Math.random() * 4000;

    const horizontalMovement =
        (Math.random() - 0.5) * 150;

    heart.animate(
        [
            {
                transform:
                    "translate(0, 0) rotate(0deg)",
                opacity: 0
            },
            {
                transform:
                    `translate(${horizontalMovement / 2}px, -45vh) rotate(15deg)`,
                opacity: 0.8
            },
            {
                transform:
                    `translate(${horizontalMovement}px, -110vh) rotate(35deg)`,
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "ease-out"
        }
    );

    setTimeout(() => {

        heart.remove();

    }, duration);

}


/* =========================
   START HEART EFFECT
========================= */

setInterval(() => {

    createFloatingHeart();

}, 1800);


/* =========================
   INITIAL STATE
========================= */

showScreen(landingScreen);
