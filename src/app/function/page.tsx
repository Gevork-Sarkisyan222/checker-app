'use client';

import React, { useState } from 'react';

type Props = {};

const FunctionPage = ({}: Props) => {
  const [intervalHours, setIntervalHours] = useState('');
  const [botName, setBotName] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleStartCheck = () => {
    alert('Одноразовый чек будет исполнен сейчас!');
  };

  return (
    <div className="p-4 max-w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">Функции</h1>

      {/* Настройка интервала проверки каждой папки */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Настройка интервала проверки каждой папки:
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          min="3"
          placeholder="Укажите часы"
          value={intervalHours}
          onChange={(e) => setIntervalHours(e.target.value)}
        />
      </div>

      {/* Одноразовый чек */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Одноразовый чек:</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Введите бот нейм (@bot)"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Введите ключевое слово"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="w-[120px] bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleStartCheck}>
          Запустить
        </button>
        <p className="mt-2">Одноразовый чек будет исполнен сейчас!</p>
      </div>

      {/* Текущие значения */}
      <div className="mb-6 max-w-[350px]">
        <label className="block text-lg font-medium mb-2">Текущие значения:</label>
        <div className="bg-gray-200 p-4 rounded">
          {/* Здесь будут текущие значения */}
          <p>Интервал проверки: {intervalHours} часов</p>
          <p>Бот: {botName}</p>
          <p>Ключевое слово: {keyword}</p>
        </div>
      </div>

      {/* FAQ */}
      <button className="w-[120px] bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-6">
        FAQ
      </button>
    </div>
  );
};

export default FunctionPage;
