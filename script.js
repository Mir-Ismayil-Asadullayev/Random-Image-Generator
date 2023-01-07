let img = document.createElement("img");

setInterval(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => img.src = data.message);

}, 2000)
