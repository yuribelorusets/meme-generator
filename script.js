let topText = document.getElementById("topText");

let botText = document.getElementById("botText");

let button = document.getElementById("submit");

let memeForm = document.getElementById("memeForm");

let formImg = document.getElementById("img");

let formUrl = document.getElementById("url");

let reset = document.getElementById("reset");

let memes = document.getElementById("memes");

let form = document.querySelector("form");

console.log(reset)

button.addEventListener("click", function (evt) {
    if (!formImg.files[0] && !formUrl.value) {
        alert("Please provide an image.");
        return;
    }

    if (formImg.files[0] && formUrl.value) {
        alert("Please provide one image source.");
        return;
    }

    evt.preventDefault();

    memeForm.style.display = "none";

    let meme = document.createElement("div");
    memes.prepend(meme);
    meme.classList.add("meme");

    let memeTop = document.createElement("h2");
    meme.appendChild(memeTop);
    memeTop.classList.add("memeTop");

    let memeBot = document.createElement("h2");
    meme.appendChild(memeBot);
    memeBot.classList.add("memeBot");

    let memeImg = document.createElement("img");
    meme.appendChild(memeImg);
    memeImg.classList.add("memeImg");

    let memeDelete = document.createElement("button");
    meme.appendChild(memeDelete);
    let memeDeleteText = document.createElement("div");
    memeDelete.appendChild(memeDeleteText);
    memeDeleteText.innerHTML = "&#10005;";
    memeDelete.classList.add("memeDelete");
    memeDeleteText.classList.add("memeDeleteText");

    if (formImg.files[0]) {
        memeImg.src = URL.createObjectURL(formImg.files[0]);
    }

    if (formUrl.value) {
        memeImg.src = formUrl.value;
    }
    memeTop.innerText = topText.value;
    memeBot.innerText = botText.value;

    memeDelete.addEventListener("click", function () {
        meme.remove();
    });

});

reset.addEventListener("click", function () {
    memeForm.style.display = "flex";
    form.reset();
});


