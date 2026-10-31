import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Bhuwan Chaudhary | Full Stack Developer",
  description = "Official portfolio of Bhuwan Chaudhary, Full Stack Developer based in Tulsipur, Nepal.",
  path = "",
}) => {
  const url = `https://bhuwanchaudhary.com.np${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
