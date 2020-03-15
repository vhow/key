window.addEventListener("keydown", function (event) {
    event.preventDefault();

    const label = document.querySelector(".label");
    label.textContent = event.key == " " ? "Space" : event.key.replace(/^[a-z]\b/,
        function (ch) {
            return ch.toUpperCase();
        });

    const info = document.querySelector(".info");

    const key = info.querySelector(".key>.value");
    key.textContent = event.key;

    const which = info.querySelector(".which>.value");
    which.textContent = event.which;

    const keyCode = info.querySelector(".keyCode>.value");
    keyCode.textContent = event.keyCode;

    const code = info.querySelector(".code>.value");
    code.textContent = event.code;
});