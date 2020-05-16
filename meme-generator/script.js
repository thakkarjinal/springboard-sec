const urlInput = document.querySelector('#meme-url');
const upperTextInput = document.querySelector('#upper-text');
const lowerTextInput = document.querySelector('#lower-text');
const formElement = document.querySelector('form');
const memeContainer = document.querySelector('.meme-container');

function addMeme(id, url, upperTextValue='', lowerTextValue='') {
    let memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
    memeDiv.id = id;
    memeImg = document.createElement('img');
    memeImg.src = url;
    memeDiv.append(memeImg);

    let upperText = document.createElement('span');
    upperText.innerText = upperTextValue;
    upperText.classList.add('upper');
    
    let lowerText = document.createElement('span');
    lowerText.innerText = lowerTextValue;
    lowerText.classList.add('lower');

    memeDiv.append(upperText, lowerText);
    memeContainer.append(memeDiv);
}

function generateMeme() {
    let id = Date.now()
    addMeme(id, urlInput.value, upperTextInput.value, lowerTextInput.value)
    memeObj = {
        id: id,
        url: urlInput.value,
        upperText: upperTextInput.value,
        lowerText: lowerTextInput.value,
    }
    let memesFromStorage = JSON.parse(localStorage.getItem('meme'));
    memeArray = memesFromStorage || [];
    memeArray.push(memeObj);
    localStorage.setItem('meme', JSON.stringify(memeArray));
}

function deleteMeme(divToDelete) {
    let id = divToDelete.id;
    
    divToDelete.remove();
    let memesFromStorage = JSON.parse(localStorage.getItem('meme'));
    for(let meme of memesFromStorage) {
        if (meme["id"] == id) {
            memesFromStorage.splice(memesFromStorage.indexOf(meme), 1);
            localStorage.setItem('meme', JSON.stringify(memesFromStorage));
            return;
        }
    }
    
}

if(localStorage.getItem('meme')) {
    let memesFromStorage = JSON.parse(localStorage.getItem('meme'));
    for (let meme of memesFromStorage) {
        addMeme(meme["id"], meme["url"], meme["upperText"], meme["lowerText"])
    }
}

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    generateMeme();
    formElement.reset();
});

memeContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('meme')) {
        deleteMeme(event.target);
    } 
    else if (event.target.classList.contains('upper') || event.target.classList.contains('upper') || event.target.tagName === "IMG") {
        deleteMeme(event.target.parentElement);
    }
});