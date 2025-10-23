
const preProcessText = async ({ text }) => {
  const lines = text.split("\n");
  combinedText = lines.join(" ");
  if (!combinedText) {
    console.log("Error reading the file");
    return {
      success: false,
      message: "Error reading the file",
    };
  }

  // console.log("preProcessText: ", combinedText);

  return combinedText;
};

exports.preProcessText = preProcessText;
