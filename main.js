const number = document.querySelector('.number');
const advice = document.querySelector('.advice');
const btnDice = document.querySelector('#dado');

btnDice.addEventListener('click', adviceGetter);

function adviceGetter(){
    const randomNum = Math.floor(Math.random() * 1000);
    fetch(`https://api.adviceslip.com/advice?rand=${randomNum}`)
    .then(e => e.json())
    .then(data => {
        updateQuote(data.slip)
    }).catch(e => console.log(e));
}

function updateQuote(data){
    number.innerHTML = `Advice #${data.id}`;
    advice.innerHTML = `"${data.advice}"`;
}



