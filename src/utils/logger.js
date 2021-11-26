const winston = require('winston');
const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'logfile.log');

try { fs.unlinkSync(filename); } catch (e) {}
const { format } = winston;
const logger = winston.createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename }),
  ],
});

logger.log('info', 'created log file');
logger.error(new Error('error as info'));

module.exports = logger;
