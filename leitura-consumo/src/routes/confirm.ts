 // Certifique-se de que a importação está correta
// import database from './database'; // essa parte, consegui me explicar porque está reclamando ?
// sempre que tu for criar uma arquitetura de routes, e controllers, importa o express pra poder criar a rota
// tu também pode tipar os parâmetros das rotas por tá usando o typescript, mas é opcional, em outros arquivos eu tipei o req e o res importando os tipos do express, mas é basicamente isso
import express from "express"
// cria uma variável usando o método Router() do express pra criar as rotas
const confirmRoute = express.Router()
// aí basicamente tu usa essa variável pra criar as rotas, usa ela como se fosse o app no index.ts
    confirmRoute.patch('/confirm', (req, res) => {
    const { measure_uuid, confirmed_value } = req.body;
    console.log('measure_uuid:', measure_uuid);
    console.log('confirmed_value:', confirmed_value);

    if (!measure_uuid || typeof confirmed_value !== "number") {
        return res.status(400).json({
            error_code: "INVALID_DATA",
            error_description: "Os dados fornecidos no corpo da requisição são inválidos."
        });
    }

    // Placeholder para salvar no banco de dados
    res.status(200).json({ success: true });

});


confirmRoute.patch('/confirm', async (req, res) => {
    const { measure_uuid, confirmed_value } = req.body;
    console.log('measure_uuid:', measure_uuid);
    console.log('confirmed_value:', confirmed_value);

    if (!measure_uuid || typeof confirmed_value !== 'number') {
        return res.status(400).json({
            error_code: "INVALID_DATA",
            error_description: "Os dados fornecidos no corpo da requisição são inválidos."
        });
    }

    try {
        // await database.saveMeasurement({ measure_uuid, confirmed_value });
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro ao salvar no banco de dados:', error);
        res.status(500).json({ error: "DB SAVE ERROR" });
    }
});
// depois tu exporta ela pra registrar a rota no index.ts
export default confirmRoute