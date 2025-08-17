import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "../prompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const generateBusinessWebsite = async (businessType: string, language: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
${SYSTEM_PROMPT}
Business type: ${businessType}
Language: ${language}
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
