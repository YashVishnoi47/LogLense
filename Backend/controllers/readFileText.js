const fs = require("fs");

const DeleteFile = (filepath) => {
  fs.unlink(filepath, (err) => {
    if (err) {
      console.log("Error deleting the file");
      return;
    }
  });
};

const getTextFromFile = ({ filePath }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading the file - ", err);
        reject(err);
      } else {
        console.log("Text Extraction successful ✅");
        DeleteFile(filePath);
        console.log("Text Sent for preProcessing");

        const lines = data.split("\n");
        combinedText = lines.join(" ");
        if (!combinedText) {
          console.log("Error reading the file");
          return new Error({
            success: false,
            message: "Error reading the file",
          });
        }

        resolve(combinedText);
      }
    });
  });
};
exports.getTextFromFile = getTextFromFile;
