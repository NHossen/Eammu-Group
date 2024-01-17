

const Contact = () => {
    return (
        <div>


          {/* Contact Us */}

          <div className=" min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              We are always here to assist you. Reach out to us with any inquiries, questions, or collaboration opportunities.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> eammuimmigration@gmail.com
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +880 16 3131-2524 
              <strong></strong> +880 17 0169-9743 
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> Office No-178-First Floor,Gomoti Tower,Cantonment,Cumilla,Bangladesh
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brand"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-brand"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-brand"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-brand text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
          {/* Contact Us From */}
   
        </div>
    );
};

export default Contact;