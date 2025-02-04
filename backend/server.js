/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';  // Para conectar ao PostgreSQL

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware para permitir requisições de outros domínios (CORS)
app.use(cors());
app.use(express.json()); // Para fazer o parsing de JSON

// Configuração do pool do PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// Rota para adicionar um novo e-mail
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Verifica se o e-mail já está registrado
    const result = await pool.query('SELECT * FROM emails WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Email já registrado' });
    }

    // Adiciona o e-mail no banco de dados
    await pool.query('INSERT INTO emails (email) VALUES ($1)', [email]);
    return res.status(201).json({ message: 'E-mail cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao registrar o e-mail' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
