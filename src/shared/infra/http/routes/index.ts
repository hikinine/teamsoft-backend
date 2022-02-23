import { Router } from 'express';

import { costumerRoute } from './costumer.routes';
import { addressRoute } from './address.routes';

const routes = Router();

routes.use('/costumer', costumerRoute);
routes.use('/address', addressRoute);

export { routes };