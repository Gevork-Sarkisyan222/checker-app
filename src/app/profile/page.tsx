import { HandCoins } from 'lucide-react';
import React from 'react';

const ProfilePage = () => {
  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705473908.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-0 mb-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdrqWQN9uteiwRksBUaMnpkB6C5SPI26XHw&s"
            alt="user-avatar"
            className="border-4 border-solid border-white rounded-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
              Jhon
            </h3>
            <p className="font-normal text-base leading-7 text-gray-500 max-sm:text-center">
              Referrals: 0
            </p>
            <p className="font-normal text-base leading-7 text-gray-500 max-sm:text-center">
              Balance: 0 USDT
            </p>
          </div>
          <button className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
            <span className="px-2 font-semibold text-base leading-7 text-white flex gap-2 items-center">
              ПОПОЛНИТЬ <HandCoins />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
