import React from 'react';
import { FcLike } from 'react-icons/fc';
import { Link } from 'react-router-dom';

type ProfileStatsProps = {
  title?: string;
  value?: number;
};

const ProfileStats = ({ title, value }: ProfileStatsProps) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <FcLike size={'48px'} />
        </div>
        <div className="stat-title">Total {title}</div>
        <div className="stat-value text-primary">
          {value == undefined ? 0 : value}
        </div>
        <div className="stat-desc text-secondary">
          <Link to={'/likes'} className="link link-hover">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
