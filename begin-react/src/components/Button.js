import React from "react";
import classNames from "classnames";

import "./Button.scss";

// size : large, medium, small
// color : blue, pink, gray
function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    //<button className={["Button", size].join(' ')}>{children}</button>
    //<button className={`Button ${size}`}>{children}</button> // 위와 동일하다.
    // 위와 동일하다. classnames 라이브러리를 사용했다.
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
