import 'express-async-errors';
import routes from './routes';
import * as cors from 'cors';
import * as express from 'express';
import errorHandler from './middleware/error';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(errorHandler);

export default app;
