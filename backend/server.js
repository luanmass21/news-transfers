
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;  // Aqui está a mudança

dotenv.config(); // carrega as variáveis de .env
/* eslint-disable */
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

const app = express();
const PORT = 5000;

app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite o backend entender JSON no corpo da requisição

// Endpoint para receber e-mails e salvar no banco de dados
app.post('/enviar-email', async (req, res) => {
    const { email } = req.body; // Pega o e-mail enviado do corpo da requisição

    if (!email) {
        return res.status(400).json({ error: "Email não enviado!" }); // Caso não tenha e-mail no corpo
    }

    // Insere o email no banco de dados
    try {
        await client.query('INSERT INTO emails (email) VALUES ($1)', [email]);
        console.log(`📩 Email recebido: ${email}`);
        
        // Resposta para o frontend
        res.json({ message: "Email recebido e salvo com sucesso!", email });
    } catch (error) {
        console.error("Erro ao salvar email no banco", error);
        res.status(500).json({ error: "Erro ao salvar email no banco de dados" });
    }
});

// Endpoint para listar todos os e-mails armazenados
app.get('/listar-emails', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM emails');
        res.json(result.rows);
    } catch (error) {
        console.error("Erro ao buscar emails do banco", error);
        res.status(500).json({ error: "Erro ao buscar emails do banco" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
