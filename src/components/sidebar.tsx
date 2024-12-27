'use client';

import React, { useState } from 'react';
import { Plus, FileText, CreditCard, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

function SideBar({}: Props) {
  const path = usePathname();
  const [isPacksOpen, setIsPacksOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [keys, setKeys] = useState<string[]>(['Key1', 'Key2', 'Key3']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKey, setNewKey] = useState('');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const addKey = () => {
    if (newKey.trim()) {
      setKeys((prev) => [...prev, newKey]);
      setNewKey('');
      setIsModalOpen(false);
    }
  };

  return (
    <aside className="md:w-[250px] w-full bg-[#f8f9fc] h-auto md:h-screen border-t border-[#C8CBD9] flex flex-col p-[20px] pl-[30px] pt-[35px] md:pt-[35px]">
      {/* Logo */}
      <Link href={'/'} className="flex items-center gap-2 mb-[30px]">
        <div className="bg-blue-500 rounded-full w-[35px] h-[35px] flex items-center justify-center text-white text-lg font-bold">
          C
        </div>
        <span className="text-xl font-semibold text-gray-700">CHECKER</span>
      </Link>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        <div>
          <h4 className="text-gray-500 text-[14px] mb-[10px]">MENU</h4>
          <ul className="flex flex-col gap-[20px]">
            {/* Packs Menu Item */}
            <Link
              href="/packs"
              className={`flex items-center gap-2 text-sm font-medium cursor-pointer ${
                path === '/packs' ? 'text-blue-500' : 'text-gray-500 '
              }`}
              onClick={() => setIsPacksOpen(!isPacksOpen)}>
              <Plus size={18} />
              Packs
            </Link>

            {/* Dropdown for Packs */}
            {/* {isPacksOpen && (
              <div className="mt-2 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-gray-700 font-semibold">Lists</h3>
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition flex gap-2 items-center"
                    onClick={toggleModal}>
                    <Plus size={18} /> Добавить
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  {keys.map((key, index) => (
                    <li
                      key={index}
                      className="border border-gray-200 p-2 rounded cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedKey(key)}>
                      {key}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}

            <Link
              href="/function"
              className={`flex items-center gap-2 ${
                path === '/function' ? 'text-blue-500' : 'text-gray-500'
              }  text-sm font-medium cursor-pointer`}>
              <FileText size={18} />
              Function
            </Link>
          </ul>
        </div>
      </nav>

      {/* Selected Key Content */}
      {selectedKey && (
        <div className="mt-6 bg-white border border-gray-300 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Pack "{selectedKey}"</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            onClick={toggleModal}>
            Добавить ключ
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={toggleModal}>
          <div
            className="bg-white rounded-[20px] p-6 w-full max-w-md mx-auto shadow-lg relative"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4 text-center">Введите ключевое слово</h2>
            <input
              type="text"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="Введите ключевое слово"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <h2 className="mb-[20px] text-gray-600">
              Внимание, по заданному вами ключу будут индексироваться боты
            </h2>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={addKey}>
              Добавить
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SideBar;
