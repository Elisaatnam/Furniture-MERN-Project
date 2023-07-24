import "./Details.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [singleStuff, setSingleStuff] = useState({});
  const { id, category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/${category}/${id}`);
        console.log("FRONT", data);
        setSingleStuff(data);
      } catch (error) {
        console.log("fetchSingleData: ", error);
      }
    };
    if (category) {
      fetchData();
    }
  }, [category, id]);

  return (
    <div>
      {singleStuff ? (
        <>
          <img src={singleStuff.image?.url} alt={singleStuff?.title} />
          <div>
            <h2>{singleStuff.title}</h2>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Details;
