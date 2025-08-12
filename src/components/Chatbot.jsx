import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    q: "What is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds?",
    a: "You can return items within 30 days is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes, we offer free shipping on orders over $50.",
  },
  {
    q: "How can I contact support erfergf wergfewrgf g?",
    a: "You can email us at info@btjalphatechnology.com",
  },
  {
    q: "What is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds?",
    a: "You can return items within 30 days is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes, we offer free shipping on orders over $50.",
  },
  {
    q: "How can I contact support erfergf wergfewrgf g?",
    a: "You can email us at info@btjalphatechnology.com",
  },
  {
    q: "What is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds?",
    a: "You can return items within 30 days is your return policy rsefryjmh tgrethngf drhnfgfaengjy hfsgfhdg ds",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes, we offer free shipping on orders over $50.",
  },
  {
    q: "How can I contact support erfergf wergfewrgf g?",
    a: "You can email us at info@btjalphatechnology.com",
  },
];

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 max-sm:bottom-2 right-4 max-sm:right-2 z-50 bg-blue-900 text-white rounded-full p-4 max-sm:p-2 shadow-lg transition-transform duration-300 hover:scale-105"
      >
        💬
      </button>

      {/* Chatbot Window with animation */}
      <div
        className={`fixed bottom-4 max-sm:bottom-0 right-4 max-sm:right-0 z-50 w-96 max-sm:w-full bg-white rounded-lg shadow-xl border flex flex-col overflow-hidden transform transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex w-full justify-between items-start text-center p-3 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="text-white font-semibold">FAQ Chatbot</div>
          <IoIosArrowDown
            className="text-white font-semibold text-[20px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-1 overflow-auto">
          {!selectedQuestion ? (
            <ul className="space-y-3 h-[400px] max-sm:h-[70%]">
              {faqData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedQuestion(item)}
                  className="p-2.5 pl-3 bg-gray-100 rounded-[20px] w-[280px] max-sm:w-[80%] text-[#444444] leading-5 cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  {item.q}
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p className="font-bold mb-2">{selectedQuestion.q}</p>
              <p className="mb-4">{selectedQuestion.a}</p>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="text-sm text-indigo-600 underline"
              >
                ← Return to Menu
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2 text-xs text-gray-500 border-t">
          Powered by BTJ Alpha Technology PVT. LTD.
        </div>
      </div>
    </>
  );
}
