import { useMemo } from "react";
import Contact from "../components/Contact";
import { usePageMeta } from "../hooks/usePageMeta";
import { buildContactMeta } from "../seo/meta";

const ContactPage = () => {
  const meta = useMemo(() => buildContactMeta(), []);
  usePageMeta(meta);

  return <Contact />;
};

export default ContactPage;
