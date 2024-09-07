import React, { useState, useRef } from 'react';
import team1 from "../assets/faizanAhmad.png";
import team2 from "../assets/SamAltman.png";
import team3 from "../assets/JensenHuang.png";

function AboutPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const emailInput = formRef.current.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsSubscribed(true);
          form.reset();
        } else {
          alert('Subscription failed. Please try again.');
        }
      })
      .catch(() => alert('Subscription failed. Please try again.'));
  };

  const features = [
    { id: 1, text: 'Multiple Question Types: MCQs, Short Answers, True/False' },
    { id: 2, text: 'Automated Grading for Instant Feedback' },
    { id: 3, text: 'Progress Tracking for Students and Teachers' },
    { id: 4, text: 'User Authentication for Secure Exams' },
    { id: 5, text: 'Responsive Design for Web and Mobile Use' },
  ];

  const teamMembers = [
    {
      name: "Faizan Ahmad Khan",
      title: "Frontend Developer",
      description: "Responsible for designing the user-friendly interface for the testing platform.",
      image: team1,
      alt: "Faizan Ahmad Khan"
    },
    {
      name: "Sam Altman",
      title: "System Architect",
      description: "Ensures smooth functionality and scalability of the online testing system.",
      image: team2,
      alt: "Sam Altman"
    },
    {
      name: "Jensen Huang",
      title: "Backend Developer",
      description: "Develops secure and efficient server-side functionalities.",
      image: team3,
      alt: "Jensen Huang"
    }
  ];

  const testimonials = [
    {
      text: "The online testing system has made managing exams so much easier for our school. The automated grading saves time and provides instant feedback.",
      name: "Jane Doe",
      title: "Teacher"
    },
    {
      text: "As a student, I love how easy it is to track my progress and review past tests. The system is intuitive and easy to use.",
      name: "John Smith",
      title: "Student"
    },
    {
      text: "Our university switched to this testing system, and it's been a game-changer. The variety of question types makes it very versatile.",
      name: "Emily Johnson",
      title: "Professor"
    },
    {
      text: "This tool has significantly improved how we manage and conduct online tests. The user interface is clean, and the system is reliable.",
      name: "Sarah Lee",
      title: "Administrator"
    }
  ];

  return (
    <>
      <div className="font-sans z- text-gray-800 leading-relaxed bg-gradient-to-tl from-[#FAFEFE] to-[#E5FCFE] ">
        {/* Mission Section */}
        <section className="p-10 text-center border-b border-gray-300">
          <h2 className="text-4xl mb-5 font-semibold">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-[35px] max-w-3xl mx-auto">
            Our mission is to provide a reliable and innovative solution for conducting exams online. 
            With our Online Testing System, we aim to simplify the testing process for institutions and students by offering an intuitive platform for managing exams, grading, and tracking progress. 
            We are committed to enhancing the digital education experience with seamless, secure, and user-friendly functionalities.
          </p>
        </section>

        {/* Features Section */}
        <section className="p-10 text-center border-b border-gray-300">
          <h2 className="text-4xl mb-5 font-semibold">System Features</h2>
          <ul className="flex flex-wrap justify-center gap-5 my-5 list-none max-w-8xl mx-auto">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="bg-[#E5FCFE] shadow-md rounded-lg border p-4 text-gray-800 w-full sm:w-[40%] text-center transition-transform transform hover:bg-[#ebfbfd] hover:scale-105"
              >
                {feature.text}
              </li>
            ))}
          </ul>
        </section>

        {/* Newsletter Section */}
        <section className="p-10 text-center">
          <h2 className="text-3xl mb-5 font-semibold">Subscribe for Updates</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" ref={formRef}>
            <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
            <input type="email" name="email" placeholder="Enter your email" required className="p-2 border border-gray-300 rounded-md w-full sm:max-w-xs" />
            <input type="checkbox" name="botcheck" className="hidden" />
            <button type="submit" className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-2/3 transition-colors hover:bg-gray-900">Subscribe</button>
          </form>
          {isSubscribed && <p className="text-green-600 text-xl mt-4">Thank you for subscribing!</p>}
        </section>

        {/* Team Section */}
        <section className="p-10 bg-white text-center border-b border-gray-300">
          <h2 className="text-4xl mb-5 font-semibold">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs p-2">
                <img src={member.image} alt={member.alt} className="w-28 h-28 rounded-full shadow-lg mx-auto" />
                <p className="text-lg mt-2 font-bold">{member.name} | {member.title}</p>
                <p className="text-sm text-gray-600 mt-1">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-10 text-center">
          <h2 className="text-3xl mb-5 font-semibold">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-5 max-w-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <p className="text-gray-800 mb-3">{testimonial.text}</p>
                <span className="block text-green-700 font-bold">{testimonial.name}</span>
                <span className="block text-green-600 text-sm">{testimonial.title}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
