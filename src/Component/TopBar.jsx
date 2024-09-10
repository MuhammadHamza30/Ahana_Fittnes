import React, { useState, useEffect, useRef } from 'react';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Language');
  const niceSelectRef = useRef(null);

  const options = [
    { value: 'EN', label: 'EN' },
    { value: '1', label: 'ES' },
    { value: '2', label: 'JA' },
    { value: '3', label: 'AR' },
  ];

  const handleOptionClick = (option) => {
    setCurrentLanguage(option.label);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (niceSelectRef.current && !niceSelectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-6 top1">
          <div className='Address px-2'>
            <div className='d-flex'>
            <i className="bi bi-map-fill px-1"></i>
            <p>184 Main Collins Street</p>
            </div>
          </div>
          <div className='phoneNumber px-2'>
            <div className=' d-flex'>
            <i className="bi bi-telephone-fill px-1"></i>
            <p>(965) 436 3274</p></div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
            <div className='officeTime'>
            <i className="bi bi-alarm px-1"></i>
            <p>Mon - Fri: 6:30am - 07:45pm</p>
            </div>
          <div className='header-info'>
            <i className="bi bi-translate"></i>
            <select id="language" className="language-select" style={{ display: 'none' }}>
              {options.map((option) => (
                <option key={option.value} data-display="Language" value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div
              ref={niceSelectRef}
              className={`nice-select language-select ${isOpen ? 'open': options.value}`}
              tabIndex="0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='current'>Language</span>
              <ul className="list">
                {options.map((option) => (
                  <li
                    key={option.value}
                    data-value={option.value}
                    data-display="Language"
                    className={`option ${currentLanguage === option.label ? 'selected focus' : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default TopBar;
