import "./AddButton.css";

const AddButton = ({ formIsActive, setFormIsActive }) => {
  const handleFormActive = () => {
    setFormIsActive(true);
  };

  return (
    <button onClick={handleFormActive} className="addButton">
      Add new Item
    </button>
  );
};

export default AddButton;
