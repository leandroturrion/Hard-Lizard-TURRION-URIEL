let index = require ('./src/index')
let router = function(url,res ) {
    switch(url){
        case '/':
                index.homePage(res)
                console.log("Home")
        break

        case '/en-cartelera':
                index.enCartelera(res)
                console.log("En Cartelera")
        break

        case '/mas-votadas':
                index.masVotadas(res)
                console.log("Las mas votadas")
        break

        case '/sucursales':
                index.sucurcales(res)
                console.log("Sucursales")
        break

        case '/contacto':
                index.contacto(res)
                console.log("Contacto")
        break

        case '/preguntas-frecuentes':
            index.preguntasFrecuentes(res)
            console.log("Preguntas Frecuentes")
        break
        }
}

module.exports = router        