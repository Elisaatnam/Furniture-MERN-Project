import "./BigStuff.css";
import Nav from "../../components/Nav/Nav";
import AddButton from "../../components/AddButton/AddButton";
import DetailCard from "../../components/DetailCard/DetailCard";
import AddNewItem from "../../components/AddNewItem/AddNewItem";
import { useState } from "react";

const BigStuff = () => {
  const [formIsActive, setFormIsActive] = useState(false);

  const stuffCategory = "bigstuff";

  return (
    <>
      <Nav />
      <main className="bigStuff">
        <AddButton
          formIsActive={formIsActive}
          setFormIsActive={setFormIsActive}
        />
        <AddNewItem
          formIsActive={formIsActive}
          setFormIsActive={setFormIsActive}
          stuffCategory={stuffCategory}
        />
        <DetailCard formIsActive={formIsActive} stuffCategory={stuffCategory} />
      </main>
    </>
  );
};

export default BigStuff;
