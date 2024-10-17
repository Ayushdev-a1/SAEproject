import React from 'react';

const Pagination = ({ currentPage, totalPages, goToPage, nextPage, prevPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>&laquo;</button>
            {pageNumbers.map((number) => (
                <button key={number} onClick={() => goToPage(number)} className={currentPage === number ? 'active' : ''}>
                    {number}
                </button>
            ))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>&raquo;</button>
        </div>
    );
};

export default Pagination;
