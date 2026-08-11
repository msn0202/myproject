import Header from "./Header";

export default function SignIn() {
  return (
    <>
   <Header/>

      <div className="w-full   mt-16">
        <form className="w-full max-w-xs mx-auto p-3 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-2 text-center text-gray-900">
            Sign In
          </h2>

          {/* Email */}
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xs font-semibold mb-1"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-xs font-semibold mb-1"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-xs font-semibold py-1.5 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
