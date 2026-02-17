
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

// Fix: Initialize GoogleGenAI client correctly using the named apiKey parameter.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateMarketingStrategy(goal: string, language: 'en' | 'sw'): Promise<StrategyResponse | null> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a 3-step marketing strategy for this goal: "${goal}". Provide the response in ${language === 'en' ? 'English' : 'Swahili'}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: { type: Type.STRING, description: 'A brief 2-sentence summary of the approach.' },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ['title', 'description']
              }
            },
            kpis: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: '3 key performance indicators to track.'
            }
          },
          required: ['overview', 'steps', 'kpis']
        }
      }
    });

    // Fix: Access .text property directly from GenerateContentResponse as per SDK guidelines.
    if (response.text) {
      return JSON.parse(response.text.trim()) as StrategyResponse;
    }
    return null;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
