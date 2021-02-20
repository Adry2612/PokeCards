'use strict';

// Minuto 30
document.addEventListener('DOMContentLoaded', function(){
    // Obtenemos un número aleatorio entre los códigos de los pokemon originales.
    var random = Math.floor(Math.random() * (150 - 1)) + 14

    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(data => data.json())
    .then(respuesta => construirTarjeta(respuesta));
});

function construirTarjeta(pokemon){
    console.log(pokemon);
    var tarjeta = document.getElementsByClassName('tarjeta-cuerpo');

    // Añadir imagen del pokemon.
    var img = document.createElement('img');
    img.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    tarjeta[0].prepend(img);

    // Añadir nombre del pokemon.
    var titulo = document.getElementsByClassName('tarjeta-cuerpo-titulo');
    var nombre = document.createTextNode(pokemon.name);

    // Añadir salud del pokemon.
    var salud = document.createElement('span');
    salud.appendChild(document.createTextNode(pokemon.stats[0].base_stat +'hp'))
    titulo[0].appendChild(nombre);
    titulo[0].appendChild(salud);

    // Añadir experiencia.
    var experiencia = document.createElement('h2');
    experiencia.appendChild(document.createTextNode(pokemon.base_experience +'exp'))
    tarjeta[0].appendChild(experiencia);

    // Añadir stats.
    var elementos = document.getElementsByClassName('tarjeta-footer-elemento');

    for (var i in elementos){
        var stat = document.createElement('h3');
        var valor = document.createTextNode(pokemon.stats[i].base_stat);

        stat.append(valor);
        elementos[i].prepend(stat);
    }
}