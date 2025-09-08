import { format } from "path";
import { createLogger, transports } from "winston"

const logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      level: "debug",
      silent: false,
    }),
    new transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      silent: true,
    }),
    new transports.File({
      dirname: "logs",
      filename: "errors.log",
      level: "error",
      silent: true,
    }),
  ],
});

export default logger;