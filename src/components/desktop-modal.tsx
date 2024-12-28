import React from 'react';

type Props = {
  handleModalToggle: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
};

function DesktopModal({ handleModalToggle, isModalOpen, children }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center max-[560px]:hidden"
      onClick={handleModalToggle}>
      <div
        className="bg-white p-6 w-full max-w-md mx-auto shadow-lg relative rounded-[20px] no-borders"
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default DesktopModal;
