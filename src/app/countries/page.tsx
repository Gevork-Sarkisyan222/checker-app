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
            className="w-full p-4 rounded-lg shadow-md mb-4 flex flex-wrap items-center justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  country.accounts > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}></span>
              <img
                src={country.flagUrl}
                alt={`${country.name} flag`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-medium truncate">{country.name}</span>
            </div>
            <span className="text-lg text-right sm:text-left">
              {country.accounts} активных аккаунтов
            </span>
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
