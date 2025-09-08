import { createLogger, format, transports } from "winston"

const logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(format.timestamp(), format.simple()),
    }),
    new transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      format: format.combine(format.timestamp(), format.simple()),
    }),
    new transports.File({
      dirname: "logs",
      filename: "errors.log",
      level: "error",
      format: format.combine(format.timestamp(), format.simple()),
    }),
  ],
});

export default logger;