import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Note: In a real deployment, ensure process.env.API_KEY is set.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateBio = async (): Promise<string> => {
  if (!apiKey) {
    return "Thiếu API Key! Vui lòng cài đặt Gemini API key.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    // Updated prompt to request Vietnamese content
    const prompt = "Viết một câu giới thiệu ngắn gọn, hóm hỉnh và hơi châm biếm cho website cá nhân của một lập trình viên Frontend tên là Tịnh bằng Tiếng Việt. Hãy nhắc đến điều gì đó ngẫu nhiên như cà phê, pixel, bug hoặc bàn phím cơ.";

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Tôi viết code và thỉnh thoảng làm hỏng mọi thứ.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};