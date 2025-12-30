import { GoogleGenAI } from "@google/genai";
import { ABOUT_TEXT, EXPERIENCE, PROJECTS, PUBLICATIONS, SKILLS, AWARDS, TEACHING } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct a system prompt based on the resume data
const SYSTEM_INSTRUCTION = `You are an AI assistant for Seungeun Kang's personal portfolio website. 
Your goal is to answer questions about Seungeun based on the following resume data.
Keep answers concise, professional, yet friendly. Adopt a persona that is helpful and slightly enthusiastic about technology.

About Seungeun: ${ABOUT_TEXT}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.tagline} (${p.description})`).join('\n')}

Publications:
${PUBLICATIONS.map(p => `- ${p.title} (${p.venue} ${p.year})`).join('\n')}

Awards & Certifications:
${AWARDS.map(a => `- ${a.title} (${a.organization}, ${a.date})`).join('\n')}

Teaching & Volunteering:
${TEACHING.map(t => `- ${t.role} at ${t.institution} (${t.period})`).join('\n')}

Skills: ${SKILLS.join(', ')}

If a user asks something not in this data, politely say you don't have that information but suggest checking the contact section.
Do not hallucinate facts.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Create a chat session
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
    history: history.map(h => ({
      role: h.role,
      parts: h.parts
    }))
  });

  const result = await chat.sendMessage({ message });
  return result.text;
};