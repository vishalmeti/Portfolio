import React from "react";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCount,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge absolute top-0 left-0 ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div>
        <div className="" style={{"color":"black"}} >
          <CountUp end={endCount} delay={1} duration={4} />
          <span className="text-dark p-2">
           {endCountText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Badge;
