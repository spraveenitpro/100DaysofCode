import React, { useEffect, useState } from "react";
import axios from "axios";

function DailyList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6000/daily/")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <p>This is the list of Dailies</p>;
}

export default DailyList;
