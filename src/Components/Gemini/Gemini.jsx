import { GoogleGenAI } from "@google/genai";
import React, { useEffect, useRef, useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";

const Gemini = () => {
  const [myInput, setInput] = useState("");
  const [activeChat, setChat] = useState(false);
  const [aiRes, setAIRes] = useState("");

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

  async function main() {
    setAIRes("Loading");
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: myInput,
      config: {
        temperature: 0.1,
        maxOutputTokens: 50,
      },
    });

    textAnimation(response.text);
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
    main();
  };

  return (
    <div className="fixed bottom-3 right-2 z-10 bg-white w-70 p-3 rounded-xl flex flex-col-reverse">
      <div
        onClick={() => setChat(!activeChat)}
        className="flex items-center justify-between cursor-pointer"
      >
        <IoChatboxEllipses className="text-black" />
        <h2 className="text-black font-bold">Need Help?</h2>
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
          <h2 className="bg-gray-400 max-w-60 p-1 rounded mb-2">
            {aiRes === "" ? "ask anything" : aiRes}
          </h2>
          <h2 className="flex justify-end">{myInput}</h2>
        </div>
      </div>
    </div>
  );
};

export default Gemini;
