import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

// 서서히 나타나는 효과
const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

// 아래에서 위로 올라오는 효과
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }

    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  /*애니메이션이 얼마나 지속 될 지 설정*/
  animation-duration: 0.25s;
  /*ease-out : 처음에는 빨랐다가 나중에 느려진다는 것을 의미한다. */
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  /*애니메이션이 끝나고 어떻게 할 지 설정 : forward -> 유지하겠다.*/
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  /*애니메이션이 얼마나 지속 될 지 설정*/
  animation-duration: 0.25s;
  /*ease-out : 처음에는 빨랐다가 나중에 느려진다는 것을 의미한다. */
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  /*애니메이션이 끝나고 어떻게 할 지 설정 : forward -> 유지하겠다.*/
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

// styled를 함수로 사용해서 내부에 Button 컴포넌트를 상속받았다.
// 만든 컴포넌트를 상속 받아서 특정 styled를 덮어씌울 수 있다.
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) {
  // 현재 애니메이션을 보여주는 중
  const [animate, setAnimate] = useState(false);
  // 다이얼로그가 자체적으로 관리하는 visible 값
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible true -> fasle
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
