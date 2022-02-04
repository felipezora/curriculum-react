import React from 'react';

const PresentationCard = ({ profName, profRole, profImg }) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg'>
        <div className='w-full flex items-center justify-center'>
          <div className='flex flex-col items-center'>
            <img src={profImg} alt='profile' />
          </div>
        </div>
        <div className='grid mt-7 justify-items-center'>
          <div className='py-1'>
            <p className='text-xl text-gray-100 text-center'>{profName}</p>
          </div>
          <div className='py-1'>
            <p className='text-lg text-gray-100 text-center'>{profRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
