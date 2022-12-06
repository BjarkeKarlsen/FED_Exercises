//www.npmjs.com/package/react-head
import { Helmet } from "react-helmet";

const Meta = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) => {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link href="/dist/output.css" rel="stylesheet" />
      <title>{title}</title>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Model Management",
  keywords: "Job, Management, Manager",
  description: "Is a Management for jobs",
};

export default Meta;

// export const Meta = () => {};
