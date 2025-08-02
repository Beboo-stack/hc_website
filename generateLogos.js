const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "public/logos"); // Adjust folder if needed

const files = fs.readdirSync(folderPath);

const webpFiles = files.filter(file => file.endsWith(".webp"));

const logosArray = webpFiles.map(file => `"/logos/${file}"`);

console.log("const logos = [");
logosArray.forEach(file => console.log(`  ${file},`));
console.log("];");
