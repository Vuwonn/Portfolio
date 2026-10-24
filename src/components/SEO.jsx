import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Bhuwan Chaudhary | Full Stack Developer",
  description = "Official portfolio of Bhuwan Chaudhary, Full Stack Developer based in Tulsipur, Nepal.",
  path = "",
  image = "/og-image.png",
}) => {
  const url = `https://bhuwanchaudhary.com.np${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`https://bhuwanchaudhary.com.np${image}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://bhuwanchaudhary.com.np${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
