import React, { useState } from 'react';
import chevronDown from '../../assets/media/chevron.svg';

const Collapse = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapseALtName = isExpanded ? 'replier' : 'développer';
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
              ? { transition: 'all .4s', transform: 'rotate(-180deg)' }
              : { transition: 'all .4s' }
          }
          alt={collapseALtName}
        />
      </div>

      {/* On génère l'élément dans le DOM seulement si le Collapse est déplié */}
      {!isExpanded ? null : (
        <div
          className={
            isExpanded ? 'Content CollapseExpanded' : 'Content CollapseHidden'
          }
        >
          {newContent.map((item, index) => (
            <span
              tabIndex="0"
              key={`${item}-${index}`}
              style={{ backgroundColor: '#F6F6F6' }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
