import { createLogger, format, transports } from "winston";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Navigate up one directory level
const projectRoot = path.resolve(__dirname, "..");
const logDirectory = path.join(projectRoot, "logs");

// Define custom format with colorized logs, labels, and timestamps for the console
const alignColorsAndTime = format.combine(
  format.colorize({
    all: true,
  }),
  format.label({
    label: "[LOGGER]",
  }),
  format.timestamp({
    format: "YY-MM-DD HH:mm:ss",
  }),
  format.printf(
    (info) =>
      ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
  )
);

// Create the logger
const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp(), // Ensures timestamps are used in file logs
    format.json() // JSON format for file logs
  ),
  transports: [
    // Console transport with colorized, labeled output
    new transports.Console({
      format: alignColorsAndTime, // Apply custom format to console logs
    }),
    // Error log file transport
    new transports.File({
      filename: path.join(logDirectory, "error.log"),
      level: "error",
    }),
    // Combined log file transport (for all logs)
    new transports.File({ filename: path.join(logDirectory, "combined.log") }),
  ],
});

export default logger;
