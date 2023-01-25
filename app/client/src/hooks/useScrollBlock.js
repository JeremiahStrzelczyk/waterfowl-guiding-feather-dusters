/**
 * Credit: Luke Denton
 *
 * https://github.com/denno020/useScrollLock
 *
 * This hook aims to prevent the user from being able to scroll
 * while the mobile navigation is open
 */

import React from "react";

function isiOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

const useScrollLock = () => {
  const scrollOffset = React.useRef(0);

  const lockScroll = React.useCallback(() => {
    document.body.dataset.scrollLock = "true";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";

    if (isiOS) {
      scrollOffset.current = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.style.width = "100%";
    }
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    if (isiOS) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollOffset.current);
    }

    delete document.body.dataset.scrollLock;
  }, []);

  React.useLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};

export default useScrollLock;
