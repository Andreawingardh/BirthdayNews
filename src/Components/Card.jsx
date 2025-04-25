import styled from "@emotion/styled";
import Button from "./Button";

const NewsCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  max-width: 400px;
  max-height: 400px;
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

const Card = ({ title, date, description, link }) => {
  return (
    <NewsCard>
      <NewsCardH2>{title}</NewsCardH2>
      <NewsCardP>
        {date}
        {description}
      </NewsCardP>
      <a href={link}>
        <Button text="Read More" />
      </a>
    </NewsCard>
  );
};

export default Card;
