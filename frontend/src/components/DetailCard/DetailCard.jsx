import "./DetailCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailCard = ({ formIsActive, stuffCategory }) => {
  const [stuff, setStuff] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/${stuffCategory}`);
      setStuff(data);
    };
    fetchData();
  }, [refresh]);

  const handleDelete = async (stuffId) => {};

  useEffect(() => {
    setStuff([
      {
        title: "Stuff1",
        room: "Livingroom",
        image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
        content: "Content1",
      },
      {
        title: "Stuff2",
        room: "Livingroom",
        image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
        content: "Content2",
      },
      {
        title: "Stuff3",
        room: "Livingroom",
        image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
        content: "Content3",
      },
    ]);
  }, []);

  return (
    <>
      {stuff.map((elm, index) => {
        return (
          <div className="detailCard" key={index}>
            <img src={elm.image} alt={elm.title} />
            <div className="content">
              <h2>{elm.title}</h2>
              <h3>{elm.room}</h3>
              <p>{elm.content}</p>
            </div>
            <div className="buttons">
              <button onClick={handleDelete}>Delete</button>
              <button>To Page</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DetailCard;
