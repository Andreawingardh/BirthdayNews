import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

function App() {
  const [loading, setLoading] = useState();
  const [newsData, setNewsData] = useState([]);
  const [newsYear, setNewsYear] = useState("2025");
  const [dateOfNews, setDateOfNews] = useState();
  const [searchParams, setSearchParams] = useState();
  const [url, setUrl] = useState("https://content.guardianapis.com/search");

  useEffect(() => {
    if (searchParams != null) {
      setLoading(true);
      axios
        .get(url, {
          params: searchParams,
        })
        .then(function (response) {
          console.log(response.data.response.results);
          setNewsData(response.data.response.results);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoading(false);
        });
    }
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.elements.dateInput.value);
    const newsDate = e.currentTarget.elements.dateInput.value;
    setSearchParams((prev) => ({
      ...prev,
      "from-date": newsDate,
      "to-date": newsDate,
      "api-key": "1d446d9b-1d16-4de9-b5fb-8f53b59e012b",
      "order-by": "newest",
      "use-date": "published",
      "show-fields": "bodyText",
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="dateInput"
          type="date"
          placeholder="Input a random date"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* {loading && <p>Loading...</p>}
      <h2>Guardian News</h2>
      {newsData && newsData.length > 0 ? (
        newsData.map((news) => (
          <div key={news.id + "div"}>
            {/* <a href={news.webUrl}>
              <h1 key={news.id}>{news.webTitle}</h1>
            </a>
            <p key={news.id + "date"}>{news.webPublicationDate}</p>
            <p key={news.id + "text"}>
              {news.fields.bodyText.substring(0, 200) + "..."}
            </p> */}
            <Card title={news.webTitle} date={news.webPublicationDate} link={news.webUrl} description={news.fields.bodyText.substring(0, 200) + "..."} />
          </div>
        ))
      ) : (
        <p>No news available</p>

      )} */}

      <h3>This happened one year ago on this date:</h3>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <h3>This happened five years ago on to this date:</h3>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <h3>This happened ten years ago on this date:</h3>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

    </>
  );
}

export default App;
