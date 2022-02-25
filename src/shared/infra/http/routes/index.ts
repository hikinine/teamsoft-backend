import { Router } from 'express';

import { costumerRoute } from './costumer.routes';
import { addressRoute } from './address.routes';
import {docsHtmlString} from "../../../../docs"
const routes = Router();

routes.use('/costumer', costumerRoute);
routes.use('/address', addressRoute);
 

routes.use('/docs', (request, response) => {

  return response.send(docsHtmlString)
});

export { routes };