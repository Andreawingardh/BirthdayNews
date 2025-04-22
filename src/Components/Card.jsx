import styled from "@emotion/styled";

const NewsCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 80%;
  height: 200px;
`;

const NewsCardH2 = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;
const NewsCardP = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = () => {
  return (
    <NewsCard>
      <NewsCardH2>News Title</NewsCardH2>
      <NewsCardP>
        This is a brief description of the news article. It provides a quick
        overview of the content.
      </NewsCardP>
      <button>Read More</button>
    </NewsCard>
  );
};

export default Card;
