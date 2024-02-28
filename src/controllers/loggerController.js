// src/controllers/loggerController.js
const winston = require('winston');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'website' },
  transports: [
    new winston.transports.Console(),
    //new winston.transports.File({ filename: 'logfile.log' }), // Log to a file
  ],
});

function log(req, message, level = 'info') {
  logger.log(level, message);

  // Collecting request-related information
  const requestData = {
    timestamp: new Date().toISOString(),
    message,
    level,
    ip: req.ip, // IP address of the client
    method: req.method, // HTTP method (GET, POST, etc.)
    url: req.originalUrl, // Requested URL
    userAgent: req.get('User-Agent'), // User-Agent header
  };

  // Write log data to CSV
  const csvFilePath = 'logs.csv';

  // Check if the file exists, if not, create the file with headers
  if (!fs.existsSync(csvFilePath)) {
    const csvWriter = createCsvWriter({
      path: csvFilePath,
      header: [
        { id: 'timestamp', title: 'Timestamp' },
        { id: 'message', title: 'Message' },
        { id: 'level', title: 'Level' },
        { id: 'ip', title: 'IP Address' },
        { id: 'method', title: 'HTTP Method' },
        { id: 'url', title: 'URL' },
        { id: 'userAgent', title: 'User Agent' },
      ],
      append: false, // Create a new file
    });

    csvWriter.writeRecords([]); // Write empty array to create the headers
  }

  const csvWriter = createCsvWriter({
    path: csvFilePath,
    header: [
      { id: 'timestamp', title: 'Timestamp' },
      { id: 'message', title: 'Message' },
      { id: 'level', title: 'Level' },
      { id: 'ip', title: 'IP Address' },
      { id: 'method', title: 'HTTP Method' },
      { id: 'url', title: 'URL' },
      { id: 'userAgent', title: 'User Agent' },
    ],
    append: true, // Append to the existing file
  });

  csvWriter.writeRecords([requestData])
    .then(() => logger.info('Log written to CSV'))
    .catch((err) => logger.error('Error writing log to CSV:', err));
}

module.exports = log;
