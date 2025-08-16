const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.join(__dirname, "public", "shops images"); // change if needed

function compressImagesInDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      compressImagesInDir(filePath); // recurse into subfolder
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        sharp(filePath)
          .jpeg({ quality: 75 }) // adjust quality
          .toFile(filePath + ".tmp", (err) => {
            if (err) console.error("Error compressing", filePath, err);
            else {
              fs.renameSync(filePath + ".tmp", filePath);
              console.log(`Compressed: ${filePath}`);
            }
          });
      }
    }
  });
}

compressImagesInDir(rootDir);