let img = document.createElement("img");
let box = document.querySelector(".box")

setInterval(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            img.src = data.message;
            box.appendChild(img);
        });

}, 2000)
