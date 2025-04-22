import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState()
  const [newsData, setNewsData] = useState([]);
  const [newsYear, setNewsYear] = useState('2025');
  const [newsDate, setNewsDate] = useState();
  const [searchParams, setSearchParams] = useState({
    "api-key": "1d446d9b-1d16-4de9-b5fb-8f53b59e012b",
    "from date": `${newsDate}`,
    "to-date": `${newsDate}`,
    "order-by": "newest",
    "use-date": "published",
  });
  const [url, setUrl] = useState("https://content.guardianapis.com/search");
  
  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      });
  }, [newsDate]);

  function handleSubmit(e) {
    e.preventDefault();
    setNewsDate(e.currentTarget.elements.dateInput.value)
    console.log(newsDate)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="dateInput" type="date" placeholder="Input a random date"></input>
        <button type="submit">Submit</button>
      </form>
       {loading && <p>Loading...</p>}
      <h2>Guardian News</h2>
      {newsDate && newsData && newsData.length > 0 ? (
        newsData.map(news => (
          <h1 key={news.id}>{news.webTitle}</h1>
        ))
      ) : (
        <p>No news available</p>
      )}
      {/* <Header />
      <div>
        <SearchBar />
        <Button></Button>
      </div>
      <section>
        <Text variant="header"></Text>
        <div>
          <Text variant="paragraph"></Text>
        </div>
      </section>
      <Footer /> */}
    </>
  );
}

export default App;
