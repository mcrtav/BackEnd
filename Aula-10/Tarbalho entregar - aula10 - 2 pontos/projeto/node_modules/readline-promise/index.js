module.exports = function question(str) {
  const readline = require("readline");

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(function (resolve) {
    terminal.question(str, function (answer) {
      resolve(answer);
      terminal.close();
    });
  });
};
