import { selectUser, insertUser, updateUser, deleteUser } from "../dao/usuarioD.js";
import UserModel from "../models/usuarioM.js";

const userController = (app, db) => {
    app.get("/usuario", async (req, res) => {

        const data = await selectUser(db);

        res.json(data);
    });
    
    app.post("/usuario", async (req, res) => {
        const ModelData = new UserModel(req.body);

        const data = await insertUser(db, ModelData);

        res.json(data);
    });
    
    app.put("/usuario/:id", async (req, res) => {
        const id = req.params.id;
        const dadosAtualizados = req.body;
        try {
            const mensagem = await updateUser(db, id, dadosAtualizados);
            res.json({ message: mensagem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    app.delete("/usuario/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const mensagem = await deleteUser(db, id);
            res.json({ message: mensagem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

export default userController;
