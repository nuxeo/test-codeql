// Intentionally vulnerable sample used to validate CodeQL scanning setup.

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

// js/path-injection
function readUserFile(req, res) {
  const filePath = path.join('/var/data', req.query.file);
  res.end(fs.readFileSync(filePath, 'utf8'));
}

// js/command-line-injection
function archive(req, res) {
  cp.exec('tar -czf backup.tar.gz ' + req.query.dir, (err, stdout) => {
    res.end(stdout);
  });
}

module.exports = { readUserFile, archive };
