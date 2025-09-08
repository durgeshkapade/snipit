import { createLogger, format, transports } from "winston"

const consoleFormat = format.combine(
  format.colorize({ all: true }), // colorize level and message
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : ""
    return `${timestamp} ${level}: ${message}${metaStr}`
  })
)

const fileFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.simple()
)

const logger = createLogger({
  level: "info",
  transports: [
    new transports.Console({
      level: "debug",
      format: consoleFormat,
    }),
    new transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      format: fileFormat,
    }),
    new transports.File({
      dirname: "logs",
      filename: "errors.log",
      level: "error",
      format: fileFormat,
    }),
  ],
})

export default logger