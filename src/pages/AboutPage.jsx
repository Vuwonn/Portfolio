import { useMemo } from "react";
import About from "../components/About";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildAboutMeta } from "../seo/meta";

const AboutPage = () => {
  const meta = useMemo(() => buildAboutMeta(), []);
  usePageMeta(meta);

  return <About />;
};

export default AboutPage;
