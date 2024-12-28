'use client';

import DesktopModal from '@/components/desktop-modal';
import MobileModal from '@/components/mobile-modal';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const FunctionTemplate = ({}: Props) => {
  const [intervalHours, setIntervalHours] = useState('');
  const [botName, setBotName] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [botToken, setBotToken] = useState('текущий_бот_токен');
  const [chatId, setChatId] = useState('текущий_чат_ID');

  const handleStartCheck = () => {
    alert('Одноразовый чек будет исполнен сейчас!');
  };

  const handleAccountClick = () => {
    alert('Список стран с количеством активных сессий.');
  };

  const handleEditModalToggle = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <div style={{ padding: '16px', maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Функции</h1>

      {/* Настройка интервала проверки каждой папки */}
      <div style={{ marginBottom: '24px' }}>
        <label
          style={{ display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>
          Настройка интервала проверки каждой папки:
        </label>
        <input
          type="number"
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          min="3"
          placeholder="Укажите часы"
          value={intervalHours}
          onChange={(e) => setIntervalHours(e.target.value)}
        />
      </div>

      {/* Одноразовый чек */}
      <div style={{ marginBottom: '24px' }}>
        <label
          style={{ display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>
          Одноразовый чек:
        </label>
        <input
          type="text"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '8px',
          }}
          placeholder="Введите бот нейм (@bot)"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
        />
        <input
          type="text"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '16px',
          }}
          placeholder="Введите ключевое слово"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          style={{
            width: '120px',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={handleStartCheck}>
          Запустить
        </button>
        <p style={{ marginTop: '8px' }}>Одноразовый чек будет исполнен сейчас!</p>
      </div>

      {/* Текущие значения */}
      <div style={{ marginBottom: '24px', maxWidth: '350px' }}>
        <label
          style={{ display: 'block', fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>
          Текущие значения:
        </label>
        <div style={{ backgroundColor: '#e5e7eb', padding: '16px', borderRadius: '4px' }}>
          <p>Интервал проверки: {intervalHours} часов</p>
          <p>Бот: {botName}</p>
          <p>Ключевое слово: {keyword}</p>
        </div>
      </div>

      {/* Кнопка изменение бота */}
      <button
        className="mb-5"
        style={{
          width: 'max-content',
          whiteSpace: 'nowrap',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '24px',
        }}
        onClick={handleEditModalToggle}>
        Изменение бота
      </button>

      {/* Кнопка аккаунты */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={'/countries'}>
          <button
            style={{
              width: '137.34px',
              backgroundColor: '#34d399',
              color: 'white',
              padding: '8px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
            Аккаунты
          </button>
        </Link>
      </div>

      {/* FAQ */}
      <button
        style={{
          width: '137.34px',
          backgroundColor: '#22c55e',
          color: 'white',
          padding: '8px',
          borderRadius: '4px',
          marginTop: '24px',
          cursor: 'pointer',
        }}>
        FAQ
      </button>

      {/* Модалка изменение бота */}
      {isEditModalOpen && (
        <>
          <MobileModal handleModalToggle={handleEditModalToggle} isModalOpen={isEditModalOpen}>
            <h2 className="text-xl mb-2 font-bold">Изменить бота</h2>
            <label className="block text-lg font-medium mb-2">Текущий бот токен:</label>
            <input
              className="w-full p-2 border rounded mb-2"
              type="text"
              placeholder="Введите бот токен"
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
            />
            <label className="block text-lg font-medium mb-2">Текущий чат ID:</label>
            <input
              className="w-full p-2 border rounded mb-4"
              type="text"
              placeholder="Введите чат ID"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-[20px] hover:bg-blue-600"
              onClick={handleEditModalToggle}>
              Сохранить изменения
            </button>
          </MobileModal>

          <DesktopModal handleModalToggle={handleEditModalToggle} isModalOpen={isEditModalOpen}>
            <h2 className="text-xl mb-2 font-bold">Изменить бота</h2>
            <label className="block text-lg font-medium mb-2">Текущий бот токен:</label>
            <input
              className="w-full p-2 border rounded mb-2"
              type="text"
              placeholder="Введите бот токен"
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
            />
            <label className="block text-lg font-medium mb-2">Текущий чат ID:</label>
            <input
              className="w-full p-2 border rounded mb-4"
              type="text"
              placeholder="Введите чат ID"
              value={chatId}
              onChange={(e) => setChatId(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-[20px] hover:bg-blue-600"
              onClick={handleEditModalToggle}>
              Сохранить изменения
            </button>
          </DesktopModal>
        </>
      )}
    </div>
  );
};

export default FunctionTemplate;
