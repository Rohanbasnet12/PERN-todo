import React, { useState } from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";

const ListItem = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <li
      id="list-item"
      className="flex items-center justify-between border mt-8 py-2 px-3 rounded-lg shadow-md"
    >
      <div className="info-title flex items-center gap-6">
        <TickIcon />
        <h1>{todo.title}</h1>
        <ProgressBar />
      </div>

      <div className="button-container flex items-center gap-6">
        <button
          className="bg-blue-400 text-white py-1 px-3 rounded-lg hover:text-blue-800 hover:bg-blue-300 font-bolder text-md"
          onClick={() => setShowModal(true)}
        >
          EDIT
        </button>
        <button className="bg-red-400 text-white py-1 px-3 rounded-lg hover:text-red-800 hover:bg-red-200 font-bolder text-md">
          DELETE
        </button>
      </div>

      {showModal && (
        <Modal mode="Edit" setShowModel={setShowModal} todo={todo} />
      )}
    </li>
  );
};

export default ListItem;
