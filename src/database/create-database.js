import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/database/database.db");

const USER = `
CREATE TABLE "Usuario" (
    "ID" INTEGER PRIMARY KEY,
    name VARCHAR(150),
    email VARCHAR(35),
    password VARCHAR(20)
)`;

const CreateUser = () => {
    db.run(USER, (error) => {
        if (error) {
            console.log("Erro ao criar a tabela Usuario: " + error.message);
        }
    });
}

const PRODUCT = `
CREATE TABLE "Produto"(
    "ID" INTEGER PRIMARY KEY,
    title VARCHAR(90),
    description VARCHAR(4000),
    price FLOAT,
    id_user INTEGER,
    FOREIGN KEY (id_user) REFERENCES Usuario(ID) ON DELETE CASCADE
)`;

const CreateProduct = () => {
    db.run(PRODUCT, (error) => {
        if (error) {
            console.log("Erro ao criar a tabela Produto: " + error.message);
        }    
    });
};

db.serialize(() => {
    CreateUser();
    CreateProduct();
});
