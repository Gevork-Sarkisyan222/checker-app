'use client';

import React, { useState } from 'react';

type Country = {
  name: string;
  flag: string;
  flagUrl?: string;
  accounts: number;
};

const countries: Country[] = [
  {
    name: 'Россия',
    flag: '🇷🇺',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
    accounts: 5,
  },
  {
    name: 'Германия',
    flag: '🇩🇪',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    accounts: 0,
  },
  {
    name: 'Франция',
    flag: '🇫🇷',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
    accounts: 3,
  },
  {
    name: 'Netherlands',
    flag: 'NE',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png',
    accounts: 0,
  },
];

const CountriesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: '16px', maxWidth: '1200px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Список стран</h1>
        <button
          style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '8px',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setIsInfoOpen(!isInfoOpen)}>
          i
        </button>
      </div>
      {isInfoOpen && (
        <p style={{ fontSize: '18px', margin: '16px 0' }}>
          Это список стран, справа от них количество активных сессий.
        </p>
      )}
      <input
        type="text"
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
        placeholder="Введите страну для поиска"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country, index) => (
          <div
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
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: country.accounts > 0 ? 'green' : 'red',
                  marginRight: '8px',
                }}></span>
              <img
                src={country.flagUrl}
                alt={`${country.name} flag`}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px',
                }}
              />
              <span style={{ fontSize: '18px' }}>{country.name}</span>
            </div>
            <span style={{ fontSize: '18px' }}>{country.accounts} активных аккаунтов</span>
          </div>
        ))
      ) : (
        <p style={{ fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>
          Нет активных стран
        </p>
      )}
    </div>
  );
};

export default CountriesPage;
