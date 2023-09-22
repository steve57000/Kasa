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
      style={{
        marginBottom: '3vh',
        maxWidth: '1000px',
      }}
    >
      <div
        className="CollapseHeader"
        tabIndex="0"
        onClick={getExpanded}
        onKeyDown={getExpanded}
        aria-label={title}
        aria-labelledby="titleAria"
      >
        <span className="CollapseTitle">{title}</span>
        <img
          src={chevronDown}
          className={isExpanded ? 'Arrow Arrow-expanded' : 'Arrow'}
          style={
            isExpanded
              ? { transition: 'all .3s ', transform: 'rotate(-180deg)' }
              : { transition: 'all .3s' }
          }
          aria-label={collapseALtName}
          alt=""
        />
      </div>

      {/* On génère l'élément dans le DOM seulement si le Collapse est déplié */}
      {!isExpanded ? null : (
        <ul
          className="CollapseExpanded"
          id="titleAria"
          style={{ backgroundColor: '#F6F6F6' }}
        >
          {newContent.map((item, index) => (
            <li
              aria-label={item}
              key={`${item}-${index}`}
              style={{ listStyle: 'none' }}
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
