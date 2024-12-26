import { BellDot, Search } from 'lucide-react';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="border-b border-[#C8CBD9] p-[30px] flex items-center justify-between">
      {/* Left Side */}
      <div className="flex gap-[25px] items-center">
        <div className="relative w-[400px] h-[35px] rounded-[5px] bg-[#f5f6fb] flex items-center px-[15px]">
          <input
            className="flex-1 bg-transparent text-[16px] outline-none"
            type="text"
            placeholder="Search"
          />
          <Search size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-[20px] items-center">
        <BellDot className="text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
