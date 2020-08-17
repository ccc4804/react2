import React from 'react';
import classNames from 'classnames'

import './Button.scss';


//size : large, medium, small
function Button({children, size}) {
  return (
    //<button className={["Button", size].join(' ')}>{children}</button>
    //<button className={`Button ${size}`}>{children}</button> // 위와 동일하다.
    <button className={classNames('Button', size)}>{children}</button> // 위와 동일하다.
  );
}

Button.defaultProps = {
    size: 'medium'
};

export default Button;