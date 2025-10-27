const { getTextFromFile } = require("./readFileText");

require("dotenv").config();

const SendReq = async ({ file, text }) => {
  try {
    const processedText = await getTextFromFile({ filePath: file.path });

    if (!processedText) {
      console.log("Error reading the file");
      return {
        success: false,
        message: "Error reading the file",
      };
    }

    const OR_API = process.env.OR_TOKEN;

    if (!OR_API) {
      return { success: false, message: "Missing API token" };
    }

    console.log("⏳ Sending request to the API...");

    const res = await fetch(`https://openrouter.ai/api/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OR_API}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3.1",
        // model: "alibaba/tongyi-deepresearch-30b-a3b",
        messages: [
          {
            role: "system",
            content: `You are an expert AI log analyzer.
  Your goal is to read server/application logs and provide a clear, short, and structured analysis.
  You must only output valid JSON with these exact fields:
  {
    "summary": string,
    "errors": string[],
    "warnings": string[],
    "slowProcesses": string[],
    "securityFindings": string[],
    "userActions": string[],
    "counts": {
      "totalLogs": number,
      "errors": number,
      "warnings": number
    },
    "suggestions": string[]
  }
  Do not include explanations or extra text outside the JSON.
  Keep everything factual and concise.`,
          },
          {
            role: "user",
            content: `Analyze the following logs and extract all meaningful insights:\n\n${processedText}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        message: "Internal API Error",
        error: JSON.stringify(errorData),
      };
    }

    const data = await res.json();
    const aiMessage = data?.choices?.[0]?.message?.content;

    let parsed;

    try {
      const cleanMessage = aiMessage.replace(/```json|```/g, "").trim();

      parsed = JSON.parse(cleanMessage);
    } catch (err) {
      console.warn(
        "⚠️ AI response was not valid JSON, returning raw text.",
        err
      );
      parsed = { raw: aiMessage };
    }

    // console.log("Parsed: ", parsed);
    return parsed;
  } catch (error) {
    console.error("Error making API request:", error);
    return {
      error: error.message,
      message: "Error making API Request",
    };
  }
};

exports.SendReq = SendReq;
