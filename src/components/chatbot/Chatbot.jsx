import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { Send, MessageSquare, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hello! I'm a professional chatbot here to assist you. How can I help you learn more about this portfolio?",
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen]);

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      return 'Hi there! How can I help you today?';
    } else if (lowerCaseInput.includes('project')) {
      return 'You can find all the projects on the projects page. Each project has a detailed description and a link to the code.';
    } else if (lowerCaseInput.includes('skill') || lowerCaseInput.includes('technolog')) {
      return 'I am proficient in a variety of technologies, including React, TypeScript, and Node.js. For a complete list, please check out the about page.';
    } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('email')) {
      return 'You can get in touch via the contact form on the contact page. I will get back to you as soon as possible.';
    } else if (lowerCaseInput.includes('about') || lowerCaseInput.includes('background')) {
      return 'This portfolio was created by a passionate software developer with experience in building modern web applications. You can learn more on the about page.';
    } else if (lowerCaseInput.includes('resume') || lowerCaseInput.includes('cv')) {
      return 'You can view and download the resume from the resume page.';
    } else if (lowerCaseInput.includes('thank')) {
      return "You're welcome! Let me know if there's anything else I can help you with.";
    } else {
      return "I'm sorry, I'm not sure how to answer that. Please try asking another question or rephrasing.";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);
      const botResponse = getBotResponse(inputValue);
      setInputValue('');
      setTimeout(() => {
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <>
      <button className="chatbot-opener" onClick={() => setIsOpen(true)}>
        <MessageSquare />
      </button>

      {isOpen && (
        <div className={`chatbot-window ${isOpen ? '' : 'closed'}`}>
          <div className="chatbot-header">
            <h3>KASSIMI Assistant</h3>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button type="submit" className="chatbot-send-btn">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
