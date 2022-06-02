function mostrar() {
  let url = "https://randomuser.me/api/";
  let miboton = document.getElementById("show_name");
  let img;
  let boton;
  let name_web;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      img = data.results[0].picture.medium;
      boton = `
        <img class="img_picture" src="${img}" alt="">
        `
      miboton.innerHTML = boton;
    });
}


// name_web = data.results[0].name.first;
/* <h1 class="display-4">Mi Sitio Web : ${name_web}</h1> */


