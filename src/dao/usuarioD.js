export const selectUser = (db) => {
    const SQL = `SELECT * FROM "Usuario"`;
    
    return new Promise((resolve, reject) => 
        db.all(SQL, (error, rows) => {
            if(error) {
                reject ("Ocorreu um erro: " + error.message);
            } else {
                resolve (rows);
            }
        })
    );    
}

export const insertUser = (db, ModelData) => {

    return new Promise((resolve, reject) =>
        db.run(
            `INSERT INTO "Usuario" (ID, name, email, password) values(?, ?, ?, ?)`, 
            [ModelData.ID, ModelData.name, ModelData.email, ModelData.password], 
            (error) => {
                if(error) {
                    reject("Ocorreu um erro: " + error.message);
                } else {
                    resolve("Usuário cadastrado com sucesso!");
                }
            }
        )
    );
}

export const updateUser = (db, id, dadosAtualizados) => {
    const { name, email, password } = dadosAtualizados;

    return new Promise((resolve, reject) =>
        db.run(
            `UPDATE "Usuario" SET name = ?, email = ?, password = ? WHERE ID = ?`,
            [name, email, password, id],
            (erro) => {
                if (erro) {
                    reject("Ocorreu um erro: " + erro.message);
                } else {
                    resolve("Usuário atualizado com sucesso!");
                }
            }
        )
    );
};

export const deleteUser = (db, id_user) => {

    return new Promise((resolve, reject) =>
        db.run(
            `DELETE FROM "Usuario" WHERE ID = ?`, 
            id_user, 
            (error) => {
                if(error) {
                    reject("Ocorreu um erro: " + error.message); 
                } else {
                    resolve("Usuário deletado com sucesso!");
                }
            }
        )    
    );
};