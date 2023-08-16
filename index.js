const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function()
{
    try {

        btnEl.disabled = true;
        btnEl.innerText= "Loading...";

        animeNameEl.innerText = "Updating...";

        animeImgEl.src = "spinner.svg";

        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();


        animeContainerEl.style.display="block";

        animeImgEl.src = data.url;
        animeNameEl.innerText = `Name: ${data.artist}`;

        btnEl.innerText= "Get Anime";

        btnEl.disabled = false;
        
    } catch (error) {

        console.log(error)
        
    }

})