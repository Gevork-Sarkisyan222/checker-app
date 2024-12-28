import { BellDot, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="border-b border-[#C8CBD9] p-4 flex flex-wrap items-center justify-between">
      {/* Left Side */}
      <div className="flex flex-1 items-center w-full sm:w-auto sm:mb-0">
        <div className="relative w-full sm:w-[400px] h-[35px] rounded-[5px] bg-[#f5f6fb] flex items-center px-4">
          <input
            className="flex-1 bg-transparent text-[16px] outline-none"
            type="text"
            placeholder="Search"
          />
          <Search size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Right Side */}
      <Link href="/profile" className="flex gap-4 items-center ml-[15px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdrqWQN9uteiwRksBUaMnpkB6C5SPI26XHw&s"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </Link>
    </header>
  );
}

export default Header;
