import './lib/env';
import app = require('./app');

import * as mongoose from 'mongoose';
import { logger } from './lib/logger';

mongoose.connect(`${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    logger.info(`connected to database`);
});

const port = Number(process.env.PORT);
app.listen(port);

logger.info(`listening on port ${port}`);

module.exports = app;
