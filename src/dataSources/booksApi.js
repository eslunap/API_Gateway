const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require('../server');

class booksApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.books_api_url
    }

    async librossBybook() {
        return await this.get('/libro');
    }

    async libroBybookId() {
        return await this.get('/libro/:id');
    }

    async registerLibros(Libros) {
        return await this.post ('/libros',{...Libros});
    }

    async registerLibros(Libros) {
        return await this.post ('/libros',{...Libros});
    }

    async registerImagen(Imagen) {
        return await this.post ('/producto/imagen',{...Imagen});
    }

    async authorBybook() {
        return await this.get('/author/');
    }

    async registerAuthor(author) {
        return await this.post ('/author',{...author});

    } 

    async categoriasBybook() {
        return await this.get('/categorias/');

    }

    async registerCategoria(categoria) {
        return await this.post ('/categorias',{...categoria});

    } 

    async editorialsBybook() {
        return await this.get('/editorial/');

    }

    async registerEditorials(editorial) {
        return await this.post ('/editorial',{...editorial});

    } 

    
}

module.exports = booksApi;