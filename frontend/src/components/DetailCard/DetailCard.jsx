import "./DetailCard.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loadingContext, refreshContext } from "../../context/Context";

const DetailCard = ({ stuffCategory }) => {
  const [stuff, setStuff] = useState([]);
  const { refresh, setRefresh } = useContext(refreshContext);
  const { loading, setLoading } = useContext(loadingContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/${stuffCategory}`);
      setStuff(data);
    };
    fetchData();
  }, [refresh, loading]);

  const handleDelete = async (stuffId) => {
    try {
      const { data } = await axios.delete(`/api/${stuffCategory}/${stuffId}`);
    } catch (error) {
      console.log("handleDelete: ", error);
    }
    setRefresh((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <div className="loadingwindow">
          <h1>Loading...</h1>
        </div>
      ) : (
        stuff?.map((elm, index) => {
          return (
            <div className="detailCard" key={index}>
              <img src={elm.image.url} alt={elm.title} />
              <div className="content">
                <h2>{elm.title}</h2>
                <h3>{elm.room}</h3>
                <p>{elm.content}</p>
              </div>
            <div className="buttons">
              <button className="delete-button" onClick={() => handleDelete(elm._id)}>X</button>
              <button className="detail-button">Details</button>
            </div>
          </div>
        );
      })
      )}

    </>
  );
};

export default DetailCard;
