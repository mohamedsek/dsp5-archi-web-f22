checkForm() {
    if (!document.getElementById('terms').checked) {
        alert("Veuillez indiquer que vous acceptez les termes et conditions");
    }
    else {
        let body = JSON.stringify({
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('tel').value,
            formation: document.getElementById('formation').value,
            message: document.getElementById('message').value,
        });
        (async () => {
            const rawResponse = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nom: document.getElementById('nom').value,
                    prenom: document.getElementById('prenom').value,
                    email: document.getElementById('email').value,
                    telephone: document.getElementById('tel').value,
                    formation: document.getElementById('formation').value,
                    message: document.getElementById('message').value,
                })
            });
            const content = await rawResponse.json();

            console.log(content);
        })();
        alert("Votre message a bien transmis");
    }
}
