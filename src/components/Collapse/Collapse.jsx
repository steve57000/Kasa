import React, { useState } from 'react';
import chevronDown from '../../assets/media/chevron.svg';

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseALtName = isExpanded ? 'replier' : 'développer';
  let newContent;

  typeof content === 'string'
    ? (newContent = [content])
    : (newContent = content);

  const getExpanded = () =>
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);

  return (
    <div
      className="Collapse"
      tabIndex="-1"
      style={{
        marginBottom: '3vh',
        maxWidth: '1000px',
        transition: 'all 3s',
      }}
    >
      <div
        className="CollapseHeader"
        tabIndex="0"
        onClick={getExpanded}
        onKeyDown={getExpanded}
      >
        <span className="CollapseTitle">{title}</span>
        <img
          src={chevronDown}
          className={isExpanded ? 'Arrow Arrow-expanded' : 'Arrow'}
          style={
            isExpanded
              ? { transition: 'all .4s ', transform: 'rotate(-180deg)' }
              : { transition: 'all .4s' }
          }
          alt={collapseALtName}
        />
      </div>

      {/* On génère l'élément dans le DOM seulement si le Collapse est déplié */}
      {!isExpanded ? null : (
        <ul className="CollapseExpanded" style={{ transition: 'all 3s' }}>
          {newContent.map((item, index) => (
            <li
              key={`${item}-${index}`}
              style={{ backgroundColor: '#F6F6F6', listStyle: 'none' }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collapse;
