'use strict';
let a = 0;
const b = String(a);
a = String(a);
console.log(typeof String(a), typeof b, typeof a);
const score0 = document.querySelector(`#score--0`);
score0.textContent = 0;
console.log(Number(score0.textContent));
console.log(typeof Number(score0.textContent));
score0.textContent = Number(score0.textContent);
console.log(typeof score0.textContent);
const score1 = document.querySelector(`#score--1`);
score1.textContent = 0;

const hi = document.querySelector(`.dice`);
hi.classList.add(`hidden`);
let cout = 0;
// _switch() {

// }
let scoreall = 0;
const roll = document.querySelector(`.btn--roll`);
const current0 = document.querySelector(`#current--0`);
const current1 = document.querySelector(`#current--1`);
roll.addEventListener(`click`, function () {
    hi.classList.remove(`hidden`);
    // score0.textContent = Math.trunc(Math.random() * 6 + 1);
    const dicee = Math.trunc(Math.random() * 6 + 1);
    // if (score0.textContent = 1) {
    //     _switch();
    // }
    hi.src = `dice-${dicee}.png`; //significant
    console.log(dicee);
    if (cout == 0) {
        if (dicee != 1) {
            scoreall += dicee;
            current0.textContent = scoreall;

        }
        if (dicee === 1) {
            current0.textContent = 0;
            cout = 1;
            scoreall = 0;
        }
    } else {
        if (dicee != 1) {
            scoreall += dicee;
            current1.textContent = scoreall;

        }
        if (dicee === 1) {
            current1.textContent = 0;
            cout = 0;
            scoreall = 0;
        }
    }
})
const hold = document.querySelector(`.btn--hold`);

hold.addEventListener(`click`, function () {
    if (cout == 0) {
        // Number(score0.textContent);
        score0.textContent = Number(score0.textContent) + Number(current0.textContent);
        console.log(typeof score0.textContent);
        current0.textContent = 0;
        scoreall = 0;
        cout = 1;
        if (score0.textContent >= 100) {
            alert(`player1 win!`);
        }
    } else {
        score1.textContent = Number(score1.textContent) + Number(current1.textContent - 0);
        console.log(typeof score1.textContent);
        current1.textContent = 0;
        scoreall = 0;
        cout = 0;
        if (score1.textContent >= 100) {
            alert(`player2 win!`);
        }
    }
})

const _new = document.querySelector(`.btn--new`);
_new.addEventListener(`click`, function () {
    cout = 0;
    scoreall = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    hi.classList.add(`hidden`);
})