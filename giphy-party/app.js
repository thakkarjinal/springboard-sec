const gifElement = document.getElementById("gifs");
async function searchGiphy(searchString) {
    apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: {api_key: apiKey, q: searchString}})
    const imageUrl = response.data.data[0]["images"]["downsized_large"]["url"];
    const newElement = document.createElement('img');
    newElement.src = imageUrl;
    gifElement.append(newElement);
}

formElement = document.getElementById("searchgiphy");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("giphyinput");
    const searchString = input.value;
    searchGiphy(searchString);
    input.value = "";
})

removeElement = document.getElementById("remove");
removeElement.addEventListener("click", (event) => {
    gifElement.innerHTML = "";
})