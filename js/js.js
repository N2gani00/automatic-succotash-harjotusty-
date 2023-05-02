// haetaan elementit jotta saadaan muistiot toimimaan.
const button = document.querySelector('button');
const noted = document.getElementById('noted');
const important = document.getElementById('important');
// lisätään event listener eli aina kun painetaan nappia niin se ymmärtää sen.

button.addEventListener('click', function() {
      // saa arvot mitkä käyttäjä on lisännyt.

  const nimi = document.getElementById('nimi');
  const viesti = document.getElementById('viesti');
  // tarkistetaan onko kentät täytetty

      // jos jompikumpi on tyhjä niin tulee seuraava viesti

  if (nimi.value === "" || viesti.value === "") {
    alert("Täytä kentät!");
    return;
  }
  // luodaan uusi teksti elementti nimeltään 'p' joka säilyttää viestin ja nimen

  const p = document.createElement('p');
    // lisää teksti sisältöön ja käyttäjän nimi sekä viesti, jotka on erotettu viivalla.

  const now = new Date();
  const timestamp = now.toLocaleString();
  p.textContent = `${nimi.value} ${timestamp}: ${viesti.value}`;
  
    // onko checkobox checkattu?


  if (important.checked) {
    // lisätään css elementti checkboxiin.

        // jos on luo uus elementti joka erottelee muistion muista.

    p.classList.add('important');
    
    const hr = document.createElement('hr');
        // Add the new paragraph element and horizontal rule element to the top of the "noted" div

    noted.insertBefore(p, noted.firstChild);
    noted.insertBefore(hr, noted.firstChild);
        // jos ei oo checkboxia chekattu niin lisää uuden tekstin noted divin loppuun

  } else {
    noted.appendChild(p);
  }
    // tyhjennetään syöttötiedot kun on lisätty yksi viesti

  
  nimi.value = "";
  viesti.value = "";
  important.checked = false;
});
// lisätään event listener notediin eli aina kun painaa nappia


noted.addEventListener('click', function(e) {
    // katsotaan onko tekstiä vai ei?

  if (e.target.tagName === 'P') {
        // jos on niin nähdään että se on chekattuna, näyttääkseen että se on valittu.
    e.target.classList.toggle('checked');
  }
});
