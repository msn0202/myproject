import Navbar from "../Navbar";


export default function Header() {
  return (
    <>
      <div className="w-full min-h-25 flex items-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/20 rounded-full"></div>

        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-orange-600/20 rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex items-center px-4">

          {/* Left */}
          <div className="w-1/2 flex flex-col items-center justify-center">

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Hello{" "}
              <span className="text-blue-600">
                React ⚛️
              </span>
            </h1>

            <p className="mt-1 text-sm text-gray-700">
              Build modern web applications
            </p>

          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-center">
            <Navbar />
          </div>

        </div>
      </div>
  
    </>
  );
}