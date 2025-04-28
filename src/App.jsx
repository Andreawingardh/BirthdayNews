import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import useFetch from "./hooks/useFetch";
import NewsSection from "./Components/NewsSection";

function App() {
  const [showNews, setShowNews] = useState(false);
  const [oneYearAgo, setOneYearAgo] = useState();
  const [fiveYearsAgo, setFiveYearsAgo] = useState();
  const [tenYearsAgo, setTenYearsAgo] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const inputDate = e.currentTarget.elements.dateInput.value;

    const getPastDate = (dateStr, yearsAgo) => {
      const parts = dateStr.split("-");
      return `${Number(parts[0]) - yearsAgo}-${parts[1]}-${parts[2]}`;
    };

    setOneYearAgo(getPastDate(inputDate, 1));
    setFiveYearsAgo(getPastDate(inputDate, 5));
    setTenYearsAgo(getPastDate(inputDate, 10));
    setShowNews(true);
  }

  return (
    <main>
      <h1>Historical dates</h1>
      <p>Enter any date and find out what happpened as far back as 1999.</p>
      <form className="search-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dateInput">Please select a date</label>
          <input id="dateInput" type="date" />
          <button type="submit">Submit</button>
        </div>
      </form>
      {showNews && (
        <>
          <NewsSection inputDate={oneYearAgo} yearsAgo="one" />
          <NewsSection inputDate={fiveYearsAgo} yearsAgo="five" />
          <NewsSection inputDate={tenYearsAgo} yearsAgo="ten" />
        </>
      )}
    </main>
  );
}

export default App;
