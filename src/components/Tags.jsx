import React from 'react';
import styled from 'styled-components';
import colors from '../utils/style/colors';
const TagContainer = styled.div`
  font-size: 1vmin;
  min-width: 320px;
  display: flex;
  gap: 10px;
`;

const TagContent = styled.div`
  min-width: 84px;
  max-width: 115px;
  min-height: 18px;
  max-height: 25px;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 5px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
const Tags = ({ tags }) => {
  return (
    <>
      <TagContainer>
        {tags.map((tag) => {
          return (
            <TagContent className="Tags" key={tag}>
              {tag}{' '}
            </TagContent>
          );
        })}
      </TagContainer>
    </>
  );
};

export default Tags;
