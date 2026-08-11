import Header from "./Header";

export default function About() {
  return (
    <>
      {/* Home Section */}
      <Header />

      {/* About Section */}
      <div className=" px-3 py-4">
        {/* About Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">
            About <span className="text-blue-600">React ⚛️</span>
          </h1>

          <p className="mt-1 text-sm text-gray-700">
            Learn React and build modern web applications.
          </p>
        </div>

        {/* Notes Cards */}
        <div className="max-w-3xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="text-2xl mb-2">⚛️</div>

            <h2 className="text-base font-bold text-gray-900 mb-1">
              What is React?
            </h2>

            <p className="text-xs text-gray-600 leading-snug">
              React is a JavaScript library developed by Meta for building
              interactive and reusable user interfaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="text-2xl mb-2">🧩</div>

            <h2 className="text-base font-bold text-gray-900 mb-1">
              Components
            </h2>

            <p className="text-xs text-gray-600 leading-snug">
              React applications are built using reusable components. Components
              can contain UI, logic, and state.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="text-2xl mb-2">🚀</div>

            <h2 className="text-base font-bold text-gray-900 mb-1">
              Why React?
            </h2>

            <p className="text-xs text-gray-600 leading-snug">
              React provides reusable components, efficient rendering, hooks,
              state management, and a large ecosystem.
            </p>
          </div>
        </div>

        {/* React Notes */}
        <div className="max-w-3xl mx-auto mt-4 mb-6 bg-gray-900 text-white rounded-lg p-4 shadow-xl">
          <h2 className="text-lg font-bold mb-2">React Important Notes </h2>

          <ul className="space-y-1 text-xs text-gray-300">
            <li>✅ JSX is used to write UI inside JavaScript.</li>
            <li>✅ Components help us create reusable UI.</li>
            <li>✅ Props are used to pass data between components.</li>
            <li>✅ State stores data that can change over time.</li>
            <li>✅ Hooks such as useState and useEffect manage logic.</li>
            <li>✅ React Router is used for client-side navigation.</li>
            <li>✅ Redux Toolkit can be used for centralized state.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
