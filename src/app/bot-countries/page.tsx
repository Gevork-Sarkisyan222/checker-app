'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

type CountryPosition = {
  country: string;
  flagUrl: string;
  position: number | 'Неизвестно';
};

const positions: CountryPosition[] = [
  {
    country: 'Россия',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
    position: 1,
  },
  {
    country: 'Германия',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    position: 'Неизвестно',
  },
  {
    country: 'Франция',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
    position: 3,
  },
  {
    country: 'США',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
    position: 'Неизвестно',
  },
];

const BotCountriesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const bot = searchParams.get('bot');

  return (
    <div className="p-4 max-w-screen-xl">
      <h1 className="text-2xl font-bold mb-4 max-[480px]:text-xl">Позиции в поиске для {bot}</h1>
      <ul className="list-none p-0 m-0">
        {positions.map((position, index) => (
          <li
            key={index}
            className="w-full p-4 rounded-xl shadow-lg mb-4 flex justify-between items-center max-[480px]:flex-col max-[480px]:items-start">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full object-cover mr-2 max-[480px]:mb-2"
                src={position.flagUrl}
                alt={`${position.country} flag`}
              />
              <span className="text-lg">{position.country}</span>
            </div>
            <span className="text-lg">Текущая позиция: {position.position}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCountriesPage;
