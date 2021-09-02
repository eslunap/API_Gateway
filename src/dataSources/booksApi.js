const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require('../server');

class booksApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.books_api_url
    }

    async librossBybook() {
        const respuesta = await this.get('/libros');
        console.log(respuesta)
        return respuesta;
    }

    async libroBybookId(id) {
        return this.get(`/libros/buscar/${id}`);
    }

    async registerLibros(libros) {
        // const respuesta=await this.post ('/libro',{...libros});
        // console.log(respuesta)
        return await this.post ('/libro',{...libros});
    }

    async changeLibros(libro){
        const respuesta = await this.put('/libro',{ ...libro});
        console.log(respuesta)
        return respuesta
    }

    async deleteLibroById(id){
        console.log("1")
        return await this.delete('/libro',{...id});
    }

    async updateCantidad(cantidad){
        return await this.put('/libros/cantidad',{ ...cantidad});
    }

    async registerImagen(Imagen) {
        return await this.post ('/producto/imagen',{...Imagen});
    }

    async authorsBybook() {
        const respuesta = await this.get('/author');
        console.log(respuesta)
        return await this.get('/author');
    }

    async registerAuthor(author) {
        return await this.post ('/author',{...author});

    } 

    async categoriasBybook() {
        return await this.get('/categorias');

    }

    async registerCategoria(categoria) {
        return await this.post ('/categorias',{...categoria});

    } 

    async editorialsBybook() {
        const respuesta = await this.get('/editorial');
        //return await this.get('/editorial/');
        console.log(respuesta)
        return respuesta;

    }

    async registerEditorials(editorial) {
        return await this.post ('/editorial',{...editorial});

    } 

   
}

module.exports = booksApi;