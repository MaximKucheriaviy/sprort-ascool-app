const fs = require("fs");
const path = require("path");
const Jimp = require("jimp");

fs.readdir(path.join(__dirname, "folder"), (err, files) => {
  files.forEach((item) => {
    Jimp.read(path.join(__dirname, "folder", item), (err, image) => {
      image.cover(393, 413);
      image.write(path.join(__dirname, "result", item));
    });
  });
});
