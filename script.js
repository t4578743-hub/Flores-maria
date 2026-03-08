const texto = "Flores para ti María";
let i = 0;

function escribir(){

if(i < texto.length){

document.getElementById("titulo").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,80);

}

}

escribir();

const jardin = document.getElementById("jardin");

function crearFlor(){

const flor = document.createElement("div");

flor.classList.add("flor");

flor.innerHTML = "🌸";

flor.style.left = Math.random()*90 + "%";

flor.style.top = Math.random()*80 + "%";

flor.onclick = function(){

for(let i=0;i<6;i++){

const petalo = document.createElement("div");

petalo.classList.add("petalo");

petalo.innerHTML = "🌸";

petalo.style.left = flor.offsetLeft + "px";
petalo.style.top = flor.offsetTop + "px";

document.body.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},4000);

}

};

jardin.appendChild(flor);

}

for(let i=0;i<12;i++){

crearFlor();

}
