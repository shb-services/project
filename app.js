const hbd = document.getElementById('hbd');
const a1 = document.getElementById('a1');
const introBtn = document.getElementById('intro-btn');
const card = document.getElementById('bd-card');
const intro = document.getElementById('intro');



introBtn.addEventListener('click', (e) => {

    intro.style.display = "none"

    card.style.display = 'block';

    setTimeout(() => {
        hbd.play();
        hbd.volume = .7;
    }, 500)

    setTimeout(() => {
        a1.play();
        a1.volume = .8;
    }, 3000)
})