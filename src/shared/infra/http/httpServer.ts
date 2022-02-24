import express from 'express';
import cors from "cors"
import 'dotenv/config';

import { routes } from './routes';
import { interceptAndLogger } from './middleware/intercept';

const app = express();
app.use(cors())
app.use(express.json());

const apiVersion = process.env.API_VERSION || "v1";
const PORT = process.env.PORT || 3000;



if (process.argv.includes("--traceHttpRequests")) {
  app.use(`/`,interceptAndLogger);
}



app.use(`/${apiVersion}`,routes);


app.listen(PORT, () => console.log(`⚡ Server runing on port ${PORT}`));