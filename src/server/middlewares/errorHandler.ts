import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger';

const errorHandler = async (request: Request, response: Response, next: NextFunction) => {
    try {
        await next();
    } catch (err) {
        const status = 500;
        const message = 'An unexpected error happened, please check the logs.';

        response.status(status).send({ status, message });
        logger.error(err);
    }
};

export = errorHandler;
