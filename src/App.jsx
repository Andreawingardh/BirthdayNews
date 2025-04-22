import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import useFetch from "./hooks/useFetch";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [newsYear, setNewsYear] = useState("2025");
  const [dateOfNews, setDateOfNews] = useState();
  const [searchParams, setSearchParams] = useState();
  const [url, setUrl] = useState("https://content.guardianapis.com/search");
  const { data, error, loading } = useFetch(url, searchParams);

  useEffect(() => {
    if (data) {
      setNewsData(data);
    }
  }, [data]);

  // useEffect(() => {
  //   if (searchParams != null) {
  //     setLoading(true);
  //     axios
  //       .get(url, {
  //         params: searchParams,
  //       })
  //       .then(function (response) {
  //         console.log(response.data.response.results);
  //         setNewsData(response.data.response.results);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })
  //       .finally(function () {
  //         setLoading(false);
  //       });
  //   }
  // }, [searchParams]);


  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.elements.dateInput.value);
    let newsDate = e.currentTarget.elements.dateInput.value;
    console.log(newsDate)
    setSearchParams((prev) => ({
      ...prev,
      "from-date": newsDate,
      "to-date": newsDate,
      "api-key": import.meta.env.VITE_API_KEY,
      "order-by": "newest",
      "use-date": "published",
      "show-fields": "bodyText"
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="dateInput"
          type="date"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      <h2>Guardian News</h2>
      {newsData && newsData.length > 0 ? (
        newsData.slice(0,3).map((news) => (
          <div key={news.id + "div"}>
            <Card
              title={news.webTitle}
              date={news.webPublicationDate}
              link={news.webUrl}
              description={news.fields.bodyText.substring(0, 200) + "..."}
            />
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </>
  );
}

export default App;
