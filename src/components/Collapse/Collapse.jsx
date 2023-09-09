import React, { useState } from 'react';
import chevronDown from '../../assets/media/chevron.svg';

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let newContent;
  typeof content === 'string'
    ? (newContent = [content])
    : (newContent = content);

  return (
    <div
      className="Collapse"
      tabIndex="-1"
      style={{
        marginBottom: '3vh',
        maxWidth: '1000px',
      }}
    >
      <div
        className="CollapseHeader"
        tabIndex="0"
        onClick={() =>
          isExpanded ? setIsExpanded(false) : setIsExpanded(true)
        }
        onKeyDown={() =>
          isExpanded ? setIsExpanded(false) : setIsExpanded(true)
        }
      >
        <span className="CollapseTitle">{title}</span>
        <img
          src={chevronDown}
          className={isExpanded ? 'Arrow Arrow-expanded' : 'Arrow'}
          style={
            isExpanded
              ? { transition: 'all .3s', transform: 'rotate(-180deg)' }
              : { transition: 'all .3s' }
          }
          alt=""
        />
      </div>
      <div
        className={
          isExpanded ? 'Content CollapseExpanded' : 'Content CollapseHidden'
        }
      >
        {newContent.map((item) => (
          <span key={item} style={{ backgroundColor: '#F6F6F6' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Collapse;
