import 'express-async-errors';
import routes from './routes';
import cors from 'cors';
import errorHandler from './middleware/error';
import express from 'express';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(errorHandler);

export default app;
