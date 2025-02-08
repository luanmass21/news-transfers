

//-------------------------------------

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite o backend entender JSON no corpo da requisição

let emailRecebido = '';

// Endpoint para receber email
app.post('/enviar-email', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email não enviado!" });
    }

    emailRecebido = email;
    console.log(`📩 Email recebido: ${emailRecebido}`);  // Agora o email é mostrado aqui, quando ele for realmente enviado
    res.json({ message: "Email recebido com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
