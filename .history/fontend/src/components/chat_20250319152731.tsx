import React, { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Thêm tin nhắn của người dùng
    setMessages([...messages, { text: input, isUser: true }]);
    
    // Giả lập phản hồi AI (thay bằng API thật của bạn)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Đây là phản hồi từ AI', isUser: false }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-20 left-4 z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Nút toggle chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200"
        >
          Chat
        </button>
      )}

      {/* Khung chat */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-[#2A2A2A] text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>AI Chat</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Nội dung chat */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.isUser ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.isUser
                      ? 'bg-[#2A2A2A] text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A2A2A]"
                placeholder="Nhập tin nhắn..."
              />
              <button
                onClick={handleSend}
                className="bg-[#2A2A2A] text-white p-2 rounded-lg hover:bg-[#2A2A2A]"
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;