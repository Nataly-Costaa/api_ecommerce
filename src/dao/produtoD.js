export const selectProduct = (db) => {
    const SQL = `SELECT * FROM "Produto"`;
    
    return new Promise((resolve, reject) =>
        db.all(SQL, (error, rows) => {
            if(error) {
                reject("Ocorreu um erro: " + error.message); 
            } else {
                resolve(rows);
            }
        })
    );    
}

export const insertProduct = (db, ModelData) => {

    return new Promise((resolve, reject) =>
        db.run(
            `INSERT INTO "Produto"(ID, title, description, price, id_user) values(?,?,?,?,?)`, 
            [ModelData.ID,ModelData.title,ModelData.description,ModelData.price,ModelData.id_user], 
            (error) => {
                if(error) {
                    reject("Ocorreu um erro: " + error.message); 
                } else {
                    resolve("Produto inserido com sucesso!");
                }
            }
        )    
    );
};

export const updateProduct = (db, id, dadosAtualizados) => {
    const { title, description, price, id_user } = dadosAtualizados;

    return new Promise((resolve, reject) =>
        db.run(
            `UPDATE "Produto" SET title = ?, description = ?, price = ?, id_user = ? WHERE ID = ?`,
            [title, description, price, id_user, id],
            (erro) => {
                if (erro) {
                    reject("Ocorreu um erro: " + erro.message);
                } else {
                    resolve("Produto atualizado com sucesso!");
                }
            }
        )
    );
};

export const deleteProduct = (db, id) => {

    return new Promise((resolve, reject) =>
        db.run(
            `DELETE FROM "Produto" WHERE ID = ?`, 
            id, 
            (error) => {
                if(error) {
                    reject("Ocorreu um erro: " + error.message); 
                } else {
                    resolve("Produto deletado com sucesso!");
                }
            }
        )    
    );
};