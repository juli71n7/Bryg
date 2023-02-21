const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("product_id");
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

function vis(json) {
  console.log(json);
  json.forEach((ol) => {
    if (ol._id === id) {
      document.querySelector(".produktnavn").textContent = ol.olnavn;
      document.querySelector(".kategori").textContent = ol.kategori;
      document.querySelector(".produktnavn2").textContent = ol.olnavn;
      document.querySelector(".kategori2").textContent = ol.kategori;
      document.querySelector(".beskrivelse").textContent = ol.beskrivelse;
      document.querySelector(".procent").textContent = ol.procent + "%";
      main.appendChild(klon);
    }
  });
}

hentData();
