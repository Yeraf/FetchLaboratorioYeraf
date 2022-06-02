function mostrar() {
    let URL = "https://randomuser.me/api/";
    let img;
    let name_web;
    let miboton = document.getElementById("info")

    fetch(URL)
    .then((response) => response.json)
    .then(data => {
        name_web = data.results[0].name.first;
        img = data.results[0].picture.medium;
        boton = `
        <h1 class="display-4">Mi Sitio Web : ${name_web}</h1>
        
        <img class="${img}" src="img/users.png" alt="">
        `
        miboton.innerHTML = boton;
    });
}