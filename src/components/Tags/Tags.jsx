import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import './Tags.css';

const TagContent = styled.div`
  min-width: 115px;
  min-height: 18px;
  max-height: 25px;
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border-radius: 10px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;
const Tags = ({ tags }) => {
  return (
    <>
      <div className="TagContainer">
        {tags.map((tag, index) => {
          return (
            <TagContent className="Tags" key={`${tag}-${index}`}>
              {tag}
            </TagContent>
          );
        })}
      </div>
    </>
  );
};

export default Tags;
