
// //-------------------------------------

// import express from 'express';
// import cors from 'cors';

// const app = express();
// const PORT = 5000;

// app.use(cors()); // Permite requisições do frontend
// app.use(express.json()); // Permite o backend entender JSON no corpo da requisição

// let emailRecebido = '';

// // Endpoint para receber email
// app.post('/enviar-email', (req, res) => {
//     const { email } = req.body;

//     if (!email) {
//         return res.status(400).json({ error: "Email não enviado!" });
//     }

//     emailRecebido = email;
//     console.log(`📩 Email recebido: ${emailRecebido}`);  // Agora o email é mostrado aqui, quando ele for realmente enviado
//     res.json({ message: "Email recebido com sucesso!" });
// });
//   console.log(emailRecebido)

// app.listen(PORT, () => {
//     console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
// });
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Array para armazenar os e-mails recebidos
let emails = ['elisamassuda@gmail.com'];

app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite o backend entender JSON no corpo da requisição

// Endpoint para receber e-mails
app.post('/enviar-email', (req, res) => {
    const { email } = req.body; // Pega o e-mail enviado do corpo da requisição

    if (!email) {
        return res.status(400).json({ error: "Email não enviado!" }); // Caso não tenha e-mail no corpo
    }

    // Adiciona o e-mail no array
    emails.push(email);
    
    // Exibe o e-mail recebido no terminal
    console.log(`📩 Email recebido: ${email}`);

    // Exibe todos os e-mails armazenados
    console.log("Emails armazenados:", emails);

    // Retorna uma resposta para o frontend
    res.json({ message: "Email recebido com sucesso!", emails });
});

// Endpoint para listar todos os e-mails armazenados (opcional para testar)
app.get('/listar-emails', (req, res) => {
    res.json({ emails });
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
