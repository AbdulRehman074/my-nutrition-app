import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your AI Nutritionist. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // We'll add AI response later
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
            AI Nutritionist 🥗
          </h1>
          
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  message.role === "user" 
                    ? "bg-green-500 text-white ml-12" 
                    : "bg-gray-100 text-gray-800 mr-12"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about nutrition, diets, meal plans..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;