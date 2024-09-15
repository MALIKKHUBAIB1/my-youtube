import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="bg-gray-200 text-black h-screen p-4 fixed left-0 col-span-1 shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Section of Heading</h1>
      <ul className="space-y-2">
        <Link to="/">
          <li className="hover:bg-gray-300 p-2 rounded">Home</li>
        </Link>
        <li className="hover:bg-gray-300 p-2 rounded">Likes</li>
        <li className="hover:bg-gray-300 p-2 rounded">Subscribe</li>
        <li className="hover:bg-gray-300 p-2 rounded">Channel</li>
      </ul>
      <h1 className="text-2xl font-bold mb-4">Section of Heading</h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-300 p-2 rounded">Home</li>
        <li className="hover:bg-gray-300 p-2 rounded">Likes</li>
        <li className="hover:bg-gray-300 p-2 rounded">Subscribe</li>
        <li className="hover:bg-gray-300 p-2 rounded">Channel</li>
      </ul>
      <h1 className="text-2xl font-bold mb-4">Section of Heading</h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="hover:bg-gray-700 p-2 rounded">Likes</li>
        <li className="hover:bg-gray-700 p-2 rounded">Subscribe</li>
        <li className="hover:bg-gray-700 p-2 rounded">Channel</li>
      </ul>
    </aside>
  );
}

export default SideBar;
