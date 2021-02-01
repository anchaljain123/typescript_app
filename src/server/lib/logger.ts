import { createLogger, format, transports } from 'winston';

const { LOG_CONSOLE, LOG_LEVEL, LOG_PATH, NODE_ENV } = process.env;

export const errorLogger = (err: Error) : void=> {
  logger.error(err);
};

export const logger = createLogger({
  defaultMeta: { service: 'my-app' },
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  level: LOG_LEVEL,
  silent: NODE_ENV === 'test',
  transports: [
    new transports.File({
      filename: LOG_PATH,
      maxFiles: 5,
      maxsize: 5 * 1024 * 1024, // 5 MB
      tailable: true,
    }),
  ],
});

if (LOG_CONSOLE === 'true') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}
