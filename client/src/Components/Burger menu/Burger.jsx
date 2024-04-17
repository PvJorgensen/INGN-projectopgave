import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './burge.module.scss'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgermenu}>
      <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      {isOpen && (
        <ul className={styles.menuitems}>
          <li>Kultur</li>
          <li>Sport</li>
          <li>Indland</li>
          <li>Udland</li>
          <li>Teknologi</li>
          <li>Politik</li>
          <li>Samfund</li>
          <button onClick={toggleMenu}>X</button>
        </ul>
      )}
    </div>
  );
};

