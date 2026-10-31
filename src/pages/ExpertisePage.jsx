import { useMemo } from "react";
import CoreExpertise from "../components/CoreExpertise";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildExpertiseMeta } from "../seo/meta";

const ExpertisePage = () => {
  const meta = useMemo(() => buildExpertiseMeta(), []);
  usePageMeta(meta);

  return <CoreExpertise />;
};

export default ExpertisePage;
