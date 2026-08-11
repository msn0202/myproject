import Header from "./Header";

export default function Contact() {
  return (
    <>
         <Header />
      <div className="min-h-[350px]  px-4 py-6 mt-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Contact Information */}
          <div className="bg-gray-900 text-white rounded-lg p-3 shadow-lg">
            <h2 className="text-base font-bold mb-1">Get in Touch 👋</h2>

            <p className="text-gray-300 text-xs mb-3 leading-snug">
              Feel free to contact us for any questions, feedback, or
              information about our React application.
            </p>

            <div className="space-y-2">
              {/* Email */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center bg-yellow-400 text-gray-900 rounded-full text-sm">
                  📧
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">Email</p>
                  <p className="text-xs font-semibold">contact@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center bg-yellow-400 text-gray-900 rounded-full text-sm">
                  📱
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">Phone</p>
                  <p className="text-xs font-semibold">+91 98765 43210</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center bg-yellow-400 text-gray-900 rounded-full text-sm">
                  📍
                </div>

                <div>
                  <p className="text-[10px] text-gray-400">Location</p>
                  <p className="text-xs font-semibold">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-lg p-3 shadow-lg">
            <h2 className="text-base font-bold text-gray-900 mb-2">
              Send a Message ✉️
            </h2>

            <form>
              {/* Name */}
              <div className="mb-1.5">
                <label
                  htmlFor="name"
                  className="block text-[10px] font-semibold text-gray-700 mb-0.5"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-1.5">
                <label
                  htmlFor="email"
                  className="block text-[10px] font-semibold text-gray-700 mb-0.5"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-semibold text-gray-700 mb-0.5"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="2"
                  placeholder="Write your message..."
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-xs font-semibold py-1.5 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
