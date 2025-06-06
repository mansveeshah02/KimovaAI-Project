"use client"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-16 mt-14"
      style={{
        background: "linear-gradient(135deg, #3498db 0%, #f39c12 100%)",
      }}
    >
      <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-[#3498db]">Get in Touch</h1>
        <p className="mb-8 text-gray-700 text-lg">
          We’d love to hear from you! Whether you have a question about features, trials, pricing,
          need a demo, or anything else, our team is ready to answer all your questions.
        </p>

        {submitted && (
          <div className="p-5 mb-6 bg-[#f39c12] text-white rounded-md font-semibold text-center">
            Thank you for reaching out! We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white font-semibold py-3 rounded-md hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
