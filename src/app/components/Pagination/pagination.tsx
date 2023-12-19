import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import style from './pagination.module.css';
import { $currentPage, addCurrentPage } from '@/app/stores/pagination';

export const Pagination: React.FC = () => {

  const handlePageChange = (pageNumber: number) => {
    addCurrentPage(pageNumber);
  };
  
  const totalPages = 10;
  const currentPage = useStore($currentPage);

  return (
    <div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage === index + 1 ? style.active : style.button}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
