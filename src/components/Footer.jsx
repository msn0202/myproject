export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 px-4 text-center z-50">
      <div className="text-xs">
        &copy; {new Date().getFullYear()} My Website. All rights reserved. 2026/2027
      </div>
    </footer>
  );
}