const express = require("express");
const formidable = require("formidable");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(cors());

app.post("/upload", async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, "uploads"); // Specify the upload directory

  const [fields, files] = await form.parse(req);

  const imageFile = files.imageFile;
  if (imageFile) {
    const myFile = imageFile[0];
    console.log(myFile.filepath);
    console.log(fields.text[0]);

    // You can further process or save the file as needed
  }

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
