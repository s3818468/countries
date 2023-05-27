const backButton = document.querySelector("#backButton")

backButton.addEventListener("click",function(){
    window.location.href = "index.html";
})

function getCountryDetails() {
    const selectedcountry = sessionStorage.getItem("selectedCountry");
  
    if (selectedcountry) {
      const country = JSON.parse(selectedcountry);
      document.querySelector("#image").src = country.flags.svg;
      document.querySelector("#name").innerText = "name: " + country.name.common;
      document.querySelector("#population").innerText = "population: " + country.population;
      document.querySelector("#region").innerText = "region: " + country.region;
      document.querySelector("#subRegion").innerText ="subRegion: " + country.subregion;
      document.querySelector("#capital").innerText = "capital: " + country.capital;
      document.querySelector("#maps").href = country.maps.googleMaps;
      
    }
  }

  getCountryDetails()