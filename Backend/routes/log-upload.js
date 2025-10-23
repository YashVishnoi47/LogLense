const express = require("express");
const router = express.Router();
const multer = require("multer");
const { SendReq } = require("../controllers/SendApiReq");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // console.log(file.mimetype);
  const allowedFileType = ["text/plain", "application/octet-stream"];

  const allowedMineType = allowedFileType.includes(file.mimetype);

  if (allowedMineType) {
    cb(null, true);
  } else {
    cb(new Error("This file type is not support"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/logs/upload", upload.single("file"), async (req, res) => {
  const uploadedFile = req.file;

  if (!uploadedFile) {
    return res.status(400).json({
      success: false,
      message: "A file is required for upload.",
    });
  }

  try {
    const finalresult = await SendReq({ file: uploadedFile });

    // console.log("Log-Upload: ", finalresult);

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully.",
      text: finalresult,
      fileInfo: {
        filename: uploadedFile.filename,
        filePath: uploadedFile.path,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
