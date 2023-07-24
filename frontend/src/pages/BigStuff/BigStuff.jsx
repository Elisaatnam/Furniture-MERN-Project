import "./BigStuff.css";
import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import AddButton from "../../components/AddButton/AddButton";
import AddNewItem from "../../components/AddNewItem/AddNewItem";
import DetailCard from "../../components/DetailCard/DetailCard";

const BigStuff = () => {
  const [formIsActive, setFormIsActive] = useState(false);

  const stuffCategory = "bigstuff";

  return (
    <>
      <Nav />
      <main>
        <AddButton
          formIsActive={formIsActive}
          setFormIsActive={setFormIsActive}
        />
        <AddNewItem
          formIsActive={formIsActive}
          setFormIsActive={setFormIsActive}
          stuffCategory={stuffCategory}
        />
        <DetailCard stuffCategory={stuffCategory} />
      </main>
    </>
  );
};

export default BigStuff;
