import "./AddNewItem.css";
import axios from "axios";
import { refreshContext } from "../../context/Context";
import { useContext } from "react";

const AddNewItem = ({ formIsActive, setFormIsActive, stuffCategory }) => {
  const { refresh, setRefresh } = useContext(refreshContext);

  const handleFormActive = () => {
    setFormIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await axios.post(`/api/${stuffCategory}`, formData);
    e.target.reset();
    setFormIsActive(false);
    setRefresh((prev) => !prev);
  };

  return (
    <form
      className={formIsActive ? "formular-active" : "formular-nonactive"}
      onSubmit={handleSubmit}
    >
      <button className="buttonClose" onClick={handleFormActive}>
        X
      </button>
      <h2>ADD NEW ITEM</h2>
      <input type="file" placeholder="image" name="image" />
      <input type="text" placeholder="TITLE" name="title" />
      <select name="room" id="room">
        <option value="" disabled selected hidden>
          ROOM
        </option>
        <option value="living room">living room</option>
        <option value="bedroom">bedroom</option>
        <option value="workroom">workroom</option>
        <option value="kitchen">kitchen</option>
        <option value="bathroom">bathroom</option>
      </select>
      <input type="text" placeholder="CONTENT" name="content" />
      <button className="buttonPublish" type="submit">
        Publish
      </button>
    </form>
  );
};

export default AddNewItem;
