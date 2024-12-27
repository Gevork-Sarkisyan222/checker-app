'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const PacksTemplate = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Packs</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleModalToggle}>
          +
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleModalToggle}>
          <div
            className="bg-white rounded-[20px] p-6 w-full max-w-md mx-auto shadow-lg relative"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4 text-center">Введите ключевое слово</h2>
            <input
              type="text"
              placeholder="Введите ключевое слово"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <h2 className="mb-[20px] text-gray-600">
              Внимание, по заданному вами ключу будут индексироваться боты
            </h2>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Добавить
            </button>
          </div>
        </div>
      )}

      <ul className="list-none p-0 m-0">
        <li
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Link href={'/key/1'} style={{ cursor: 'pointer', flexGrow: 1 }}>
            Ключ 1
          </Link>
        </li>
        <li
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Link href={'/key/2'} style={{ cursor: 'pointer', flexGrow: 1 }}>
            Ключ 2
          </Link>
        </li>
        <li
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Link href={'/key/3'} style={{ cursor: 'pointer', flexGrow: 1 }}>
            Ключ 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PacksTemplate;
