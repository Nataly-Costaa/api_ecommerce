class ProductModel {
    constructor(body) {
        this.ID = body.id;
        this.title = body.titulo;
        this.description = body.descricao;
        this.price = body.preco;
        this.id_user = body.id_usuario;
    }
}

export default ProductModel;