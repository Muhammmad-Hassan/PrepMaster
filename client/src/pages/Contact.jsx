import React, { useState, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsMessageSent(true);
          formRef.current.reset();
        } else {
          alert('Message failed to send. Please try again.');
        }
      })
      .catch(() => alert('Message failed to send. Please try again.'));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e9f5f0] text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-cyan-500 text-white p-8 text-center">
        <p className="text-xl md:text-2xl font-light">We're here to help. Reach out to us anytime!</p>
      </header>

      {/* Main */}
      <main className="flex-1 p-8">
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl mb-6">Send Us a Message</h2>
          <form onSubmit={handleFormSubmit} ref={formRef} className="space-y-4">
            <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-1">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"></textarea>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button type="submit" className="w-full bg-cyan-500 text-white py-3 rounded-md hover:bg-cyan-600 transition-colors">Send</button>
            {isMessageSent && <p className="text-green-600 font-bold mt-4">Your message has been sent! We will get back to you soon.</p>}
          </form>
        </section>

        <section className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl mb-6">Our Contact Information</h2>
          <div className="contact-info">
            <p className="text-lg"><strong>Address:</strong> Hayatabad Peshawar</p>
            <p className="text-lg"><strong>Email:</strong> fa3n2004@gmail.com</p>
            <p className="text-lg"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-lg"><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://www.facebook.com/Faizanahmadkhann/" aria-label="Facebook" className="text-cyan-500 hover:text-cyan-600"><FaFacebookF size={24} /></a>
            <a href="https://github.com/Faizan-Ahmad-Khan" aria-label="GitHub" className="text-cyan-500 hover:text-cyan-600"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/faizan-ahmad-khan5/" aria-label="LinkedIn" className="text-cyan-500 hover:text-cyan-600"><FaLinkedinIn size={24} /></a>
            <a href="https://www.instagram.com/_fa3n__/" aria-label="Instagram" className="text-cyan-500 hover:text-cyan-600"><FaInstagram size={24} /></a>
          </div>
          <div className="mt-8">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013569611336!2d-122.07851268468126!3d37.39180997983157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb05e86b95ef7%3A0xaed4c6db1d7e282!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630324718880!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
