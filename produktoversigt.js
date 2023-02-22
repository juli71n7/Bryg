// Her laver vi en konstant der søger efter et parameter i url'en //
const urlParams = new URLSearchParams(window.location.search);

// her laver vi en ny constant ud af cat parametret i url'en//
const cat = urlParams.get("cat");

// her definere vi en vores json fil som konstant //
const url = `https://olliste-f0b6.restdb.io/rest/olliste`;

// Her definere vi en constant som hedder options med API key som nen header //
const options = {
  headers: {
    "x-apikey": "63f3520a478852088da684ab",
  },
};

// Her er vores asynkrone funktion der danner en constant som venter på at hente data fra vores fil, med API key'en som faktor//

async function hentData() {
  const respons = await fetch(url, options);

  // Her venter vi på at dataen er kommet ind og trækker så alt json ud af filen//
  const json = await respons.json();

  // her starter vi Vis funktionen og trækker json'en med i den funktion//
  vis(json);
}

// Her opretter vi en konstant for den beholder som vores indhold skal ammendes i//
const beholder = document.querySelector(".produktliste");
// Her opretter vi en konstant for vores Template som klones og hvor indholdet deri skal ændres//
const temp = document.querySelector(".productTemplate").content;

function vis(json) {
  // Her logger vi vores json data i konsollen, så vi ved den har fat i det//
  console.log(json);

  // Her siger vi at for hvert object der er i vores fil skal den køre denne anonyme funktion//
  json.forEach((object) => {
    // Her siger vi at hvis object kategori = vores kategori fra url parametret, skal den gøre følgende//

    if (object.kategori === cat) {
      // Her laver vi en konstant der tager vores Template og cloner det//
      const klon = temp.cloneNode(true);
      //her gemmer  vi vores imagepath ved at skrive stien hen til hvor vores villeder ligger, og tilføjer filnavnet fra objectet til stien//
      const imagePath = "img/produktbilleder/" + object.billede;

      // Her ændre vi overskriften til vores konstant kategori fra url//
      document.querySelector("h1").textContent = object.kategori;

      // Her ændrer vi tekst indholdet i de forskelliger elementer i vores klon til tilsvarende data fra vores object//
      klon.querySelector(".name").textContent = object.olnavn;
      klon.querySelector(".category").textContent = object.kategori;
      klon.querySelector(".price p").textContent = object.pris + " DKK";
      klon.querySelector(".product_img img").src = imagePath;
      klon.querySelector(".link").href = "produkt.html?product_id=" + object._id;
      //append her//
      beholder.appendChild(klon);
    }
  });
}
//her starter vi hentData funktionen//
hentData();
