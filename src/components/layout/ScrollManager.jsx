import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const legacySectionRoutes = {
  about: "/about",
  expertise: "/expertise",
  experience: "/experience",
  contact: "/contact",
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = hash.replace("#", "");
    const legacyRoute = pathname === "/" ? legacySectionRoutes[id] : undefined;

    if (legacyRoute) {
      navigate(legacyRoute, { replace: true });
      return;
    }

    if (hash) {
      const target =
        document.getElementById(id) || document.getElementsByName(id)[0];
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigate]);

  return null;
};

export default ScrollManager;
