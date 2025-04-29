import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function NewsSection({ inputDate, yearsAgo }) {
  const [searchParams, setSearchParams] = useState(null);
  const [url] = useState("https://content.guardianapis.com/search");

  useEffect(() => {
    if (inputDate) {
      setSearchParams({
        "from-date": inputDate,
        "to-date": inputDate,
        "api-key": import.meta.env.VITE_API_KEY,
        "order-by": "oldest",
        "use-date": "published",
        "show-fields": "bodyText",
        "section": "world",
      });
    }
  }, [inputDate]);

  const {
    data: newsDataTimeAgo,
    error: timeAgoError,
    loading: timeAgoLoading,
  } = useFetch(url, searchParams);

  return (
    <>
      <h2>This happened {yearsAgo} ago on this date:</h2>
      {timeAgoLoading && <p>Loading news...</p>}

      <div className="card-container">
        {newsDataTimeAgo && newsDataTimeAgo.length > 0 ? (
          newsDataTimeAgo.slice(0, 3).map((news) => (
            <div key={news.id}>
              <Card
                title={news.webTitle}
                date={news.webPublicationDate}
                link={news.webUrl}
                description={
                  news.fields?.bodyText?.substring(0, 300) + "..." ||
                  "No description available"
                }
              />
            </div>
          ))
        ) : (
          <p>
            {timeAgoLoading
              ? "Loading..."
              : inputDate
              ? "No news found for this date."
              : "Please select a date."}

            {timeAgoError && "Sorry, there was an error loading the news"}
          </p>
        )}
      </div>
    </>
  );
}
