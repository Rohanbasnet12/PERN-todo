import React from "react";

const ListHeader = ({ listName }) => {
  // Function to handle Sign Out
  const signOut = () => {
    alert("Signed Out Button Pressed");
  };

  return (
    <div className="w-full flex justify-between border-b-2 py-5">
      <h1>{listName}</h1>
      <div className="flex items-center gap-8" id="button-wrapper">
        <button
          className="border rounded-md px-4 py-1 bg-transparent outline-none md:text-md lg:text-md sm:text-sm"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
