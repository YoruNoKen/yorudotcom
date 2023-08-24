document.addEventListener("DOMContentLoaded", Load);
function Load() {
  const kardashev = [
    "Kardashev - Silvered Shadows",
    "Kardashev - Apparitions in Candlelight",
    "Kardashev - Cellar of Ghosts",
    "Kardashev - Glass Phantoms",
    "Kardashev - Compost Grave-Song",
    "Kardashev - Beyond the Passage of Embers",
    "Kardashev - Beyond Sun and Moon",
    "Kardashev - Between Sea and Sky",
    "Kardashev - Beneath Dirt and Stone",
  ];

  const inabakumori = [
    "INABAKUMORI - Anticyclone",
    "INABAKUMORI - Lost Umbrella",
    "INABAKUMORI - Pascal Beats",
    "INABAKUMORI - COOLER GIRL",
    "INABAKUMORI - An image in the making",
    "INABAKUMORI - The stars get dark",
    "INABAKUMORI - Copy and Pastime",
    "INABAKUMORI - NON-USE",
    "INABAKUMORI - Secret Music",
  ];

  const tobyFox = ["Toby Fox - Metal Crusher", "Toby Fox - Spider Dance", "Toby Fox - ASGORE", "Toby Fox -  The World Revolving"];

  let everything = [...kardashev, ...inabakumori, ...tobyFox];

  const musicPlayer = document.querySelectorAll(".listening-to")[0];
  let index = Math.floor(Math.random() * everything.length);
  let randomSong = everything[index];

  musicPlayer.textContent = randomSong;
}
