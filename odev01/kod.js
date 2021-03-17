const cards = document.querySelectorAll('.Kart');

let dondumu = false;
let lock = false;
let birinci, ikinci;

function dondur() {
  if (lock) return;
  if (this === birinci) return;

  this.classList.add('flip');

  if (!dondumu) {
    dondumu = true;
    birinci = this;

    return;
  }

  ikinci = this;
  checkForMatch();
}

function checkForMatch() {
  if(birinci.dataset.framework === "cat"){
  
    
document.getElementById("p1").innerHTML="Kazandınız";
  reset();
}
}

function disableCards() {
  birinci.removeEventListener('click', dondur);
  ikinci.removeEventListener('click', dondur);

  reset();
}

function geridondur() {
  lock = true;

  setTimeout(() => {
    birinci.classList.remove('flip');
    ikinci.classList.remove('flip');

    reset();
  }, 15);
}

function reset() {
  [dondumu, lock] = [false, false];
  [birinci, ikinci] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', dondur));