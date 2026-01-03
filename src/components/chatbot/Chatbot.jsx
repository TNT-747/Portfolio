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
          text: "Hello! I'm here to help you learn about Abderrahmane KASSIMI. Ask me about skills, projects, experience, education, or how to get in touch!",
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen]);

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Name and introduction
    if (input.includes('name') || input.includes('who are you')) {
      return 'I am Abderrahmane KASSIMI, a passionate Software Development and Information Systems Engineer specializing in backend development, cloud technologies, and DevOps automation. I build robust, scalable applications using Java, Spring Boot, and modern web technologies.';
    }
    
    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hi there! I am here to help you learn more about Abderrahmane KASSIMI. You can ask me about skills, projects, experience, education, certifications, or how to get in touch. What would you like to know?';
    }

    // Projects - specific
    if (input.includes('project')) {
      if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('shop')) {
        return 'The E-Commerce Website is a full-stack platform built with React.js, Spring Boot, and MySQL. It features secure payment gateway integration, product catalog with search and filtering, user authentication and order management, and a responsive admin dashboard for inventory management.';
      }
      if (input.includes('bank')) {
        return 'The Banking Management System is an enterprise application using Java and Spring Boot. It includes account management with transaction processing, secure authentication with role-based access control, automated interest calculation, and comprehensive reporting features.';
      }
      if (input.includes('dental') || input.includes('clinic')) {
        return 'The Dental Clinic Management System streamlines clinic operations with patient appointment scheduling, electronic health records management, treatment planning and billing, and inventory tracking for medical supplies.';
      }
      // General projects
      return 'I have worked on several projects:\n\n• E-Commerce Website - Full-stack platform with Spring Boot and React\n• Banking Management System - Secure enterprise application\n• Dental Clinic Management - Healthcare workflow automation\n\nAll showcase modern architecture, security best practices, and user-centric design. Which interests you?';
    }

    // Skills and Technologies
    if (input.includes('skill') || input.includes('technolog')) {
      if (input.includes('java') || input.includes('spring')) {
        return 'Java is my primary backend language! I specialize in Spring Boot for building RESTful APIs, microservices, and enterprise applications. I work with Spring Security for authentication, Spring Data JPA for databases, and Spring Cloud for distributed systems.';
      }
      if (input.includes('react') || input.includes('frontend') || input.includes('front-end')) {
        return 'For frontend development, I use React.js with modern patterns like hooks and context API. I am proficient in HTML5, CSS3, JavaScript (ES6+), and frameworks like Tailwind CSS. I build responsive, interactive user interfaces with excellent UX.';
      }
      if (input.includes('database') || input.includes('sql')) {
        return 'I have strong database expertise with MySQL, PostgreSQL, and Oracle Database. I design normalized schemas, write optimized queries, implement indexing strategies, and use JPA/Hibernate for ORM. I am Oracle Database Administration 2019 certified.';
      }
      if (input.includes('devops') || input.includes('docker') || input.includes('ci/cd') || input.includes('cicd')) {
        return 'My DevOps skills include Docker for containerization, CI/CD pipeline implementation with Jenkins and GitHub Actions, version control with Git, and cloud deployment. I automate workflows to improve development efficiency and deployment reliability.';
      }
      if (input.includes('cloud') || input.includes('azure')) {
        return 'I am Microsoft Azure Fundamentals (AZ-900) certified with experience in cloud services including virtual machines, storage solutions, Azure SQL Database, and Azure DevOps. I understand cloud architecture patterns and cost optimization.';
      }
      if (input.includes('network')) {
        return 'I hold a CCNA certification with strong networking knowledge: network protocols (TCP/IP, DNS, DHCP), routing and switching, network security, and troubleshooting. This background helps me build better distributed systems.';
      }
      // General skills
      return 'My technical skills:\n\nBackend: Java, Spring Boot, Python, Django\nFrontend: React.js, HTML5, CSS3, JavaScript\nDatabases: MySQL, PostgreSQL, Oracle\nDevOps: Docker, CI/CD, Git, Linux\nCloud: Microsoft Azure, AWS basics\nNetworking: CCNA certified, TCP/IP\n\nI am always learning and expanding my skill set!';
    }

    // Experience
    if (input.includes('experience') || input.includes('work') || input.includes('internship')) {
      return 'I have completed two significant internships:\n\n• Agence du Bassin Hydraulique de l\'Oum Er Rbia (June-August 2024): Resolved critical server incidents, set up backup servers with automated monitoring, and managed network infrastructure.\n\n• National School of Commerce and Management (June-July 2023): Performed network maintenance and infrastructure support.\n\nThese gave me hands-on expertise in system administration, network management, and troubleshooting under pressure.';
    }

    // Education
    if (input.includes('education') || input.includes('school') || input.includes('university') || input.includes('study')) {
      return 'My educational background:\n\n• EMSI (École Marocaine des Sciences de l\'Ingénieur) - Engineering in Computer & Network Engineering (2023-2026)\n• ALX Africa - Software Engineering Program (2023-2024)\n• ISTA Kénitra - Associate Degree in Digital Infrastructure Systems & Networks (2020-2022)\n\nI combine theoretical knowledge with practical, hands-on software development training.';
    }

    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
      return 'You can reach Abderrahmane at:\n\nEmail: kassimi.docs@gmail.com\nPhone: +212 6 50 24 01 75\nLocation: Rabat, Morocco\n\nVisit the Contact page to send a message directly!';
    }

    // Social profiles
    if (input.includes('github') || input.includes('linkedin') || input.includes('social')) {
      return 'Find Abderrahmane on:\n\nGitHub: TNT-747 (github.com/TNT-747)\nLinkedIn: Abderrahmane KASSIMI\n\nCheck out projects on GitHub and connect on LinkedIn for professional networking!';
    }

    // Certifications
    if (input.includes('certification') || input.includes('certificate')) {
      return 'Professional certifications:\n\n• Microsoft Certified: Azure Fundamentals (AZ-900)\n• Oracle Database Administration 2019\n• CCNA (Cisco Certified Network Associate)\n• Microsoft Office Specialist Master 2016\n• Microsoft Technology Associate: Networking Fundamentals\n• ICDL (Computer Driving License)\n\nThese demonstrate expertise in cloud, databases, networking, and enterprise technologies.';
    }

    // Languages
    if (input.includes('language') && !input.includes('programming')) {
      return 'Languages spoken:\n\n• Arabic - Native\n• French - Professional working proficiency\n• English - Professional working proficiency\n\nAbderrahmane can communicate effectively in multilingual technical environments.';
    }

    // About/Background
    if (input.includes('about') || input.includes('background') || input.includes('who is')) {
      return 'Abderrahmane KASSIMI is a passionate Software Development and Information Systems Engineer from Rabat, Morocco. Specializing in backend development with Java/Spring Boot, cloud technologies, and DevOps automation, he builds robust, scalable applications. With a strong foundation in networking (CCNA) and cloud (Azure), Abderrahmane combines software engineering with infrastructure expertise.';
    }

    // Resume/CV
    if (input.includes('resume') || input.includes('cv')) {
      return 'You can view the complete resume on the Resume page. It includes detailed information about skills, experience, education, projects, and certifications. Feel free to download it for reference!';
    }

    // Availability
    if (input.includes('available') || input.includes('hire') || input.includes('job') || input.includes('opportunity')) {
      return 'Abderrahmane is actively seeking opportunities in software development, backend engineering, and cloud/DevOps roles. He is open to full-time positions, internships, and exciting projects. Reach out via email at kassimi.docs@gmail.com to discuss opportunities!';
    }

    // Location
    if (input.includes('location') || input.includes('where') || input.includes('based')) {
      return 'Abderrahmane is based in Rabat, Morocco. He is open to remote work, hybrid arrangements, and relocation for the right opportunity.';
    }

    // Thanks
    if (input.includes('thank')) {
      return 'You are very welcome! Feel free to ask more questions about Abderrahmane\'s background, skills, projects, or how to get in touch.';
    }

    // Goodbye
    if (input.includes('goodbye') || input.includes('bye')) {
      return 'Goodbye! Thank you for your interest in Abderrahmane KASSIMI\'s portfolio. Feel free to return anytime!';
    }

    // Default response
    return 'I can help you learn about Abderrahmane KASSIMI! Ask me about:\n\n• Skills & Technologies (Java, Spring Boot, React, databases, DevOps, cloud, networking)\n• Projects (E-Commerce, Banking System, Dental Clinic)\n• Experience & Education\n• Certifications (Azure, Oracle, CCNA)\n• Contact Information\n• Availability for opportunities\n\nWhat would you like to know?';
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
      {!isOpen && (
        <button className="chatbot-opener" onClick={() => setIsOpen(true)}>
          <MessageSquare />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
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
