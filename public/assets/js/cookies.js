let getCompanyDetails = async () => {
    const company = await fetch("/company");
    return await company.json();
}

window.addEventListener("DOMContentLoaded", async (event) => {
    getCompanyDetails().then(result => {
        let b = Array.prototype.slice.call(document.getElementsByClassName('company'));
        b.forEach(item => {
            item.innerHTML = result[0].name;
        });
    });
})