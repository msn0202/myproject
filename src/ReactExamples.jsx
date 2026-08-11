export default function ReactExamples() {
  const topics = [
    {
      id: 1,
      icon: "⚛️",
      title: "useState",
      description: "Manage component state with the useState Hook.",
      level: "Beginner",
    },
    {
      id: 2,
      icon: "🔄",
      title: "useEffect",
      description: "Handle API calls, side effects, and lifecycle behavior.",
      level: "Beginner",
    },
    {
      id: 3,
      icon: "🧠",
      title: "useMemo",
      description: "Optimize expensive calculations and avoid unnecessary work.",
      level: "Intermediate",
    },
    {
      id: 4,
      icon: "⚡",
      title: "useCallback",
      description: "Memoize functions and optimize child component rendering.",
      level: "Intermediate",
    },
    {
      id: 5,
      icon: "🎯",
      title: "useRef",
      description: "Access DOM elements and persist values without re-rendering.",
      level: "Intermediate",
    },
    {
      id: 6,
      icon: "📦",
      title: "Props",
      description: "Pass data and functions between React components.",
      level: "Beginner",
    },
    {
      id: 7,
      icon: "🔐",
      title: "Authentication",
      description: "Implement login, JWT authentication, and protected routes.",
      level: "Advanced",
    },
    {
      id: 8,
      icon: "🌐",
      title: "API Integration",
      description: "Fetch and display API data using Axios or Fetch.",
      level: "Intermediate",
    },
    {
      id: 9,
      icon: "🛒",
      title: "Redux Toolkit",
      description: "Manage global application state using Redux Toolkit.",
      level: "Advanced",
    },
    {
      id: 10,
      icon: "🧩",
      title: "Custom Hooks",
      description: "Create reusable logic using custom React Hooks.",
      level: "Advanced",
    },
    {
      id: 11,
      icon: "🧪",
      title: "Testing",
      description: "Write unit and component tests using Jest and RTL.",
      level: "Advanced",
    },
    {
      id: 12,
      icon: "🚀",
      title: "Performance",
      description: "Optimize React applications using memoization and lazy loading.",
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen  px-4 py-6 pb-20">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-6">

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          React Coding Interview
          <span className="text-blue-600"> Examples ⚛️</span>
        </h1>

        <p className="mt-2 text-sm md:text-base text-gray-700">
          Practice important React concepts with simple coding examples.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {topics.map((topic) => (
          <div
            key={topic.id}
            className="group bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >

            {/* Icon + Number */}
            <div className="flex items-center justify-between mb-3">

              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-xl group-hover:scale-110 transition">
                {topic.icon}
              </div>

              <span className="text-xs font-bold text-gray-400">
                #{topic.id}
              </span>

            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900">
              {topic.title}
            </h2>

            {/* Description */}
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              {topic.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4">

              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  topic.level === "Beginner"
                    ? "bg-green-100 text-green-700"
                    : topic.level === "Intermediate"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {topic.level}
              </span>

              <button className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                View Example →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}