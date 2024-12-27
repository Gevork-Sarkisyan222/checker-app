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
    <div style={{ padding: '16px', maxWidth: '1200px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Позиции в поиске для {bot}
      </h1>
      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
        {positions.map((position, index) => (
          <li
            key={index}
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={position.flagUrl}
                alt={`${position.country} flag`}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px',
                }}
              />
              <span style={{ fontSize: '18px' }}>{position.country}</span>
            </div>
            <span style={{ fontSize: '18px' }}>Текущая позиция: {position.position}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCountriesPage;
