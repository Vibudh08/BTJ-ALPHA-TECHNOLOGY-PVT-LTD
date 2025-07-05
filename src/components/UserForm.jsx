import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const UserForm = () => {
  const [selected, setSelected] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"      
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();   // clear form
          setSelected("");           // reset dropdown
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4 text-black">
        <input
          type="text"
          name="user_name"
          placeholder="Name*"
          className="w-1/2 p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email Address*"
          className="w-1/2 p-3 border rounded-lg"
          required
        />
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          name="user_phone"
          placeholder="Enter 10-digit number"
          className="w-1/2 p-3 border rounded-lg text-black"
          required
        />
        <select
          name="user_service"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={`w-1/2 p-2 border rounded-lg 
                      ${selected === "" ? "text-gray-500" : "text-black"} 
                      bg-white focus:outline-none`}
          required
        >
          <option value="">Select Service</option>
          <option value="design">Web Designing</option>
          <option value="development">Web Development</option>
          <option value="app">App Development</option>
          <option value="marketing">Digital Marketing</option>
          <option value="sms">Bulk SMS</option>
          <option value="database">Bulk Database</option>
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-3 border rounded-lg h-32 text-black"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-[#fb9c24] text-black p-3 rounded-lg font-semibold flex items-center justify-center"
      >
        Submit <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </form>
  );
};

export default UserForm;
