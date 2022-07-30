import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<any>, callback: () => void) => {
  useEffect(() => {
    const handleNativeDocClick = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;

      callback();
    };

    document.addEventListener("click", handleNativeDocClick);

    return () => {
      document.removeEventListener("click", handleNativeDocClick);
    };
  }, [ref, callback]);
};

export { useOutsideClick };
