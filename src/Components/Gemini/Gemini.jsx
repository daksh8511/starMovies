import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";

const Gemini = () => {
  const [myInput, setInput] = useState("");
  const [activeChat, setChat] = useState(false);
  const [aiRes, setAIRes] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

  async function main() {
    setAIRes("Loading");
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ role: "user", parts: [{ text: myInput }] }],
        generationConfig: {
          maxOutputTokens: 25,
          temperature: 0.1,
        },
      });
  
      const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      textAnimation(text);
    } catch (err) {
      setAIRes("Error: " + err.message);
    }
  }
  

  const textAnimation = (mytext) => {
    let index = 0;
    setAIRes("");
    const interval = setInterval(() => {
      setAIRes((prev) => prev + mytext[index]);
      index += 1;
      if (index === mytext.length) {
        clearInterval(interval);
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInput(myInput);
    main();
    setInput('')
  };

  return (
    <div className="fixed bottom-3 right-2 z-10 bg-white w-70 p-3 rounded-xl flex flex-col-reverse">
      <div
        onClick={() => setChat(!activeChat)}
        className="flex items-center justify-between cursor-pointer"
      >
        <IoChatboxEllipses className="text-black" />
        <h2 className="text-black font-bold">Ask Anything</h2>
      </div>

      <div
        className={`text-black mb-2 flex-col-reverse ${
          activeChat ? "flex" : "hidden"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <input
            onSubmit={handleSubmit}
            type="text"
            value={myInput}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-400 w-full placeholder:text-gray-600 placeholder:text-sm text-sm p-1 outline-0 mt-3"
            placeholder="Ask Anything"
          />
        </form>

        <div>
          <h2 className="bg-gray-400 max-w-60 p-1 rounded mb-2 max-h-100 overflow-y-scroll">
            {aiRes === "" ? "ask anything" : aiRes}
          </h2>
          <h2 className="flex justify-end">{submittedInput}</h2>
        </div>
      </div>
    </div>
  );
};

export default Gemini;
