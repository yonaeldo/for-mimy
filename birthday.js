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