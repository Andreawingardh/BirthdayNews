import styled from "@emotion/styled";
import Button from "./Button";

const NewsCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin: 16px;
  max-width: 350px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewsCardH2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: #222;
`;

const NewsCardDate = styled.p`
  font-size: 0.875rem;
  color: #999;
  margin: 0 0 12px 0;
`;

const NewsCardP = styled.p`
  font-size: 1rem;
  color: #555;
  flex-grow: 1;
  margin-bottom: 16px;
`;

const Card = ({ title, date, description, link }) => {
  return (
    <NewsCard>
      <div>
        <NewsCardH2>{title}</NewsCardH2>
        <NewsCardDate>{new Date(date).toLocaleDateString()}</NewsCardDate>
        <NewsCardP>{description}</NewsCardP>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button text="Read More" />
      </a>
    </NewsCard>
  );
};

export default Card;
