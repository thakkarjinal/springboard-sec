function countDown(number) {
    const id = setInterval(function() {
        if (number === 0) {
            clearInterval(id);
            console.log("Done!");
            return;
        }
        console.log(number--);
    }, 1000)
}

countDown(6);

function randomGame() {
    let counter = 0;
    const id = setInterval(function() {
        let random = Math.round(Math.random() * 100) / 100;
        console.log(random);
        counter++;
        if (random > 0.75) {
            console.log(counter - 1);
            clearInterval(id);
        }

    }, 1000)
}

randomGame();