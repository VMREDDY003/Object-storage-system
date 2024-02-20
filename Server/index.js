const express = require("express");
const multer = require("multer");
const Minio = require("minio");
const cors = require("cors");

const app = express();
app.use(cors());
const minioClient = new Minio.Client({
  endPoint: "localhost", 
  port: 9000,
  useSSL: false, 
  accessKey: "Mallesh",
  secretKey: "Mallesh@Bro",
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(500).send("No file uploaded.");
  }

  const objectName = file.originalname;

  minioClient.putObject("brother", objectName, file.buffer, file.buffer.length, (err, etag) => {
    if (err) {
      console.error(err);
      res.status(500).send({text:"Error uploading file"});
    } else {
      res.status(200).send({text:"File uploaded successfully"});
    }
  });
});


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
