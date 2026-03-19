/**
 * ChatBot — Floating AI Assistant Widget
 * Appears on all pages as a fixed bottom-right widget.
 * Powered by Anthropic Claude via chatService.ts.
 */

import React, { useState, useRef, useEffect } from 'react';
import { askAI, Message } from '../../services/chatService';
import { SYSTEM_PROMPT, SUGGESTED_QUESTIONS } from '../../data/systemPrompt';
import './ChatBot.css';

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content:
    "👋 Hi! I'm Sandeep's AI assistant. Ask me anything about his skills, projects, or availability!",
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      // Exclude the welcome message (index 0) from the API call history
      // since it's a static greeting, not a real AI response
      const historyForApi = updatedMessages.slice(
        messages[0] === WELCOME_MESSAGE ? 1 : 0
      );

      const responseText = await askAI(historyForApi, SYSTEM_PROMPT);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: responseText },
      ]);
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'Something went wrong.';
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `⚠️ Sorry, I couldn't respond right now. (${errorMsg})`,
        },
      ]);
    } finally {
      setIsLoading(false);
      setShowSuggestions(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close chat' : 'Chat with Sandeep\'s AI'}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-label="AI Chat Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-avatar" aria-hidden="true">🤖</div>
            <div className="chatbot-header-info">
              <div className="chatbot-header-name">Sandeep's AI Assistant</div>
              <div className="chatbot-header-status">
                <span className="chatbot-status-dot" />
                <span className="chatbot-status-text">Online</span>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat"
            >
              ─
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" role="log" aria-live="polite">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-message ${msg.role}`}
              >
                {msg.role === 'assistant' && (
                  <div className="chatbot-msg-avatar" aria-hidden="true">🤖</div>
                )}
                <div className="chatbot-bubble">{msg.content}</div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="chatbot-message assistant">
                <div className="chatbot-msg-avatar" aria-hidden="true">🤖</div>
                <div className="chatbot-typing" aria-label="AI is typing">
                  <span className="chatbot-typing-dot" />
                  <span className="chatbot-typing-dot" />
                  <span className="chatbot-typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {showSuggestions && !isLoading && (
            <div className="chatbot-suggestions" aria-label="Suggested questions">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  className="chatbot-chip"
                  onClick={() => sendMessage(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="chatbot-input-row">
            <textarea
              ref={inputRef}
              className="chatbot-input"
              rows={1}
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              className="chatbot-send-btn"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
