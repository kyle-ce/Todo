import React from 'react';
import style from '../styles/modules/title.module.scss';

function pageTitle({ children, ...rest }) {
  return (
    <div>
      <p className={style.title} {...rest}>
        {children}
      </p>
    </div>
  );
}

export default pageTitle;
