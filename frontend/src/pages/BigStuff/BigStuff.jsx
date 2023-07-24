import "./BigStuff.css";
import { loadingContext, refreshContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import AddButton from "../../components/AddButton/AddButton";
import AddNewItem from "../../components/AddNewItem/AddNewItem";
import DetailCard from "../../components/DetailCard/DetailCard";

const BigStuff = () => {
  const [stuff, setStuff] = useState([]);
  const [formIsActive, setFormIsActive] = useState(false);
  const { loading, setLoading } = useContext(loadingContext);
  const { refresh, setRefresh } = useContext(refreshContext);
  const [category, setCategory] = useState("bigstuff");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/${category}`);
      setStuff(data);
    };
    fetchData();
  }, [refresh, loading]);

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
          category={category}
        />
        {loading ? (
          <div className="loadingwindow">
            <h1>Loading...</h1>
          </div>
        ) : (
          stuff?.map((elm, index) => {
            return <DetailCard category={category} elm={elm} key={index} />;
          })
        )}
      </main>
    </>
  );
};

export default BigStuff;
