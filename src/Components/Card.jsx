import styled from "@emotion/styled";

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
  color: #6a6868;
  margin: 0 0 12px 0;
`;

const NewsCardP = styled.p`
  font-size: 1rem;
  color: #353333;
  flex-grow: 1;
  margin-bottom: 16px;
`;

const NewsCardLink = styled.a`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  
  &:link {
    text-decoration: none;
  }

  &:hover {
    background-color: #5d575f;
    color: white;
  }
`;

const Card = ({ title, date, description, link }) => {
  return (
    <NewsCard>
      <div>
        <NewsCardH2>{title}</NewsCardH2>
        <NewsCardDate>{new Date(date).toLocaleDateString()}</NewsCardDate>
        <NewsCardP>{description}</NewsCardP>
      </div>
      <NewsCardLink href={link}>Read full article here</NewsCardLink>
    </NewsCard>
  );
};

export default Card;
