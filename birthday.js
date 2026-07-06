document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("openLetterBtn");
    const letter = document.querySelector(".letter");
    const typing = document.getElementById("typing");

    const text = `Happy Birthday my love ❤️

Every day with you feels like a dream I never want to wake up from.
You are my peace, my happiness, and my favorite person in the world.

Thank you for being in my life.
I love you more than words can ever explain.`;

    let i = 0;

    btn.addEventListener("click", () => {

        document.getElementById("letter")
            .scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {

            letter.style.opacity = "1";

            if (i === 0) typeWriter();

        }, 500);
    });

    function typeWriter() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

});
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftButton.addEventListener("click", () => {

    giftMessage.style.display = "block";

    giftButton.style.display = "none";

});
function createHeart() {

    const heart = document.createElement("div");

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💓",
        "❤️"
    ];

    heart.classList.add("heart");

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 6 + 6 + "s";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 250);
const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = photo.src;
    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});
const blowButton =
document.getElementById("blowCandles");

blowButton.addEventListener("click", () => {

    document
    .querySelectorAll(".candle")
    .forEach(candle => {

        candle.style.setProperty(
            "--flame",
            "none"
        );

        candle.style.opacity = "0.7";

        const flame =
        candle.querySelector("span");
    });

    document
    .querySelectorAll(".candle")
    .forEach(candle => {

        candle.style.setProperty(
            "opacity",
            "0.8"
        );

        candle.style.setProperty(
            "filter",
            "brightness(.9)"
        );

        candle.style.setProperty(
            "transition",
            ".5s"
        );

        candle.style.setProperty(
            "--dummy",
            "0"
        );

        candle.style.setProperty(
            "position",
            "relative"
        );

        candle.style.setProperty(
            "overflow",
            "visible"
        );

        candle.style.setProperty(
            "background",
            "white"
        );

        candle.style.setProperty(
            "height",
            "60px"
        );

        candle.style.setProperty(
            "width",
            "12px"
        );

        candle.style.setProperty(
            "borderRadius",
            "2px"
        );

        candle.style.setProperty(
            "--remove",
            "1"
        );

        candle.classList.add("blown");
    });

    const style =
    document.createElement("style");

    style.innerHTML = `
    .candle.blown::before{
        display:none;
    }
    `;

    document.head.appendChild(style);

    document
    .getElementById("birthdayMessage")
    .style.display = "block";

});
