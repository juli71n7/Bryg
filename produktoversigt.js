const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://olliste-f0b6.restdb.io/rest/olliste`;

const options = {
  headers: {
    "x-apikey": "63f3520a478852088da684ab",
  },
};
async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

const beholder = document.querySelector(".produktliste");
const temp = document.querySelector(".productTemplate").content;

function vis(json) {
  console.log(json);
  json.forEach((object) => {
    if (object.kategori === cat) {
      const klon = temp.cloneNode(true);

      const imgid = object.billede;
      const imagePath = `img/produktbilleder/${imgid}`;

      klon.querySelector(".name").textContent = object.olnavn;
      klon.querySelector(".category").textContent = object.kategori;
      klon.querySelector(".price p").textContent = object.pris + " DKK";
      klon.querySelector(".product_img img").src = imagePath;

      //append her//
      beholder.appendChild(klon);
    }
  });
}

hentData();
