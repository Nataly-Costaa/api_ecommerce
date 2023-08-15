class UserModel {
    constructor(body) {
        this.ID = body.id_user;
        this.name = body.nome;
        this.email = body.email;
        this.password = body.senha;
    }
}

export default UserModel;