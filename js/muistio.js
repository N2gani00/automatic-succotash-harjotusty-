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
  if (nimi.value === "" || viesti.value === "") {
    // jos jompikumpi on tyhjä niin tulee seuraava viesti
    alert("Täyttäkää molemmat kentät!");
    return;
  }
  
  // luodaan uusi teksti elementti nimeltään 'p' joka säilyttää viestin ja nimen
  const p = document.createElement('p');
  // lisää teksti sisältöön ja käyttäjän nimi sekä viesti, jotka on erotettu viivalla.
  p.textContent = nimi.value + ": " + viesti.value;
  
  // Check if the "Important" checkbox is checked
  if (important.checked) {
    // If it is, create a new horizontal rule element to separate the note from any previous ones
    const hr = document.createElement('hr');
    // Add the new paragraph element and horizontal rule element to the top of the "noted" div
    noted.insertBefore(p, noted.firstChild);
    noted.insertBefore(hr, noted.firstChild);
  } else {
    // If the "Important" checkbox is not checked, simply add the new paragraph element to the bottom of the "noted" div
    noted.appendChild(p);
  }
  
  // Clear the input fields and uncheck the "Important" checkbox after a note has been added
  nimi.value = "";
  viesti.value = "";
  important.checked = false;
});

// Add an event listener to the "noted" div that triggers when a user clicks on a note
noted.addEventListener('click', function(e) {
  // Check if the element that was clicked on is a paragraph element
  if (e.target.tagName === 'P') {
    // If it is, toggle the "checked" class on the element to visually indicate that it has been selected
    e.target.classList.toggle('checked');
  }
});
