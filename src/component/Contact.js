import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center mb-6">Contact Me</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          I’d love to hear from you! Whether you have a project in mind or just want to connect, feel free to send me a message.
        </p>
        <div className="text-center">
          <p className="text-lg mb-4">You can reach me directly at:</p>
          <p className="text-2xl font-medium">
            <a href="mailto:yourname@example.com" className="text-white hover:text-teal-400 hover:underline transition duration-300">
              yourname@example.com
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="mailto:yourname@example.com"
            className="inline-block bg-teal-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-400 transition duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;


