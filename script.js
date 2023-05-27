let currentPage = 1;
const countriesPerPage = 10;
const countries = []; // Array to store all the countries
var currentcountries = [];
var searchCountries = [];
const parentElement = document.querySelector(".countries");
const search = document.querySelector("#searchbar");
const sort = document.querySelector("#region")



async function viewAllcountry() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      countries.push(...data); // Add fetched countries to the array
      displayAll();
      displayPagination();
    });
}

viewAllcountry();

sort.addEventListener("change",function(){
    parentElement.innerHTML = ""
    let value = this.value;
    console.log(value)

    if(value == "All"){
        viewAllcountry();
    }
    if(value == "Alpha"){
        let filtered = countries.sort(el => el.name.common)
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
    if(value == 5){
        let filtered = countries.filter(el => parseInt(el.population) % 5000000 == 0) ;
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
    if(value == 10){
        let filtered = countries.filter(el => parseInt(el.population) % 5000000 == 0) ;
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
    if(value == 20){
        let filtered = countries.filter(el => parseInt(el.population) % 5000000 == 0) ;
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
    if(value == 100){
        let filtered = countries.filter(el => parseInt(el.population) % 5000000 == 0) ;
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
    else{
        let filtered = countries.filter(el => el.region.includes(value));
        // Loop through the filtered data
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                console.log("hello")
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
    }
})


search.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    parentElement.innerHTML = ""
    if (value) {
        // Filter the data by name
        let filtered = countries.filter(el => el.name.common.toLowerCase().includes(value));
        // Loop through the filtered data
        for (let el of filtered) {
            const country = document.createElement("div");
            country.classList.add("country");
            country.addEventListener("click", function(){
                viewCountryDetails(el)
            })
            country.innerHTML = `
            <div class="country">
            <div class="country-img">
              <img src="${el.flags.svg}" alt="${el.flags.alt}" />
            </div>
            <div class="country-info">
              <h5 id="name">${el.name.common}</h5>
              <p><strong>Population</strong> ${el.population}</p>
              <p><strong>Region</strong> ${el.region}</p>
              <p><strong>capital</strong> ${el.capital}</p>
            </div>
          </div>
            `;
        
            parentElement.appendChild(country);
        }
      }
      if(!value){
        viewAllcountry();
      }
});

function displayAll() {
  parentElement.innerHTML = "";
  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;
  currentcountries = countries.slice(startIndex, endIndex);
  console.log(currentcountries);
  currentcountries.forEach(function (el) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.addEventListener("click", function(){
        viewCountryDetails(el)
    })
    country.innerHTML = `
    <div class="country">
    <div class="country-img">
      <img src="${el.flags.svg}" alt="${el.flags.alt}" />
    </div>
    <div class="country-info">
      <h5 id="name">${el.name.common}</h5>
      <p><strong>Population</strong> ${el.population}</p>
      <p><strong>Region</strong> ${el.region}</p>
      <p><strong>capital</strong> ${el.capital}</p>
    </div>
  </div>
    `;
    

    parentElement.appendChild(country);
  });
}

function displayPagination() {
  const totalPages = Math.ceil(countries.length / countriesPerPage);
  const paginationElement = document.querySelector("#pagination");
  paginationElement.innerHTML = "";

  const paginationWrapper = document.createElement("div");
  paginationWrapper.classList.add("pagination-wrapper");

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.innerText = i;

    if (i === currentPage) {
      pageLink.classList.add("active");
    }

    pageLink.addEventListener("click", function () {
      currentPage = i;
      displayAll();
      updatePaginationDisplay();
      console.log(currentPage);
    });
    paginationWrapper.append(pageLink);
  }
  paginationElement.append(paginationWrapper);
}

function updatePaginationDisplay() {
  const paginationLinks = document.querySelectorAll("#pagination a");
  paginationLinks.forEach((link) => {
    if (parseInt(link.innerText) === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


function viewCountryDetails(data) {
    // Store the product details in session storage
    sessionStorage.setItem("selectedCountry", JSON.stringify(data));
  
    // Redirect to the product detail page
    window.location.href = "detail.html";
  }

  