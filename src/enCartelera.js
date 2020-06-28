let fs = require ('fs')
let cartelera = {
    bd: '/.data/movies.json',
    titulo: "En cartelera",
    leerJSON: function(){
            let moviesJson = fs.readFileSync(this.bd, 'utf-8')
            let movies =JSON.parse(moviesJson)
        return movies
},
    cantidad: function(){
        return this.leerJSON().total_movies
},
    listarPelis: function (){
            let bd= this.leerJSON();
            let movies = []
            bd.movies.forEach(function(movie){
                movies.push(movie)
})
            let peliculas = bd.movies.map(function(movie){
                let datos = {
                    title: movie.title,
                    overview: movie.overview
                }
            return datos
})
    console.log(peliculas)
    return peliculas               
}
}
module.exports = cartelera