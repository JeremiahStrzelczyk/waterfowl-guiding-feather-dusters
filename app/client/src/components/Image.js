import { useEffect } from "react";

import useScrollLock from "../hooks/useScrollBlock";

const Image = ({ src, download, alt, figCap }) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    lockScroll();
    return () => {
      unlockScroll();
    };
  });

  return (
    <aside className="image__wrapper">
      <figure>
        <a href={src} download={download}>
          <img src={src} alt={alt} />
        </a>
        <figcaption className="offscreen">{figCap}</figcaption>
      </figure>
    </aside>
  );
};

export default Image;
