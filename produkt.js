const url = "https://olliste-f0b6.restdb.io/rest/olliste";
const options = {
  headers: {
    "x-apikey": "63f3520a478852088da684ab",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((person) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".produktbillede").src = "img/" + olliste.billede;
    klon.querySelector(".produktnavn").textContent = olliste.olnavn;
    klon.querySelector(".kategori").textContent = olliste.kategori;
    klon.querySelector(".beskrivelse").textContent = olliste.beskrivelse;
    klon.querySelector(".procent").textContent = olliste.procent;
    main.appendChild(klon);
  });
}

hentData();
