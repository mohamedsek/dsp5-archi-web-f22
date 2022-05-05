//const res = require("express/lib/response");


async function fctGetOffers() {
    const result = await fetch("/offers");
    const offers = await result.json();
    console.log("Fetching offers");
    console.log(offers);

    return offers;
}

window.addEventListener("DOMContentLoaded", async (event) => {
    const offers = await fctGetOffers();
    fillOffers(offers);

    const searchInput = document.querySelector("#formation-search-name");
    searchInput.addEventListener('change', onSearch);


});

function fillOffers(offersList) {

    const listing = document.querySelector("#formations-listing");

    listing.innerHTML = "";

    offersList.forEach(formation => {
        //let offerItem = document.createElement("<div>");
        //let offerTitle = document.createElement("<h3>");

        //offerTitle.innerHTML = formation.title;

        //offerItem.appendChild(offerTitle);
        let offerItem = `
            <div>
                <h3><a href="/detail-formation.html">${formation.id}</a></h3>
                <p>${formation.duration}</p>
            </div>
        `;

        listing.innerHTML = listing.innerHTML + offerItem;
    });
}

async function onSearch(event) {
    // console.log(event);
    const searchTerm = event.target.value;
    const offers = await fctGetOffers();

    const results = offers.filter(formation => {
        if (formation.name.includes(searchTerm.trim())) {
            return true;
        }
        return false;
    });

    fillOffers(results);
}