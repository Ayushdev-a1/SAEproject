import React, { useState } from 'react';
import LeaderboardList from '../Component/LeaderBoardList';
import Pagination from '../Component/Paginattion';
import { FaGreaterThan } from "react-icons/fa";

const leaderboardData = [
    { rank: 1, user: "ajinkya1p3", score: 400, time: "5:22:00", country: "🇮🇳" },
    { rank: 1, user: "rs13074009", score: 400, time: "10:17:40", country: "🇮🇳" },
    { rank: 3, user: "siva_krishna", score: 375, time: "9:23:40", country: "🇮🇳" },
    { rank: 4, user: "smarterthanu1234", score: 355, time: "7:04:50", country: "🇮🇳" },
    { rank: 5, user: "monsterspy", score: 350, time: "6:01:30", country: "🇮🇳" },
    { rank: 5, user: "sajjanjain", score: 350, time: "10:34:20", country: "🇮🇳" },
    { rank: 7, user: "alankar63", score: 325, time: "4:56:40", country: "🇮🇳" },
    { rank: 7, user: "vishal20", score: 325, time: "5:11:40", country: "🇮🇳" },
    { rank: 7, user: "sushant010992", score: 325, time: "5:19:50", country: "🇮🇳" },
    { rank: 7, user: "rivudas", score: 325, time: "6:16:10", country: "🇮🇳" }
];

const Leaderboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [active, setActive] = useState('All');

    const handleToggle = (option) => {
        setActive(option);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = leaderboardData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);


    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    return (
        <>
            <div className="leaderboard-page">
                <div className="leaderboard-nav">
                    <ul className="page-stage">
                        <li>All Contests<FaGreaterThan /></li>
                        <li>SegFault Jun 2015</li>
                    </ul>
                </div>
                <div className="leaderboard-container">
                    <span className='leaderboard-header'>
                        <span className='leaderboard-title'>
                            <h1>Leaderboard</h1>
                            <div className="toggle-button">
                                <button className={active === 'All' ? 'active' : ''} onClick={() => handleToggle('All')}>
                                    All
                                </button>
                                <button className={active === 'Friends' ? 'active' : ''} onClick={() => handleToggle('Friends')}>
                                    Friends
                                </button>
                            </div>
                        </span>
                        <span className='leaderboard-compare'>
                            <input type="text" placeholder='Search Username...' />
                            <button>
                                Search
                            </button>
                        </span>
                    </span>
                    <table className="leaderboard">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>User</th>
                                <th></th>
                                <th>Score</th>
                                <th>Time</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <LeaderboardList leaderboardData={currentItems} />
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                    <div className="items-per-page">
                        <label>Items per page:</label>
                        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Leaderboard;
