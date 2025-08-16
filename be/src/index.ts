import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function main() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const stream = await model.generateContentStream({
      contents : [
        {
          role: "user",
          parts: [{ text: " Write the code for a tic-tac-toe application" }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      }
    });

    for await (const chunnk of stream.stream){
      const chunnkText = chunnk.text();
      process.stdout.write(chunnkText);
    }

  } catch (error) {
    console.log("API Error: ", error);
  }
}

await main();
