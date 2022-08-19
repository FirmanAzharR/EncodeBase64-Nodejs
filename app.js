const fs = require("fs");
let image = "autobot.png";

const encodeBase64 = (file) => {
  const imgType = file.slice(8);
  let initial = `data:image/${imgType};base64,`;
  let data = fs.readFileSync(file, "base64");
  const base64 = `${initial}${data}`;
  return base64;
};

const saveBase64 = (file) => {
  try {
    let base64 = encodeBase64(file);
    fs.writeFileSync("./encodeBase64.txt", base64, "utf-8");
  } catch (e) {
    console.log(e);
  }
};

saveBase64(image);
