import "./AddNewItem.css";
import axios from "axios";
import { useContext } from "react";
import { refreshContext, loadingContext } from "../../context/Context";

const AddNewItem = ({ formIsActive, setFormIsActive, stuffCategory }) => {
  const { refresh, setRefresh } = useContext(refreshContext);
  const { loading, setLoading } = useContext(loadingContext);

  const handleFormActive = () => {
    setFormIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormIsActive(false);
    handleLoading();
    const formData = new FormData(e.target);
    const res = await axios.post(`/api/${stuffCategory}`, formData);
    e.target.reset();
    setRefresh((prev) => !prev);
  };

  const handleLoading = () => {
    if (loading === false) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className={formIsActive ? "formular-active" : "formular-nonactive"}>
      <button className="buttonClose" onClick={handleFormActive}>
        X
      </button>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default AddNewItem;
