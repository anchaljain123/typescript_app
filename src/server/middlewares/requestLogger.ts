import { Request, Response, NextFunction } from 'express';

import { logger } from '../lib/logger';
  
const requestLogger = async (request: Request, response: Response, next: NextFunction) => {

      logger.info(
    `request: ${request.method} ${request.url}`,
    { method: request.method },
    { url: request.url },
    { headers: request.headers },
    { body: JSON.stringify(request.body) }
  );

  await next();

  // logger.info(
  //   `response: ${response.status} -> ${request.method} ${request.url}`,
  //   { status: response.status },
  //   { headers: response.headers },
  //   { body: responseBody }
  // );
};

export = requestLogger;
