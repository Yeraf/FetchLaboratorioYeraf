function mostrar() {
  let url = "https://randomuser.me/api/";
  let miboton = document.getElementById("show_name");
  let img;
  let boton;
  let name_web;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      name_web = data.results[0].name.first;
      img = data.results[0].picture.large;

      boton = `
        <h1 class="nombre-name display-4">${name_web}</h1>
        <img class="img_picture" src="${img}" alt="">
        `
        miboton.innerHTML = boton;
    });
}

function tabla() {
    let contenido_tabla = document.getElementById("contenido_tabla")
    let misdatos ;

    fetch('tabla.json')
    .then(response => response.json())
    .then(data => {
       data.forEach(element => {
           misdatos += `
           <tr>
                <td>${element.id}</td>
                <td>${element.nombre}</td>
                <td>${element.email}</td>
                <td>${element.estado ? "Activo" : "Falso"}</td>
            </tr>
           `
       }); 
       contenido_tabla.innerHTML = misdatos;
    })
}
