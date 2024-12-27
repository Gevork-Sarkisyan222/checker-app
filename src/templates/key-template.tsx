'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const KeyTemplate = ({}: Props) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState<string | null>(null);
  const params = useParams();
  const keyId = params.id;
  const router = useRouter();

  const handleAddModalToggle = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const handleEditModalToggle = (bot: string) => {
    setSelectedBot(bot);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDeleteBot = (bot: string) => {
    if (window.confirm(`Вы точно хотите удалить ${bot}?`)) {
      console.log(`Bot ${bot} has been deleted.`);
      setIsEditModalOpen(false);
    }
  };

  const handlePositions = (bot: string) => {
    router.push(`/bot-countries?bot=${bot}`);
  };

  return (
    <div style={{ padding: '16px' }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pack "Ключ #{keyId}"</h1>
        <button
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleAddModalToggle}>
          +
        </button>
      </div>

      {isAddModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleAddModalToggle}>
          <div
            className="bg-white p-6 rounded-[20px] w-full max-w-md transition-all transform duration-300 ease-out"
            style={{
              transform: isAddModalOpen ? 'scale(1)' : 'scale(0.8)',
              opacity: isAddModalOpen ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl mb-2">Добавить бота</h2>
            <input
              className="w-full p-2 border rounded mb-2"
              type="text"
              placeholder="Введите username бота (@bot)"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded-[20px] hover:bg-blue-600">
              Добавить
            </button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsEditModalOpen(false)}>
          <div
            className="bg-white p-6 rounded-[20px] w-full max-w-md transition-all transform duration-300 ease-out"
            style={{
              transform: isEditModalOpen ? 'scale(1)' : 'scale(0.8)',
              opacity: isEditModalOpen ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl mb-2">Изменить бота</h2>
            <input
              className="w-full p-2 border rounded mb-2"
              type="text"
              placeholder="Введите username бота (@bot)"
              defaultValue={selectedBot}
            />
            <div style={{ gap: '15px', alignItems: 'center' }} className="flex">
              <button
                className="w-full py-2 rounded-[20px] hover:bg-blue-600"
                style={{ backgroundColor: 'blue', color: 'white' }}>
                Сохранить
              </button>
              <button
                className="w-full py-2 rounded-[20px] hover:bg-red-600 mt-2"
                style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => handleDeleteBot(selectedBot)}>
                Удалить
              </button>
            </div>
            <button
              className="w-full py-2 rounded-[20px] hover:bg-green-600 mt-2"
              style={{ backgroundColor: 'green', color: 'white' }}
              onClick={() => handlePositions(selectedBot)}>
              Позиции
            </button>
          </div>
        </div>
      )}

      <ul className="list-none p-0 m-0">
        <li
          className="cursor-pointer"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => handleEditModalToggle('Бот 1')}>
          Бот 1 - Позиция 1
          <button
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
            onClick={(e) => {
              e.stopPropagation();
              handlePositions('Бот 1');
            }}>
            Позиции
          </button>
        </li>
        <li
          className="cursor-pointer"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => handleEditModalToggle('Бот 2')}>
          Бот 2 - Позиция 2
          <button
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
            onClick={(e) => {
              e.stopPropagation();
              handlePositions('Бот 2');
            }}>
            Позиции
          </button>
        </li>
        <li
          className="cursor-pointer"
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => handleEditModalToggle('Бот 3')}>
          Бот 3 - Позиция 3
          <button
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '8px',
            }}
            onClick={(e) => {
              e.stopPropagation();
              handlePositions('Бот 3');
            }}>
            Позиции
          </button>
        </li>
      </ul>
    </div>
  );
};

export default KeyTemplate;
