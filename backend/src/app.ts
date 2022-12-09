import * as express from 'express';
import 'express-async-errors';
import * as cors from 'cors';
import tokenRouter from './routers/token.routes';
import usersRouter from './routers/users.routes';
import pokemonsRouter from './routers/pokemon.routes';
import CustomErrors from '../src/errors/CustomErrors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();


    // Rotas da API 
    this.app.use('/', usersRouter);
    this.app.use('/pokemon', pokemonsRouter);
    this.app.use('/token', tokenRouter);

    this.app.use((
      err: Error,
      req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      const { status, message } = err as CustomErrors;
      console.log('Error', message);
      res.status(status).json({ message });
    });
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(cors());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
