import "./index.css";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "eb95b694cdmshbb4439fbca760a6p1f1a04jsnee8f64892937",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const read = (chapter_number) => {
    const ReadPara = tours.filter(
      (tour) => tour.chapter_number !== chapter_number
    );
    setTours(ReadPara);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} read={read} />
    </main>
  );
}

export default App;
