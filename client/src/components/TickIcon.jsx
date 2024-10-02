import React, { useState } from "react";

const TickIcon = () => {
  const [check, isCheck] = useState(false);

  const handleCheckboxChange = () => {
    isCheck(!check);
  };

  return (
    <div
      onClick={handleCheckboxChange}
      className="border border-gray-950 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer"
    >
      {check && <i className="fa-solid fa-check text-black"></i>}
    </div>
  );
};

export default TickIcon;
