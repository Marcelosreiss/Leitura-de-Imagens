import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/upload';
import confirmRoute from "./routes/confirm"
dotenv.config();

const app = express();
app.use(express.json());
// Aqui tu vai importar as rotas e registrar elas na aplicação, pra isso tu usa o método use() e no primeiro parâmetro ty pode passar só a barra, pos as rotas tu tá criando lá nos arquivos separados, aí como segundo parâmetro tu passa o objeto das rotas pra elas funcionarem de boa
app.use("/", uploadRoute)
app.use("/", confirmRoute)
app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
