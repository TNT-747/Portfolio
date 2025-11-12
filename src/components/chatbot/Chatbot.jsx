import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { Send, MessageSquare, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hello! I\'m a professional chatbot here to assist you. How can I help you learn more about this portfolio?",
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen]);

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    // Enhanced keyword matching and responses
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      return 'Hi there! I can answer questions about skills, experience, and projects. What would you like to know?';
    } else if (lowerCaseInput.includes('project')) {
        return 'This portfolio showcases several projects, including a "Water Quality Management System" using IoT and data analytics, a full-stack "E-Commerce Website" with a secure payment gateway, and a "Banking Management System" with robust security features. You can find more details and live demos on the projects page. Which project are you most interested in?';
    } else if (lowerCaseInput.includes('skill') || lowerCaseInput.includes('technolog')) {
        return 'I am proficient in a variety of technologies. For front-end, I use React.js, and for back-end, I have experience with Django and Spring Boot. I am also skilled in languages like Java, Python, and C++. The "About" page has a more comprehensive list of my technical skills.';
    } else if (lowerCaseInput.includes('experience') || lowerCaseInput.includes('career')) {
        return 'My professional experience includes an internship at the Agence du Bassin Hydraulique de l\'Oum Er Rbia, where I resolved a critical server incident, set up a backup server, and managed network infrastructure. I also interned at the National School of Commerce and Management, focusing on network maintenance. You can find more details on my resume.';
    } else if (lowerCaseInput.includes('education')) {
        return 'I am currently an engineering student in Computer & Network Engineering at EMSI (École Marocaine des Sciences de l\'Ingénieur). I am also part of the Software Engineering Program at ALX Africa. My foundational knowledge comes from an Associate’s Degree in Digital Infrastructure Systems & Networks. You can find more details on the "About" page.';
    } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('email') || lowerCaseInput.includes('github')) {
      return 'I cannot send emails or provide personal contact information like GitHub details directly. However, you can find all contact information, including a form to send me a message, on the "Contact" page. My GitHub profile is also linked on the resume and project pages.';
    } else if (lowerCaseInput.includes('about') || lowerCaseInput.includes('background')) {
      return 'This portfolio belongs to a passionate software developer with a knack for creating efficient and user-friendly applications. The goal is to leverage technology to solve real-world problems. For more personal details, please visit the "About" page.';
    } else if (lowerCaseInput.includes('resume') || lowerCaseInput.includes('cv')) {
      return 'Of course. You can view and download the resume directly from the "Resume" page. It contains a detailed summary of my skills, experience, and education.';
    } else if (lowerCaseInput.includes('certification') || lowerCaseInput.includes('certificate')) {
      return 'I have earned several certifications, including "Oracle Database Administration 2019", "Microsoft Certified: Azure Fundamentals (AZ-900)", "CCNA", and "Microsoft Office Specialist Master 2016". For a complete list, please check the "Resume" or "Certifications" page.';
    } else if (lowerCaseInput.includes('thank')) {
      return "You\'re very welcome! Is there anything else I can help you with today?";
    } else if (lowerCaseInput.includes('goodbye') || lowerCaseInput.includes('bye')) {
        return 'Goodbye! Feel free to reach out if you have more questions in the future.';
    } else {
      return "I\'m sorry, I\'m not sure how to answer that. Could you please try rephrasing your question? I can tell you about projects, skills, experience, and education.";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      const messageText = inputValue;
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        const botResponseText = getBotResponse(messageText);
        const botMessage = { text: botResponseText, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className={theme}>
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
            {isTyping && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isTyping}
            />
            <button type="submit" className="chatbot-send-btn" disabled={isTyping}>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
