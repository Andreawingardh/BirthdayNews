import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import useFetch from "./hooks/useFetch";

function App() {
  const [newsDataOneYearAgo, setNewsDataOneYearAgo] = useState([]);
  const [searchParamsOneYearAgo, setSearchParamsOneYearAgo] = useState();

  const [newsDataFiveYearsAgo, setNewsDataFiveYearsAgo] = useState([]);
  const [searchParamsFiveYearsAgo, setSearchParamsFiveYearsAgo] = useState();

  const [newsDataTenYearsAgo, setNewsDataTenYearsAgo] = useState([]);
  const [searchParamsTenYearsAgo, setSearchParamsTenYearsAgo] = useState();

  const [url, setUrl] = useState("https://content.guardianapis.com/search");
  const {
    data: oneYearAgoData,
    error: oneYearError,
    loading: oneYearLoading,
  } = useFetch(url, searchParamsOneYearAgo);
  const {
    data: fiveYearsAgoData,
    error: fiveYearsError,
    loading: fiveYearsLoading,
  } = useFetch(url, searchParamsFiveYearsAgo);
  const {
    data: tenYearsAgoData,
    error: tenYearsError,
    loading: tenYearsLoading,
  } = useFetch(url, searchParamsTenYearsAgo);

  useEffect(() => {
    if (oneYearAgoData) {
      setNewsDataOneYearAgo(oneYearAgoData);
    }

    if (fiveYearsAgoData) {
      setNewsDataFiveYearsAgo(fiveYearsAgoData);
    }
    if (tenYearsAgoData) {
      setNewsDataTenYearsAgo(tenYearsAgoData);
    }

    if (oneYearError || fiveYearsError || tenYearsError) {
      console.error("Error fetching data:", error);
    }
  }, [oneYearAgoData, fiveYearsAgoData, tenYearsAgoData]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.elements.dateInput.value);
    let newsDate = e.currentTarget.elements.dateInput.value;
    console.log(newsDate);
    const originalDate = new Date(newsDate);

    const getPastDate = (yearsAgo) => {
      const past = new Date(originalDate);
      past.setFullYear(past.getFullYear() - yearsAgo);
      return past.toISOString().split("T")[0]; // format as YYYY-MM-DD
    };

    const oneYearAgo = getPastDate(1);
    const fiveYearsAgo = getPastDate(5);
    const tenYearsAgo = getPastDate(10);

    console.log("Selected date:", newsDate);
    console.log("1 year ago:", oneYearAgo);
    console.log("5 years ago:", fiveYearsAgo);
    console.log("10 years ago:", tenYearsAgo);
    setSearchParamsOneYearAgo((prev) => ({
      ...prev,
      "from-date": oneYearAgo,
      "to-date": oneYearAgo,
      "api-key": import.meta.env.VITE_API_KEY,
      "order-by": "newest",
      "use-date": "published",
      "show-fields": "bodyText",
    }));

    setSearchParamsFiveYearsAgo((prev) => ({
      ...prev,
      "from-date": fiveYearsAgo,
      "to-date": fiveYearsAgo,
      "api-key": import.meta.env.VITE_API_KEY,
      "order-by": "newest",
      "use-date": "published",
      "show-fields": "bodyText",
    }));

    setSearchParamsTenYearsAgo((prev) => ({
      ...prev,
      "from-date": tenYearsAgo,
      "to-date": tenYearsAgo,
      "api-key": import.meta.env.VITE_API_KEY,
      "order-by": "newest",
      "use-date": "published",
      "show-fields": "bodyText",
    }));
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input id="dateInput" type="date" />
        <button type="submit">Submit</button>
      </form>
      {oneYearLoading && <p>Loading...</p>}

      <h3>This happened one year ago on this date:</h3>
      <div className="card-container">
        {newsDataOneYearAgo && newsDataOneYearAgo.length > 0 ? (
          newsDataOneYearAgo.slice(0, 3).map((news) => (
            <div key={news.id + "div"}>
              <Card
                title={news.webTitle}
                date={news.webPublicationDate}
                link={news.webUrl}
                description={news.fields.bodyText.substring(0, 300) + "..."}
              />
            </div>
          ))
        ) : (
          <p>Please select a date.</p>
        )}
      </div>
      <h3>This happened five years ago on to this date:</h3>
      <div className="card-container">
        {newsDataFiveYearsAgo && newsDataFiveYearsAgo.length > 0 ? (
          newsDataFiveYearsAgo.slice(0, 3).map((news) => (
            <div key={news.id + "div"}>
              <Card
                title={news.webTitle}
                date={news.webPublicationDate}
                link={news.webUrl}
                description={news.fields.bodyText.substring(0, 300) + "..."}
              />
            </div>
          ))
        ) : (
          <p>Please select a date.</p>
        )}
      </div>
      <h3>This happened ten years ago on this date:</h3>
      <div className="card-container">
        {newsDataTenYearsAgo && newsDataTenYearsAgo.length > 0 ? (
          newsDataTenYearsAgo.slice(0, 3).map((news) => (
            <div key={news.id + "div"}>
              <Card
                title={news.webTitle}
                date={news.webPublicationDate}
                link={news.webUrl}
                description={news.fields.bodyText.substring(0, 300) + "..."}
              />
            </div>
          ))
        ) : (
          <p>Please select a date.</p>
        )}
      </div>
    </>
  );
}

export default App;
