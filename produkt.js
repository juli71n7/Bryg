const url = "https://olliste-f0b6.restdb.io/rest/olliste";
const options = {
  headers: {
    "x-apikey": "63ef7a7eaa860750000615a9",
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
  json.forEach((ol) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".produktnavn").textContent = ol.olnavn;
    klon.querySelector(".kategori").textContent = ol.kategori;
    klon.querySelector(".beskrivelse").textContent = ol.beskrivelse;
    klon.querySelector(".procent").textContent = ol.procent;
    main.appendChild(klon);
  });
}

hentData();
