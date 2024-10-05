import React from "react";

const AddNewItem = ({ setShowModel }) => {
  return (
    <div
      id="AddNewItemButton"
      className="rounded-full w-[45px] h-[45px] fixed flex items-center justify-center bottom-[10%] right-[10%] cursor-pointer shadow-lg bg-purple-500 text-white hover:scale-125"
      onClick={() => setShowModel(true)}
    >
      <i className="fa-solid fa-plus text-2xl font-bold"></i>
    </div>
  );
};

export default AddNewItem;
