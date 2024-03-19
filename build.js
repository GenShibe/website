const fs = require("fs");

let file = fs.readFileSync("index.html", "utf-8");
file = file.replace(
  '<span class="last-updated"></span>',
  new Date().toUTCString(),
);
fs.writeFileSync("index.html", file);
