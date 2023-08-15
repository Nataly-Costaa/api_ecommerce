import { insertProduct, selectProduct, updateProduct, deleteProduct } from "../dao/produtoD.js";
import ProductModel from "../models/produtoM.js";

const productController = (app, db) => {
    app.get("/produto", async (req, res) => {

        const data = await selectProduct(db);

        res.json(data);
    });
    
    app.post("/produto", async (req, res) => {
        const ModelData = new ProductModel(req.body);

        const data = await insertProduct(db, ModelData);

        res.json(data);
    });
    
    app.put("/produto/:id", async (req, res) => {
        const id = req.params.id;
        const dadosAtualizados = req.body;
        try {
            const mensagem = await updateProduct(db, id, dadosAtualizados);
            res.json({ message: mensagem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    app.delete("/produto/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const mensagem = await deleteProduct(db, id);
            res.json({ message: mensagem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

export default productController;
