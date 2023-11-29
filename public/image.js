const Jimp = require("jimp");
const fs = require("fs/promises");
async function main() {
  try {
    const data = await fs.readdir("./medical");
    data.forEach(async (item) => {
      const file = await Jimp.read("./medical/" + item);
      file.cover(393, 413).write("./medical/" + item);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
