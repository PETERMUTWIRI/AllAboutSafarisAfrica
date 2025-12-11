import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Contact For Any Query
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Get in Touch</h3>
            <p className="mb-4">
              Please fill out the form below to get in touch with us.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
            <p className="mb-2">
              <strong>Address:</strong> CBD, Nairobi, Kenya
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +254-700-064-857
            </p>
            <p>
              <strong>Email:</strong> allaboutsafarisafrica@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
