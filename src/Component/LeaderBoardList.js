import React from 'react';

const LeaderboardList = ({ leaderboardData }) => {
    return (
        <tbody>
            {leaderboardData.map((data, index) => (
                <tr key={index}>
                    <td>{data.rank}</td>
                    <td>{data.user}</td>
                    <td className='compare-list'>Compare</td>
                    <td>{data.score}</td>
                    <td>{data.time}</td>
                    <td>{data.country}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default LeaderboardList;
