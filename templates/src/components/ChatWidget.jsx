import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import "./chatwidget.scss";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { id: Date.now(), text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-widget">
      <div className={`chat-icon ${isOpen ? "open" : ""}`} onClick={toggleChat}>
        <FaCommentDots size={24} />
      </div>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button onClick={toggleChat}>×</button>
          </div>
          <div className="chat-body">
            {chatHistory.length > 0 ? (
              chatHistory.map((chat) => (
                <div key={chat.id} className="chat-message">
                  {chat.text}
                </div>
              ))
            ) : (
              <p className="no-messages">No messages yet.</p>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={message}
              placeholder="Type your message..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
