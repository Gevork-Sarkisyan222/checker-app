'use client';

import { BellDot, Menu, Search, Plus, FileText, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

type Props = {};

function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-[#C8CBD9] p-4 flex flex-wrap items-center justify-between relative">
      {/* <h1 className="text-2xl font-bold min-[775px]:hidden">Checker</h1> */}

      {/* Left Side */}
      <div className="flex flex-1 items-center w-full sm:w-auto sm:mb-0">
        <div className="relative w-full sm:w-[400px] h-[35px] rounded-[5px] bg-[#f5f6fb] flex items-center px-4 max-[775px]:w-[max]">
          <input
            className="flex-1 bg-transparent text-[16px] outline-none"
            type="text"
            placeholder="Search"
          />

          <Search size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Right Side */}
      <Link href="/profile" className="flex gap-4 items-center ml-[15px] max-[775px]:hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdrqWQN9uteiwRksBUaMnpkB6C5SPI26XHw&s"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </Link>

      {/* Menu Icon */}
      <article className="min-[775px]:hidden ml-[15px] cursor-pointer" onClick={toggleMenu}>
        <Menu />
      </article>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute top-[60px] right-0 bg-white shadow-md rounded-md transition-all duration-300 z-[3] ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
        style={{ width: '200px' }}>
        <ul className="p-4 space-y-4">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href={'/packs'}
            className={`flex items-center gap-2 ${
              path === '/packs' ? 'font-bold text-[#3b82f6]' : ''
            }`}>
            <Plus size={18} />
            <span>Packs</span>
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href={'/function'}
            className={`flex items-center gap-2 ${
              path === '/function' ? 'font-bold text-[#3b82f6]' : ''
            }`}>
            <FileText size={18} />
            <span>Function</span>
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href={'/profile'}
            className={`flex items-center gap-2 ${
              path === '/profile' ? 'font-bold text-[#3b82f6]' : ''
            }`}>
            <User size={18} />
            <span>Profile</span>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
