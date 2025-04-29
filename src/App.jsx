import "./App.css";
import { useState } from "react";
import NewsSection from "./Components/NewsSection";
import Form from "./Components/Form";

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
      <h1>Throwback News</h1>
      <p>Enter any date and find out what happened one, five and ten years before that date. As far back as 1999.</p>
      <Form formAction={handleSubmit} />
      {showNews && (
        <>
          <NewsSection inputDate={oneYearAgo} yearsAgo="one year" />
          <NewsSection inputDate={fiveYearsAgo} yearsAgo="five years" />
          <NewsSection inputDate={tenYearsAgo} yearsAgo="ten years" />
        </>
      )}
    </main>
  );
}

export default App;
