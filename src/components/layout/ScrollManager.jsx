import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const target =
        document.getElementById(id) || document.getElementsByName(id)[0];
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
