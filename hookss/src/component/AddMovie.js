import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function AddMovie({ hundelClick }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [rate, setRate] = useState(0);
  const [posterUrl, setPostUrl] = useState("");
  var subtitle;

  const hundeTitle = (e) => {
    setTitle(e.target.value);
  };
  const hundeDesc = (e) => {
    setDesc(e.target.value);
  };
  const hundeRate = (e) => {
    setRate(e.target.value);
  };
  const hundePostUrl = (e) => {
    setPostUrl(e.target.value);
  };
  const add = () => {
    hundelClick({ title, description, rate, posterUrl });
    closeModal();
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add Film ..</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Movie</h2>

              <form>
          <input
            type="text"
            value={title}
            onChange={hundeTitle}
            placeholder="Title"
          />
          <input
            type="text"
            value={description}
            onChange={hundeDesc}
            placeholder="Description"
          />
          <input
            type="text"
            value={rate}
            onChange={hundeRate}
            placeholder="Rate"
          />
          <input
            type="text"
            value={posterUrl}
            onChange={hundePostUrl}
            placeholder="postUrl"
          />
          <button onClick={closeModal}>close</button>
          <button onClick={add}>add</button>
          
        </form>
      </Modal>
    </div>
  );
}

export default AddMovie;