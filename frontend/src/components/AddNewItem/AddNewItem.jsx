import "./AddNewItem.css";
import axios from "axios";

const AddNewItem = ({ formIsActive, setFormIsActive }) => {
  const handleFormActive = () => {
    setFormIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await axios.post("/api/bigstuff", formData);
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
      <input type="text" placeholder="TITLE" />
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
      <input type="text" placeholder="CONTENT" />
      <button className="buttonPublish" type="submit">
        Publish
      </button>
    </form>
  );
};

export default AddNewItem;
