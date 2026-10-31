import { useMemo } from "react";
import Experience from "../components/Experience";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildExperienceMeta } from "../seo/meta";

const ExperiencePage = () => {
  const meta = useMemo(() => buildExperienceMeta(), []);
  usePageMeta(meta);

  return <Experience />;
};

export default ExperiencePage;
