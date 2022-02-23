import express from 'express';
import cors from "cors"
import 'dotenv/config';

import { routes } from './routes';
import { interceptAndLogger } from './middleware';

const app = express();
app.use(cors())
app.use(express.json());

const apiVersion = process.env.API_VERSION || "v1";
const PORT = process.env.PORT || 3000;

app.use(`/${apiVersion}`, interceptAndLogger, routes);


app.listen(PORT, () => console.log(`⚡ Server runing on port ${PORT}`));