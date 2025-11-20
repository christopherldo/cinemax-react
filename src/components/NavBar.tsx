import { Download, Home, Search, User } from "lucide-react";

export const NavBar = () => {
  return (
    <nav>
      <ul className="h-18 bg-dark fixed bottom-0 w-full flex gap-4 justify-center items-center">
        <li className="bg-soft rounded-2xl">
          <a className="w-23 h-10 flex justify-center items-center gap-1">
            <Home color="#12CDD9" size={24} />
            <span className="text-blue-accent font-medium block">Home</span>
          </a>
        </li>
        <li>
          <a className="w-12 h-10 flex justify-center items-center">
            <Search color="#92929D" size={24} />
          </a>
        </li>
        <li>
          <a className="w-12 h-10 flex justify-center items-center">
            <Download color="#92929D" size={24} />
          </a>
        </li>
        <li>
          <a className="w-12 h-10 flex justify-center items-center">
            <User color="#92929D" size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
