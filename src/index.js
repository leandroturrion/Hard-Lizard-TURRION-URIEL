let contacto = require('./contacto')
let enCartelera = require ('./enCartelera')
let homePage = require ('./homePage')
let masVotadas = require ('./masVotadas')
let preguntasFrecuentes = require ('./preguntasFrecuentes')
let sucursales = require ('./sucursales')




let index = {
    homePage: function(res){
      
        res.write(homePage.titulo)
        res.write('\n\n')
        res.write('Total de peliculas en cartelera:' + homePage.cantidad())
        res.write('\n\n')
        res.write('----------LISTADO DE PELICULAS----------');
        res.write('\n\n')
        let titulos = [];
        movies.forEach(function(movie){
            titulos.push(movie.title)
        })
        titulos.sort();
        titulos.forEach(function(titulo){
            res.write(titulo);
            res.write('\n')
        })
        res.write('\n')
        res.write('Recordá visitar las secciones');
        res.write('\n')
        res.write('En Cartelera\n')
        res.write('Mas Votadas\n')
        res.write('Sucursales\n')
        res.write('Contacto\n')
        res.write('Preguntas Frecuentes\n')
        res.end();
        break;
},
enCartelera:function(res){
    res.write(enCartelera.titulo);
    res.write('\n')
    res.write('Total de peliculas en cartelera: ' + homePage.cantidad())
    res.write('\n')
    res.write(('Listado de Películas\n').toUpperCase())
    res.write('\n')
    let movies = enCartelera.listarPelis();
    movies.forEach(function(movie){
        res.write('\n')
        res.write('\n')
        res.write(movie.title)
        res.write('\n')
        res.write(movie.overview)
        res.write('\n')
    })
    res.end()
},
masVotadas:function(res){
    res.write(masVotadas.titulo);
    res.write('\n\n')
    res.write('Total de peliculas en cartelera: ' + masVotadas.cantidad())
    res.write('\n\n')
    res.write(('----------Listado de Películas de mayor reating----------\n').toUpperCase());
    res.write('\n\n')

    let movies = masVotadas.listarPelis();
        movies.forEach(function(movie){
            res.write('\n')
            res.write('\n')
            res.write(movie.title + "rating:" + movie.vote_avarage)
            res.write('\n')
            res.write('\n')
            res.write(movie.overview)
            res.write('\n')
            })
            res.end()
       
},
sucursales: function(res){
    res.write(sucursales.titulo)
    res.write('\n') 
    res.write('\n')
    res.write('Total de peliculas en cartelera:' + sucursales.cantidad())
    res.write('\n')
    res.write('\n')
    res.write(('Listado de salas disponibles\n').toUpperCase())
    res.write('\n')
    let theathers = sucursales.listarCines();
    theathers.forEach(function(theather){
        res.write('\n')
        res.write('\n')
        res.write(theather.name)
        res.write('\n')
        res.write(theather.adress)
    })
    res.end()
},
contacto: function(res) {
    res.write(contacto.titulo)
    res.write('\n')
    res.write(contacto.contenido)
}}
module.exports= index