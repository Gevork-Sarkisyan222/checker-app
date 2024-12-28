import React from 'react';

type Props = {
  handleModalToggle: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
};

function MobileModal({ handleModalToggle, isModalOpen, children }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-500 hideInDesktop"
      onClick={handleModalToggle}
      style={{ animation: isModalOpen ? 'fadeIn 0.5s' : 'fadeOut 0.5s' }}>
      <div
        className={`bg-white rounded-t-3xl p-6 w-full max-w-md mx-auto shadow-lg relative rounded-[20px] no-borders`}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: 0,
          animation: isModalOpen ? 'slideUp 0.5s' : 'slideDown 0.5s',
        }}>
        {children}
      </div>
    </div>
  );
}

export default MobileModal;
