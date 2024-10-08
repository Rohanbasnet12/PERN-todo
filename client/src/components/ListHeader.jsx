import React, { useState } from "react";
import Modal from "./Modal";
import AddNewItem from "./AddNewItem";

const ListHeader = ({ listName }) => {
  const [showModel, setShowModel] = useState(false);

  // Function to handle Sign Out
  const signOut = () => {
    alert("Signed Out Button Pressed");
  };

  return (
    <div className="w-full flex justify-between border-b-2 py-5">
      <AddNewItem setShowModel={setShowModel} />
      <h1>{listName}</h1>
      <div className="flex items-center gap-8" id="button-wrapper">
        <button
          className="border rounded-md px-4 py-1 outline-none md:text-md lg:text-md sm:text-sm border-orange-500 bg-orange-300 text-orange-900 font-bold text-lg hover:bg-orange-200 hover:text-orange-600"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
      {showModel && <Modal mode={"Create"} setShowModel={setShowModel} />}
    </div>
  );
};

export default ListHeader;
