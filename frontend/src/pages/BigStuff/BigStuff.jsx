import "./BigStuff.css";
import { loadingContext, refreshContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import AddButton from "../../components/AddButton/AddButton";
import AddNewItem from "../../components/AddNewItem/AddNewItem";
import DetailCard from "../../components/DetailCard/DetailCard";

const BigStuff = () => {
  const { refresh, setRefresh } = useContext(refreshContext);
  const { loading, setLoading } = useContext(loadingContext);
  const [formIsActive, setFormIsActive] = useState(false);
  const [stuff, setStuff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/bigstuff`);
        setStuff(data);
      } catch (error) {
        console.log("fetchData: ", error);
      }
    };
    fetchData();
  }, [refresh, loading]);

  return (
    <>
      <Nav />
      <main className="pages">
        <AddButton setFormIsActive={setFormIsActive} />
        <AddNewItem
          formIsActive={formIsActive}
          setFormIsActive={setFormIsActive}
          category={"bigstuff"}
        />
        {loading ? (
          <div className="loadingwindow">
            <h1>Loading...</h1>
          </div>
        ) : (
          stuff?.map((elm, index) => {
            return <DetailCard elm={elm} key={index} category={"bigstuff"} />;
          })
        )}
      </main>
    </>
  );
};

export default BigStuff;
