import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS setup
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send('service_f150dqf', 'template_bcwzomb', templateParams, '10n1D1fHxv8zlOx2F')
      .then(
        (response) => {
          setResponseMessage('Message sent successfully!');
          console.log('Email sent successfully:', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setResponseMessage('Failed to send message. Please try again later.');
          console.error('Email sending error:', error);
        }
      );
  };

  return (
    <div
      className="w-full bg-fixed bg-cover bg-center p-10"
      style={{ backgroundImage: `url('/contact.jpg')` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 justify-between gap-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full h-24"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>

          <div className="mt-4">
            <p className="text-gray-800">Feel free to contact me:</p>
            <p className="text-gray-800">Phone: +91 7683823914</p>
            <p className="text-gray-800">Email: himadrisingha2001@gmail.com</p>
          </div>
        </div>
        {responseMessage && (
          <p className="text-center text-green-500 mt-4">{responseMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
