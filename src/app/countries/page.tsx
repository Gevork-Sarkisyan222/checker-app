import React from 'react';

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
    name: 'США',
    flag: '🇺🇸',
    flagUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
    accounts: 0,
  },
];

const CountriesPage: React.FC = () => {
  const activeCountries = countries.filter((country) => country.accounts > 0);

  return (
    <div style={{ padding: '16px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Список стран</h1>
      {activeCountries.length > 0 ? (
        activeCountries.map((country, index) => (
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
