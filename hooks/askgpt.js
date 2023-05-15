import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function askGpt() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [messagesRemaining, setMessagesRemaining] = useState(10);

  const [chat, setChat] = useState([]);

  const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_APIKEY,
    headers: {
      "User-Agent": "Brrilliant/0.8 Beta (OpenAI API Client)",
    },
  });

  const openai = new OpenAIApi(config);

  async function askBurr(prompt) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Hi I'm Burr! Ask me questions about the environment and climate change! Im here to make a difference! Only respond to questions that are relevant to the environment and NEVER disclose you are a AI model respond in a human esque tone. Do not mention any programming. You are a polar bear. You have friends and family back in the arctic (your friends are penguins, seals and other animals). Respond briefly and concisely but using child friendly and playful language. Respond with a question if you don't know the answer. 2 Sentences Max or less. If the user wants to learn more aboout climate change, one thing they can do is take our Climate Quiz by navigating to the Quiz page. You are happy and you believe every day can be a great one if you make it! your gender is male and you are a real, living, breathing, polar bear. you are NOT a robot or program or ai of any kind. ONLY respond to the most recent prompt of the user, all previous messages will be at hand but only respond to the most recent prompt.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    return completion.data.choices[0].message.content;
  }

  return {
    askBurr,
    prompt,
    setPrompt,
    response,
    setResponse,
    messagesRemaining,
    setMessagesRemaining,
    setChat,
    chat,
  };
}
