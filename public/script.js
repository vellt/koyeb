const kijelzo = document.getElementById("kijelzo");
const kep = document.getElementById("kep");
const szoveg = document.getElementById("szoveg");

let isClosed = true;

const uzik = [
    "A BELSŐ SZÁMÍT",
    "A CSILLAGOK FIGYELNEK",
    "A DOLGOK JÓL HALADNAK",
    "VIDÁMSÁG! :)",
    "VIDD VÉGIG AZ ÖTLETEIDET!",
    "VIGYÉL EGY JÓ HÍRT!"
];

kijelzo.addEventListener("click", async () => {
    if (isClosed) {
        for (let index = 0; index < 11; index++) {
            await new Promise(resolve => setTimeout(resolve, 13));
            kep.src = `images/bottlecap_${index}.png`;
            if (index == 10) {
                const randomIndex = Math.floor(Math.random() * uzik.length);
                szoveg.textContent = uzik[randomIndex];
            }
        }
        isClosed = false;
    }
    else {
        for (let index = 10; index >= 0; index--) {
            await new Promise(resolve => setTimeout(resolve, 13));
            kep.src = `images/bottlecap_${index}.png`;
            if (index == 10) {
                szoveg.textContent = "";
            }
        }
        isClosed = true;
    }

});