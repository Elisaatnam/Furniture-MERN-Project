import "./AddNewItem.css";
import axios from "axios";
import { useRef } from "react";

const AddNewItem = ({ formIsActive, setFormIsActive, stuffCategory }) => {
  const titleRef = useRef();
  const roomRef = useRef();
  const contentRef = useRef();

  const handleFormActive = () => {
    setFormIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: titleRef.current.value,
      room: roomRef.current.value,
      content: contentRef.current.value,
    };

    const res = await axios.post(`/api/${stuffCategory}`, newPost);
    console.log(res);
    e.target.reset();
    setFormIsActive(false);
  };

  return (
    <form
      className={formIsActive ? "formular-active" : "formular-nonactive"}
      onClick={handleSubmit}
    >
      <button className="buttonClose" onClick={handleFormActive}>
        X
      </button>
      <h2>ADD NEW ITEM</h2>
      <input type="text" placeholder="TITLE" ref={titleRef} />
      <select name="room" id="room" ref={roomRef}>
        <option value="" disabled selected hidden>
          ROOM
        </option>
        <option value="living room">living room</option>
        <option value="bedroom">bedroom</option>
        <option value="workroom">workroom</option>
        <option value="kitchen">kitchen</option>
        <option value="bathroom">bathroom</option>
      </select>
      <input type="text" placeholder="CONTENT" ref={contentRef} />
      <button className="buttonPublish" type="submit">
        Publish
      </button>
    </form>
  );
};

export default AddNewItem;
