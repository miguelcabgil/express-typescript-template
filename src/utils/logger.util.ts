import winston from 'winston';

const IS_DEV = true;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => (IS_DEV ? 'debug' : 'http');

/** Define different colors for each level.
 * Colors make the log message more visible,
 * adding the ability to focus or ignore messages. */
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'blue',
  debug: 'white',
};

/** Tell winston that you want to link the colors
 * defined above to the severity levels. */
winston.addColors(colors);

/** Chose the aspect of your log customizing the log format. */
const format = winston.format.combine(
  /** Add the message timestamp with the preferred format */
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  /** Tell Winston that the logs must be colored */
  winston.format.colorize({ all: true }),
  /** Define the format of the message showing the timestamp, the level and the message */
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

/** Define which transports the logger must use to print out messages. */
const transports = [new winston.transports.Console()];

/** Create the logger instance that has to be exported
 * and used to log messages.
 * */
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;
